const enemyDatabase = {
    "infantry": { name: "Infantry", type: "Fodder", health: 100, waves: 34, encounter: "Wave 1 siege" },
    "cloaker": { name: "Cloaker", type: "Fodder", health: 100, waves: 29, encounter: "Wave 1 siege" },
    "shielder": { name: "Shielder", type: "Fodder", health: 110, waves: 30, encounter: "Wave 2 siege" },
    "saboteur": { name: "Saboteur", type: "Fodder", health: 100, waves: 32, encounter: "Wave 2 siege" },
    "landmine": { name: "Landmine", type: "Fodder", health: 20, waves: 32, encounter: "Wave 2 siege" },
    "administrator": { name: "Administrator", type: "Fodder", health: 100, waves: 1, encounter: "Wave 2 epilogue" },
    "grenadier": { name: "Grenadier", type: "Advanced", health: 180, waves: 16, encounter: "Wave 4 siege" },
    "jetpacker": { name: "Jetpacker", type: "Advanced", health: 100, waves: 14, encounter: "Wave 5 siege" },
    "gunner": { name: "Gunner", type: "Advanced", health: 350, waves: 22, encounter: "Wave 5 siege" },
    "sniper": { name: "Sniper", type: "Advanced", health: 100, waves: 23, encounter: "Wave 5 siege" },
    "tranquilizer": { name: "Tranquilizer", type: "Advanced", health: 100, waves: 8, encounter: "Wave 2 epilogue" },
    "medic": { name: "Medic", type: "Advanced", health: 200, waves: 10, encounter: "Wave 2 epilogue" },
    "engineer": { name: "Engineer", type: "Advanced", health: 150, waves: 14, encounter: "Wave 4 siege" },
    "level 1 building": { name: "Level 1 Building", type: "Mech", health: 300, waves: 14, encounter: "Wave 4 siege" },
    "level 2 building": { name: "Level 2 Building", type: "Mech", health: 450, waves: 14, encounter: "Wave 4 siege" },
    "level 3 building": { name: "Level 3 Building", type: "Mech", health: 600, waves: 14, encounter: "Wave 4 siege" },
    "ranger": { name: "Ranger", type: "Mech", health: 150, waves: 16, encounter: "Wave 3 siege" },
    "apu": { name: "APU", type: "Mech", health: 900, waves: 22, encounter: "Wave 4 siege" },
    "apu operator": { name: "APU Operator", type: "Advanced", health: 375, waves: 22, encounter: "Wave 4 siege" },
    "apu-r": { name: "APU-R", type: "Elite Mech", health: 900, waves: 14, encounter: "Wave 5 siege" },
    "apu-r operator": { name: "APU-R Operator", type: "Advanced", health: 450, waves: 14, encounter: "Wave 5 siege" },
    "tank": { name: "Tank", type: "Mech", health: 3500, waves: 14, encounter: "Wave 7 siege" },
    "fuel tank (tank)": { name: "Fuel Tank (Tank)", type: "Mech", health: 350, waves: 14, encounter: "Wave 7 siege" },
    "platform": { name: "Platform", type: "Mech", health: 7000, waves: 14, encounter: "Wave 7 siege" },
    "platform-a": { name: "Platform-A", type: "Elite Mech", health: 7500, waves: 3, encounter: "Wave 8 siege" },
    "emplacement": { name: "Emplacement", type: "Mech", health: 300, waves: 14, encounter: "Wave 7 siege" },
    "helicopter sentry": { name: "Helicopter Sentry", type: "Elite Mech", health: 1500, waves: 3, encounter: "Wave 8 siege" },
    "administrant helicopter": { name: "Administrant Helicopter", type: "Elite Mech", health: 5000, waves: 3, encounter: "Wave 8 siege" },
    "combatant": { name: "Combatant", type: "Elite Fodder", health: 100, waves: 21, encounter: "Wave 1 siege" },
    "informant": { name: "Informant", type: "Elite Fodder", health: 150, waves: 16, encounter: "Wave 5 siege" },
    "confidant": { name: "Confidant", type: "Elite Fodder", health: 200, waves: 7, encounter: "Wave 8 siege" },
    "agitator": { name: "Agitator", type: "Elite Fodder", health: 300, waves: 16, encounter: "Wave 5 siege" },
    "fuel tank (agitator)": { name: "Fuel Tank (Agitator)", type: "Elite Fodder", health: 200, waves: 16, encounter: "Wave 5 siege" },
    "agreement": { name: "Agreement", type: "Elite Fodder", health: 150, waves: 12, encounter: "Wave 4 siege" },
    "jagant": { name: "Jagant", type: "Elite Fodder", health: 150, waves: 5, encounter: "Wave 8 siege" },
    "jagant bomb": { name: "Jagant Bomb", type: "Elite Fodder", health: 2000, waves: 5, encounter: "Wave 8 siege" },
    "bombardier": { name: "Bombardier", type: "Elite Fodder", health: 350, waves: 12, encounter: "Wave 5 siege" },
    "operant": { name: "Operant", type: "Elite Fodder", health: 300, waves: 2, encounter: "Wave 10 hell" },
    "sergeant": { name: "Sergeant", type: "Elite Advanced", health: 500, waves: 6, encounter: "Wave 7 siege" },
    "adjutant": { name: "Adjutant", type: "Elite Advanced", health: 350, waves: 3, encounter: "Wave 8 siege" },
    "observant": { name: "Observant", type: "Elite Fodder", health: 100, waves: 3, encounter: "Wave 8 siege" },
    "administrant": { name: "Administrant", type: "Elite Fodder", health: 250, waves: 3, encounter: "Wave 8 siege" },
    "fusilier": { name: "Fusilier", type: "Boss", health: 400, waves: 14, encounter: "Wave 3 siege" },
    "daedalus": { name: "Daedalus", type: "Boss", health: 500, waves: 14, encounter: "Wave 3 siege" },
    "tempest": { name: "Tempest", type: "Boss", health: 600, waves: 14, encounter: "Wave 3 siege" },
    "lelantos": { name: "Lelantos", type: "Boss", health: 380, waves: 5, encounter: "Wave 3 siege" },
    "gaia": { name: "Gaia", type: "Boss", health: 775, waves: 12, encounter: "Wave 6 siege" },
    "escort shielder": { name: "Escort Shielder", type: "Elite Fodder", health: 250, waves: 12, encounter: "Wave 6 siege" },
    "shield": { name: "Shield", type: "Elite Fodder", health: 250, waves: 12, encounter: "Wave 6 siege" },
    "escort gunner": { name: "Escort Gunner", type: "Elite Advanced", health: 500, waves: 12, encounter: "Wave 6 siege" },
    "prometheus": { name: "Prometheus", type: "Boss", health: 750, waves: 12, encounter: "Wave 6 siege" },
    "fuel tank (prometheus)": { name: "Fuel Tank (Prometheus)", type: "Boss", health: 200, waves: 12, encounter: "Wave 6 siege" },
    "hermes": { name: "Hermes", type: "Boss", health: 525, waves: 12, encounter: "Wave 6 siege" },
    "hermes pods": { name: "Hermes Pods", type: "Boss", health: 60, waves: 12, encounter: "Wave 6 siege" },
    "sparta": { name: "Sparta", type: "Boss", health: 440, waves: 9, encounter: "Wave 9 siege" },
    "trident": { name: "Trident", type: "Boss", health: 675, waves: 9, encounter: "Wave 9 siege" },
    "achilles": { name: "Achilles", type: "Boss", health: 280, waves: 9, encounter: "Wave 9 siege" },
    "drone": { name: "Drone", type: "Boss", health: 75, waves: 9, encounter: "Wave 9 siege" },
    "zeus": { name: "Zeus", type: "Boss", health: 545, waves: 2, encounter: "Wave 9 siege" },
    "dreadnought": { name: "Dreadnought", type: "Boss", health: 16000, waves: 2, encounter: "Wave 10 siege" },
    "dreadnought armor": { name: "Dreadnought Armor", type: "Boss", health: 2000, waves: 2, encounter: "Wave 10 siege" },
    "chassis": { name: "Chassis", type: "Boss", health: 1300, waves: 1, encounter: "Wave 10 mastermind" },
    "mastermind": { name: "Mastermind", type: "Boss", health: 125, waves: 1, encounter: "Wave 10 mastermind" },
    "ares": { name: "Ares", type: "Boss", health: 1000, waves: 2, encounter: "Wave 3 epilogue" },
    "london prime": { name: "London Prime", type: "Boss", health: 3000, waves: 0, encounter: "Sandbox" },
    "manglenether345": { name: "MangleNether345", type: "Boss", health: 250, waves: 0, encounter: "Sandbox" },
    "a-10": { name: "A-10", type: "Boss", health: 800, waves: 0, encounter: "Sandbox" },
    "the wicked": { name: "The Wicked", type: "Boss", health: 1550, waves: 0, encounter: "Sandbox" },
    "sparchilles": { name: "Sparchilles", type: "Boss", health: 440, waves: 0, encounter: "Sandbox" },
    "mega joe": { name: "Mega Joe", type: "Boss", health: 2000, waves: 0, encounter: "Sandbox" },
    "baby": { name: "Baby", type: "Elite Fodder", health: 200, waves: 0, encounter: "Sandbox" },
    "jetnuker": { name: "JetNuker", type: "Elite Advanced", health: 100, waves: 0, encounter: "Sandbox" },
    "mart": { name: "Mart", type: "Boss", health: 3500, waves: 15, encounter: "Wave 4 siege" },
    "squad infantry": { name: "Squad Infantry", type: "Elite Fodder", health: 200, waves: 0, encounter: "Sandbox" },
    "old apu": { name: "Old APU", type: "Mech", health: 2000, waves: 0, encounter: "Sandbox" },
    "operator": { name: "Operator", type: "Advanced", health: 200, waves: 0, encounter: "Sandbox" },
    "apc": { name: "APC", type: "Mech", health: 2500, waves: 0, encounter: "Sandbox" },
};

const encounterOrder = [
    "Wave 1 siege", "Wave 2 siege", "Wave 3 siege", "Wave 4 siege", "Wave 5 siege",
    "Wave 6 siege", "Wave 7 siege", "Wave 8 siege", "Wave 9 siege", "Wave 10 siege",
    "Wave 10 mastermind", "Wave 1 epilogue", "Wave 2 epilogue", "Wave 3 epilogue", "Wave 10 hell", "sandbox"
];

window.encounterOrder = encounterOrder;

window.enemyDatabase = enemyDatabase;
window.getSecretEnemy = function() {
    return secretEnemy;
};

const enemyKeys = Object.keys(enemyDatabase);
let secretEnemy;
let gameOver = false;
let guessCount = 0;
let MAX_GUESSES = 6;

let guessedEnemiesList = [];

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
    inputElement = document.getElementById("enemyInput");
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

    secretEnemy = enemyDatabase[enemyKeys[Math.floor(Math.random() * enemyKeys.length)]];
    console.log(`Wave ${currentWave} answer: ${secretEnemy.name}`);
    gameOver = false;
    isWaveClear = false;
    guessCount = 0;
    MAX_GUESSES = 6;
    guessedEnemiesList = [];

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
        inputElement.placeholder = "Type or select an enemy...";
    }

    const messageElement = document.getElementById("gameMessage");
    if (messageElement) messageElement.innerText = "";

    const tbody = document.getElementById("guessRows");
    if (tbody) tbody.innerHTML = "";

    if (typeof Modifiers !== "undefined") {
        Modifiers.evaluateWave(currentWave, "hell");
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
    const vitacharged = typeof window.getVitachargedEnemies === "function" ? window.getVitachargedEnemies() : null;
    const availableKeys = enemyKeys.filter(key =>
        !guessedEnemiesList.includes(key) &&
        (!assassin || enemyDatabase[key].name !== assassin.name) &&
        (!vitacharged || !vitacharged.has(key))
    );
    if (availableKeys.length === 0) return;

    const randomKey = availableKeys[Math.floor(Math.random() * availableKeys.length)];
    inputElement.value = enemyDatabase[randomKey].name;
    submitGuess();
}

window.makeRandomGuess = makeRandomGuess;

function makeRandomWrongGuess() {
    if (gameOver || isWaveClear) return;

    const assassin = typeof window.getCurrentAssassin === "function" ? window.getCurrentAssassin() : null;
    const vitacharged = typeof window.getVitachargedEnemies === "function" ? window.getVitachargedEnemies() : null;
    const availableKeys = enemyKeys.filter(key =>
        !guessedEnemiesList.includes(key) &&
        enemyDatabase[key].name !== secretEnemy.name &&
        (!assassin || enemyDatabase[key].name !== assassin.name) &&
        (!vitacharged || !vitacharged.has(key))
    );
    if (availableKeys.length === 0) return;

    const randomKey = availableKeys[Math.floor(Math.random() * availableKeys.length)];
    inputElement.value = enemyDatabase[randomKey].name;
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
        messageElement.innerText = `DETECTED BY SECURITY PROTOCOL! Out of time. Target was: ${secretEnemy.name}.`;
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

window.handleAssassinGuess = function(assassinEnemy) {
    if (gameOver || isWaveClear) return;

    const messageElement = document.getElementById("gameMessage");
    const displayWave = currentWave === 11 ? "Ultima" : currentWave;
    if (messageElement) {
        messageElement.innerText = `Assassinated by ${assassinEnemy.name}, Target was ${secretEnemy.name}, you reached wave ${displayWave} before failing.`;
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

    const filtered = enemyKeys.filter(key => key.includes(value));

    if (filtered.length === 0) {
        dropdownMenu.style.display = "none";
        return;
    }

    filtered.forEach(key => {
        const item = document.createElement("div");
        item.className = "dropdown-item";

        const img = document.createElement("img");
        img.src = `images/enemies/${key.replace(/\s+/g, '-')}.png`;
        img.alt = enemyDatabase[key].name;
        img.className = "dropdown-enemy-icon";

        img.onerror = function() { this.style.display = "none"; };

        const textSpan = document.createElement("span");
        textSpan.innerText = enemyDatabase[key].name;

        item.appendChild(img);
        item.appendChild(textSpan);

        item.addEventListener("click", () => {
            inputElement.value = enemyDatabase[key].name;
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

    if (!enemyDatabase[guessName]) {
        if (messageElement) {
            messageElement.innerText = "Unknown enemy! Choose an option from the menu list.";
            messageElement.style.color = "#ff3333";
        }
        return;
    }

    if (messageElement) messageElement.innerText = "";
    guessCount++;
    guessedEnemiesList.push(guessName);

    if (!waveGuessHistory[currentWave]) waveGuessHistory[currentWave] = [];
    waveGuessHistory[currentWave].push(guessName);

    const guessedEnemy = enemyDatabase[guessName];
    const tbody = document.getElementById("guessRows");
    const row = document.createElement("tr");

    function createNameCell(guessedEnemy, targetEnemy) {
        const td = document.createElement("td");
        td.className = "name-cell cell-name";

        const wrapper = document.createElement("div");
        wrapper.className = "name-cell-wrapper";

        const img = document.createElement("img");
        const key = guessedEnemy.name.toLowerCase();
        img.src = `images/enemies/${key.replace(/\s+/g, '-')}.png`;
        img.alt = guessedEnemy.name;
        img.className = "table-enemy-icon";

        img.onerror = function() { this.style.display = "none"; };

        const textSpan = document.createElement("span");
        textSpan.innerText = guessedEnemy.name;

        wrapper.appendChild(img);
        wrapper.appendChild(textSpan);
        td.appendChild(wrapper);

        if (guessedEnemy.name === targetEnemy.name) {
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

    function createEncounterCell(guessedEncounter, targetEncounter, threshold, extraClass = "") {
        const td = document.createElement("td");
        if (extraClass) td.classList.add(extraClass);

        const lowerCaseOrder = encounterOrder.map(item => item.toLowerCase());
        const guessedIndex = lowerCaseOrder.indexOf(guessedEncounter.toLowerCase());
        const targetIndex = lowerCaseOrder.indexOf(targetEncounter.toLowerCase());

        if (guessedIndex === targetIndex) {
            td.innerText = guessedEncounter;
            td.classList.add("cell-correct");
        } else {
            const arrow = guessedIndex < targetIndex ? " →" : " ←";
            td.innerText = guessedEncounter + arrow;

            const difference = Math.abs(guessedIndex - targetIndex);
            if (guessedIndex !== -1 && targetIndex !== -1 && difference <= threshold) {
                td.classList.add("cell-partial");
            } else {
                td.classList.add("cell-incorrect");
            }
        }
        return td;
    }

    row.appendChild(createNameCell(guessedEnemy, secretEnemy));
    row.appendChild(createCell(guessedEnemy.type, secretEnemy.type, guessedEnemy.type, "cell-type"));
    row.appendChild(createNumericCell(guessedEnemy.health, secretEnemy.health, 50, "cell-health"));
    row.appendChild(createNumericCell(guessedEnemy.waves, secretEnemy.waves, 6, "cell-waves"));
    row.appendChild(createEncounterCell(guessedEnemy.encounter, secretEnemy.encounter, 2, "cell-encounter"));

    if (typeof Modifiers !== "undefined") {
        Modifiers.onGuess(row, guessedEnemy, secretEnemy);
    }

    if (tbody) tbody.insertBefore(row, tbody.firstChild);
    inputElement.value = "";
    if (dropdownMenu) dropdownMenu.style.display = "none";

    if (typeof Modifiers !== "undefined") {
        Modifiers.afterGuess();
    }

    if (guessedEnemy.name === secretEnemy.name) {
        isWaveClear = true;
        inputElement.disabled = true;
        if (submitButton) submitButton.disabled = true;

        const assassin = typeof window.getCurrentAssassin === "function" ? window.getCurrentAssassin() : null;

        if (currentWave === 11) {
            if (messageElement) {
                messageElement.innerText = assassin ? `GG!` : `GG!`;
                messageElement.style.color = "#00ffcc";
            }
            if (continueButton) {
                continueButton.innerText = "Play Again";
                continueButton.onclick = resetToWaveOne;
                continueButton.style.display = "inline-block";
            }
        } else {
            if (messageElement) {
                messageElement.innerText = `SUCCESS! The target was ${secretEnemy.name}! Wave ${currentWave} Complete!`;
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
            messageElement.innerText = `Out of guesses. Target was: ${secretEnemy.name}. You reached Wave ${displayWave} before failing.`;
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
