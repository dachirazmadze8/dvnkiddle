const enemyDatabase = {
    "infantry": { name: "Infantry", type: "fodder", health: 100, waves: 34, encounter: "Wave 1 siege" },
    "cloaker": { name: "Cloaker", type: "fodder", health: 100, waves: 34, encounter: "Wave 1 siege" },
    "shielder": { name: "Shielder", type: "fodder", health: 110, waves: 34, encounter: "Wave 1 siege" },
    "saboteur": { name: "Saboteur", type: "fodder", health: 100, waves: 32, encounter: "Wave 2 siege" },
    "landmine": { name: "Landmine", type: "fodder", health: 20, waves: 32, encounter: "Wave 2 siege" },
    "administrator": { name: "Administrator", type: "fodder", health: 100, waves: 1, encounter: "Wave 2 epilogue" },
    "grenadier": { name: "Grenadier", type: "advanced", health: 180, waves: 16, encounter: "Wave 4 siege" },
    "jetpacker": { name: "Jetpacker", type: "advanced", health: 100, waves: 13, encounter: "Wave 5 siege" },
    "gunner": { name: "Gunner", type: "advanced", health: 350, waves: 19, encounter: "Wave 5 siege" },
    "sniper": { name: "Sniper", type: "advanced", health: 100, waves: 21, encounter: "Wave 5 siege" },
    "engineer": { name: "Engineer", type: "advanced", health: 150, waves: 13, encounter: "Wave 4 siege" },
};

const enemyKeys = Object.keys(enemyDatabase);
const secretEnemy = enemyDatabase[enemyKeys[Math.floor(Math.random() * enemyKeys.length)]];
let gameOver = false;
let guessCount = 0;
const MAX_GUESSES = 6;


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

    row.appendChild(createCell(guessedEnemy.name, secretEnemy.name, guessedEnemy.name));
    row.appendChild(createCell(guessedEnemy.type, secretEnemy.type, guessedEnemy.type));
    row.appendChild(createCell(guessedEnemy.health, secretEnemy.health, guessedEnemy.health));
    row.appendChild(createCell(guessedEnemy.waves, secretEnemy.waves, guessedEnemy.waves));
    row.appendChild(createCell(guessedEnemy.encounter, secretEnemy.encounter, guessedEnemy.encounter));

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
