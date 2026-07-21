// Full enemy database engine
const enemyDatabase = {
    "infantry": { name: "Infantry", type: "Fodder", health: 100, waves: 35, encounter: "Wave 1 siege" },
    "cloaker": { name: "Cloaker", type: "Fodder", health: 100, waves: 30, encounter: "Wave 1 siege" },
    "shielder": { name: "Shielder", type: "Fodder", health: 110, waves: 31, encounter: "Wave 2 siege" },
    "saboteur": { name: "Saboteur", type: "Fodder", health: 100, waves: 33, encounter: "Wave 2 siege" },
    "landmine": { name: "Landmine", type: "Fodder", health: 20, waves: 33, encounter: "Wave 2 siege" },
    "administrator": { name: "Administrator", type: "Fodder", health: 100, waves: 2, encounter: "Wave 2 epilogue" },
    "grenadier": { name: "Grenadier", type: "Advanced", health: 180, waves: 17, encounter: "Wave 4 siege" },
    "jetpacker": { name: "Jetpacker", type: "Advanced", health: 100, waves: 15, encounter: "Wave 5 siege" },
    "gunner": { name: "Gunner", type: "Advanced", health: 350, waves: 23, encounter: "Wave 5 siege" },
    "sniper": { name: "Sniper", type: "Advanced", health: 100, waves: 24, encounter: "Wave 5 siege" },
    "engineer": { name: "Engineer", type: "Advanced", health: 150, waves: 15, encounter: "Wave 4 siege" },
    "tranquilizer": { name: "Tranquilizer", type: "Advanced", health: 100, waves: 9, encounter: "Wave 2 epilogue" },
    "medic": { name: "Medic", type: "Advanced", health: 200, waves: 11, encounter: "Wave 2 epilogue" },
    "level 1 sentry": { name: "Level 1 Sentry", type: "Mech", health: 300, waves: 15, encounter: "Wave 4 siege" },
    "level 2 sentry": { name: "Level 2 Sentry", type: "Mech", health: 450, waves: 15, encounter: "Wave 4 siege" },
    "level 3 sentry": { name: "Level 3 Sentry", type: "Mech", health: 600, waves: 15, encounter: "Wave 4 siege" },
    "level 1 teleporter": { name: "Level 1 teleporter", type: "Mech", health: 300, waves: 15, encounter: "Wave 4 siege" },
    "level 2 teleporter": { name: "Level 2 teleporter", type: "Mech", health: 450, waves: 15, encounter: "Wave 4 siege" },
    "level 3 teleporter": { name: "Level 3 teleporter", type: "Mech", health: 600, waves: 15, encounter: "Wave 4 siege" },
    "ranger": { name: "Ranger", type: "Mech", health: 150, waves: 17, encounter: "Wave 3 siege" },
    "apu": { name: "APU", type: "Mech", health: 900, waves: 23, encounter: "Wave 4 siege" },
    "apu operator": { name: "APU Operator", type: "Advanced", health: 375, waves: 23, encounter: "Wave 4 siege" },
    "tank": { name: "Tank", type: "Mech", health: 3500, waves: 15, encounter: "Wave 7 siege" },
    "fuel tank (tank)": { name: "Fuel Tank (Tank)", type: "Mech", health: 350, waves: 15, encounter: "Wave 7 siege" },
    "platform": { name: "Platform", type: "Mech", health: 7000, waves: 15, encounter: "Wave 7 siege" },
    "platform-a": { name: "Platform-A", type: "Mech", health: 7500, waves: 15, encounter: "Wave 8 siege" },
    "emplacement": { name: "Emplacement", type: "Mech", health: 300, waves: 16, encounter: "Wave 7 siege" },
    "combatant": { name: "Combatant", type: "Elite Fodder", health: 100, waves: 22, encounter: "Wave 1 siege" },
    "informant": { name: "Informant", type: "Elite Fodder", health: 150, waves: 17, encounter: "Wave 5 siege" },
    "confidant": { name: "Confidant", type: "Elite Fodder", health: 200, waves: 8, encounter: "Wave 8 siege" },
    "agitator": { name: "Agitator", type: "Elite Fodder", health: 300, waves: 17, encounter: "Wave 5 siege" },
    "fuel tank (agitator)": { name: "Fuel Tank (Agitator)", type: "Elite Fodder", health: 200, waves: 17, encounter: "Wave 5 siege" },
    "agreement": { name: "Agreement", type: "Elite Fodder", health: 150, waves: 13, encounter: "Wave 4 siege" },
    "jagant": { name: "Jagant", type: "Elite Fodder", health: 200, waves: 6, encounter: "Wave 8 siege" },
    "jagant bomb": { name: "Jagant Bomb", type: "Elite Fodder", health: 1000, waves: 6, encounter: "Wave 8 siege" },
    "bombardier": { name: "Bombardier", type: "Elite Advanced", health: 300, waves: 13, encounter: "Wave 7 siege" },
    "operant": { name: "Operant", type: "Elite Advanced", health: 300, waves: 3, encounter: "Wave 10 hell" },
    "sergeant": { name: "Sergeant", type: "Elite Advanced", health: 300, waves: 7, encounter: "Wave 7 siege" },
    "adjutant": { name: "Adjutant", type: "Elite Advanced", health: 350, waves: 6, encounter: "Wave 8 siege" },
    "observant": { name: "Observant", type: "Elite Advanced", health: 350, waves: 6, encounter: "Wave 8 siege" },
    "fusilier": { name: "Fusilier", type: "Boss", health: 400, waves: 15, encounter: "Wave 3 siege" },
    "daedalus": { name: "Daedalus", type: "Boss", health: 500, waves: 15, encounter: "Wave 3 siege" },
    "tempest": { name: "Tempest", type: "Boss", health: 600, waves: 15, encounter: "Wave 3 siege" },
    "lelantos": { name: "Lelantos", type: "Boss", health: 380, waves: 6, encounter: "Wave 3 siege" },
    "gaia": { name: "Gaia", type: "Boss", health: 775, waves: 13, encounter: "Wave 6 siege" },
    "escort shielder": { name: "Escort Shielder", type: "Elite Fodder", health: 300, waves: 13, encounter: "Wave 6 siege" },
    "shield": { name: "Shield", type: "Elite Fodder", health: 350, waves: 13, encounter: "Wave 6 siege" },
    "escort gunner": { name: "Escort Gunner", type: "Elite Advanced", health: 500, waves: 13, encounter: "Wave 6 siege" },
    "prometheus": { name: "Prometheus", type: "Boss", health: 750, waves: 13, encounter: "Wave 6 siege" },
    "fuel tank (prometheus)": { name: "Fuel Tank (Prometheus)", type: "Boss", health: 200, waves: 13, encounter: "Wave 6 siege" },
    "hermes": { name: "Hermes", type: "Boss", health: 525, waves: 13, encounter: "Wave 6 siege" },
    "rocket pods": { name: "Rocket Pods", type: "Boss", health: 150, waves: 13, encounter: "Wave 6 siege" },
    "sparta": { name: "Sparta", type: "Boss", health: 440, waves: 10, encounter: "Wave 9 siege" },
    "trident": { name: "Trident", type: "Boss", health: 675, waves: 10, encounter: "Wave 9 siege" },
    "achilles": { name: "Achilles", type: "Boss", health: 280, waves: 10, encounter: "Wave 9 siege" },
    "drone": { name: "Drone", type: "Boss", health: 75, waves: 11, encounter: "Wave 9 siege" },
    "dreadnought": { name: "Dreadnought", type: "Boss", health: 16000, waves: 3, encounter: "Wave 10 siege" },
    "chassis": { name: "Chassis", type: "Boss", health: 1300, waves: 2, encounter: "Wave 10 mastermind" },
    "mastermind": { name: "Mastermind", type: "Boss", health: 125, waves: 1, encounter: "Wave 10 mastermind" },
    "ares": { name: "Ares", type: "Boss", health: 1000, waves: 3, encounter: "Wave 3 epilogue" },
    "london prime": { name: "London Prime", type: "???", health: 3000, waves: 1, encounter: "Sandbox" },
    "manglenether345": { name: "MangleNether345", type: "???", health: 250, waves: 1, encounter: "Sandbox" },
    "proteus": { name: "Proteus", type: "???", health: 700, waves: 1, encounter: "Sandbox" },
    "a-10": { name: "A-10", type: "???", health: 800, waves: 1, encounter: "Sandbox" },
    "the wicked": { name: "The Wicked", type: "???", health: 1550, waves: 1, encounter: "Sandbox" },
    "sparchilles": { name: "Sparchilles", type: "???", health: 440, waves: 1, encounter: "Sandbox" },
    "mega joe": { name: "Mega Joe", type: "???", health: 3000, waves: 1, encounter: "Sandbox" },
    "baby": { name: "Baby", type: "???", health: 200, waves: 1, encounter: "Sandbox" },
    "jetnuker": { name: "JetNuker", type: "???", health: 100, waves: 1, encounter: "Sandbox" },
    "zeus": { name: "Zeus", type: "???", health: 545, waves: 1, encounter: "Sandbox" },
};

// Chronological internal order of first encounters
const encounterOrder = [
    "Wave 1 siege", "Wave 2 siege", "Wave 3 siege", "Wave 4 siege", "Wave 5 siege",
    "Wave 6 siege", "Wave 7 siege", "Wave 8 siege", "Wave 9 siege", "Wave 10 siege",
    "Wave 10 mastermind", "Wave 1 epilogue", "Wave 2 epilogue", "Wave 3 epilogue", "Wave 10 hell", "sandbox"
];

const enemyKeys = Object.keys(enemyDatabase);
let secretEnemy;
let gameOver = false;
let guessCount = 0;
const MAX_GUESSES = 6;

// Track already guessed enemies so random guesses don't repeat
let guessedEnemiesList = [];

// Wave Progression State Tracking Variables
let currentWave = 1;
let isWaveClear = false;

let inputElement, dropdownMenu, waveIndicator, continueButton, submitButton;

document.addEventListener("DOMContentLoaded", () => {
    inputElement = document.getElementById("enemyInput");
    dropdownMenu = document.getElementById("dropdownMenu");
    waveIndicator = document.getElementById("waveIndicator");
    continueButton = document.getElementById("continueButton");
    submitButton = document.querySelector(".submit-btn");

    if (submitButton) {
        // Change button text and hook up the random guess handler
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

    // Accordion handler for Info Section category buttons
    const categoryButtons = document.querySelectorAll(".category-btn");
    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            button.classList.toggle("active");
            const content = button.nextElementSibling;

            if (content.style.maxHeight) {
                // Roll up
                content.style.maxHeight = null;
            } else {
                // Roll down matching internal content height
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    // Start the game setup for the first time
    initializeGameSession();
});

function initializeGameSession() {
    // Pick a new random secret target enemy
    secretEnemy = enemyDatabase[enemyKeys[Math.floor(Math.random() * enemyKeys.length)]];
    gameOver = false;
    isWaveClear = false;
    guessCount = 0;
    guessedEnemiesList = [];

    // Update UI panels
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
        inputElement.placeholder = "Type or select an enemy...";
    }

    const messageElement = document.getElementById("gameMessage");
    if (messageElement) messageElement.innerText = "";

    const tbody = document.getElementById("guessRows");
    if (tbody) tbody.innerHTML = "";
}

function advanceNextWave() {
    currentWave++;
    initializeGameSession();
}

function resetToWaveOne() {
    currentWave = 1;
    initializeGameSession();
}

// Picks an un-guessed random enemy key and triggers the submit workflow
function makeRandomGuess() {
    if (gameOver || isWaveClear) return;

    const availableKeys = enemyKeys.filter(key => !guessedEnemiesList.includes(key));
    if (availableKeys.length === 0) return;

    const randomKey = availableKeys[Math.floor(Math.random() * availableKeys.length)];
    inputElement.value = enemyDatabase[randomKey].name;
    submitGuess();
}

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

        // Create the image icon element
        const img = document.createElement("img");
        img.src = `images/enemies/${key.replace(/\s+/g, '-')}.png`;
        img.alt = enemyDatabase[key].name;
        img.className = "dropdown-enemy-icon";

        // Hide icon gracefully if the image file isn't found
        img.onerror = function() { this.style.display = "none"; };

        // Create text wrapper label
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

    const guessedEnemy = enemyDatabase[guessName];
    const tbody = document.getElementById("guessRows");
    const row = document.createElement("tr");

    function createNameCell(guessedEnemy, targetEnemy) {
    const td = document.createElement("td");
    td.className = "name-cell";

    const wrapper = document.createElement("div");
    wrapper.className = "name-cell-wrapper";

    const img = document.createElement("img");
    const key = guessedEnemy.name.toLowerCase();
    img.src = `images/enemies/${key.replace(/\s+/g, '-')}.png`;
    img.alt = guessedEnemy.name;
    img.className = "table-enemy-icon";

    // Hide gracefully if the image fails to load
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

    // Text comparison cell generator (Type)
    function createCell(guessedValue, targetValue, displayString) {
        const td = document.createElement("td");
        td.innerText = displayString;

        if (guessedValue === targetValue) {
            td.classList.add("cell-correct");
        } else {
            td.classList.add("cell-incorrect");
        }
        return td;
    }

    // Number comparison cell generator with vertical arrows & dynamic proximity thresholds
    function createNumericCell(guessedValue, targetValue, threshold) {
        const td = document.createElement("td");

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

    // Encounter timeline comparison cell generator with a timeline index proximity threshold of 2 steps
    function createEncounterCell(guessedEncounter, targetEncounter, threshold) {
        const td = document.createElement("td");

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
    row.appendChild(createCell(guessedEnemy.type, secretEnemy.type, guessedEnemy.type));
    row.appendChild(createNumericCell(guessedEnemy.health, secretEnemy.health, 50));     // Yellow if within 50 HP
    row.appendChild(createNumericCell(guessedEnemy.waves, secretEnemy.waves, 6));       // Yellow if within 6 waves
    row.appendChild(createEncounterCell(guessedEnemy.encounter, secretEnemy.encounter, 2)); // Yellow if within 2 timeline slots

    if (tbody) tbody.insertBefore(row, tbody.firstChild);
    inputElement.value = "";
    if (dropdownMenu) dropdownMenu.style.display = "none";

    // Handle Victory Stage Condition
    if (guessedEnemy.name === secretEnemy.name) {
        if (messageElement) {
            messageElement.innerText = `SUCCESS! The target was ${secretEnemy.name}! Wave ${currentWave} Complete!`;
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

    // Handle Defeat Stage Condition
    if (guessCount >= MAX_GUESSES) {
        if (messageElement) {
            messageElement.innerText = `Out of guesses. Target was: ${secretEnemy.name}. You reached Wave ${currentWave} before failing.`;
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
// test//
