let vitachargedEnemies = new Set();

window.getVitachargedEnemies = function() {
    return vitachargedEnemies;
};

let currentAssassin = null;

window.getCurrentAssassin = function() {
    return currentAssassin;
};

const practiceDefinitions = {
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
        description: "One non-correct category (Health, Total Waves, or First Encounter) always has an arrow flipped to point the wrong way. With Double Trouble, a category and target side are picked instead. Vitaraged: 2 independent picks are flipped - hitting the same one twice cancels it back to normal.",
        onGuess: (row, guessedEnemy, secretEnemy, engine, key) => {
            const slots = typeof window.getEligibleCategorySlots === "function"
                ? window.getEligibleCategorySlots(row, guessedEnemy, secretEnemy)
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
        description: "A non-correct category (Health, Total Waves, or First Encounter) may display the wrong value. With Double Trouble, a category and target side are picked instead. Vitaraged: its color is also displayed wrong, independent of the real value.",
        onGuess: (row, guessedEnemy, secretEnemy, engine, key) => {
            const slots = typeof window.getEligibleCategorySlots === "function"
                ? window.getEligibleCategorySlots(row, guessedEnemy, secretEnemy)
                : [];

            if (slots.length === 0) return;

            const slot = slots[Math.floor(Math.random() * slots.length)];
            const sign = Math.random() < 0.5 ? 1 : -1;

            if (slot.cls === "cell-health") {
                slot.cell.dataset.value = guessedEnemy.health + sign * 50;
            } else if (slot.cls === "cell-waves") {
                slot.cell.dataset.value = guessedEnemy.waves + sign * 2;
            } else if (slot.cls === "cell-encounter") {
                const order = window.encounterOrder || [];
                const lowerOrder = order.map(item => item.toLowerCase());
                const idx = lowerOrder.indexOf(guessedEnemy.encounter.toLowerCase());
                if (idx !== -1) {
                    const newIdx = Math.min(Math.max(idx + sign, 0), order.length - 1);
                    slot.cell.dataset.value = order[newIdx];
                }
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
        description: "3 enemies you guessed in the previous 2 waves are secretly vitacharged this wave. Guess one and every stat but its name goes blank and gold. Vitaraged: 6 enemies from the previous 4 waves instead.",
        onStart: (engine, key) => {
            vitachargedEnemies = new Set();
            const buffed = engine && engine.isBuffed(key);
            const waveSpan = buffed ? 4 : 2;
            const targetCount = buffed ? 6 : 3;

            if (typeof window.getPreviousWaveGuesses === "function") {
                const secret = typeof window.getSecretEnemy === "function" ? window.getSecretEnemy() : null;
                const db = window.enemyDatabase || {};

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
            const rosterKeys = window.enemyKeys || Object.keys(db);
            const secret = typeof window.getSecretEnemy === "function" ? window.getSecretEnemy() : null;
            const pool = rosterKeys.filter(dbKey => !secret || db[dbKey].name !== secret.name);
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
        onGuess: (row, guessedEnemy, secretEnemy, engine, key) => {
            const doubleTroubleActive = typeof Modifiers !== "undefined" &&
                Modifiers.active.has("doubleTrouble");
            const secretEnemy2 = typeof window.getSecondSecretEnemy === "function" ? window.getSecondSecretEnemy() : null;
            const secretEnemy3 = typeof window.getThirdSecretEnemy === "function" ? window.getThirdSecretEnemy() : null;
            const validTargets = doubleTroubleActive && secretEnemy2
                ? [secretEnemy, secretEnemy2, ...(secretEnemy3 ? [secretEnemy3] : [])]
                : [secretEnemy];
            if (validTargets.some(t => t.name === guessedEnemy.name)) return;
            if (window.__autoGuessInProgress) return;

            if (typeof window.handleMutilatedDeathsFail === "function") {
                const buffed = !!(engine && engine.isBuffed(key));
                window.handleMutilatedDeathsFail(buffed, guessedEnemy.name);
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
        description: "Practice mode exclusive. All color hints are disabled — you only have the arrows to go by. Vitaraged: stats are also heavily blurred.",
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
    chubbyTroops: {
        name: "Chubby Troops",
        description: "Practice mode exclusive. 1/3rd of the units in the pool take up 2 guesses instead of 1 when guessed. Vitaraged: 3 guesses instead of 1.",
        runLast: true,
        onStart: (engine) => {
            const pool = window.enemyKeys || [];
            const shuffled = [...pool].sort(() => Math.random() - 0.5);
            const count = Math.round(pool.length / 3);
            engine.chubbyEnemies = new Set(shuffled.slice(0, count));
        },
        onGuess: (row, guessedEnemy, secretEnemy, engine, key) => {
            if (!engine || !engine.chubbyEnemies) return;

            const guessedKey = guessedEnemy.name.toLowerCase();
            if (!engine.chubbyEnemies.has(guessedKey)) return;

            const secondTarget = typeof window.getSecondSecretEnemy === "function" ? window.getSecondSecretEnemy() : null;
            const thirdTarget = typeof window.getThirdSecretEnemy === "function" ? window.getThirdSecretEnemy() : null;
            const isCorrectGuess = (secretEnemy && guessedEnemy.name === secretEnemy.name) ||
                (secondTarget && guessedEnemy.name === secondTarget.name) ||
                (thirdTarget && guessedEnemy.name === thirdTarget.name);
            if (isCorrectGuess) return;

            const buffed = engine.isBuffed(key);
            const totalCost = buffed ? 3 : 2;
            const extraGuesses = totalCost - 1;

            if (typeof window.addExtraGuessCount === "function") {
                window.addExtraGuessCount(extraGuesses);
            }

            row.classList.add("row-chubby");
            const wrapper = row.querySelector(".name-cell-wrapper");
            if (wrapper) {
                const badge = document.createElement("span");
                badge.className = "chubby-cost-badge";
                badge.innerText = `×${totalCost} guesses`;
                wrapper.appendChild(badge);
            }

            const tbody = document.getElementById("guessRows");
            if (tbody) {
                for (let i = 0; i < extraGuesses; i++) {
                    const clone = row.cloneNode(true);
                    const cloneImg = clone.querySelector(".table-enemy-icon");
                    if (cloneImg) cloneImg.onerror = function() { this.style.display = "none"; };
                    tbody.insertBefore(clone, tbody.firstChild);
                }
            }
        },
        onReset: (engine) => {
            if (engine) engine.chubbyEnemies = null;
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
    experienced: {
        name: (buffed) => buffed ? "Seasoned Veteran" : "Experienced",
        description: "Practice mode exclusive. An additional stat column 'XP on Kill' appears after Total Waves. Vitaraged: XP on Kill replaces the Total Waves column entirely instead of appearing alongside it.",
        onStart: (engine, key) => {
            const buffed = engine && engine.isBuffed(key);
            const thead = document.querySelector(".wordle-table thead tr");
            if (!thead || thead.querySelector(".th-xp")) return;
            const wavesHeaders = thead.querySelectorAll("th");
            let wavesThIndex = -1;
            wavesHeaders.forEach((th, i) => {
                if (th.textContent.trim().toUpperCase() === "TOTAL WAVES") wavesThIndex = i;
            });

            if (buffed && wavesThIndex !== -1) {
                wavesHeaders[wavesThIndex].dataset.xpHidden = "true";
                wavesHeaders[wavesThIndex].style.display = "none";
            }

            const th = document.createElement("th");
            th.textContent = "XP ON KILL";
            th.className = "th-xp";
            if (wavesThIndex !== -1 && wavesThIndex + 1 < wavesHeaders.length) {
                wavesHeaders[wavesThIndex + 1].before(th);
            } else {
                thead.appendChild(th);
            }
        },
        onReset: () => {
            const wavesHeader = document.querySelector('.wordle-table thead tr th[data-xp-hidden="true"]');
            if (wavesHeader) {
                wavesHeader.style.display = "";
                delete wavesHeader.dataset.xpHidden;
            }
            const th = document.querySelector(".wordle-table thead tr .th-xp");
            if (th) th.remove();
            document.querySelectorAll("#guessRows .cell-xp").forEach(td => td.remove());
            document.querySelectorAll("#guessRows .cell-waves").forEach(td => { td.style.display = ""; });
        },
        onGuess: (row, guessedEnemy, secretEnemy, engine, key) => {
            const buffed = engine && engine.isBuffed(key);
            const threshold = 10;
            const guessedXp = guessedEnemy.xpOnKill;
            const targetXp = secretEnemy.xpOnKill;

            const td = document.createElement("td");
            td.className = "cell-xp";
            td.dataset.value = guessedXp;

            const doubleTroubleActive = typeof Modifiers !== "undefined" &&
                Modifiers.active.has("doubleTrouble");
            const secretEnemy2 = typeof window.getSecondSecretEnemy === "function" ? window.getSecondSecretEnemy() : null;
            const secretEnemy3 = typeof window.getThirdSecretEnemy === "function" ? window.getThirdSecretEnemy() : null;

            if (doubleTroubleActive && secretEnemy2) {
                const targets = [secretEnemy, secretEnemy2, ...(secretEnemy3 ? [secretEnemy3] : [])];
                const results = targets.map(t => {
                    const xp = t.xpOnKill;
                    if (guessedXp === xp) return { arrow: "", status: "correct" };
                    const arrow = guessedXp < xp ? "↑" : "↓";
                    const status = Math.abs(guessedXp - xp) <= threshold ? "partial" : "incorrect";
                    return { arrow, status };
                });
                results.forEach((r, i) => { td.dataset[`arrow${i}`] = r.arrow; });
                if (typeof window.applySplitBackground === "function") window.applySplitBackground(td, results.map(r => r.status));
            } else {
                if (guessedXp === targetXp) {
                    td.dataset.arrow = "";
                    td.classList.add("cell-correct");
                } else {
                    td.dataset.arrow = guessedXp < targetXp ? "↑" : "↓";
                    td.classList.add(Math.abs(guessedXp - targetXp) <= threshold ? "cell-partial" : "cell-incorrect");
                }
            }

            if (typeof window.redrawCategoryCell === "function") window.redrawCategoryCell(td);

            const wavesCell = row.querySelector(".cell-waves");
            if (wavesCell) {
                if (buffed) wavesCell.style.display = "none";
                wavesCell.after(td);
            } else {
                row.appendChild(td);
            }
        }
    }
};

function practiceWaveCounts(waveNumber) {
    if (waveNumber <= 5) return 0;

    const cap = Math.min(4, Math.floor(waveNumber / 5));
    let minCount = 1;
    if (waveNumber >= 100) minCount = 4;
    else if (waveNumber >= 60) minCount = 3;
    else if (waveNumber > 40) minCount = 2;
    minCount = Math.min(minCount, cap);

    return minCount + Math.floor(Math.random() * (cap - minCount + 1));
}

window.Modifiers = new ModifierEngine("practice", practiceDefinitions, practiceWaveCounts);
window.Modifiers.forceVitarage = (wave) => wave > 40;
