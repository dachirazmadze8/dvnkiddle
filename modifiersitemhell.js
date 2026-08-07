let vitachargedItems = new Set();

window.getVitachargedItems = function() {
    return vitachargedItems;
};

let currentAssassinItem = null;

window.getCurrentAssassin = function() {
    return currentAssassinItem;
};

const itemHellDefinitions = {
    cloaked: {
        name: "Cloaked",
        description: "Hides the Type column. Vitaraged: also strips the arrow from one fixed stat category all wave.",
        onStart: (engine, key) => {
            const typeHeader = document.querySelector("#guessTable th:nth-child(2)");
            if (typeHeader) typeHeader.style.display = "none";

            if (engine) {
                if (engine.isBuffed(key)) {
                    const categories = ["cell-damage", "cell-firerate"];
                    engine.cloakedTargetCategory = categories[Math.floor(Math.random() * categories.length)];
                } else {
                    engine.cloakedTargetCategory = null;
                }
            }
        },
        onGuess: (row, guessedItem, secretItem, engine) => {
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
        description: "Guess the item within 60 seconds or fail. Vitaraged: 2 minutes instead, but every wrong guess (including Jammed Radar's) speeds the timer up by 0.5x, permanently for the wave.",
        onStart: (engine, key) => {
            const buffed = engine && engine.isBuffed(key);
            engine.startTimer(buffed ? 120 : 60);
        },
        onGuess: (row, guessedItem, secretItem, engine) => {
            if (engine && guessedItem.name !== secretItem.name) {
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
        description: "One non-correct arrow (Damage/Health or Firerate/Cooldown) is always flipped to point the wrong way. Vitaraged: 2 independent picks are flipped - hitting the same category twice cancels it back to normal.",
        onGuess: (row, guessedItem, secretItem, engine, key) => {
            const flipPairs = [["↑", "↓"], ["↓", "↑"]];

            const fieldChecks = [
                { cls: "cell-damage", isCorrect: guessedItem.damage === secretItem.damage },
                { cls: "cell-firerate", isCorrect: guessedItem.firerate === secretItem.firerate }
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
        name: "Sapped Communications",
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
        description: "A non-correct stat (Damage/Health or Firerate/Cooldown) may display the wrong value. Vitaraged: its color is also displayed wrong, independent of the real value.",
        onGuess: (row, guessedItem, secretItem, engine, key) => {
            // Correctness is checked against the real data, not the cell's current
            // DOM classes, so a genuinely correct stat can never be touched here.
            const fieldChecks = [
                { cls: "cell-damage", isCorrect: guessedItem.damage === secretItem.damage },
                { cls: "cell-firerate", isCorrect: guessedItem.firerate === secretItem.firerate }
            ];

            const candidates = fieldChecks
                .filter(field => !field.isCorrect)
                .map(field => row.querySelector(`.${field.cls}`))
                .filter(Boolean);

            if (candidates.length === 0) return;

            const target = candidates[Math.floor(Math.random() * candidates.length)];
            const sign = Math.random() < 0.5 ? 1 : -1;
            const arrowMatch = target.innerText.match(/ [↑↓]$/);
            const arrowSuffix = arrowMatch ? arrowMatch[0] : "";

            if (target.classList.contains("cell-damage")) {
                target.innerText = `${Math.max(0, guessedItem.damage + sign * 10)}${arrowSuffix}`;
            } else if (target.classList.contains("cell-firerate")) {
                target.innerText = `${Math.max(0, guessedItem.firerate + sign * 25)}${arrowSuffix}`;
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
        description: "3 items you guessed in the previous 2 waves are secretly vitacharged this wave. Guess one and every stat but its name goes blank and gold. Vitaraged: 6 items from the previous 4 waves instead.",
        onStart: (engine, key) => {
            vitachargedItems = new Set();
            const buffed = engine && engine.isBuffed(key);
            const waveSpan = buffed ? 4 : 2;
            const targetCount = buffed ? 6 : 3;

            if (typeof window.getPreviousWaveGuesses === "function") {
                const secret = typeof window.getSecretItem === "function" ? window.getSecretItem() : null;
                const db = window.itemDatabase || {};

                const pool = [...new Set(window.getPreviousWaveGuesses(waveSpan))]
                    .filter(itemKey => !secret || !db[itemKey] || db[itemKey].name !== secret.name);

                while (vitachargedItems.size < targetCount && pool.length > 0) {
                    const randomIndex = Math.floor(Math.random() * pool.length);
                    vitachargedItems.add(pool.splice(randomIndex, 1)[0]);
                }
            }
        },
        onGuess: (row, guessedItem) => {
            if (!vitachargedItems.has(guessedItem.name.toLowerCase())) return;

            row.classList.add("row-vitacharged");
            Array.from(row.children).forEach(cell => {
                if (cell.classList.contains("cell-name")) return;
                cell.classList.remove("cell-correct", "cell-incorrect", "cell-partial");
                cell.textContent = "";
                cell.classList.add("cell-vitacharged");
            });
        },
        onReset: () => {
            vitachargedItems = new Set();
        }
    },
    assassin: {
        name: "Assassin",
        description: "A random item is secretly the assassin this wave. Guessing it fails you instantly. Stats close to the assassin get a warning icon next to their arrow, colors stay unchanged. Vitaraged: only 1 fixed stat category can trigger the warning all wave.",
        onStart: (engine, key) => {
            currentAssassinItem = null;
            const db = window.itemDatabase || {};
            const secret = typeof window.getSecretItem === "function" ? window.getSecretItem() : null;
            const pool = Object.keys(db).filter(dbKey => !secret || db[dbKey].name !== secret.name);
            if (pool.length > 0) {
                const randomKey = pool[Math.floor(Math.random() * pool.length)];
                currentAssassinItem = db[randomKey];
            }

            if (engine) {
                if (engine.isBuffed(key)) {
                    const categories = ["cell-damage", "cell-firerate", "cell-special"];
                    engine.assassinTargetCategory = categories[Math.floor(Math.random() * categories.length)];
                } else {
                    engine.assassinTargetCategory = null;
                }
            }
        },
        onGuess: (row, guessedItem, secretItem, engine) => {
            if (!currentAssassinItem) return;

            let checks = [
                { cls: "cell-damage", close: Math.abs(guessedItem.damage - currentAssassinItem.damage) <= 15 },
                { cls: "cell-firerate", close: Math.abs(guessedItem.firerate - currentAssassinItem.firerate) <= 25 },
                { cls: "cell-special", close: guessedItem.hasSpecialAbility === currentAssassinItem.hasSpecialAbility }
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

            if (guessedItem.name === currentAssassinItem.name) {
                if (typeof window.handleAssassinGuess === "function") {
                    window.handleAssassinGuess(currentAssassinItem);
                }
            }
        },
        onReset: (engine) => {
            currentAssassinItem = null;
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

function getItemHellWaveModifierCount(waveNumber) {
    if (waveNumber === 11) return Object.keys(itemHellDefinitions).length;

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

window.Modifiers = new ModifierEngine("itemhell", itemHellDefinitions, getItemHellWaveModifierCount);
window.Modifiers.forceVitarage = (waveNumber) => waveNumber >= 7;
