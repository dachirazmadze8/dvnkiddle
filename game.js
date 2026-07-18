// Full enemy database engine
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
    "engineer": { name: "Engineer", type: "Advanced", health: 150, waves: 14, encounter: "Wave 4 siege" },
    "level 1 sentry": { name: "Level 1 Sentry", type: "Mech", health: 300, waves: 14, encounter: "Wave 4 siege" },
    "level 2 sentry": { name: "Level 2 Sentry", type: "Mech", health: 450, waves: 14, encounter: "Wave 4 siege" },
    "level 3 sentry": { name: "Level 3 Sentry", type: "Mech", health: 600, waves: 14, encounter: "Wave 4 siege" },
    "level 1 teleporter": { name: "Level 1 teleporter", type: "Mech", health: 300, waves: 14, encounter: "Wave 4 siege" },
    "level 2 teleporter": { name: "Level 2 teleporter", type: "Mech", health: 450, waves: 14, encounter: "Wave 4 siege" },
    "level 3 teleporter": { name: "Level 3 teleporter", type: "Mech", health: 600, waves: 14, encounter: "Wave 4 siege" },
};

// Chronological internal order of first encounters
const encounterOrder = [
    "Wave 1 siege", "Wave 2 siege", "Wave 3 siege", "Wave 4 siege", "Wave 5 siege",
    "Wave 6 siege", "Wave 7 siege", "Wave 8 siege", "Wave 9 siege", "Wave 10 siege",
    "Wave 10 mastermind", "Wave 1 epilogue", "Wave 2 epilogue", "Wave 3 epilogue", "sandbox"
];

const enemyKeys = Object.keys(enemyDatabase);
const secretEnemy = enemyDatabase[enemyKeys[Math.floor(Math.random() * enemyKeys.length)]];
let gameOver = false;
let guessCount = 0;
const MAX_GUESSES = 6;

console.log("Secret Target:", secretEnemy.name);

let inputElement, dropdownMenu;

document.addEventListener("DOMContentLoaded", () => {
    inputElement = document.getElementById("enemyInput");
    dropdownMenu = document.getElementById("dropdownMenu");

    if (inputElement) {
        inputElement.addEventListener("focus", showFilteredOptions);
        inputElement.addEventListener("input", showFilteredOptions);
        inputElement.addEventListener("keypress", (e) => {
            if (e.key === 'Enter') submitGuess();
        });
    }

    document.addEventListener("click", (e) => {
        if (!e.target.closest(".search-container")) {
            dropdownMenu.style.display = "none";
        }
    });
});

function showFilteredOptions() {
    if (gameOver) return;

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
        item.innerText = enemyDatabase[key].name;

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
    if (gameOver) return;

    const guessName = inputElement.value.trim().toLowerCase();
    const messageElement = document.getElementById("gameMessage");

    if (!enemyDatabase[guessName]) {
        messageElement.innerText = "Unknown enemy! Choose an option from the menu list.";
        messageElement.style.color = "#ff3333";
        return;
    }

    messageElement.innerText = "";
    guessCount++;

    const guessedEnemy = enemyDatabase[guessName];
    const tbody = document.getElementById("guessRows");
    const row = document.createElement("tr");

    // Text comparison cell generator (Name and Type)
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

            // Check if within proximity threshold
            const difference = Math.abs(guessedValue - targetValue);
            if (difference <= threshold) {
                td.classList.add("cell-partial"); // Yellow box indicator
            } else {
                td.classList.add("cell-incorrect"); // Red box indicator
            }
        }
        return td;
    }

    // Encounter timeline comparison cell generator with a timeline index proximity threshold of 2 steps
    function createEncounterCell(guessedEncounter, targetEncounter, threshold) {
        const td = document.createElement("td");

        const guessedIndex = encounterOrder.indexOf(guessedEncounter);
        const targetIndex = encounterOrder.indexOf(targetEncounter);

        if (guessedIndex === targetIndex) {
            td.innerText = guessedEncounter;
            td.classList.add("cell-correct");
        } else {
            const arrow = guessedIndex < targetIndex ? " →" : " ←";
            td.innerText = guessedEncounter + arrow;

            // Check if within index position threshold steps
            const difference = Math.abs(guessedIndex - targetIndex);
            if (difference <= threshold) {
                td.classList.add("cell-partial"); // Yellow box indicator
            } else {
                td.classList.add("cell-incorrect"); // Red box indicator
            }
        }
        return td;
    }

    row.appendChild(createCell(guessedEnemy.name, secretEnemy.name, guessedEnemy.name));
    row.appendChild(createCell(guessedEnemy.type, secretEnemy.type, guessedEnemy.type));
    row.appendChild(createNumericCell(guessedEnemy.health, secretEnemy.health, 50));     // Yellow if within 50 HP
    row.appendChild(createNumericCell(guessedEnemy.waves, secretEnemy.waves, 6));       // Yellow if within 6 waves
    row.appendChild(createEncounterCell(guessedEnemy.encounter, secretEnemy.encounter, 2)); // Yellow if within 2 timeline slots

    tbody.insertBefore(row, tbody.firstChild);
    inputElement.value = "";
    dropdownMenu.style.display = "none";

    if (guessedEnemy.name === secretEnemy.name) {
        messageElement.innerText = `SUCCESS! The target was ${secretEnemy.name}! Found in ${guessCount}/${MAX_GUESSES} tries.`;
        messageElement.style.color = "#00ffcc";
        gameOver = true;
        inputElement.disabled = true;
        return;
    }

    if (guessCount >= MAX_GUESSES) {
        messageElement.innerText = `Out of guesses. Target was: ${secretEnemy.name}`;
        messageElement.style.color = "#ff3333";
        gameOver = true;
        inputElement.disabled = true;
    }
}
