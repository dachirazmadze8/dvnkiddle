let vitachargedItems = new Set();

window.getVitachargedItems = function() {
    return vitachargedItems;
};

let currentAssassin = null;

window.getCurrentAssassin = function() {
    return currentAssassin;
};

const sandboxDefinitions = {
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
                if (targetCell && typeof window.blankCellArrow === "function") {
                    if (targetCell.classList.contains("split-cell")) {
                        const count = parseInt(targetCell.dataset.targetCount || "0", 10);
                        const sides = [];
                        for (let i = 0; i < count; i++) {
                            if (targetCell.dataset[`arrow${i}`]) sides.push(i);
                        }
                        if (sides.length > 0) {
                            const side = sides[Math.floor(Math.random() * sides.length)];
                            window.blankCellArrow(targetCell, side);
                        }
                    } else {
                        window.blankCellArrow(targetCell, null);
                    }
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
            window.__autoGuessInProgress = true;
            if (engine && engine.isBuffed(key)) {
                if (typeof window.makeRandomWrongGuess === "function") {
                    window.makeRandomWrongGuess();
                    window.makeRandomWrongGuess();
                }
            } else if (typeof window.makeRandomGuess === "function") {
                window.makeRandomGuess();
            }
            window.__autoGuessInProgress = false;
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
        description: "One non-correct category (Damage/Health or Firerate/Cooldown) always has an arrow flipped to point the wrong way. With Double Trouble, a category and target side are picked instead. Vitaraged: 2 independent picks are flipped - hitting the same one twice cancels it back to normal.",
        onGuess: (row, guessedItem, secretItem, engine, key) => {
            const slots = typeof window.getEligibleCategorySlots === "function"
                ? window.getEligibleCategorySlots(row, guessedItem, secretItem)
                : [];

            const flipOnce = () => {
                if (slots.length === 0) return;
                const slot = slots[Math.floor(Math.random() * slots.length)];
                if (typeof window.flipCellArrow === "function") {
                    window.flipCellArrow(slot.cell, slot.side);
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
            if (typeof window.applyGuessDelta === "function") {
                window.applyGuessDelta(key, buffed ? -2 : -1);
            }
        },
        onReset: () => {
            if (typeof window.clearGuessDelta === "function") {
                window.clearGuessDelta("weakenedSignal");
            }
        }
    },
    miscommunication: {
        name: "Miscommunication",
        description: "A non-correct category (Damage/Health or Firerate/Cooldown) may display the wrong value. With Double Trouble, a category and target side are picked instead. Vitaraged: its color is also displayed wrong, independent of the real value.",
        onGuess: (row, guessedItem, secretItem, engine, key) => {
            const slots = typeof window.getEligibleCategorySlots === "function"
                ? window.getEligibleCategorySlots(row, guessedItem, secretItem)
                : [];

            if (slots.length === 0) return;

            const slot = slots[Math.floor(Math.random() * slots.length)];
            const sign = Math.random() < 0.5 ? 1 : -1;

            if (slot.cls === "cell-damage") {
                slot.cell.dataset.value = guessedItem.damage + sign * 15;
            } else if (slot.cls === "cell-firerate") {
                slot.cell.dataset.value = guessedItem.firerate + sign * 50;
            }
            if (typeof window.redrawCategoryCell === "function") {
                window.redrawCategoryCell(slot.cell);
            }

            if (engine && engine.isBuffed(key) && typeof window.setCellFakeStatus === "function") {
                const fakeStatuses = ["correct", "incorrect", "partial"];
                const fakeStatus = fakeStatuses[Math.floor(Math.random() * fakeStatuses.length)];
                window.setCellFakeStatus(slot.cell, fakeStatus, slot.side);
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
            currentAssassin = null;
            const db = window.itemDatabase || {};
            const rosterKeys = window.itemKeys || Object.keys(db);
            const secret = typeof window.getSecretItem === "function" ? window.getSecretItem() : null;
            const pool = rosterKeys.filter(dbKey => !secret || db[dbKey].name !== secret.name);
            if (pool.length > 0) {
                const randomKey = pool[Math.floor(Math.random() * pool.length)];
                currentAssassin = db[randomKey];
            }

            if (engine) {
                if (engine.isBuffed(key)) {
                    const categories = ["cell-damage", "cell-firerate"];
                    engine.assassinTargetCategory = categories[Math.floor(Math.random() * categories.length)];
                } else {
                    engine.assassinTargetCategory = null;
                }
            }
        },
        onGuess: (row, guessedItem, secretItem, engine) => {
            if (!currentAssassin) return;

            let checks = [
                { cls: "cell-damage", close: Math.abs(guessedItem.damage - currentAssassin.damage) <= 15 },
                { cls: "cell-firerate", close: Math.abs(guessedItem.firerate - currentAssassin.firerate) <= 50 }
            ];

            if (engine && engine.assassinTargetCategory) {
                checks = checks.filter(check => check.cls === engine.assassinTargetCategory);
            }

            checks.forEach(({ cls, close }) => {
                if (!close) return;
                const cell = row.querySelector(`.${cls}`);
                if (!cell) return;
                const isFullyExact = cell.classList.contains("split-cell")
                    ? !Array.from({ length: parseInt(cell.dataset.targetCount || "0", 10) }, (_, i) => cell.dataset[`arrow${i}`]).some(Boolean)
                    : cell.classList.contains("cell-correct");
                if (isFullyExact) return;
                cell.classList.add("cell-assassin-warning");
                cell.dataset.warning = "true";
                if (typeof window.redrawCategoryCell === "function") {
                    window.redrawCategoryCell(cell);
                } else {
                    cell.innerText = `${cell.innerText} ⚠`;
                }
            });

            if (guessedItem.name === currentAssassin.name) {
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
        description: "Doesn't affect the game directly — instead buffs 1 or more random active modifiers this wave. Starting wave 25 it can buff up to 2, wave 30 up to 3, and wave 35 up to 4.",
        onStart: (engine) => {
            engine.buffedModifiers = new Set();
            let candidates = [...engine.active].filter(key => key !== "vitarage");
            if (engine.active.has("jammedRadar")) {
                candidates = candidates.filter(key => key !== "weakenedSignal");
            }

            if (candidates.length > 0) {
                const wave = engine.currentWave || 1;
                let maxBuffs = 1;
                if (wave >= 35) maxBuffs = 4;
                else if (wave >= 30) maxBuffs = 3;
                else if (wave >= 25) maxBuffs = 2;
                maxBuffs = Math.min(maxBuffs, candidates.length);

                const buffCount = 1 + Math.floor(Math.random() * maxBuffs);

                const pool = [...candidates];
                while (engine.buffedModifiers.size < buffCount && pool.length > 0) {
                    const randomIndex = Math.floor(Math.random() * pool.length);
                    engine.buffedModifiers.add(pool.splice(randomIndex, 1)[0]);
                }
            }
            engine.renderBadges();
        },
        onReset: (engine) => {
            engine.buffedModifiers = new Set();
        }
    },
    mutilatedDeaths: {
        name: "Mutilated Deaths",
        description: "One wrong guess and you fail instantly. Guesses forced by Jammed Radar don't count. Vitaraged: you fail immediately at the start of the wave — you don't even get to guess.",
        onStart: (engine, key) => {
            if (engine && engine.isBuffed(key)) {
                if (typeof window.handleMutilatedDeathsFail === "function") {
                    window.handleMutilatedDeathsFail(true);
                }
            }
        },
        onGuess: (row, guessedItem, secretItem, engine, key) => {
            const doubleTroubleActive = typeof Modifiers !== "undefined" &&
                Modifiers.active.has("doubleTrouble");
            const secretItem2 = typeof window.getSecondSecretItem === "function" ? window.getSecondSecretItem() : null;
            const secretItem3 = typeof window.getThirdSecretItem === "function" ? window.getThirdSecretItem() : null;
            const validTargets = doubleTroubleActive && secretItem2
                ? [secretItem, secretItem2, ...(secretItem3 ? [secretItem3] : [])]
                : [secretItem];
            if (validTargets.some(t => t.name === guessedItem.name)) return;
            if (window.__autoGuessInProgress) return;

            if (typeof window.handleMutilatedDeathsFail === "function") {
                const buffed = !!(engine && engine.isBuffed(key));
                window.handleMutilatedDeathsFail(buffed, guessedItem.name);
            }
        }
    },
    strengthenedSignal: {
        name: "Strengthened Signal",
        description: "You get 7 guesses instead of 6. Vitaraged: 8 guesses instead of 6.",
        onStart: (engine, key) => {
            const buffed = engine && engine.isBuffed(key);
            if (typeof window.applyGuessDelta === "function") {
                window.applyGuessDelta(key, buffed ? 2 : 1);
            }
        },
        onReset: () => {
            if (typeof window.clearGuessDelta === "function") {
                window.clearGuessDelta("strengthenedSignal");
            }
        }
    },
    accurateRadar: {
        name: "Accurate Radar",
        description: "Automatically submits a random wrong guess on wave start, with at least 1 stat guaranteed to show green. Vitaraged: submits 2 such guesses instead of 1.",
        onStart: (engine, key) => {
            const buffed = engine && engine.isBuffed(key);
            window.__autoGuessInProgress = true;
            if (typeof window.makeAccurateRadarGuess === "function") {
                window.makeAccurateRadarGuess();
                if (buffed) {
                    window.makeAccurateRadarGuess();
                }
            }
            window.__autoGuessInProgress = false;
        },
        onReset: () => {}
    },
    extraLife: {
        name: "Resuscitator",
        description: "If you'd fail (out of guesses, assassinated, or Security Protocol running out), it's canceled and you move on to the next wave anyway. Only 1 use total. Vitaraged: 2 uses total.",
        onStart: (engine, key) => {
            const buffed = engine && engine.isBuffed(key);
            if (typeof engine.extraLifeCharges !== "number") {
                engine.extraLifeCharges = buffed ? 2 : 1;
            }
        },
        onReset: () => {}
    },
    aimAssist: {
        name: (buffed) => buffed ? "Aim Bot" : "Aim Assist",
        description: "If a guess would show a yellow stat, it's automatically swapped for a different guess that turns that stat green. Vitaraged: any yellow stat instead makes the guess fully correct.",
        onStart: () => {},
        onReset: () => {}
    },
    colorblind: {
        name: (buffed) => buffed ? "Blindness" : "Colorblind",
        description: "Sandbox mode exclusive. All color hints are disabled — you only have the arrows to go by. Vitaraged: stats are also heavily blurred.",
        onStart: (engine, key) => {
            const table = document.getElementById("guessTable");
            if (!table) return;
            table.classList.add("colorblind-active");
            table.classList.toggle("colorblind-vitaraged", !!(engine && engine.isBuffed(key)));
        },
        onReset: () => {
            const table = document.getElementById("guessTable");
            if (table) table.classList.remove("colorblind-active", "colorblind-vitaraged");
        }
    },
    doubleTrouble: {
        name: (buffed) => buffed ? "Triple Trouble" : "Double Trouble",
        description: "There are 2 secret targets this wave instead of 1. Every stat category shows one arrow per target, and the cell's color is split to match, one section per target. Guesses increased from 6 to 7 to compensate. You must correctly guess every target before you run out of guesses. Vitaraged: 3 secret targets instead, guesses increased to 9 instead of 7.",
        onStart: (engine, key) => {
            engine.doubleTroubleFound = null;
            const buffed = engine && engine.isBuffed(key);
            if (typeof window.applyGuessDelta === "function") {
                window.applyGuessDelta(key, buffed ? 3 : 1);
            }
            if (typeof window.pickSecondTarget === "function") {
                window.pickSecondTarget();
            }
            if (buffed && typeof window.pickThirdTarget === "function") {
                window.pickThirdTarget();
            }
        },
        onReset: (engine) => {
            if (engine) {
                engine.doubleTroubleFound = null;
            }
            if (typeof window.clearGuessDelta === "function") {
                window.clearGuessDelta("doubleTrouble");
            }
            if (typeof window.clearSecondTarget === "function") {
                window.clearSecondTarget();
            }
            if (typeof window.clearThirdTarget === "function") {
                window.clearThirdTarget();
            }
        }
    },
};

function sandboxWaveCounts(waveNumber) {
    if (waveNumber <= 5) return 0;

    const cap = Math.min(4, Math.floor(waveNumber / 5));
    let minCount = 1;
    if (waveNumber >= 100) minCount = 4;
    else if (waveNumber >= 60) minCount = 3;
    else if (waveNumber > 40) minCount = 2;
    minCount = Math.min(minCount, cap);

    return minCount + Math.floor(Math.random() * (cap - minCount + 1));
}

window.Modifiers = new ModifierEngine("sandbox", sandboxDefinitions, sandboxWaveCounts);
window.Modifiers.forceVitarage = (wave) => wave > 40;
