class ModifierEngine {
    constructor(modeName, definitions, waveCounts) {
        this.modeName = modeName;
        this.definitions = definitions;
        this.waveCounts = waveCounts;
        this.active = new Set();
        this.timerInterval = null;
        this.buffedModifiers = new Set();
        this.securityProtocolWrongGuesses = 0;
        this.expandedModifierKey = null;
        this.allowedKeys = null;
    }

    isBuffed(key) {
        return this.buffedModifiers.has(key);
    }

    startTimer(seconds) {
        this.clearTimer();
        this.timerTimeLeft = seconds;

        this.timerFormatTime = (totalSeconds) => {
            const flooredSeconds = Math.max(0, Math.floor(totalSeconds));
            const minutes = Math.floor(flooredSeconds / 60);
            const secs = flooredSeconds % 60;
            return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        };

        this.timerUpdateDisplay = () => {
            const tag = document.querySelector(".modifier-tag.security-protocol");
            if (!tag) return;

            tag.innerText = `SECURITY PROTOCOL (${this.timerFormatTime(this.timerTimeLeft)})`;

            const isBuffed = this.isBuffed("securityProtocol");
            const activeUrgentClass = isBuffed ? "security-protocol-urgent-buffed" : "security-protocol-urgent";
            const inactiveUrgentClass = isBuffed ? "security-protocol-urgent" : "security-protocol-urgent-buffed";

            const flashThreshold = 10 * this.getSecurityProtocolSpeedMultiplier();
            if (this.timerTimeLeft > 0 && this.timerTimeLeft <= flashThreshold) {
                tag.classList.remove(inactiveUrgentClass);
                tag.classList.add(activeUrgentClass);
            } else {
                tag.classList.remove("security-protocol-urgent", "security-protocol-urgent-buffed");
            }
        };

        this.timerUpdateDisplay();
        this.startTimerInterval();
    }

    getSecurityProtocolSpeedMultiplier() {
        return this.isBuffed("securityProtocol")
            ? 1 + 0.5 * this.securityProtocolWrongGuesses
            : 1;
    }

    startTimerInterval() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }

        const delay = 1000 / this.getSecurityProtocolSpeedMultiplier();

        this.timerInterval = setInterval(() => {
            this.timerTimeLeft -= 1;
            if (this.timerUpdateDisplay) this.timerUpdateDisplay();
            if (this.timerTimeLeft <= 0) {
                this.clearTimer();
                if (typeof window.handleTimerTimeout === "function") {
                    window.handleTimerTimeout();
                }
            }
        }, delay);
    }

    refreshTimerSpeed() {
        if (!this.timerInterval) return;
        this.startTimerInterval();
    }

    clearTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }

    applyFixedModifiers(selectedKeys, buffedKeys) {
        this.clearTimer();
        this.securityProtocolWrongGuesses = 0;
        this.expandedModifierKey = null;

        const validKeys = selectedKeys.filter(key => this.definitions[key]);
        this.active = new Set(validKeys);
        this.buffedModifiers = new Set([...(buffedKeys || [])].filter(key => this.active.has(key)));
        this.renderBadges();

        const priorityOrder = ["vitarage", "mutilatedDeaths", "assassin", "vitacharge"];
        const orderedKeys = [
            ...priorityOrder.filter(key => this.active.has(key)),
            ...validKeys.filter(key => !priorityOrder.includes(key))
        ];

        orderedKeys.forEach(key => {
            const def = this.definitions[key];
            if (def && def.onStart) {
                def.onStart(this, key);
            }
        });
    }

    evaluateWave(waveNumber) {
        this.currentWave = waveNumber;
        const targetCount = typeof this.waveCounts === "function"
            ? this.waveCounts(waveNumber)
            : (this.waveCounts[waveNumber] ?? 1);
        let pool = Object.keys(this.definitions);
        if (this.allowedKeys) {
            pool = pool.filter(key => this.allowedKeys.includes(key));
        }

        if (targetCount <= 1) {
            pool = pool.filter(key => key !== "vitarage");
        }

        const selectedKeys = [];

        const forceVitarageNow = typeof this.forceVitarage === "function"
            ? this.forceVitarage(waveNumber)
            : this.forceVitarage;

        if (forceVitarageNow && targetCount >= 1 && this.definitions.vitarage && pool.includes("vitarage")) {
            selectedKeys.push("vitarage");
            pool = pool.filter(key => key !== "vitarage");
        }

        while (selectedKeys.length < targetCount && pool.length > 0) {
            const randomIndex = Math.floor(Math.random() * pool.length);
            selectedKeys.push(pool.splice(randomIndex, 1)[0]);
        }

        selectedKeys.forEach(key => {
            const def = this.definitions[key];
            if (def && !this.active.has(key)) {
                this.active.add(key);
            }
        });
        this.renderBadges();

        // vitarage must resolve buffedModifier before any other onStart runs,
        // otherwise the buffed modifier can't tell it's been buffed yet.
        // assassin and vitacharge must resolve before anything that can trigger
        // a guess (e.g. Jammed Radar), so that guess can never target the
        // assassin or a vitacharged enemy.
        const priorityOrder = ["vitarage", "mutilatedDeaths", "assassin", "vitacharge"];
        const orderedKeys = [
            ...priorityOrder.filter(key => selectedKeys.includes(key)),
            ...selectedKeys.filter(key => !priorityOrder.includes(key))
        ];

        orderedKeys.forEach(key => {
            const def = this.definitions[key];
            if (def && def.onStart) {
                def.onStart(this, key);
            }
        });
    }

    enable(key) {
        const def = this.definitions[key];
        if (def && !this.active.has(key)) {
            this.active.add(key);
            if (def.onStart) def.onStart(this, key);
            this.renderBadges();
        }
    }

    onGuess(row, guessedEnemy, secretEnemy) {
        const keys = [...this.active];
        const normalKeys = keys.filter(key => !this.definitions[key]?.runLast);
        const lateKeys = keys.filter(key => this.definitions[key]?.runLast);

        [...normalKeys, ...lateKeys].forEach(key => {
            if (this.definitions[key]?.onGuess) {
                this.definitions[key].onGuess(row, guessedEnemy, secretEnemy, this, key);
            }
        });

        if (guessedEnemy.name === secretEnemy.name && !this.active.has("doubleTrouble")) {
            this.clearTimer();
        }
    }

    afterGuess() {
        this.active.forEach(key => {
            if (this.definitions[key]?.afterGuess) {
                this.definitions[key].afterGuess(this, key);
            }
        });
    }

    resetAll() {
        this.clearTimer();
        this.buffedModifiers = new Set();
        this.securityProtocolWrongGuesses = 0;
        this.expandedModifierKey = null;
        this.active.forEach(key => {
            if (this.definitions[key]?.onReset) {
                this.definitions[key].onReset(this);
            }
        });
        this.active.clear();
        this.renderBadges();
    }

    toggleDescription(key) {
        this.expandedModifierKey = this.expandedModifierKey === key ? null : key;
        this.updateDescriptionPanel();
    }

    updateDescriptionPanel() {
        const panel = document.getElementById("modifierDescription");
        if (!panel) return;

        let text = null;
        if (this.expandedModifierKey === "none") {
            text = "no modifiers yet yay!";
        } else if (this.expandedModifierKey) {
            const def = this.definitions[this.expandedModifierKey];
            text = def ? def.description : null;
        }

        if (text) {
            panel.innerText = text;
            panel.style.display = "block";
        } else {
            panel.innerText = "";
            panel.style.display = "none";
        }

        const listContainer = document.getElementById("modifiersList");
        if (listContainer) {
            Array.from(listContainer.children).forEach(tag => {
                tag.classList.toggle("modifier-tag-active", tag.dataset.modifierKey === this.expandedModifierKey);
            });
        }
    }

    renderBadges() {
        const listContainer = document.getElementById("modifiersList");
        if (!listContainer) return;

        if (this.expandedModifierKey && this.expandedModifierKey !== "none" && !this.active.has(this.expandedModifierKey)) {
            this.expandedModifierKey = null;
        }

        listContainer.innerHTML = "";

        if (this.active.size === 0) {
            const noneTag = document.createElement("span");
            noneTag.className = "modifier-tag modifier-tag-none";
            noneTag.innerText = "None";
            noneTag.dataset.modifierKey = "none";
            noneTag.addEventListener("click", () => this.toggleDescription("none"));
            listContainer.appendChild(noneTag);
            this.updateDescriptionPanel();
            return;
        }

        this.active.forEach(key => {
            const def = this.definitions[key];
            if (def) {
                const tag = document.createElement("span");
                const classKey = key.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
                tag.className = `modifier-tag ${classKey}`;
                if (this.isBuffed(key)) {
                    tag.classList.add("modifier-buffed");
                }
                tag.innerText = typeof def.name === "function" ? def.name(this.isBuffed(key)) : def.name;
                tag.dataset.modifierKey = key;
                tag.addEventListener("click", () => this.toggleDescription(key));
                listContainer.appendChild(tag);
            }
        });

        this.updateDescriptionPanel();
    }
}
