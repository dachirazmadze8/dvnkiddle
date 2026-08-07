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
    "intraplanar device": { name: "Intraplanar Device", type: "Weapon", damage: 80, firerate: 500, hasSpecialAbility: false },
    "parabolic hydra": { name: "Parabolic Hydra", type: "Weapon", damage: 100, firerate: 60, hasSpecialAbility: true },
    "medical bow": { name: "Medical Bow", type: "Weapon", damage: 80, firerate: 150, hasSpecialAbility: false },
    "recurve": { name: "Recurve", type: "Weapon", damage: 120, firerate: 150, hasSpecialAbility: false },
    "vitabow": { name: "Vitabow", type: "Weapon", damage: 80, firerate: 150, hasSpecialAbility: false },
    "pdc kit": { name: "PDC kit", type: "Weapon", damage: 5, firerate: 375, hasSpecialAbility: false },
    "governor kit": { name: "Governor kit", type: "Weapon", damage: 10, firerate: 750, hasSpecialAbility: false },
    "mads kit": { name: "MADS kit", type: "Weapon", damage: 4, firerate: 500, hasSpecialAbility: false },
    "shovel": { name: "Shovel", type: "Melee", damage: 101, firerate: 0.7, hasSpecialAbility: false },
    "overcharger": { name: "Overcharger", type: "Melee", damage: 101, firerate: 0.7, hasSpecialAbility: true },
    "rallying cry": { name: "Rallying Cry", type: "Melee", damage: 101, firerate: 0.7, hasSpecialAbility: true },
    "machete": { name: "Machete", type: "Melee", damage: 58, firerate: 0.5, hasSpecialAbility: true },
    "handaxes": { name: "Handaxes", type: "Melee", damage: 101, firerate: 0.5, hasSpecialAbility: true },
    "torqueblade": { name: "Torqueblade", type: "Melee", damage: 58, firerate: 0.5, hasSpecialAbility: true },
    "ammo box": { name: "Ammo box", type: "Utility", damage: 0, firerate: 6, hasSpecialAbility: false },
    "combat toolkit": { name: "Combat Toolkit", type: "Utility", damage: 0, firerate: 3, hasSpecialAbility: false },
    "proxy": { name: "PROXY", type: "Utility", damage: 0, firerate: 4.2, hasSpecialAbility: false },
    "defibrillator": { name: "Defibrillator", type: "Utility", damage: 0, firerate: 5, hasSpecialAbility: false },
    "pacemaker": { name: "Pacemaker", type: "Utility", damage: 0, firerate: 2, hasSpecialAbility: false },
    "resuscitator": { name: "Resuscitator", type: "Utility", damage: 0, firerate: 90, hasSpecialAbility: false },
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
    "tripwire kit": { name: "Tripwire Kit", type: "Utility", damage: 0, firerate: 0, hasSpecialAbility: false },
};


window.itemDatabase = itemDatabase;
window.getSecretItem = function() {
    return secretItem;
};

function isWeaponItem(item) {
    return item.type !== "Utility";
}

const itemKeys = Object.keys(itemDatabase);
let secretItem;
let secretItem2 = null;
let secretItem3 = null;

window.getSecondSecretItem = function() {
    return secretItem2;
};
window.getThirdSecretItem = function() {
    return secretItem3;
};

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
    if (typeof Modifiers !== "undefined") {
        Modifiers.resetAll();
    }

    secretItem = itemDatabase[itemKeys[Math.floor(Math.random() * itemKeys.length)]];
    // console.log(`Wave ${currentWave} answer: ${getTargetNamesList()}`);
    gameOver = false;
    isWaveClear = false;
    guessCount = 0;
    MAX_GUESSES = 6;
    guessedItemsList = [];

    if (waveIndicator) {
        waveIndicator.classList.remove("wave-hell", "wave-ultima");

        if (currentWave === 11) {
            waveIndicator.innerText = "Wave: Ultima";
            waveIndicator.classList.add("wave-ultima");
        } else {
            waveIndicator.innerText = `Wave: ${currentWave}`;
            waveIndicator.classList.add("wave-hell");
        }
    }

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
        Modifiers.evaluateWave(currentWave);
    }
}

function advanceNextWave() {
    currentWave++;
    initializeGameSession();
}

function resetToWaveOne() {
    currentWave = 1;
    waveGuessHistory = {};
    initializeGameSession();
}

function makeRandomGuess() {
    if (gameOver || isWaveClear) return;

    const assassin = typeof window.getCurrentAssassin === "function" ? window.getCurrentAssassin() : null;
    const vitacharged = typeof window.getVitachargedItems === "function" ? window.getVitachargedItems() : null;
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
    const vitacharged = typeof window.getVitachargedItems === "function" ? window.getVitachargedItems() : null;
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

window.setMaxGuesses = function(n) {
    MAX_GUESSES = n;
};

window.handleTimerTimeout = function() {
    if (gameOver || isWaveClear) return;

    const messageElement = document.getElementById("gameMessage");
    if (messageElement) {
        messageElement.innerText = `DETECTED BY SECURITY PROTOCOL! Out of time. Target was: ${secretItem.name}.`;
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

    const messageElement = document.getElementById("gameMessage");
    const displayWave = currentWave === 11 ? "Ultima" : currentWave;
    if (messageElement) {
        messageElement.innerText = `Assassinated by ${assassinItem.name}, Target was ${secretItem.name}, you reached wave ${displayWave} before failing.`;
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

    const guessName = inputElement.value.trim().toLowerCase();
    const messageElement = document.getElementById("gameMessage");

    if (!itemDatabase[guessName]) {
        if (messageElement) {
            messageElement.innerText = "Unknown item! Choose an option from the menu list.";
            messageElement.style.color = "#ff3333";
        }
        return;
    }

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

        if (guessedValue === targetValue) {
            td.innerText = guessedValue;
            td.classList.add("cell-correct");
        } else {
            const arrow = guessedValue < targetValue ? " ↑" : " ↓";
            td.innerText = guessedValue + arrow;

            const difference = Math.abs(guessedValue - targetValue);
            if (difference <= threshold) {
                td.classList.add("cell-partial");
            } else {
                td.classList.add("cell-incorrect");
            }
        }
        return td;
    }

    function createBooleanCell(guessedValue, targetValue, extraClass = "") {
        const td = document.createElement("td");
        if (extraClass) td.classList.add(extraClass);
        td.innerText = guessedValue ? "Yes" : "No";
        td.classList.add(guessedValue === targetValue ? "cell-correct" : "cell-incorrect");
        return td;
    }

    row.appendChild(createNameCell(guessedItem, secretItem));
    row.appendChild(createCell(guessedItem.type, secretItem.type, guessedItem.type, "cell-type"));
    row.appendChild(createNumericCell(guessedItem.damage, secretItem.damage, 15, "cell-damage"));
    row.appendChild(createNumericCell(guessedItem.firerate, secretItem.firerate, 50, "cell-firerate"));
    row.appendChild(createBooleanCell(guessedItem.hasSpecialAbility, secretItem.hasSpecialAbility, "cell-special"));

    if (typeof Modifiers !== "undefined") {
        Modifiers.onGuess(row, guessedItem, secretItem);
    }

    if (tbody) tbody.insertBefore(row, tbody.firstChild);
    inputElement.value = "";
    if (dropdownMenu) dropdownMenu.style.display = "none";

    if (typeof Modifiers !== "undefined") {
        Modifiers.afterGuess();
    }

    if (guessedItem.name === secretItem.name) {
        isWaveClear = true;
        inputElement.disabled = true;
        if (submitButton) submitButton.disabled = true;

        const assassin = typeof window.getCurrentAssassin === "function" ? window.getCurrentAssassin() : null;

        if (currentWave === 11) {
            if (messageElement) {
                messageElement.innerText = `GG!`;
                messageElement.style.color = "#00ffcc";
            }
            if (continueButton) {
                continueButton.innerText = "Play Again";
                continueButton.onclick = resetToWaveOne;
                continueButton.style.display = "inline-block";
            }
        } else {
            if (messageElement) {
                messageElement.innerText = `SUCCESS! The item was ${secretItem.name}! Wave ${currentWave} Complete!`;
                if (assassin) {
                    messageElement.innerText += ` The assassin was ${assassin.name}.`;
                }
                messageElement.style.color = "#00ffcc";
            }
            if (continueButton) {
                continueButton.innerText = "Continue";
                continueButton.onclick = advanceNextWave;
                continueButton.style.display = "inline-block";
            }
        }
        return;
    }

    if (guessCount >= MAX_GUESSES) {
        const displayWave = currentWave === 11 ? "Ultima" : currentWave;
        if (messageElement) {
            const assassin = typeof window.getCurrentAssassin === "function" ? window.getCurrentAssassin() : null;
            messageElement.innerText = `Out of guesses. Target was: ${secretItem.name}. You reached Wave ${displayWave} before failing.`;
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
