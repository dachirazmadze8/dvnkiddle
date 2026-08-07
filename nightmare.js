const enemyDatabase = {
    "infantry": { name: "Infantry", type: "Fodder", health: 100, waves: 34, encounter: "Wave 1 siege" },
    "grenade": { name: "Grenade", type: "Fodder", health: 0, waves: 34, encounter: "Wave 1 siege" },
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
    "level 1 sentry": { name: "Level 1 Sentry", type: "Mech", health: 300, waves: 14, encounter: "Wave 4 siege" },
    "level 2 sentry": { name: "Level 2 Sentry", type: "Mech", health: 450, waves: 14, encounter: "Wave 4 siege" },
    "level 3 sentry": { name: "Level 3 Sentry", type: "Mech", health: 600, waves: 14, encounter: "Wave 4 siege" },
    "level 1 teleporter": { name: "Level 1 Teleporter", type: "Mech", health: 300, waves: 14, encounter: "Wave 4 siege" },
    "level 2 teleporter": { name: "Level 2 Teleporter", type: "Mech", health: 450, waves: 14, encounter: "Wave 4 siege" },
    "level 3 teleporter": { name: "Level 3 Teleporter", type: "Mech", health: 600, waves: 14, encounter: "Wave 4 siege" },
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
    "operant": { name: "Operant", type: "Elite Fodder", health: 300, waves: 5, encounter: "Wave 7 hell" },
    "sergeant": { name: "Sergeant", type: "Elite Advanced", health: 500, waves: 6, encounter: "Wave 7 siege" },
    "adjutant": { name: "Adjutant", type: "Elite Advanced", health: 350, waves: 3, encounter: "Wave 8 siege" },
    "observant": { name: "Observant", type: "Elite Fodder", health: 100, waves: 3, encounter: "Wave 8 siege" },
    "administrant": { name: "Administrant", type: "Elite Fodder", health: 250, waves: 3, encounter: "Wave 8 siege" },
    "robberant": { name: "Robberant", type: "Elite Fodder", health: 200, waves: 1, encounter: "Wave 1 hell" },
    "instigant": { name: "Instigant", type: "Elite Advanced", health: 900, waves: 4, encounter: "Wave 9 siege" },
    "fake lifeline": { name: "Fake Lifeline", type: "Elite Fodder", health: 200, waves: 4, encounter: "Wave 9 siege" },
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
    "lightning grenade": { name: "Lightning Grenade", type: "Boss", health: 0, waves: 2, encounter: "Wave 9 siege" },
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
    "squad gunner": { name: "Squad Gunner", type: "Elite Advanced", health: 100, waves: 0, encounter: "Sandbox" },
    "squad medic": { name: "Squad Medic", type: "Elite Advanced", health: 100, waves: 0, encounter: "Sandbox" },
    "squad officer": { name: "Squad Officer", type: "Elite Advanced", health: 100, waves: 0, encounter: "Sandbox" },
    "squad strider": { name: "Squad Strider", type: "Elite Mech", health: 1500, waves: 0, encounter: "Sandbox" },
    "old apu": { name: "Old APU", type: "Mech", health: 2000, waves: 0, encounter: "Sandbox" },
    "old prometheus": { name: "Old Prometheus", type: "Boss", health: 700, waves: 0, encounter: "Sandbox" },
    "old sparta": { name: "Old Sparta", type: "Boss", health: 410, waves: 0, encounter: "Sandbox" },
    "old fusilier": { name: "Old Fusilier", type: "Boss", health: 400, waves: 0, encounter: "Sandbox" },
    "old trident": { name: "Old Trident", type: "Boss", health: 900, waves: 0, encounter: "Sandbox" },
    "orb": { name: "Orb", type: "Boss", health: 30, waves: 0, encounter: "Sandbox" },
    "old medic": { name: "Old Medic", type: "Advanced", health: 100, waves: 0, encounter: "Sandbox" },
    "old gaia": { name: "Old Gaia", type: "Boss", health: 500, waves: 0, encounter: "Sandbox" },
    "gaia sensei": { name: "Gaia Sensei", type: "Boss", health: 150, waves: 0, encounter: "Sandbox" },
    "gaia pre": { name: "Gaia PRE", type: "Boss", health: 150, waves: 0, encounter: "Sandbox" },
    "daedalus pre": { name: "Daedalus PRE", type: "Boss", health: 500, waves: 0, encounter: "Sandbox" },
    "operator": { name: "Operator", type: "Advanced", health: 200, waves: 0, encounter: "Sandbox" },
    "apc": { name: "APC", type: "Mech", health: 2500, waves: 0, encounter: "Sandbox" },
    "achilles (ht)": { name: "Achilles (Ht)", type: "Boss", health: 280, waves: 2, encounter: "Wave 8 hell" },
    "prometheustest": { name: "PrometheusTest", type: "Boss", health: 750, waves: 2, encounter: "Wave 5 hell" },
    "wall of jericho": { name: "Wall Of Jericho", type: "Boss", health: 200, waves: 0, encounter: "Sandbox" },
    "icarus": { name: "Icarus", type: "Boss", health: 300, waves: 0, encounter: "Sandbox" },
    "icarus helicopter": { name: "Icarus Helicopter", type: "Mech", health: 15000, waves: 0, encounter: "Sandbox" },
    "vehicle pdc": { name: "Vehicle PDC", type: "Mech", health: 4000, waves: 0, encounter: "Sandbox" },
    "pdc kit": { name: "PDC Kit", type: "Item", health: 1000, waves: 0, encounter: "Sandbox" },
    "governor kit": { name: "Governor Kit", type: "Item", health: 1000, waves: 0, encounter: "Sandbox" },
    "mads kit": { name: "MADS Kit", type: "Item", health: 500, waves: 0, encounter: "Sandbox" },
    "old pdc": { name: "Old PDC", type: "Item", health: 1000, waves: 0, encounter: "Sandbox" },
    "adc": { name: "ADC", type: "Item", health: 1000, waves: 0, encounter: "Sandbox" },
    "sprayer kit": { name: "Sprayer Kit", type: "Item", health: 1000, waves: 0, encounter: "Sandbox" },
    "turret kit": { name: "Turret Kit", type: "Item", health: 1000, waves: 0, encounter: "Sandbox" },
    "barrier kit": { name: "Barrier Kit", type: "Item", health: 1500, waves: 0, encounter: "Sandbox" },
    "brace": { name: "BRACE", type: "Item", health: 500, waves: 0, encounter: "Sandbox" },
    "hallucinator kit": { name: "Hallucinator Kit", type: "Item", health: 400, waves: 0, encounter: "Sandbox" },
    "stonehedge kit": { name: "Stonehedge Kit", type: "Item", health: 1500, waves: 0, encounter: "Sandbox" },
    "fast": { name: "FAST", type: "Item", health: 200, waves: 0, encounter: "Sandbox" },
    "tripwire trip": { name: "Tripwire trip", type: "Item", health: 0, waves: 0, encounter: "Sandbox" },
    "supplier": { name: "Supplier", type: "Advanced", health: 300, waves: 0, encounter: "Sandbox" },
    "artillery": { name: "Artillery", type: "Mech", health: 1000000, waves: 0, encounter: "Sandbox" },
    "dummy infantry": { name: "Dummy Infantry", type: "Fodder", health: 100, waves: 0, encounter: "Sandbox" },
    "dummy cloaker": { name: "Dummy Cloaker", type: "Fodder", health: 100, waves: 0, encounter: "Sandbox" },
    "dummy shielder": { name: "Dummy Shielder", type: "Fodder", health: 110, waves: 0, encounter: "Sandbox" },
    "dummy saboteur": { name: "Dummy Saboteur", type: "Fodder", health: 100, waves: 0, encounter: "Sandbox" },
    "dummy grenadier": { name: "Dummy Grenadier", type: "Advanced", health: 180, waves: 0, encounter: "Sandbox" },
    "dummy jetpacker": { name: "Dummy Jetpacker", type: "Advanced", health: 100, waves: 0, encounter: "Sandbox" },
    "dummy gunner": { name: "Dummy Gunner", type: "Advanced", health: 350, waves: 0, encounter: "Sandbox" },
    "dummy sniper": { name: "Dummy Sniper", type: "Advanced", health: 100, waves: 0, encounter: "Sandbox" },
    "dummy tranquilizer": { name: "Dummy Tranquilizer", type: "Advanced", health: 100, waves: 0, encounter: "Sandbox" },
    "dummy medic": { name: "Dummy Medic", type: "Advanced", health: 200, waves: 0, encounter: "Sandbox" },
    "dummy apu": { name: "Dummy APU", type: "Mech", health: 900, waves: 0, encounter: "Sandbox" },
    "dummy tank": { name: "Dummy Tank", type: "Mech", health: 3500, waves: 0, encounter: "Sandbox" },
    "fuel tank (dummy tank)": { name: "Fuel Tank (Dummy Tank)", type: "Mech", health: 3500, waves: 0, encounter: "Sandbox" },
    "dummy platform": { name: "Dummy Platform", type: "Mech", health: 7500, waves: 0, encounter: "Sandbox" },
    "dummy combatant": { name: "Dummy Combatant", type: "Elite Fodder", health: 100, waves: 0, encounter: "Sandbox" },
    "dummy informant": { name: "Dummy Informant", type: "Elite Fodder", health: 150, waves: 0, encounter: "Sandbox" },
    "dummy confidant": { name: "Dummy Confidant", type: "Elite Fodder", health: 200, waves: 0, encounter: "Sandbox" },
    "dummy agitator": { name: "Dummy Agitator", type: "Elite Fodder", health: 300, waves: 0, encounter: "Sandbox" },
    "dummy jagant": { name: "Dummy Jagant", type: "Elite Fodder", health: 150, waves: 0, encounter: "Sandbox" },
    "dummy bombardier": { name: "Dummy Bombardier", type: "Elite Fodder", health: 350, waves: 0, encounter: "Sandbox" },
    "dummy operant": { name: "Dummy Operant", type: "Elite Fodder", health: 300, waves: 0, encounter: "Sandbox" },
    "dummy fusilier": { name: "Dummy Fusilier", type: "Boss", health: 400, waves: 0, encounter: "Sandbox" },
    "dummy daedalus": { name: "Dummy Daedalus", type: "Boss", health: 500, waves: 0, encounter: "Sandbox" },
    "dummy tempest": { name: "Dummy Tempest", type: "Boss", health: 600, waves: 0, encounter: "Sandbox" },
    "dummy lelantos": { name: "Dummy Lelantos", type: "Boss", health: 380, waves: 0, encounter: "Sandbox" },
    "dummy prometheus": { name: "Dummy Prometheus", type: "Boss", health: 750, waves: 0, encounter: "Sandbox" },
    "fuel tank (dummy prometheus)": { name: "Fuel Tank (Dummy Prometheus)", type: "Boss", health: 200, waves: 0, encounter: "Sandbox" },
    "dummy hermes": { name: "Dummy Hermes", type: "Boss", health: 525, waves: 0, encounter: "Sandbox" },
    "dummy hermes pods": { name: "Dummy Hermes Pods", type: "Boss", health: 60, waves: 0, encounter: "Sandbox" },
    "dummy sparta": { name: "Dummy Sparta", type: "Boss", health: 440, waves: 0, encounter: "Sandbox" },
    "dummy trident": { name: "Dummy Trident", type: "Boss", health: 675, waves: 0, encounter: "Sandbox" },
    "refugee": { name: "Refugee", type: "Fodder", health: 50, waves: 0, encounter: "Sandbox" },
    "refugee2": { name: "Refugee2", type: "Fodder", health: 50, waves: 0, encounter: "Sandbox" },
    "apu backup": { name: "APU Backup", type: "Mech", health: 500, waves: 0, encounter: "Sandbox" },
    "apu (unoptimized)": { name: "APU (unoptimized)", type: "Mech", health: 900, waves: 0, encounter: "Sandbox" },
    "punching bag": { name: "Punching Bag", type: "Boss", health: 1000000, waves: 0, encounter: "Sandbox" },
    "punching bag resistant": { name: "Punching Bag Resistant", type: "Boss", health: 1000000, waves: 0, encounter: "Sandbox" },
    "punching bag boss": { name: "Punching Bag Boss", type: "Boss", health: 1000000, waves: 0, encounter: "Sandbox" },
    "punching bag armored": { name: "Punching Bag Armored", type: "Boss", health: 1000000, waves: 0, encounter: "Sandbox" },
};

const encounterOrder = [
    "Wave 1 siege", "Wave 2 siege", "Wave 3 siege", "Wave 4 siege", "Wave 5 siege",
    "Wave 6 siege", "Wave 7 siege", "Wave 8 siege", "Wave 9 siege", "Wave 10 siege",
    "Wave 10 mastermind", "Wave 1 epilogue", "Wave 2 epilogue", "Wave 3 epilogue", "Wave 1 hell", "Wave 5 hell", "Wave 7 hell", "Wave 8 hell", "Sandbox"
];

window.encounterOrder = encounterOrder;

window.enemyDatabase = enemyDatabase;
window.getSecretEnemy = function() {
    return secretEnemy;
};

const enemyKeys = Object.keys(enemyDatabase);
window.enemyKeys = enemyKeys;
let secretEnemy;
let secretEnemy2 = null;
let secretEnemy3 = null;
window.getSecondSecretEnemy = function() {
    return secretEnemy2;
};
window.getThirdSecretEnemy = function() {
    return secretEnemy3;
};

window.pickSecondTarget = function() {
    const assassin = typeof window.getCurrentAssassin === "function" ? window.getCurrentAssassin() : null;
    const pool = enemyKeys.filter(key => {
        const enemy = enemyDatabase[key];
        if (enemy.name === secretEnemy.name) return false;
        if (assassin && enemy.name === assassin.name) return false;
        return true;
    });
    if (pool.length === 0) {
        secretEnemy2 = null;
        return;
    }
    const randomKey = pool[Math.floor(Math.random() * pool.length)];
    secretEnemy2 = enemyDatabase[randomKey];
    // console.log(`Wave ${currentWave} second answer: ${secretEnemy2.name}`);
};

window.pickThirdTarget = function() {
    const assassin = typeof window.getCurrentAssassin === "function" ? window.getCurrentAssassin() : null;
    const pool = enemyKeys.filter(key => {
        const enemy = enemyDatabase[key];
        if (enemy.name === secretEnemy.name) return false;
        if (secretEnemy2 && enemy.name === secretEnemy2.name) return false;
        if (assassin && enemy.name === assassin.name) return false;
        return true;
    });
    if (pool.length === 0) {
        secretEnemy3 = null;
        return;
    }
    const randomKey = pool[Math.floor(Math.random() * pool.length)];
    secretEnemy3 = enemyDatabase[randomKey];
    // console.log(`Wave ${currentWave} third answer: ${secretEnemy3.name}`);
};

window.clearSecondTarget = function() {
    secretEnemy2 = null;
};

window.clearThirdTarget = function() {
    secretEnemy3 = null;
};

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
    MAX_GUESSES = 6;
    if (typeof Modifiers !== "undefined") {
        Modifiers.resetAll();
    }

    secretEnemy = enemyDatabase[enemyKeys[Math.floor(Math.random() * enemyKeys.length)]];
    // console.log(`Wave ${currentWave} answer: ${secretEnemy.name}`);
    secretEnemy2 = null;
    secretEnemy3 = null;
    gameOver = false;
    isWaveClear = false;
    guessCount = 0;
    guessedEnemiesList = [];

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
    if (typeof Modifiers !== "undefined") {
        Modifiers.extraLifeCharges = undefined;
    }
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

function makeAccurateRadarGuess() {
    if (gameOver || isWaveClear) return;

    const assassin = typeof window.getCurrentAssassin === "function" ? window.getCurrentAssassin() : null;
    const vitacharged = typeof window.getVitachargedEnemies === "function" ? window.getVitachargedEnemies() : null;

    const baseFilter = key => {
        if (guessedEnemiesList.includes(key)) return false;
        const enemy = enemyDatabase[key];
        if (enemy.name === secretEnemy.name) return false;
        if (assassin && enemy.name === assassin.name) return false;
        if (vitacharged && vitacharged.has(key)) return false;
        return true;
    };

    // Prefer a wrong guess that shares at least one stat exactly with the
    // target, so that stat is guaranteed to show green. Fall back to any
    // wrong guess if the current roster has nothing that qualifies.
    const accurateKeys = enemyKeys.filter(key => {
        if (!baseFilter(key)) return false;
        const enemy = enemyDatabase[key];
        const healthMatch = enemy.health === secretEnemy.health;
        const wavesMatch = enemy.waves === secretEnemy.waves;
        const encounterMatch = enemy.encounter.toLowerCase() === secretEnemy.encounter.toLowerCase();
        return healthMatch || wavesMatch || encounterMatch;
    });

    const pool = accurateKeys.length > 0 ? accurateKeys : enemyKeys.filter(baseFilter);
    if (pool.length === 0) return;

    const randomKey = pool[Math.floor(Math.random() * pool.length)];
    inputElement.value = enemyDatabase[randomKey].name;
    submitGuess();
}

window.makeAccurateRadarGuess = makeAccurateRadarGuess;

function applyAimAssist(originalKey) {
    if (typeof Modifiers === "undefined" || !Modifiers.active.has("aimAssist")) return originalKey;

    const guessedEnemy = enemyDatabase[originalKey];
    if (!guessedEnemy || guessedEnemy.name === secretEnemy.name) return originalKey;

    const healthPartial = guessedEnemy.health !== secretEnemy.health &&
        Math.abs(guessedEnemy.health - secretEnemy.health) <= 50;
    const wavesPartial = guessedEnemy.waves !== secretEnemy.waves &&
        Math.abs(guessedEnemy.waves - secretEnemy.waves) <= 6;

    const lowerOrder = encounterOrder.map(item => item.toLowerCase());
    const guessedIdx = lowerOrder.indexOf(guessedEnemy.encounter.toLowerCase());
    const secretIdx = lowerOrder.indexOf(secretEnemy.encounter.toLowerCase());
    const encounterPartial = guessedEnemy.encounter.toLowerCase() !== secretEnemy.encounter.toLowerCase() &&
        guessedIdx !== -1 && secretIdx !== -1 && Math.abs(guessedIdx - secretIdx) <= 2;

    if (!healthPartial && !wavesPartial && !encounterPartial) return originalKey;

    if (Modifiers.isBuffed("aimAssist")) {
        const secretKey = Object.keys(enemyDatabase).find(key => enemyDatabase[key].name === secretEnemy.name);
        return secretKey || originalKey;
    }

    const assassin = typeof window.getCurrentAssassin === "function" ? window.getCurrentAssassin() : null;
    const vitacharged = typeof window.getVitachargedEnemies === "function" ? window.getVitachargedEnemies() : null;

    const candidates = enemyKeys.filter(key => {
        if (guessedEnemiesList.includes(key)) return false;
        const enemy = enemyDatabase[key];
        if (enemy.name === guessedEnemy.name) return false;
        if (assassin && enemy.name === assassin.name) return false;
        if (vitacharged && vitacharged.has(key)) return false;

        const healthMatch = healthPartial && enemy.health === secretEnemy.health;
        const wavesMatch = wavesPartial && enemy.waves === secretEnemy.waves;
        const encounterMatch = encounterPartial && enemy.encounter.toLowerCase() === secretEnemy.encounter.toLowerCase();
        return healthMatch || wavesMatch || encounterMatch;
    });

    if (candidates.length === 0) return originalKey;
    return candidates[Math.floor(Math.random() * candidates.length)];
}

window.setMaxGuesses = function(n) {
    MAX_GUESSES = n;
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
window.getEligibleCategorySlots = function(row, guessedEnemy, secretEnemy) {
    const secretEnemy2 = typeof window.getSecondSecretEnemy === "function" ? window.getSecondSecretEnemy() : null;
    const secretEnemy3 = typeof window.getThirdSecretEnemy === "function" ? window.getThirdSecretEnemy() : null;
    const doubleTrouble = typeof Modifiers !== "undefined" && Modifiers.active.has("doubleTrouble") && !!secretEnemy2;
    const targets = doubleTrouble ? [secretEnemy, secretEnemy2, ...(secretEnemy3 ? [secretEnemy3] : [])] : [secretEnemy];

    const guessedEncounter = guessedEnemy.encounter.toLowerCase();
    const fieldDefs = [
        { cls: "cell-health", guessedVal: guessedEnemy.health, targetVal: t => t.health },
        { cls: "cell-waves", guessedVal: guessedEnemy.waves, targetVal: t => t.waves },
        { cls: "cell-encounter", guessedVal: guessedEncounter, targetVal: t => t.encounter.toLowerCase() }
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
    if (tryUseExtraLife(`Assassinated by ${assassinEnemy.name}.`)) return;

    const messageElement = document.getElementById("gameMessage");
    if (messageElement) {
        messageElement.innerText = `Assassinated by ${assassinEnemy.name}, Target was ${secretEnemy.name}, you reached wave ${currentWave} before failing.`;
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
            : `Mutilated by ${guessedName}. Target was: ${secretEnemy.name}. You reached Wave ${currentWave} before failing.`;
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

    let guessName = inputElement.value.trim().toLowerCase();
    const messageElement = document.getElementById("gameMessage");

    if (!enemyDatabase[guessName]) {
        if (messageElement) {
            messageElement.innerText = "Unknown enemy! Choose an option from the menu list.";
            messageElement.style.color = "#ff3333";
        }
        return;
    }

    guessName = applyAimAssist(guessName);

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

        const isDummyName = name => name.toLowerCase().startsWith("dummy ");
        const isOldName = name => name.toLowerCase().startsWith("old ");

        const pdcGroup = new Set(["pdc kit", "governor kit", "old pdc", "mads kit", "vehicle pdc", "adc", "sprayer kit", "turret kit"]);
        const isPdcGroupName = name => pdcGroup.has(name.toLowerCase());

        if (guessedEnemy.name === targetEnemy.name) {
            td.classList.add("cell-correct");
        } else if (isDummyName(guessedEnemy.name) && isDummyName(targetEnemy.name)) {
            td.classList.add("cell-partial");
        } else if (isOldName(guessedEnemy.name) && isOldName(targetEnemy.name)) {
            td.classList.add("cell-partial");
        } else if (isPdcGroupName(guessedEnemy.name) && isPdcGroupName(targetEnemy.name)) {
            td.classList.add("cell-partial");
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

    function createEncounterCell(guessedEncounter, targetEncounter, threshold, extraClass = "") {
        const td = document.createElement("td");
        if (extraClass) td.classList.add(extraClass);
        td.dataset.value = guessedEncounter;

        const lowerCaseOrder = encounterOrder.map(item => item.toLowerCase());
        const guessedIndex = lowerCaseOrder.indexOf(guessedEncounter.toLowerCase());
        const targetIndex = lowerCaseOrder.indexOf(targetEncounter.toLowerCase());

        if (guessedIndex === targetIndex) {
            td.dataset.arrow = "";
            td.classList.add("cell-correct");
        } else {
            td.dataset.arrow = guessedIndex < targetIndex ? "→" : "←";
            const difference = Math.abs(guessedIndex - targetIndex);
            td.classList.add((guessedIndex !== -1 && targetIndex !== -1 && difference <= threshold) ? "cell-partial" : "cell-incorrect");
        }
        window.redrawCategoryCell(td);
        return td;
    }

    function nameMatchStatus(guessedEnemy, target) {
        const isDummyName = name => name.toLowerCase().startsWith("dummy ");
        const isOldName = name => name.toLowerCase().startsWith("old ");
        const pdcGroup = new Set(["pdc kit", "governor kit", "old pdc", "mads kit", "vehicle pdc", "adc", "sprayer kit", "turret kit"]);
        const isPdcGroupName = name => pdcGroup.has(name.toLowerCase());

        if (guessedEnemy.name === target.name) return "correct";
        if (isDummyName(guessedEnemy.name) && isDummyName(target.name)) return "partial";
        if (isOldName(guessedEnemy.name) && isOldName(target.name)) return "partial";
        if (isPdcGroupName(guessedEnemy.name) && isPdcGroupName(target.name)) return "partial";
        return "incorrect";
    }

    function createSplitNameCell(guessedEnemy, targets) {
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

        window.applySplitBackground(td, targets.map(target => nameMatchStatus(guessedEnemy, target)));
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

    function encounterArrowAndStatus(guessedIndex, targetIndex, threshold) {
        if (guessedIndex === targetIndex) return { arrow: "", status: "correct" };
        const arrow = guessedIndex < targetIndex ? "→" : "←";
        const difference = Math.abs(guessedIndex - targetIndex);
        const status = (guessedIndex !== -1 && targetIndex !== -1 && difference <= threshold) ? "partial" : "incorrect";
        return { arrow, status };
    }

    function createSplitEncounterCell(guessedEncounter, targetEncounters, threshold, extraClass = "") {
        const td = document.createElement("td");
        if (extraClass) td.classList.add(extraClass);
        td.dataset.value = guessedEncounter;

        const lowerCaseOrder = encounterOrder.map(item => item.toLowerCase());
        const guessedIndex = lowerCaseOrder.indexOf(guessedEncounter.toLowerCase());

        const results = targetEncounters.map(targetEncounter => {
            const targetIndex = lowerCaseOrder.indexOf(targetEncounter.toLowerCase());
            return encounterArrowAndStatus(guessedIndex, targetIndex, threshold);
        });
        results.forEach((result, i) => { td.dataset[`arrow${i}`] = result.arrow; });

        window.applySplitBackground(td, results.map(result => result.status));
        window.redrawCategoryCell(td);
        return td;
    }

    const secretEnemy3ForRow = typeof window.getThirdSecretEnemy === "function" ? window.getThirdSecretEnemy() : null;
    const doubleTroubleActive = typeof Modifiers !== "undefined" &&
        Modifiers.active.has("doubleTrouble") &&
        secretEnemy2;
    const doubleTroubleTargets = doubleTroubleActive
        ? [secretEnemy, secretEnemy2, ...(secretEnemy3ForRow ? [secretEnemy3ForRow] : [])]
        : null;

    if (doubleTroubleActive) {
        row.appendChild(createSplitNameCell(guessedEnemy, doubleTroubleTargets));
        row.appendChild(createSplitTypeCell(guessedEnemy.type, doubleTroubleTargets.map(t => t.type), "cell-type"));
        row.appendChild(createSplitNumericCell(guessedEnemy.health, doubleTroubleTargets.map(t => t.health), 50, "cell-health"));
        row.appendChild(createSplitNumericCell(guessedEnemy.waves, doubleTroubleTargets.map(t => t.waves), 6, "cell-waves"));
        row.appendChild(createSplitEncounterCell(guessedEnemy.encounter, doubleTroubleTargets.map(t => t.encounter), 2, "cell-encounter"));
    } else {
        row.appendChild(createNameCell(guessedEnemy, secretEnemy));
        row.appendChild(createCell(guessedEnemy.type, secretEnemy.type, guessedEnemy.type, "cell-type"));
        row.appendChild(createNumericCell(guessedEnemy.health, secretEnemy.health, 50, "cell-health"));
        row.appendChild(createNumericCell(guessedEnemy.waves, secretEnemy.waves, 6, "cell-waves"));
        row.appendChild(createEncounterCell(guessedEnemy.encounter, secretEnemy.encounter, 2, "cell-encounter"));
    }

    if (typeof Modifiers !== "undefined") {
        Modifiers.onGuess(row, guessedEnemy, secretEnemy);
    }


    if (tbody) tbody.insertBefore(row, tbody.firstChild);

    if (typeof Modifiers !== "undefined") {
        Modifiers.afterGuess();
    }

    inputElement.value = "";
    if (dropdownMenu) dropdownMenu.style.display = "none";

    if (doubleTroubleActive) {
        if (!Array.isArray(Modifiers.doubleTroubleFound) || Modifiers.doubleTroubleFound.length !== doubleTroubleTargets.length) {
            Modifiers.doubleTroubleFound = new Array(doubleTroubleTargets.length).fill(false);
        }
        doubleTroubleTargets.forEach((target, i) => {
            if (guessedEnemy.name === target.name) Modifiers.doubleTroubleFound[i] = true;
        });

        const targetNames = doubleTroubleTargets.map(t => t.name);
        const namesList = targetNames.length === 2
            ? `${targetNames[0]} and ${targetNames[1]}`
            : `${targetNames.slice(0, -1).join(", ")}, and ${targetNames[targetNames.length - 1]}`;

        if (Modifiers.doubleTroubleFound.every(Boolean)) {
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

    if (guessedEnemy.name === secretEnemy.name) {
        if (messageElement) {
            const assassin = typeof window.getCurrentAssassin === "function" ? window.getCurrentAssassin() : null;
            messageElement.innerText = `SUCCESS! The target was ${secretEnemy.name}! Wave ${currentWave} Complete!`;
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
            messageElement.innerText = `Out of guesses. Target was: ${secretEnemy.name}. You reached Wave ${currentWave} before failing.`;
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
