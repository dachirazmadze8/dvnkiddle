const itemDatabase = {
    "rifle": { name: "Rifle", type: "Weapon", damage: 20, firerate: 500, hasSpecialAbility: false },
    "harpoon gun": { name: "Harpoon Gun", type: "Weapon", damage: 25, firerate: 550, hasSpecialAbility: true },
    "bolter": { name: "Bolter", type: "Weapon", damage: 20, firerate: 550, hasSpecialAbility: true },
    "shotgun": { name: "Shotgun", type: "Weapon", damage: 150, firerate: 65, hasSpecialAbility: false },
    "sprinters streak": { name: "Sprinters Streak", type: "Weapon", damage: 140, firerate: 100, hasSpecialAbility: true },
    "hallsweeper": { name: "Hallsweeper", type: "Weapon", damage: 135, firerate: 100, hasSpecialAbility: true },
    "dmr": { name: "DMR", type: "Weapon", damage: 55, firerate: 95, hasSpecialAbility: false },
    "gift of fire": { name: "Gift Of Fire", type: "Weapon", damage: 55, firerate: 70, hasSpecialAbility: false },
    "armor peeler": { name: "Armor Peeler", type: "Weapon", damage: 200, firerate: 120, hasSpecialAbility: false },
    "akimbo": { name: "Akimbo", type: "Weapon", damage: 26, firerate: 400, hasSpecialAbility: false },
    "voltaic impact": { name: "Voltaic Impact", type: "Weapon", damage: 27, firerate: 585, hasSpecialAbility: false },
    "gunslingers": { name: "Gunslingers", type: "Weapon", damage: 20, firerate: 300, hasSpecialAbility: false },
    "smg": { name: "SMG", type: "Weapon", damage: 22, firerate: 700, hasSpecialAbility: false },
    "twinface (light)": { name: "Twinface (Light)", type: "Weapon", damage: 22, firerate: 900, hasSpecialAbility: true },
    "twinface (heavy)": { name: "Twinface (Heavy)", type: "Weapon", damage: 28, firerate: 225, hasSpecialAbility: true },
    "loose trigger": { name: "Loose Trigger", type: "Weapon", damage: 26, firerate: 700, hasSpecialAbility: false },
    "burst rifle": { name: "Burst Rifle", type: "Weapon", damage: 18, firerate: 750, hasSpecialAbility: false },
    "stonewall": { name: "Stonewall", type: "Weapon", damage: 30, firerate: 750, hasSpecialAbility: false },
    "steelforge": { name: "Steelforge", type: "Weapon", damage: 18, firerate: 900, hasSpecialAbility: false },
    "rpg": { name: "RPG", type: "Weapon", damage: 1200, firerate: 20, hasSpecialAbility: false },
    "rocket stormer": { name: "Rocket Stormer", type: "Weapon", damage: 980, firerate: 150, hasSpecialAbility: true },
    "shockwave device": { name: "Shockwave Device", type: "Weapon", damage: 2250, firerate: 30, hasSpecialAbility: false },
    "grenade launcher": { name: "Grenade Launcher", type: "Weapon", damage: 200, firerate: 20, hasSpecialAbility: false },
    "intraplanar device": { name: "Intraplanar Device", type: "Weapon", damage: 80, firerate: 400, hasSpecialAbility: false },
    "parabolic hydra": { name: "Parabolic Hydra", type: "Weapon", damage: 100, firerate: 60, hasSpecialAbility: true },
    "medical bow": { name: "Medical Bow", type: "Weapon", damage: 80, firerate: 60, hasSpecialAbility: false },
    "recurve": { name: "Recurve", type: "Weapon", damage: 120, firerate: 150, hasSpecialAbility: false },
    "vitabow": { name: "Vitabow", type: "Weapon", damage: 80, firerate: 60, hasSpecialAbility: false },
    "pdc kit": { name: "PDC kit", type: "Weapon", damage: 5, firerate: 375, hasSpecialAbility: false },
    "governor kit": { name: "Governor kit", type: "Weapon", damage: 10, firerate: 750, hasSpecialAbility: false },
    "mads kit": { name: "MADS kit", type: "Weapon", damage: 4, firerate: 500, hasSpecialAbility: false },
    "shovel": { name: "Shovel", type: "Melee", damage: 101, firerate: 0.7, hasSpecialAbility: false },
    "overcharger": { name: "Overcharger", type: "Melee", damage: 101, firerate: 0.7, hasSpecialAbility: true },
    "rallying cry": { name: "Rallying Cry", type: "Melee", damage: 101, firerate: 0.7, hasSpecialAbility: true },
    "machete": { name: "Machete", type: "Melee", damage: 58, firerate: 0.5, hasSpecialAbility: true },
    "handaxes": { name: "Handaxes", type: "Melee", damage: 101, firerate: 0.5, hasSpecialAbility: true },
    "torqueblade": { name: "Torqueblade", type: "Melee", damage: 58, firerate: 0.5, hasSpecialAbility: true },
    "jetpack": { name: "Jetpack", type: "Utility", damage: 0, firerate: 5.5, hasSpecialAbility: false },
    "terminal velocity": { name: "Terminal Velocity", type: "Utility", damage: 85, firerate: 2.25, hasSpecialAbility: true },
    "aerorig": { name: "Aerorig", type: "Utility", damage: 150, firerate: 10, hasSpecialAbility: false },
    "barrier": { name: "Barrier", type: "Utility", damage: 1000, firerate: 90, hasSpecialAbility: false },
    "brace": { name: "BRACE", type: "Utility", damage: 500, firerate: 90, hasSpecialAbility: false },
    "hallucinator kit": { name: "Hallucinator Kit", type: "Utility", damage: 400, firerate: 1, hasSpecialAbility: false },
    "aidkit": { name: "Aidkit", type: "Utility", damage: 0, firerate: 65, hasSpecialAbility: false },
    "lifeline": { name: "Lifeline", type: "Utility", damage: 1000, firerate: 1, hasSpecialAbility: false },
    "mercy kill": { name: "Mercy Kill", type: "Utility", damage: 0, firerate: 12, hasSpecialAbility: false },
    "fast": { name: "FAST", type: "Utility", damage: 200, firerate: 0, hasSpecialAbility: false },
    "tablet": { name: "Tablet", type: "Utility", damage: 0, firerate: 60, hasSpecialAbility: false },
    "motion hider": { name: "Motion Hider", type: "Utility", damage: 0, firerate: 10000000, hasSpecialAbility: false },
    "tripwire kit": { name: "Tripwire Kit", type: "Utility", damage: 100000000, firerate: 0, hasSpecialAbility: false },
};

function isWeaponItem(item) {
    return item.type !== "Utility";
}

window.isWeaponItem = isWeaponItem;

window.itemDatabase = itemDatabase;
window.getSecretItem = function() {
    return secretItem;
};

function loadItemRoster() {
    try {
        const stored = localStorage.getItem("sandboxItemRoster");
        if (stored) {
            const parsed = JSON.parse(stored);
            if (Array.isArray(parsed)) {
                const filtered = parsed.filter(key => itemDatabase[key]);
                if (filtered.length > 0) return filtered;
            }
        }
    } catch (e) {
        // fall through to the full roster
    }
    return Object.keys(itemDatabase);
}

let itemKeys = loadItemRoster();
window.itemKeys = itemKeys;
let secretItem;
let secretItem2 = null;
let secretItem3 = null;

function getTargetNamesList() {
    const doubleTroubleActive = typeof Modifiers !== "undefined" &&
        Modifiers.active.has("doubleTrouble") &&
        secretItem2;
    if (!doubleTroubleActive) return secretItem.name;

    const targetNames = [secretItem, secretItem2, ...(secretItem3 ? [secretItem3] : [])].map(t => t.name);
    return targetNames.length === 2
        ? `${targetNames[0]} and ${targetNames[1]}`
        : `${targetNames.slice(0, -1).join(", ")}, and ${targetNames[targetNames.length - 1]}`;
}
window.getSecondSecretItem = function() {
    return secretItem2;
};
window.getThirdSecretItem = function() {
    return secretItem3;
};

window.pickSecondTarget = function() {
    const assassin = typeof window.getCurrentAssassin === "function" ? window.getCurrentAssassin() : null;
    const vitacharged = typeof window.getVitachargedEnemies === "function" ? window.getVitachargedEnemies() : null;
    const pool = itemKeys.filter(key => {
        const item = itemDatabase[key];
        if (item.name === secretItem.name) return false;
        if (assassin && item.name === assassin.name) return false;
        if (vitacharged && vitacharged.has(key)) return false;
        return true;
    });
    if (pool.length === 0) {
        secretItem2 = null;
        return;
    }
    const randomKey = pool[Math.floor(Math.random() * pool.length)];
    secretItem2 = itemDatabase[randomKey];
    console.log(`Wave ${currentWave} second answer: ${secretItem2.name}`);
};

window.pickThirdTarget = function() {
    const assassin = typeof window.getCurrentAssassin === "function" ? window.getCurrentAssassin() : null;
    const vitacharged = typeof window.getVitachargedEnemies === "function" ? window.getVitachargedEnemies() : null;
    const pool = itemKeys.filter(key => {
        const item = itemDatabase[key];
        if (item.name === secretItem.name) return false;
        if (secretItem2 && item.name === secretItem2.name) return false;
        if (assassin && item.name === assassin.name) return false;
        if (vitacharged && vitacharged.has(key)) return false;
        return true;
    });
    if (pool.length === 0) {
        secretItem3 = null;
        return;
    }
    const randomKey = pool[Math.floor(Math.random() * pool.length)];
    secretItem3 = itemDatabase[randomKey];
    console.log(`Wave ${currentWave} third answer: ${secretItem3.name}`);
};

window.clearSecondTarget = function() {
    secretItem2 = null;
};

window.clearThirdTarget = function() {
    secretItem3 = null;
};

let gameOver = false;
let guessCount = 0;
let MAX_GUESSES = 6;

let guessedItemsList = [];

let currentWave = 1;
let isWaveClear = false;

let waveGuessHistory = {};

window.getPreviousWaveGuesses = function(numWaves) {
    const result = [];
    for (let w = currentWave - 1; w >= Math.max(1, currentWave - numWaves); w--) {
        if (waveGuessHistory[w]) result.push(...waveGuessHistory[w]);
    }
    return result;
};

let inputElement, dropdownMenu, waveIndicator, continueButton, submitButton;

document.addEventListener("DOMContentLoaded", () => {
    inputElement = document.getElementById("itemInput");
    dropdownMenu = document.getElementById("dropdownMenu");
    waveIndicator = document.getElementById("waveIndicator");
    continueButton = document.getElementById("continueButton");
    submitButton = document.querySelector(".submit-btn");

    if (submitButton) {
        submitButton.innerText = "Random Guess";
        submitButton.addEventListener("click", makeRandomGuess);
    }

    if (inputElement) {
        inputElement.addEventListener("focus", showFilteredOptions);
        inputElement.addEventListener("input", showFilteredOptions);
        inputElement.addEventListener("keypress", (e) => {
            if (e.key === 'Enter') submitGuess();
        });
    }

    document.addEventListener("click", (e) => {
        if (!e.target.closest(".search-container")) {
            if (dropdownMenu) dropdownMenu.style.display = "none";
        }
    });

    const categoryButtons = document.querySelectorAll(".category-btn");
    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            button.classList.toggle("active");
            const content = button.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    initializeGameSession();
});

function initializeGameSession() {
    MAX_GUESSES = 6;
    if (typeof Modifiers !== "undefined") {
        Modifiers.resetAll();
    }

    secretItem = itemDatabase[itemKeys[Math.floor(Math.random() * itemKeys.length)]];
    console.log(`Wave ${currentWave} answer: ${secretItem.name}`);
    secretItem2 = null;
    secretItem3 = null;
    gameOver = false;
    isWaveClear = false;
    guessCount = 0;
    guessedItemsList = [];

    if (waveIndicator) waveIndicator.innerText = `Wave: ${currentWave}`;

    if (continueButton) {
        continueButton.innerText = "Continue";
        continueButton.onclick = advanceNextWave;
        continueButton.style.display = "none";
    }

    if (submitButton) submitButton.disabled = false;
    if (inputElement) {
        inputElement.value = "";
        inputElement.disabled = false;
        inputElement.placeholder = "Type or select an item...";
    }

    const messageElement = document.getElementById("gameMessage");
    if (messageElement) messageElement.innerText = "";

    const tbody = document.getElementById("guessRows");
    if (tbody) tbody.innerHTML = "";

    if (typeof Modifiers !== "undefined") {
        Modifiers.currentWave = currentWave;
        window.applySandboxModifiers();
    }
}

function advanceNextWave() {
    currentWave++;
    initializeGameSession();
}

function resetToWaveOne() {
    currentWave = 1;
    waveGuessHistory = {};
    if (typeof Modifiers !== "undefined") {
        Modifiers.extraLifeCharges = undefined;
    }
    initializeGameSession();
}

function makeRandomGuess() {
    if (gameOver || isWaveClear) return;

    const assassin = typeof window.getCurrentAssassin === "function" ? window.getCurrentAssassin() : null;
    const vitacharged = typeof window.getVitachargedEnemies === "function" ? window.getVitachargedEnemies() : null;
    const availableKeys = itemKeys.filter(key =>
        !guessedItemsList.includes(key) &&
        (!assassin || itemDatabase[key].name !== assassin.name) &&
        (!vitacharged || !vitacharged.has(key))
    );
    if (availableKeys.length === 0) return;

    const randomKey = availableKeys[Math.floor(Math.random() * availableKeys.length)];
    inputElement.value = itemDatabase[randomKey].name;
    submitGuess();
}

window.makeRandomGuess = makeRandomGuess;

function makeRandomWrongGuess() {
    if (gameOver || isWaveClear) return;

    const assassin = typeof window.getCurrentAssassin === "function" ? window.getCurrentAssassin() : null;
    const vitacharged = typeof window.getVitachargedEnemies === "function" ? window.getVitachargedEnemies() : null;
    const availableKeys = itemKeys.filter(key =>
        !guessedItemsList.includes(key) &&
        itemDatabase[key].name !== secretItem.name &&
        (!assassin || itemDatabase[key].name !== assassin.name) &&
        (!vitacharged || !vitacharged.has(key))
    );
    if (availableKeys.length === 0) return;

    const randomKey = availableKeys[Math.floor(Math.random() * availableKeys.length)];
    inputElement.value = itemDatabase[randomKey].name;
    submitGuess();
}

window.makeRandomWrongGuess = makeRandomWrongGuess;

function makeAccurateRadarGuess() {
    if (gameOver || isWaveClear) return;

    const assassin = typeof window.getCurrentAssassin === "function" ? window.getCurrentAssassin() : null;
    const vitacharged = typeof window.getVitachargedEnemies === "function" ? window.getVitachargedEnemies() : null;

    const baseFilter = key => {
        if (guessedItemsList.includes(key)) return false;
        const item = itemDatabase[key];
        if (item.name === secretItem.name) return false;
        if (assassin && item.name === assassin.name) return false;
        if (vitacharged && vitacharged.has(key)) return false;
        return true;
    };

    // Prefer a wrong guess that shares at least one stat exactly with the
    // target, so that stat is guaranteed to show green. Fall back to any
    // wrong guess if the current roster has nothing that qualifies.
    const accurateKeys = itemKeys.filter(key => {
        if (!baseFilter(key)) return false;
        const item = itemDatabase[key];
        const damageMatch = item.damage === secretItem.damage;
        const firerateMatch = item.firerate === secretItem.firerate;
        const specialMatch = item.hasSpecialAbility === secretItem.hasSpecialAbility;
        return damageMatch || firerateMatch || specialMatch;
    });

    const pool = accurateKeys.length > 0 ? accurateKeys : itemKeys.filter(baseFilter);
    if (pool.length === 0) return;

    const randomKey = pool[Math.floor(Math.random() * pool.length)];
    inputElement.value = itemDatabase[randomKey].name;
    submitGuess();
}

window.makeAccurateRadarGuess = makeAccurateRadarGuess;

function applyAimAssist(originalKey) {
    if (typeof Modifiers === "undefined" || !Modifiers.active.has("aimAssist")) return originalKey;

    const guessedItem = itemDatabase[originalKey];
    if (!guessedItem || guessedItem.name === secretItem.name) return originalKey;

    const damagePartial = guessedItem.damage !== secretItem.damage &&
        Math.abs(guessedItem.damage - secretItem.damage) <= 15;
    const fireratePartial = guessedItem.firerate !== secretItem.firerate &&
        Math.abs(guessedItem.firerate - secretItem.firerate) <= 50;

    if (!damagePartial && !fireratePartial) return originalKey;

    if (Modifiers.isBuffed("aimAssist")) {
        const secretKey = Object.keys(itemDatabase).find(key => itemDatabase[key].name === secretItem.name);
        return secretKey || originalKey;
    }

    const assassin = typeof window.getCurrentAssassin === "function" ? window.getCurrentAssassin() : null;
    const vitacharged = typeof window.getVitachargedEnemies === "function" ? window.getVitachargedEnemies() : null;

    const candidates = itemKeys.filter(key => {
        if (guessedItemsList.includes(key)) return false;
        const item = itemDatabase[key];
        if (item.name === guessedItem.name) return false;
        if (assassin && item.name === assassin.name) return false;
        if (vitacharged && vitacharged.has(key)) return false;

        const damageMatch = damagePartial && item.damage === secretItem.damage;
        const firerateMatch = fireratePartial && item.firerate === secretItem.firerate;
        return damageMatch || firerateMatch;
    });

    if (candidates.length === 0) return originalKey;
    return candidates[Math.floor(Math.random() * candidates.length)];
}

window.setMaxGuesses = function(n) {
    MAX_GUESSES = n;
};

// Guess-count modifiers (Sapped Communications, Strengthened Signal, Double/Triple
// Trouble) apply relative to the base of 6 instead of setting an absolute value,
// so they stack instead of clobbering each other when active together.
window.guessDeltas = {};
window.applyGuessDelta = function(key, delta) {
    window.guessDeltas[key] = delta;
    window.recalcMaxGuesses();
};
window.clearGuessDelta = function(key) {
    delete window.guessDeltas[key];
    window.recalcMaxGuesses();
};
window.recalcMaxGuesses = function() {
    const total = Object.values(window.guessDeltas).reduce((sum, d) => sum + d, 6);
    MAX_GUESSES = Math.max(1, total);
};

const SPLIT_COLORS = { correct: "#1b663b", partial: "#e6b800", incorrect: "#791a24" };

// Category-cell helpers shared with modifiers.js definitions so they can
// affect a specific category (and, with Double Trouble, a specific target
// index) directly via structured data instead of scanning rendered text.
// `side` is null for a normal single-target cell, or a 0-based target
// index (0, 1, 2...) for a split cell with 2+ targets.
window.applySplitBackground = function(td, statuses) {
    td.classList.add("split-cell");
    const count = statuses.length;
    td.dataset.targetCount = String(count);
    const stops = [];
    statuses.forEach((status, i) => {
        const color = SPLIT_COLORS[status];
        td.dataset[`trueColor${i}`] = color;
        const startPct = (100 * i / count).toFixed(2);
        const endPct = (100 * (i + 1) / count).toFixed(2);
        stops.push(`${color} ${startPct}%`, `${color} ${endPct}%`);
    });
    td.style.background = `linear-gradient(to right, ${stops.join(", ")})`;
};

window.redrawCategoryCell = function(td) {
    let parts;
    if (td.classList.contains("split-cell")) {
        const count = parseInt(td.dataset.targetCount || "0", 10);
        const arrows = [];
        for (let i = 0; i < count; i++) {
            if (td.dataset[`arrow${i}`]) arrows.push(td.dataset[`arrow${i}`]);
        }
        parts = [td.dataset.value, ...arrows];
    } else {
        parts = [td.dataset.value, td.dataset.arrow].filter(part => part);
    }
    let text = parts.filter(part => part !== undefined && part !== "").join(" ");
    if (td.dataset.warning === "true") text += " ⚠";
    td.innerText = text;
};

window.flipArrowChar = function(arrow) {
    const flipMap = { "↑": "↓", "↓": "↑", "→": "←", "←": "→" };
    return flipMap[arrow] || arrow;
};

window.flipCellArrow = function(td, side) {
    const key = (side === null || side === undefined) ? "arrow" : `arrow${side}`;
    if (!td.dataset[key]) return;
    td.dataset[key] = window.flipArrowChar(td.dataset[key]);
    window.redrawCategoryCell(td);
};

window.blankCellArrow = function(td, side) {
    const key = (side === null || side === undefined) ? "arrow" : `arrow${side}`;
    if (!td.dataset[key]) return;
    td.dataset[key] = "";
    window.redrawCategoryCell(td);
};

window.setCellFakeStatus = function(td, status, side) {
    if (td.classList.contains("split-cell")) {
        const count = parseInt(td.dataset.targetCount || "0", 10);
        const stops = [];
        for (let i = 0; i < count; i++) {
            const color = i === side ? SPLIT_COLORS[status] : (td.dataset[`trueColor${i}`] || SPLIT_COLORS.incorrect);
            const startPct = (100 * i / count).toFixed(2);
            const endPct = (100 * (i + 1) / count).toFixed(2);
            stops.push(`${color} ${startPct}%`, `${color} ${endPct}%`);
        }
        td.style.background = `linear-gradient(to right, ${stops.join(", ")})`;
    } else {
        td.classList.remove("cell-correct", "cell-incorrect", "cell-partial");
        td.classList.add(`cell-${status}`);
    }
};

// Returns the eligible (category, side) slots a modifier can affect for this
// guess: one slot per non-exact category normally, or one slot per
// non-exact target index per category when Double Trouble is active
// (2 targets normally, 3 when Vitaraged).
window.getEligibleCategorySlots = function(row, guessedItem, secretItem) {
    const secretItem2 = typeof window.getSecondSecretItem === "function" ? window.getSecondSecretItem() : null;
    const secretItem3 = typeof window.getThirdSecretItem === "function" ? window.getThirdSecretItem() : null;
    const doubleTrouble = typeof Modifiers !== "undefined" && Modifiers.active.has("doubleTrouble") && !!secretItem2;
    const targets = doubleTrouble ? [secretItem, secretItem2, ...(secretItem3 ? [secretItem3] : [])] : [secretItem];

    const fieldDefs = [
        { cls: "cell-damage", guessedVal: guessedItem.damage, targetVal: t => t.damage },
        { cls: "cell-firerate", guessedVal: guessedItem.firerate, targetVal: t => t.firerate }
    ];

    const slots = [];
    fieldDefs.forEach(field => {
        const cell = row.querySelector(`.${field.cls}`);
        if (!cell) return;
        if (targets.length > 1) {
            targets.forEach((target, i) => {
                if (field.guessedVal !== field.targetVal(target)) {
                    slots.push({ cell, side: i, cls: field.cls });
                }
            });
        } else if (field.guessedVal !== field.targetVal(targets[0])) {
            slots.push({ cell, side: null, cls: field.cls });
        }
    });
    return slots;
};

window.addExtraGuessCount = function(n) {
    guessCount += n;
};

window.applySandboxModifiers = function() {
    let config = { enabled: [], vitaraged: [], randomize: false };
    try {
        const stored = localStorage.getItem("sandboxModifierConfig");
        if (stored) {
            const parsed = JSON.parse(stored);
            if (Array.isArray(parsed.enabled)) config.enabled = parsed.enabled;
            if (Array.isArray(parsed.vitaraged)) config.vitaraged = parsed.vitaraged;
            if (typeof parsed.randomize === "boolean") config.randomize = parsed.randomize;
        }
    } catch (e) {
        config = { enabled: [], vitaraged: [], randomize: false };
    }

    if (typeof Modifiers === "undefined") return;

    if (config.randomize) {
        // Only draw from the modifiers the user selected, but let the engine
        // pick how many appear and which ones, using the same wave-based
        // formula and vitarage-forcing rule Classic mode uses.
        Modifiers.allowedKeys = config.enabled;
        Modifiers.evaluateWave(currentWave);
    } else {
        Modifiers.allowedKeys = null;
        Modifiers.applyFixedModifiers(config.enabled, new Set(config.vitaraged));
    }
};

function tryUseExtraLife(reasonText) {
    if (typeof Modifiers === "undefined") return false;
    if (!Modifiers.active.has("extraLife")) return false;
    if (!(Modifiers.extraLifeCharges > 0)) return false;

    Modifiers.extraLifeCharges -= 1;

    const messageElement = document.getElementById("gameMessage");
    if (messageElement) {
        messageElement.innerText = `EXTRA LIFE USED! ${reasonText} You move on to the next wave anyway. (${Modifiers.extraLifeCharges} left)`;
        messageElement.style.color = "#33ff66";
    }

    isWaveClear = true;
    if (inputElement) inputElement.disabled = true;
    if (submitButton) submitButton.disabled = true;

    if (continueButton) {
        continueButton.innerText = "Continue";
        continueButton.style.display = "inline-block";
        continueButton.onclick = advanceNextWave;
    }

    return true;
}

window.handleTimerTimeout = function() {
    if (gameOver || isWaveClear) return;
    if (tryUseExtraLife("Security Protocol ran out.")) return;

    const messageElement = document.getElementById("gameMessage");
    if (messageElement) {
        messageElement.innerText = `DETECTED BY SECURITY PROTOCOL! Out of time. Target was: ${getTargetNamesList()}.`;
        messageElement.style.color = "#ff3333";
    }

    gameOver = true;
    if (inputElement) inputElement.disabled = true;
    if (submitButton) submitButton.disabled = true;

    if (continueButton) {
        continueButton.innerText = "Restart from Wave 1";
        continueButton.style.display = "inline-block";
        continueButton.onclick = resetToWaveOne;
    }
};

window.handleAssassinGuess = function(assassinItem) {
    if (gameOver || isWaveClear) return;
    if (tryUseExtraLife(`Assassinated by ${assassinItem.name}.`)) return;

    const messageElement = document.getElementById("gameMessage");
    if (messageElement) {
        messageElement.innerText = `Assassinated by ${assassinItem.name}, Target was ${getTargetNamesList()}, you reached wave ${currentWave} before failing.`;
        messageElement.style.color = "#ff3333";
    }

    gameOver = true;
    if (inputElement) inputElement.disabled = true;
    if (submitButton) submitButton.disabled = true;

    if (continueButton) {
        continueButton.innerText = "Restart from Wave 1";
        continueButton.style.display = "inline-block";
        continueButton.onclick = resetToWaveOne;
    }
};

window.handleMutilatedDeathsFail = function(buffed, guessedName) {
    if (gameOver || isWaveClear) return;

    const messageElement = document.getElementById("gameMessage");
    if (messageElement) {
        messageElement.innerText = buffed
            ? "No."
            : `Mutilated by ${guessedName}. Target was: ${getTargetNamesList()}. You reached Wave ${currentWave} before failing.`;
        messageElement.style.color = "#ff3333";
    }

    gameOver = true;
    if (inputElement) inputElement.disabled = true;
    if (submitButton) submitButton.disabled = true;

    if (continueButton) {
        continueButton.innerText = "Restart from Wave 1";
        continueButton.style.display = "inline-block";
        continueButton.onclick = resetToWaveOne;
    }
};

function showFilteredOptions() {
    if (gameOver || isWaveClear || !dropdownMenu || !inputElement) return;

    const value = inputElement.value.toLowerCase();
    dropdownMenu.innerHTML = "";

    const filtered = itemKeys.filter(key => key.includes(value));

    if (filtered.length === 0) {
        dropdownMenu.style.display = "none";
        return;
    }

    filtered.forEach(key => {
        const item = document.createElement("div");
        item.className = "dropdown-item";

        const img = document.createElement("img");
        img.src = `images/items/${key.replace(/\s+/g, '-')}.png`;
        img.alt = itemDatabase[key].name;
        img.className = "dropdown-item-icon";

        img.onerror = function() { this.style.display = "none"; };

        const textSpan = document.createElement("span");
        textSpan.innerText = itemDatabase[key].name;

        item.appendChild(img);
        item.appendChild(textSpan);

        item.addEventListener("click", () => {
            inputElement.value = itemDatabase[key].name;
            dropdownMenu.style.display = "none";
            submitGuess();
        });
        dropdownMenu.appendChild(item);
    });

    dropdownMenu.style.display = "block";
}

function submitGuess() {
    if (gameOver || isWaveClear || !inputElement) return;

    let guessName = inputElement.value.trim().toLowerCase();
    const messageElement = document.getElementById("gameMessage");

    if (!itemDatabase[guessName]) {
        if (messageElement) {
            messageElement.innerText = "Unknown item! Choose an option from the menu list.";
            messageElement.style.color = "#ff3333";
        }
        return;
    }

    guessName = applyAimAssist(guessName);

    if (messageElement) messageElement.innerText = "";
    guessCount++;
    guessedItemsList.push(guessName);

    if (!waveGuessHistory[currentWave]) waveGuessHistory[currentWave] = [];
    waveGuessHistory[currentWave].push(guessName);

    const guessedItem = itemDatabase[guessName];
    const tbody = document.getElementById("guessRows");
    const row = document.createElement("tr");

    function createNameCell(guessedItem, targetItem) {
        const td = document.createElement("td");
        td.className = "name-cell cell-name";

        const wrapper = document.createElement("div");
        wrapper.className = "name-cell-wrapper";

        const img = document.createElement("img");
        const key = guessedItem.name.toLowerCase();
        img.src = `images/items/${key.replace(/\s+/g, '-')}.png`;
        img.alt = guessedItem.name;
        img.className = "table-item-icon";

        img.onerror = function() { this.style.display = "none"; };

        const textSpan = document.createElement("span");
        textSpan.innerText = guessedItem.name;

        wrapper.appendChild(img);
        wrapper.appendChild(textSpan);
        td.appendChild(wrapper);

        if (guessedItem.name === targetItem.name) {
            td.classList.add("cell-correct");
        } else {
            td.classList.add("cell-incorrect");
        }
        return td;
    }

    function createCell(guessedValue, targetValue, displayString, extraClass = "") {
        const td = document.createElement("td");
        if (extraClass) td.classList.add(extraClass);
        td.innerText = displayString;

        if (guessedValue === targetValue) {
            td.classList.add("cell-correct");
        } else {
            td.classList.add("cell-incorrect");
        }
        return td;
    }

    function createNumericCell(guessedValue, targetValue, threshold, extraClass = "") {
        const td = document.createElement("td");
        if (extraClass) td.classList.add(extraClass);
        td.dataset.value = guessedValue;

        if (guessedValue === targetValue) {
            td.dataset.arrow = "";
            td.classList.add("cell-correct");
        } else {
            td.dataset.arrow = guessedValue < targetValue ? "↑" : "↓";
            const difference = Math.abs(guessedValue - targetValue);
            td.classList.add(difference <= threshold ? "cell-partial" : "cell-incorrect");
        }
        window.redrawCategoryCell(td);
        return td;
    }

    function createBooleanCell(guessedValue, targetValue, extraClass = "") {
        const td = document.createElement("td");
        if (extraClass) td.classList.add(extraClass);
        td.innerText = guessedValue ? "Yes" : "No";
        td.classList.add(guessedValue === targetValue ? "cell-correct" : "cell-incorrect");
        return td;
    }

    function nameMatchStatus(guessedItem, target) {
        return guessedItem.name === target.name ? "correct" : "incorrect";
    }

    function createSplitNameCell(guessedItem, targets) {
        const td = document.createElement("td");
        td.className = "name-cell cell-name";

        const wrapper = document.createElement("div");
        wrapper.className = "name-cell-wrapper";

        const img = document.createElement("img");
        const key = guessedItem.name.toLowerCase();
        img.src = `images/items/${key.replace(/\s+/g, '-')}.png`;
        img.alt = guessedItem.name;
        img.className = "table-item-icon";
        img.onerror = function() { this.style.display = "none"; };

        const textSpan = document.createElement("span");
        textSpan.innerText = guessedItem.name;

        wrapper.appendChild(img);
        wrapper.appendChild(textSpan);
        td.appendChild(wrapper);

        window.applySplitBackground(td, targets.map(target => nameMatchStatus(guessedItem, target)));
        return td;
    }

    function createSplitTypeCell(guessedType, targetTypes, extraClass = "") {
        const td = document.createElement("td");
        if (extraClass) td.classList.add(extraClass);
        td.innerText = guessedType;

        window.applySplitBackground(td, targetTypes.map(type => guessedType === type ? "correct" : "incorrect"));
        return td;
    }

    function numericArrowAndStatus(guessedValue, targetValue, threshold) {
        if (guessedValue === targetValue) return { arrow: "", status: "correct" };
        const arrow = guessedValue < targetValue ? "↑" : "↓";
        const status = Math.abs(guessedValue - targetValue) <= threshold ? "partial" : "incorrect";
        return { arrow, status };
    }

    function createSplitNumericCell(guessedValue, targetValues, threshold, extraClass = "") {
        const td = document.createElement("td");
        if (extraClass) td.classList.add(extraClass);
        td.dataset.value = guessedValue;

        const results = targetValues.map(targetValue => numericArrowAndStatus(guessedValue, targetValue, threshold));
        results.forEach((result, i) => { td.dataset[`arrow${i}`] = result.arrow; });

        window.applySplitBackground(td, results.map(result => result.status));
        window.redrawCategoryCell(td);
        return td;
    }

    function createSplitBooleanCell(guessedValue, targetValues, extraClass = "") {
        const td = document.createElement("td");
        if (extraClass) td.classList.add(extraClass);
        td.innerText = guessedValue ? "Yes" : "No";

        window.applySplitBackground(td, targetValues.map(targetValue => guessedValue === targetValue ? "correct" : "incorrect"));
        return td;
    }

    const secretItem3ForRow = typeof window.getThirdSecretItem === "function" ? window.getThirdSecretItem() : null;
    const doubleTroubleActive = typeof Modifiers !== "undefined" &&
        Modifiers.active.has("doubleTrouble") &&
        secretItem2;
    const doubleTroubleTargets = doubleTroubleActive
        ? [secretItem, secretItem2, ...(secretItem3ForRow ? [secretItem3ForRow] : [])]
        : null;

    if (doubleTroubleActive) {
        row.appendChild(createSplitNameCell(guessedItem, doubleTroubleTargets));
        row.appendChild(createSplitTypeCell(guessedItem.type, doubleTroubleTargets.map(t => t.type), "cell-type"));
        row.appendChild(createSplitNumericCell(guessedItem.damage, doubleTroubleTargets.map(t => t.damage), 15, "cell-damage"));
        row.appendChild(createSplitNumericCell(guessedItem.firerate, doubleTroubleTargets.map(t => t.firerate), 50, "cell-firerate"));
        row.appendChild(createSplitBooleanCell(guessedItem.hasSpecialAbility, doubleTroubleTargets.map(t => t.hasSpecialAbility), "cell-special"));
    } else {
        row.appendChild(createNameCell(guessedItem, secretItem));
        row.appendChild(createCell(guessedItem.type, secretItem.type, guessedItem.type, "cell-type"));
        row.appendChild(createNumericCell(guessedItem.damage, secretItem.damage, 15, "cell-damage"));
        row.appendChild(createNumericCell(guessedItem.firerate, secretItem.firerate, 50, "cell-firerate"));
        row.appendChild(createBooleanCell(guessedItem.hasSpecialAbility, secretItem.hasSpecialAbility, "cell-special"));
    }

    if (typeof Modifiers !== "undefined") {
        Modifiers.onGuess(row, guessedItem, secretItem);
    }

    if (tbody) tbody.insertBefore(row, tbody.firstChild);

    if (typeof Modifiers !== "undefined") {
        Modifiers.afterGuess();
    }

    inputElement.value = "";
    if (dropdownMenu) dropdownMenu.style.display = "none";

    if (doubleTroubleActive) {
        if (gameOver || isWaveClear) return;

        if (!Array.isArray(Modifiers.doubleTroubleFound) || Modifiers.doubleTroubleFound.length !== doubleTroubleTargets.length) {
            Modifiers.doubleTroubleFound = new Array(doubleTroubleTargets.length).fill(false);
        }
        doubleTroubleTargets.forEach((target, i) => {
            if (guessedItem.name === target.name) Modifiers.doubleTroubleFound[i] = true;
        });

        const targetNames = doubleTroubleTargets.map(t => t.name);
        const namesList = targetNames.length === 2
            ? `${targetNames[0]} and ${targetNames[1]}`
            : `${targetNames.slice(0, -1).join(", ")}, and ${targetNames[targetNames.length - 1]}`;

        if (Modifiers.doubleTroubleFound.every(Boolean)) {
            Modifiers.clearTimer();
            if (messageElement) {
                const assassin = typeof window.getCurrentAssassin === "function" ? window.getCurrentAssassin() : null;
                messageElement.innerText = `SUCCESS! All targets found: ${namesList}! Wave ${currentWave} Complete!`;
                if (assassin) {
                    messageElement.innerText += ` The assassin was ${assassin.name}.`;
                }
                messageElement.style.color = "#00ffcc";
            }
            isWaveClear = true;
            inputElement.disabled = true;
            if (submitButton) submitButton.disabled = true;

            if (continueButton) {
                continueButton.innerText = "Continue";
                continueButton.onclick = advanceNextWave;
                continueButton.style.display = "inline-block";
            }
            return;
        }

        if (guessCount >= MAX_GUESSES && !gameOver) {
            if (tryUseExtraLife("Out of guesses.")) return;

            if (messageElement) {
                const assassin = typeof window.getCurrentAssassin === "function" ? window.getCurrentAssassin() : null;
                const foundNames = targetNames.filter((name, i) => Modifiers.doubleTroubleFound[i]);
                const foundNote = foundNames.length > 0
                    ? `You found ${foundNames.join(", ")} but not the rest.`
                    : `None of the targets were found.`;
                messageElement.innerText = `Out of guesses. The targets were: ${namesList}. ${foundNote} You reached Wave ${currentWave} before failing.`;
                if (assassin) {
                    messageElement.innerText += ` The assassin was ${assassin.name}.`;
                }
                messageElement.style.color = "#ff3333";
            }
            gameOver = true;
            inputElement.disabled = true;
            if (submitButton) submitButton.disabled = true;

            if (continueButton) {
                continueButton.innerText = "Restart from Wave 1";
                continueButton.style.display = "inline-block";
                continueButton.onclick = resetToWaveOne;
            }
            return;
        }

        const foundSoFar = targetNames.filter((name, i) => Modifiers.doubleTroubleFound[i]);
        if (messageElement && foundSoFar.length > 0) {
            messageElement.innerText = `${foundSoFar.join(", ")} confirmed! Keep guessing for the rest.`;
            messageElement.style.color = "#e6b800";
        }
        return;
    }

    if (guessedItem.name === secretItem.name) {
        if (messageElement) {
            const assassin = typeof window.getCurrentAssassin === "function" ? window.getCurrentAssassin() : null;
            messageElement.innerText = `SUCCESS! The target was ${secretItem.name}! Wave ${currentWave} Complete!`;
            if (assassin) {
                messageElement.innerText += ` The assassin was ${assassin.name}.`;
            }
            messageElement.style.color = "#00ffcc";
        }
        isWaveClear = true;
        inputElement.disabled = true;
        if (submitButton) submitButton.disabled = true;

        if (continueButton) {
            continueButton.innerText = "Continue";
            continueButton.onclick = advanceNextWave;
            continueButton.style.display = "inline-block";
        }
        return;
    }

    if (guessCount >= MAX_GUESSES && !gameOver) {
        if (tryUseExtraLife("Out of guesses.")) return;

        if (messageElement) {
            const assassin = typeof window.getCurrentAssassin === "function" ? window.getCurrentAssassin() : null;
            messageElement.innerText = `Out of guesses. Target was: ${secretItem.name}. You reached Wave ${currentWave} before failing.`;
            if (assassin) {
                messageElement.innerText += ` The assassin was ${assassin.name}.`;
            }
            messageElement.style.color = "#ff3333";
        }
        gameOver = true;
        inputElement.disabled = true;
        if (submitButton) submitButton.disabled = true;

        if (continueButton) {
            continueButton.innerText = "Restart from Wave 1";
            continueButton.style.display = "inline-block";
            continueButton.onclick = resetToWaveOne;
        }
    }
}
