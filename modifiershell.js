let vitachargedEnemies = new Set();

window.getVitachargedEnemies = function() {
    return vitachargedEnemies;
};

let currentAssassin = null;

window.getCurrentAssassin = function() {
    return currentAssassin;
};

const hellDefinitions = {
    cloaked: {
        name: "Cloaked",
        description: "Hides the Type column. Vitaraged: also strips the arrow from one fixed stat category all wave.",
        onStart: (engine, key) => {
            const typeHeader = document.querySelector("#guessTable th:nth-child(2)");
            if (typeHeader) typeHeader.style.display = "none";

            if (engine) {
                if (engine.isBuffed(key)) {
                    const categories = ["cell-health", "cell-waves", "cell-encounter"];
                    engine.cloakedTargetCategory = categories[Math.floor(Math.random() * categories.length)];
                } else {
                    engine.cloakedTargetCategory = null;
                }
            }
        },
        onGuess: (row, guessedEnemy, secretEnemy, engine) => {
            const typeCell = row.querySelector(".cell-type") || row.children[1];
            if (typeCell) typeCell.remove();

            if (engine && engine.cloakedTargetCategory) {
                const targetCell = row.querySelector(`.${engine.cloakedTargetCategory}`);
                if (targetCell && !targetCell.classList.contains("cell-correct")) {
                    targetCell.innerText = targetCell.innerText.replace(/ [\u2191\u2193\u2192\u2190]$/, "");
                }
            }
        },
        onReset: (engine) => {
            const typeHeader = document.querySelector("#guessTable th:nth-child(2)");
            if (typeHeader) typeHeader.style.display = "";
            if (engine) engine.cloakedTargetCategory = null;
        }
    },
    jammedRadar: {
        name: "Jammed Radar",
        description: "Automatically submits a random guess on wave start. Vitaraged: submits 2 random guesses that are guaranteed wrong.",
        onStart: (engine, key) => {
            if (engine && engine.isBuffed(key)) {
                if (typeof window.makeRandomWrongGuess === "function") {
                    window.makeRandomWrongGuess();
                    window.makeRandomWrongGuess();
                }
            } else if (typeof window.makeRandomGuess === "function") {
                window.makeRandomGuess();
            }
        },
        onReset: () => {}
    },
    securityProtocol: {
        name: "Security Protocol (01:00)",
        description: "Guess the enemy within 60 seconds or fail. Vitaraged: 2 minutes instead, but every wrong guess (including Jammed Radar's) speeds the timer up by 0.5x, permanently for the wave.",
        onStart: (engine, key) => {
            const buffed = engine && engine.isBuffed(key);
            engine.startTimer(buffed ? 120 : 60);
        },
        onGuess: (row, guessedEnemy, secretEnemy, engine) => {
            if (engine && guessedEnemy.name !== secretEnemy.name) {
                engine.securityProtocolWrongGuesses = (engine.securityProtocolWrongGuesses || 0) + 1;
                engine.refreshTimerSpeed();
            }
        },
        onReset: (engine) => {
            engine.clearTimer();
        }
    },
    fog: {
        name: "Fog",
        description: "Only your 2 most recent guesses are visible. Vitaraged: only your most recent guess is visible.",
        afterGuess: (engine, key) => {
            const tbody = document.getElementById("guessRows");
            if (!tbody) return;
            const visibleCount = engine && engine.isBuffed(key) ? 1 : 2;
            Array.from(tbody.children).forEach((row, index) => {
                row.style.display = index < visibleCount ? "" : "none";
            });
        },
        onReset: () => {
            const tbody = document.getElementById("guessRows");
            if (!tbody) return;
            Array.from(tbody.children).forEach(row => {
                row.style.display = "";
            });
        }
    },
    sabotage: {
        name: "Sabotage",
        description: "One non-correct arrow (Health, Total Waves, or First Encounter) is always flipped to point the wrong way. Vitaraged: 2 independent picks are flipped - hitting the same category twice cancels it back to normal.",
        onGuess: (row, guessedEnemy, secretEnemy, engine, key) => {
            const flipPairs = [["↑", "↓"], ["↓", "↑"], ["→", "←"], ["←", "→"]];

            // Correctness is checked against the real data, not the cell's current
            // DOM classes, so a genuinely correct stat can never be flipped here.
            const fieldChecks = [
                { cls: "cell-health", isCorrect: guessedEnemy.health === secretEnemy.health },
                { cls: "cell-waves", isCorrect: guessedEnemy.waves === secretEnemy.waves },
                { cls: "cell-encounter", isCorrect: guessedEnemy.encounter.toLowerCase() === secretEnemy.encounter.toLowerCase() }
            ];

            const candidates = fieldChecks
                .filter(field => !field.isCorrect)
                .map(field => row.querySelector(`.${field.cls}`))
                .filter(Boolean);

            const flipOnce = () => {
                if (candidates.length === 0) return;

                const target = candidates[Math.floor(Math.random() * candidates.length)];
                for (const [from, to] of flipPairs) {
                    if (target.innerText.includes(from)) {
                        target.innerText = target.innerText.replace(from, to);
                        break;
                    }
                }
            };

            flipOnce();
            if (engine && engine.isBuffed(key)) {
                flipOnce();
            }
        }
    },
    weakenedSignal: {
        name: "Weakened Signal",
        description: "You only have 5 guesses instead of 6. Vitaraged: only 4 guesses instead of 6.",
        onStart: (engine, key) => {
            const buffed = engine && engine.isBuffed(key);
            if (typeof window.setMaxGuesses === "function") {
                window.setMaxGuesses(buffed ? 4 : 5);
            }
        },
        onReset: () => {
            if (typeof window.setMaxGuesses === "function") {
                window.setMaxGuesses(6);
            }
        }
    },
    miscommunication: {
        name: "Miscommunication",
        description: "A non-correct stat (Health, Total Waves, or First Encounter) may display the wrong value. Vitaraged: its color is also displayed wrong, independent of the real value.",
        onGuess: (row, guessedEnemy, secretEnemy, engine, key) => {
            // Correctness is checked against the real data, not the cell's current
            // DOM classes, so a genuinely correct stat can never be touched here.
            const fieldChecks = [
                { cls: "cell-health", isCorrect: guessedEnemy.health === secretEnemy.health },
                { cls: "cell-waves", isCorrect: guessedEnemy.waves === secretEnemy.waves },
                { cls: "cell-encounter", isCorrect: guessedEnemy.encounter.toLowerCase() === secretEnemy.encounter.toLowerCase() }
            ];

            const candidates = fieldChecks
                .filter(field => !field.isCorrect)
                .map(field => row.querySelector(`.${field.cls}`))
                .filter(Boolean);

            if (candidates.length === 0) return;

            const target = candidates[Math.floor(Math.random() * candidates.length)];
            const sign = Math.random() < 0.5 ? 1 : -1;
            const arrowMatch = target.innerText.match(/ [↑↓→←]$/);
            const arrowSuffix = arrowMatch ? arrowMatch[0] : "";

            if (target.classList.contains("cell-health")) {
                target.innerText = `${guessedEnemy.health + sign * 50}${arrowSuffix}`;
            } else if (target.classList.contains("cell-waves")) {
                target.innerText = `${guessedEnemy.waves + sign * 2}${arrowSuffix}`;
            } else if (target.classList.contains("cell-encounter")) {
                const order = window.encounterOrder || [];
                const lowerOrder = order.map(item => item.toLowerCase());
                const idx = lowerOrder.indexOf(guessedEnemy.encounter.toLowerCase());
                if (idx !== -1) {
                    const newIdx = Math.min(Math.max(idx + sign, 0), order.length - 1);
                    target.innerText = `${order[newIdx]}${arrowSuffix}`;
                }
            }

            if (engine && engine.isBuffed(key)) {
                target.classList.remove("cell-correct", "cell-incorrect", "cell-partial");
                const fakeColors = ["cell-correct", "cell-incorrect", "cell-partial"];
                target.classList.add(fakeColors[Math.floor(Math.random() * fakeColors.length)]);
            }
        }
    },
    vitacharge: {
        name: "Vitacharge",
        description: "3 enemies you guessed in the previous 2 waves are secretly vitacharged this wave. Guess one and every stat but its name goes blank and gold. Vitaraged: 6 enemies from the previous 4 waves instead.",
        onStart: (engine, key) => {
            vitachargedEnemies = new Set();
            const buffed = engine && engine.isBuffed(key);
            const waveSpan = buffed ? 4 : 2;
            const targetCount = buffed ? 6 : 3;

            if (typeof window.getPreviousWaveGuesses === "function") {
                const secret = typeof window.getSecretEnemy === "function" ? window.getSecretEnemy() : null;
                const db = window.enemyDatabase || {};

                // The current target can never be vitacharged, otherwise guessing
                // it correctly would get blanked out instead of showing the win.
                const pool = [...new Set(window.getPreviousWaveGuesses(waveSpan))]
                    .filter(enemyKey => !secret || !db[enemyKey] || db[enemyKey].name !== secret.name);

                while (vitachargedEnemies.size < targetCount && pool.length > 0) {
                    const randomIndex = Math.floor(Math.random() * pool.length);
                    vitachargedEnemies.add(pool.splice(randomIndex, 1)[0]);
                }
            }
        },
        onGuess: (row, guessedEnemy) => {
            if (!vitachargedEnemies.has(guessedEnemy.name.toLowerCase())) return;

            row.classList.add("row-vitacharged");
            Array.from(row.children).forEach(cell => {
                if (cell.classList.contains("cell-name")) return;
                cell.classList.remove("cell-correct", "cell-incorrect", "cell-partial");
                cell.textContent = "";
                cell.classList.add("cell-vitacharged");
            });
        },
        onReset: () => {
            vitachargedEnemies = new Set();
        }
    },
    assassin: {
        name: "Assassin",
        description: "A random enemy is secretly the assassin this wave. Guessing it fails you instantly. Stats close to the assassin get a warning icon next to their arrow, colors stay unchanged. Vitaraged: only 1 fixed stat category can trigger the warning all wave.",
        onStart: (engine, key) => {
            currentAssassin = null;
            const db = window.enemyDatabase || {};
            const secret = typeof window.getSecretEnemy === "function" ? window.getSecretEnemy() : null;
            const pool = Object.keys(db).filter(dbKey => !secret || db[dbKey].name !== secret.name);
            if (pool.length > 0) {
                const randomKey = pool[Math.floor(Math.random() * pool.length)];
                currentAssassin = db[randomKey];
            }

            if (engine) {
                if (engine.isBuffed(key)) {
                    const categories = ["cell-health", "cell-waves", "cell-encounter"];
                    engine.assassinTargetCategory = categories[Math.floor(Math.random() * categories.length)];
                } else {
                    engine.assassinTargetCategory = null;
                }
            }
        },
        onGuess: (row, guessedEnemy, secretEnemy, engine) => {
            if (!currentAssassin) return;

            const order = window.encounterOrder || [];
            const lowerOrder = order.map(item => item.toLowerCase());
            const guessedEncounterIdx = lowerOrder.indexOf(guessedEnemy.encounter.toLowerCase());
            const assassinEncounterIdx = lowerOrder.indexOf(currentAssassin.encounter.toLowerCase());

            let checks = [
                { cls: "cell-health", close: Math.abs(guessedEnemy.health - currentAssassin.health) <= 50 },
                { cls: "cell-waves", close: Math.abs(guessedEnemy.waves - currentAssassin.waves) <= 6 },
                {
                    cls: "cell-encounter",
                    close: guessedEncounterIdx !== -1 && assassinEncounterIdx !== -1 &&
                        Math.abs(guessedEncounterIdx - assassinEncounterIdx) <= 2
                }
            ];

            if (engine && engine.assassinTargetCategory) {
                checks = checks.filter(check => check.cls === engine.assassinTargetCategory);
            }

            checks.forEach(({ cls, close }) => {
                if (!close) return;
                const cell = row.querySelector(`.${cls}`);
                if (!cell || cell.classList.contains("cell-correct")) return;
                cell.classList.add("cell-assassin-warning");
                cell.innerText = `${cell.innerText} ⚠`;
            });

            if (guessedEnemy.name === currentAssassin.name) {
                if (typeof window.handleAssassinGuess === "function") {
                    window.handleAssassinGuess(currentAssassin);
                }
            }
        },
        onReset: (engine) => {
            currentAssassin = null;
            if (engine) engine.assassinTargetCategory = null;
        }
    },
    vitarage: {
        name: "Vitarage",
        description: "Doesn't affect the game directly — instead buffs 1 or more other random active modifiers this wave. Buffs 2 starting wave 9, 3 on wave 10, and every active modifier on Wave Ultima.",
        onStart: (engine) => {
            engine.buffedModifiers = new Set();
            const wave = engine.currentWave;
            let candidates = [...engine.active].filter(key => key !== "vitarage");

            // Vitaraged Weakened Signal (4 guesses) combined with Jammed Radar
            // (which burns a guess immediately) is too punishing, so Weakened
            // Signal can never be the buff target while Jammed Radar is active —
            // except on Wave Ultima, where every active modifier gets buffed.
            if (wave !== 11 && engine.active.has("jammedRadar")) {
                candidates = candidates.filter(key => key !== "weakenedSignal");
            }

            if (candidates.length === 0) {
                engine.renderBadges();
                return;
            }

            let buffCount = 1;
            if (wave === 9) buffCount = 2;
            else if (wave === 10) buffCount = 3;
            else if (wave === 11) buffCount = candidates.length;

            const pool = [...candidates];
            while (engine.buffedModifiers.size < buffCount && pool.length > 0) {
                const randomIndex = Math.floor(Math.random() * pool.length);
                engine.buffedModifiers.add(pool.splice(randomIndex, 1)[0]);
            }

            engine.renderBadges();
        },
        onReset: (engine) => {
            engine.buffedModifiers = new Set();
        }
    }
};

function getHellWaveModifierCount(waveNumber) {
    if (waveNumber === 11) return Object.keys(hellDefinitions).length;

    const schedule = {
        1: 1, 2: 1,
        3: 2, 4: 2,
        5: 3, 6: 3,
        7: 4, 8: 4,
        9: 5,
        10: 6
    };

    return schedule[waveNumber] ?? 1;
}

window.Modifiers = new ModifierEngine("hell", hellDefinitions, getHellWaveModifierCount);
window.Modifiers.forceVitarage = (waveNumber) => waveNumber >= 7;
