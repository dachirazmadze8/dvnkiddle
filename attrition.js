const enemyDatabase = {
    "infantry": { name: "Infantry", type: "Fodder", health: 100, waves: 34, encounter: "Wave 1 siege", xpOnKill: 50 },
    "cloaker": { name: "Cloaker", type: "Fodder", health: 100, waves: 29, encounter: "Wave 1 siege", xpOnKill: 150 },
    "shielder": { name: "Shielder", type: "Fodder", health: 110, waves: 30, encounter: "Wave 2 siege", xpOnKill: 100 },
    "saboteur": { name: "Saboteur", type: "Fodder", health: 100, waves: 32, encounter: "Wave 2 siege", xpOnKill: 50 },
    "landmine": { name: "Landmine", type: "Fodder", health: 20, waves: 32, encounter: "Wave 2 siege", xpOnKill: 0 },
    "administrator": { name: "Administrator", type: "Fodder", health: 100, waves: 1, encounter: "Wave 2 epilogue", xpOnKill: 100 },
    "grenadier": { name: "Grenadier", type: "Advanced", health: 180, waves: 16, encounter: "Wave 4 siege", xpOnKill: 100 },
    "jetpacker": { name: "Jetpacker", type: "Advanced", health: 100, waves: 14, encounter: "Wave 5 siege", xpOnKill: 100 },
    "gunner": { name: "Gunner", type: "Advanced", health: 350, waves: 22, encounter: "Wave 5 siege", xpOnKill: 150 },
    "sniper": { name: "Sniper", type: "Advanced", health: 100, waves: 23, encounter: "Wave 5 siege", xpOnKill: 80 },
    "tranquilizer": { name: "Tranquilizer", type: "Advanced", health: 100, waves: 8, encounter: "Wave 2 epilogue", xpOnKill: 50 },
    "medic": { name: "Medic", type: "Advanced", health: 200, waves: 10, encounter: "Wave 2 epilogue", xpOnKill: 50 },
    "engineer": { name: "Engineer", type: "Advanced", health: 150, waves: 14, encounter: "Wave 4 siege", xpOnKill: 100 },
    "level 1 building": { name: "Level 1 Building", type: "Mech", health: 300, waves: 14, encounter: "Wave 4 siege", xpOnKill: 100 },
    "level 2 building": { name: "Level 2 Building", type: "Mech", health: 450, waves: 14, encounter: "Wave 4 siege", xpOnKill: 100 },
    "level 3 building": { name: "Level 3 Building", type: "Mech", health: 600, waves: 14, encounter: "Wave 4 siege", xpOnKill: 100 },
    "ranger": { name: "Ranger", type: "Mech", health: 150, waves: 16, encounter: "Wave 3 siege", xpOnKill: 100 },
    "apu": { name: "APU", type: "Mech", health: 900, waves: 22, encounter: "Wave 4 siege", xpOnKill: 300 },
    "apu operator": { name: "APU Operator", type: "Advanced", health: 375, waves: 22, encounter: "Wave 4 siege", xpOnKill: 50 },
    "apu-r": { name: "APU-R", type: "Elite Mech", health: 900, waves: 13, encounter: "Wave 5 siege", xpOnKill: 50 },
    "apu-r operator": { name: "APU-R Operator", type: "Advanced", health: 450, waves: 13, encounter: "Wave 5 siege", xpOnKill: 50 },
    "tank": { name: "Tank", type: "Mech", health: 3500, waves: 14, encounter: "Wave 7 siege", xpOnKill: 300 },
    "fuel tank (tank)": { name: "Fuel Tank (Tank)", type: "Mech", health: 350, waves: 14, encounter: "Wave 7 siege", xpOnKill: 50 },
    "platform": { name: "Platform", type: "Mech", health: 7000, waves: 14, encounter: "Wave 7 siege", xpOnKill: 300 },
    "platform-a": { name: "Platform-A", type: "Elite Mech", health: 7500, waves: 9, encounter: "Wave 8 siege", xpOnKill: 50 },
    "emplacement": { name: "Emplacement", type: "Mech", health: 300, waves: 14, encounter: "Wave 7 siege", xpOnKill: 50 },
    "helicopter sentry": { name: "Helicopter Sentry", type: "Elite Mech", health: 1500, waves: 9, encounter: "Wave 8 siege", xpOnKill: 50 },
    "administrant helicopter": { name: "Administrant Helicopter", type: "Elite Mech", health: 5000, waves: 9, encounter: "Wave 8 siege", xpOnKill: 50 },
    "combatant": { name: "Combatant", type: "Elite Fodder", health: 100, waves: 21, encounter: "Wave 1 siege", xpOnKill: 50 },
    "informant": { name: "Informant", type: "Elite Fodder", health: 150, waves: 14, encounter: "Wave 5 siege", xpOnKill: 50 },
    "confidant": { name: "Confidant", type: "Elite Fodder", health: 200, waves: 9, encounter: "Wave 8 siege", xpOnKill: 50 },
    "agitator": { name: "Agitator", type: "Elite Fodder", health: 300, waves: 16, encounter: "Wave 5 siege", xpOnKill: 50 },
    "fuel tank (agitator)": { name: "Fuel Tank (Agitator)", type: "Elite Fodder", health: 200, waves: 16, encounter: "Wave 5 siege", xpOnKill: 50 },
    "agreement": { name: "Agreement", type: "Elite Fodder", health: 150, waves: 8, encounter: "Wave 4 siege", xpOnKill: 50 },
    "jagant": { name: "Jagant", type: "Elite Fodder", health: 150, waves: 8, encounter: "Wave 8 siege", xpOnKill: 50 },
    "jagant bomb": { name: "Jagant Bomb", type: "Elite Fodder", health: 2000, waves: 8, encounter: "Wave 8 siege", xpOnKill: 50 },
    "bombardier": { name: "Bombardier", type: "Elite Fodder", health: 350, waves: 14, encounter: "Wave 5 siege", xpOnKill: 50 },
    "operant": { name: "Operant", type: "Elite Fodder", health: 300, waves: 5, encounter: "Wave 7 hell", xpOnKill: 50 },
    "sergeant": { name: "Sergeant", type: "Elite Advanced", health: 500, waves: 10, encounter: "Wave 7 siege", xpOnKill: 50 },
    "adjutant": { name: "Adjutant", type: "Elite Advanced", health: 350, waves: 8, encounter: "Wave 8 siege", xpOnKill: 50 },
    "observant": { name: "Observant", type: "Elite Fodder", health: 100, waves: 10, encounter: "Wave 8 siege", xpOnKill: 50 },
    "administrant": { name: "Administrant", type: "Elite Fodder", health: 250, waves: 9, encounter: "Wave 8 siege", xpOnKill: 50 },
    "robberant": { name: "Robberant", type: "Elite Fodder", health: 200, waves: 1, encounter: "Wave 1 hell", xpOnKill: 50 },
    "instigant": { name: "Instigant", type: "Elite Advanced", health: 900, waves: 4, encounter: "Wave 9 siege", xpOnKill: 50 },
    "fake lifeline": { name: "Fake Lifeline", type: "Elite Fodder", health: 200, waves: 4, encounter: "Wave 9 siege", xpOnKill: 50 },
    "fusilier": { name: "Fusilier", type: "Boss", health: 400, waves: 14, encounter: "Wave 3 siege", xpOnKill: 350 },
    "daedalus": { name: "Daedalus", type: "Boss", health: 500, waves: 14, encounter: "Wave 3 siege", xpOnKill: 450 },
    "tempest": { name: "Tempest", type: "Boss", health: 600, waves: 14, encounter: "Wave 3 siege", xpOnKill: 400 },
    "lelantos": { name: "Lelantos", type: "Boss", health: 380, waves: 5, encounter: "Wave 3 siege", xpOnKill: 50 },
    "gaia": { name: "Gaia", type: "Boss", health: 775, waves: 12, encounter: "Wave 6 siege", xpOnKill: 400 },
    "escort shielder": { name: "Escort Shielder", type: "Elite Fodder", health: 250, waves: 12, encounter: "Wave 6 siege", xpOnKill: 150 },
    "escort gunner": { name: "Escort Gunner", type: "Elite Advanced", health: 500, waves: 12, encounter: "Wave 6 siege", xpOnKill: 200 },
    "prometheus": { name: "Prometheus", type: "Boss", health: 750, waves: 12, encounter: "Wave 6 siege", xpOnKill: 500 },
    "fuel tank (prometheus)": { name: "Fuel Tank (Prometheus)", type: "Boss", health: 200, waves: 12, encounter: "Wave 6 siege", xpOnKill: 50 },
    "hermes": { name: "Hermes", type: "Boss", health: 525, waves: 12, encounter: "Wave 6 siege", xpOnKill: 350 },
    "hermes pods": { name: "Hermes Pods", type: "Boss", health: 60, waves: 12, encounter: "Wave 6 siege", xpOnKill: 100 },
    "sparta": { name: "Sparta", type: "Boss", health: 440, waves: 9, encounter: "Wave 9 siege", xpOnKill: 500 },
    "trident": { name: "Trident", type: "Boss", health: 675, waves: 9, encounter: "Wave 9 siege", xpOnKill: 500 },
    "achilles": { name: "Achilles", type: "Boss", health: 280, waves: 9, encounter: "Wave 9 siege", xpOnKill: 350 },
    "drone": { name: "Drone", type: "Boss", health: 75, waves: 9, encounter: "Wave 9 siege", xpOnKill: 50 },
    "zeus": { name: "Zeus", type: "Boss", health: 545, waves: 4, encounter: "Wave 9 siege", xpOnKill: 50 },
    "dreadnought": { name: "Dreadnought", type: "Boss", health: 16000, waves: 4, encounter: "Wave 10 siege", xpOnKill: 50 },
    "dreadnought armor": { name: "Dreadnought Armor", type: "Boss", health: 2000, waves: 4, encounter: "Wave 10 siege", xpOnKill: 50 },
    "chassis": { name: "Chassis", type: "Boss", health: 1300, waves: 1, encounter: "Wave 10 mastermind", xpOnKill: 50 },
    "mastermind": { name: "Mastermind", type: "Boss", health: 125, waves: 1, encounter: "Wave 10 mastermind", xpOnKill: 50 },
    "ares": { name: "Ares", type: "Boss", health: 1000, waves: 2, encounter: "Wave 3 epilogue", xpOnKill: 1750 },
    "london prime": { name: "London Prime", type: "Boss", health: 3000, waves: 0, encounter: "Sandbox", xpOnKill: 50 },
    "manglenether345": { name: "MangleNether345", type: "Boss", health: 250, waves: 0, encounter: "Sandbox", xpOnKill: 50 },
    "a-10": { name: "A-10", type: "Boss", health: 800, waves: 0, encounter: "Sandbox", xpOnKill: 50 },
    "the wicked": { name: "The Wicked", type: "Boss", health: 1550, waves: 0, encounter: "Sandbox", xpOnKill: 50 },
    "sparchilles": { name: "Sparchilles", type: "Boss", health: 440, waves: 0, encounter: "Sandbox", xpOnKill: 50 },
    "mega joe": { name: "Mega Joe", type: "Boss", health: 2000, waves: 0, encounter: "Sandbox", xpOnKill: 50 },
    "baby": { name: "Baby", type: "Elite Fodder", health: 200, waves: 0, encounter: "Sandbox", xpOnKill: 50 },
    "jetnuker": { name: "JetNuker", type: "Elite Advanced", health: 100, waves: 0, encounter: "Sandbox", xpOnKill: 50 },
    "mart": { name: "Mart", type: "Boss", health: 3500, waves: 15, encounter: "Wave 4 siege", xpOnKill: 50 },
    "squad infantry": { name: "Squad Infantry", type: "Elite Fodder", health: 200, waves: 0, encounter: "Sandbox", xpOnKill: 50 },
    "old apu": { name: "Old APU", type: "Mech", health: 2000, waves: 0, encounter: "Sandbox", xpOnKill: 50 },
    "operator": { name: "Operator", type: "Advanced", health: 200, waves: 0, encounter: "Sandbox", xpOnKill: 50 },
    "apc": { name: "APC", type: "Mech", health: 2500, waves: 0, encounter: "Sandbox", xpOnKill: 50 },
};

const encounterOrder = [
    "Wave 1 siege", "Wave 2 siege", "Wave 3 siege", "Wave 4 siege", "Wave 5 siege",
    "Wave 6 siege", "Wave 7 siege", "Wave 8 siege", "Wave 9 siege", "Wave 10 siege",
    "Wave 10 mastermind", "Wave 1 epilogue", "Wave 2 epilogue", "Wave 3 epilogue", "Wave 1 hell", "Wave 5 hell", "Wave 7 hell", "Sandbox"
];

window.encounterOrder = encounterOrder;
window.enemyDatabase = enemyDatabase;
window.getSecretEnemy = function() { return secretEnemy; };

let allEnemyKeys = Object.keys(enemyDatabase);
let activePool = [];

window.getActivePool = function() { return activePool; };

let secretEnemy;
let secretEnemy2 = null;
let secretEnemy3 = null;
window.getSecondSecretEnemy = function() { return secretEnemy2; };
window.getThirdSecretEnemy = function() { return secretEnemy3; };

window.pickSecondTarget = function() {
    const pool = activePool.filter(key => enemyDatabase[key].name !== secretEnemy.name);
    if (pool.length === 0) { secretEnemy2 = null; return; }
    secretEnemy2 = enemyDatabase[pool[Math.floor(Math.random() * pool.length)]];
};

window.pickThirdTarget = function() {
    const pool = activePool.filter(key => {
        const e = enemyDatabase[key];
        if (e.name === secretEnemy.name) return false;
        if (secretEnemy2 && e.name === secretEnemy2.name) return false;
        return true;
    });
    if (pool.length === 0) { secretEnemy3 = null; return; }
    secretEnemy3 = enemyDatabase[pool[Math.floor(Math.random() * pool.length)]];
};

window.clearSecondTarget = function() { secretEnemy2 = null; };
window.clearThirdTarget = function() { secretEnemy3 = null; };

let gameOver = false;
let guessCount = 0;
let MAX_GUESSES = 6;
let guessDeltaMap = {};

window.applyGuessDelta = function(key, delta) {
    guessDeltaMap[key] = delta;
    recalcMaxGuesses();
};
window.clearGuessDelta = function(key) {
    delete guessDeltaMap[key];
    recalcMaxGuesses();
};
function recalcMaxGuesses() {
    let base = 6;
    for (const delta of Object.values(guessDeltaMap)) base += delta;
    MAX_GUESSES = Math.max(1, base);
}


let guessedEnemiesList = [];
let currentWave = 1;
let isWaveClear = false;
let revives = 0;
let bountyKey = null;
let bountyWavesRemaining = 0;
const BOUNTY_LIFESPAN_WAVES = 5;
let refillCharges = 0;
let resetCharges = 0;
let bountyRewardModifier = null;
let bountyRewardWavesLeft = 0;
const BOUNTY_POSITIVE_MODIFIERS = ["strengthenedSignal", "accurateRadar", "aimAssist", "experienced"];
let overchargerActive = false;
let overchargerTimer = null;
let overchargerTimeLeft = 0;
let overchargerPending = false;
let runTimerSeconds = 0;
let runTimerInterval = null;
let bountyGuessCount = 0;
let waveGuessHistory = {};

const MIN_POOL_SIZE = 0;

window.getPreviousWaveGuesses = function(numWaves) {
    const result = [];
    for (let w = currentWave - 1; w >= Math.max(1, currentWave - numWaves); w--) {
        if (waveGuessHistory[w]) result.push(...waveGuessHistory[w]);
    }
    return result;
};

window.enemyKeys = allEnemyKeys;

let inputElement, dropdownMenu, waveIndicator, continueButton, submitButton;
let poolCounter, reviveDisplay;

document.addEventListener("DOMContentLoaded", () => {
    inputElement = document.getElementById("enemyInput");
    dropdownMenu = document.getElementById("dropdownMenu");
    waveIndicator = document.getElementById("waveIndicator");
    continueButton = document.getElementById("continueButton");
    submitButton = document.querySelector(".submit-btn");
    poolCounter = document.getElementById("poolCounter");
    reviveDisplay = document.getElementById("reviveDisplay");
    const resetTimerBtn = document.getElementById('resetTimerBtn');
    if (resetTimerBtn) {
        resetTimerBtn.addEventListener('click', () => {
            if (resetCharges <= 0 || gameOver || isWaveClear) return;
            resetCharges--;
            runTimerSeconds = 5 * 60;
            updateRunTimerDisplay();
            updateResetDisplay();
            const messageElement = document.getElementById('gameMessage');
            if (messageElement) {
                messageElement.innerText = `⏱ Reset used! Timer restored to 5:00. (${resetCharges} charge${resetCharges !== 1 ? 's' : ''} left)`;
                messageElement.style.color = '#33ff66';
            }
        });
    }

    const refillBtn = document.getElementById("refillBtn");
    if (refillBtn) {
        refillBtn.addEventListener("click", () => {
            if (refillCharges <= 0 || gameOver || isWaveClear) return;
            refillCharges--;
            guessCount = 0;
            updateRefillDisplay();
            const messageElement = document.getElementById("gameMessage");
            if (messageElement) {
                messageElement.innerText = `Refill used! Guesses reset to ${MAX_GUESSES}. (${refillCharges} left)`;
                messageElement.style.color = "#33ff66";
            }
        });
    }

    if (submitButton) {
        submitButton.innerText = "Random Guess";
        submitButton.addEventListener("click", makeRandomGuess);
    }

    if (inputElement) {
        inputElement.addEventListener("focus", showFilteredOptions);
        inputElement.addEventListener("input", showFilteredOptions);
        inputElement.addEventListener("keypress", (e) => {
            if (e.key === "Enter") submitGuess();
        });
    }

    document.addEventListener("click", (e) => {
        if (!e.target.closest(".search-container")) {
            if (dropdownMenu) dropdownMenu.style.display = "none";
        }
    });

    allEnemyKeys = Object.keys(enemyDatabase);

    window.enemyKeys = allEnemyKeys;
    activePool = [...allEnemyKeys];
    currentWave = 1;
    revives = 0;
    refillCharges = 0;
    resetCharges = 0;
    runTimerSeconds = 5 * 60;
    bountyRewardModifier = null;
    bountyRewardWavesLeft = 0;
    bountyKey = null;
    bountyWavesRemaining = 0;
    overchargerPending = false;
    clearOvercharger();
    waveGuessHistory = {};
    guessDeltaMap = {};

    initializeGameSession();
    startRunTimer();
    updateRunTimerDisplay();
    updatePerksEmptyState();
});

function updatePerksEmptyState() {
    const noneTag = document.getElementById("perksNone");
    if (!noneTag) return;
    const perkIds = ["reviveDisplay", "overchargerDisplay", "refillBtn", "resetTimerBtn"];
    const anyVisible = perkIds.some(id => {
        const el = document.getElementById(id);
        return el && el.style.display !== "none" && el.style.display !== "";
    });
    noneTag.style.display = anyVisible ? "none" : "inline-block";
}

function updateResetDisplay() {
    const btn = document.getElementById('resetTimerBtn');
    if (!btn) return;
    if (resetCharges > 0) {
        btn.style.display = 'inline-block';
        btn.innerHTML = `<img class="perk-icon" src="images/icons/reset-timer.png" alt=""> Reset Timer (${resetCharges})`;
    } else {
        btn.style.display = 'none';
    }
    updatePerksEmptyState();
}

function updateRefillDisplay() {
    const btn = document.getElementById("refillBtn");
    if (!btn) return;
    if (refillCharges > 0) {
        btn.style.display = "inline-block";
        btn.innerHTML = `<img class="perk-icon" src="images/icons/refill.png" alt=""> Refill (${refillCharges})`;
    } else {
        btn.style.display = "none";
    }
    updatePerksEmptyState();
}

function updatePoolDisplay() {
    if (poolCounter) {
        poolCounter.innerText = `Pool: ${activePool.length} remaining`;
    }
    if (reviveDisplay) {
        reviveDisplay.innerHTML = revives > 0 ? `<img class="perk-icon" src="images/icons/revive.png" alt=""> ${revives}` : "";
        reviveDisplay.style.display = revives > 0 ? "inline-block" : "none";
    }
    updatePerksEmptyState();
}

function retireEnemy(key) {
    const idx = activePool.indexOf(key);
    if (idx !== -1) activePool.splice(idx, 1);
    window.enemyKeys = activePool;
}

let skipNextBountyDecrement = false;

function pickBounty() {
    if (activePool.length <= 1) { bountyKey = null; bountyWavesRemaining = 0; return; }
    const pool = activePool.filter(k => enemyDatabase[k].name !== secretEnemy.name);
    const rand = pool[Math.floor(Math.random() * pool.length)];
    bountyKey = rand || null;
    bountyWavesRemaining = bountyKey ? BOUNTY_LIFESPAN_WAVES : 0;
}

function advanceBounty() {
    if (skipNextBountyDecrement) {
        skipNextBountyDecrement = false;
        return;
    }
    if (bountyKey === null || !activePool.includes(bountyKey)) {
        pickBounty();
        return;
    }
    bountyWavesRemaining--;
    if (bountyWavesRemaining <= 0) {
        pickBounty();
    }
}

function isBountyWave() {
    return bountyKey !== null && secretEnemy && enemyDatabase[bountyKey]?.name === secretEnemy.name;
}

function formatRunTimer(seconds) {
    const m = Math.floor(Math.max(0, seconds) / 60);
    const s = Math.max(0, seconds) % 60;
    return `⏱ ${m}:${String(s).padStart(2, '0')}`;
}

function updateRunTimerDisplay() {
    const el = document.getElementById('runTimerDisplay');
    if (!el) return;
    el.innerText = formatRunTimer(runTimerSeconds);
    el.classList.toggle('run-timer-urgent', runTimerSeconds <= 30);
}

function addRunTime(seconds) {
    runTimerSeconds += seconds;
    updateRunTimerDisplay();
}

function startRunTimer() {
    if (runTimerInterval) clearInterval(runTimerInterval);
    runTimerInterval = setInterval(() => {
        if (gameOver || isWaveClear) return;
        runTimerSeconds--;
        updateRunTimerDisplay();
        if (runTimerSeconds <= 0) {
            runTimerSeconds = 0;
            if (revives > 0) {
                revives--;
                updatePoolDisplay();
                runTimerSeconds = 30;
                updateRunTimerDisplay();
                const messageElement = document.getElementById('gameMessage');
                if (messageElement) {
                    messageElement.innerText = `REVIVE USED! Time ran out but a revive bought you 30 more seconds. (${revives} revive${revives !== 1 ? 's' : ''} left)`;
                    messageElement.style.color = '#33ff66';
                }
            } else {
                clearInterval(runTimerInterval);
                runTimerInterval = null;
                gameOver = true;
                if (inputElement) inputElement.disabled = true;
                if (submitButton) submitButton.disabled = true;
                const messageElement = document.getElementById('gameMessage');
                if (messageElement) {
                    messageElement.innerText = `Enemies captured the area! Out Of Time. You reached Wave ${currentWave}.`;
                    messageElement.style.color = '#ff3333';
                }
                if (continueButton) {
                    continueButton.innerText = 'Play Again';
                    continueButton.style.display = 'inline-block';
                    continueButton.onclick = restartRun;
                }
            }
        }
    }, 1000);
}

function stopRunTimer() {
    if (runTimerInterval) {
        clearInterval(runTimerInterval);
        runTimerInterval = null;
    }
}

function clearOvercharger() {
    if (overchargerTimer) {
        clearInterval(overchargerTimer);
        overchargerTimer = null;
    }
    overchargerActive = false;
    overchargerTimeLeft = 0;
    const el = document.getElementById("overchargerDisplay");
    if (el) el.style.display = "none";
    updatePerksEmptyState();
}

function startOvercharger() {
    clearOvercharger();
    overchargerActive = true;
    overchargerTimeLeft = 12;
    const el = document.getElementById("overchargerDisplay");
    if (el) {
        el.innerHTML = `<img class="perk-icon" src="images/icons/overcharger.png" alt=""><span id="overchargerTimeText">Overcharger: ${overchargerTimeLeft}s</span>`;
        el.style.display = "inline-block";
    }
    updatePerksEmptyState();
    overchargerTimer = setInterval(() => {
        overchargerTimeLeft--;
        const textEl = document.getElementById("overchargerTimeText");
        if (textEl) textEl.innerText = `Overcharger: ${overchargerTimeLeft}s`;
        if (overchargerTimeLeft <= 0) {
            clearOvercharger();
        }
    }, 1000);
}

function initializeGameSession() {
    MAX_GUESSES = 6;

    if (activePool.length <= MIN_POOL_SIZE) {
        showEndScreen();
        return;
    }

    const wasOverchargerPending = overchargerPending;
    clearOvercharger();
    if (typeof Modifiers !== "undefined") {
        Modifiers.resetAll();
    }
    if (wasOverchargerPending) {
        overchargerPending = false;
        setTimeout(startOvercharger, 0);
    }

    const secretKey = activePool[Math.floor(Math.random() * activePool.length)];
    secretEnemy = enemyDatabase[secretKey];
    gameOver = false;
    isWaveClear = false;
    guessCount = 0;
    bountyGuessCount = 0;
    guessedEnemiesList = [];

    advanceBounty();
    const bountyName = bountyKey && isBountyWave() ? enemyDatabase[bountyKey].name : (bountyKey ? enemyDatabase[bountyKey].name : 'none');
    console.log(`Target: ${secretEnemy.name}`);
    console.log(`Bounty: ${bountyName}`);

    if (waveIndicator) waveIndicator.innerText = `Wave: ${currentWave}`;

    updateBountyIndicator();
    updateBountySwapIndicator();
    updatePoolDisplay();

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

    if (typeof Modifiers !== "undefined" && bountyRewardModifier && bountyRewardWavesLeft > 0) {
        Modifiers.enable(bountyRewardModifier);
    }

    if (typeof Modifiers !== "undefined") {
        Modifiers.evaluateWave(currentWave);
        const t2 = typeof window.getSecondSecretEnemy === 'function' ? window.getSecondSecretEnemy() : null;
        const t3 = typeof window.getThirdSecretEnemy === 'function' ? window.getThirdSecretEnemy() : null;
        if (t2 || t3) {
            const extras = [t2, t3].filter(Boolean).map(t => t.name).join(', ');
            console.log(`Extra targets: ${extras}`);
        }
    }
}

function updateBountyIndicator() {
    const indicator = document.getElementById("bountyIndicator");
    if (!indicator) return;
    if (bountyKey && isBountyWave()) {
        indicator.innerText = "⭐ BOUNTY TARGET";
        indicator.style.display = "inline-block";
    } else {
        indicator.style.display = "none";
    }
}

function updateBountySwapIndicator() {
    const el = document.getElementById("bountySwapIndicator");
    if (!el) return;
    if (bountyKey && bountyWavesRemaining > 0) {
        el.innerText = `Bounty swap in ${bountyWavesRemaining} wave${bountyWavesRemaining !== 1 ? "s" : ""}`;
        el.style.display = "inline-block";
    } else {
        el.style.display = "none";
    }
}

function showEndScreen() {
    gameOver = true;
    if (inputElement) inputElement.disabled = true;
    if (submitButton) submitButton.disabled = true;

    const messageElement = document.getElementById("gameMessage");
    if (messageElement) {
        messageElement.innerText = `You've successfully defended against the enemies GG!`;
        messageElement.style.color = "#00ffcc";
    }

    if (continueButton) {
        continueButton.innerText = "Play Again";
        continueButton.style.display = "inline-block";
        continueButton.onclick = restartRun;
    }
}

let skipNextBountyRewardDecrement = false;

function advanceNextWave() {
    if (skipNextBountyRewardDecrement) {
        skipNextBountyRewardDecrement = false;
    } else {
        if (bountyRewardWavesLeft > 0) bountyRewardWavesLeft--;
        if (bountyRewardWavesLeft === 0) bountyRewardModifier = null;
    }
    currentWave++;
    initializeGameSession();
}

function restartRun() {
    activePool = [...allEnemyKeys];
    currentWave = 1;
    revives = 0;
    refillCharges = 0;
    resetCharges = 0;
    runTimerSeconds = 5 * 60;
    waveGuessHistory = {};
    guessDeltaMap = {};
    bountyRewardModifier = null;
    bountyRewardWavesLeft = 0;
    skipNextBountyRewardDecrement = false;
    bountyKey = null;
    bountyWavesRemaining = 0;
    skipNextBountyDecrement = false;
    overchargerPending = false;
    clearOvercharger();
    updateRefillDisplay();
    updateResetDisplay();
    updatePoolDisplay();
    stopRunTimer();
    initializeGameSession();
    startRunTimer();
    updateRunTimerDisplay();
    updatePerksEmptyState();
}

window.setMaxGuesses = function(n) { MAX_GUESSES = n; };

function makeRandomGuess() {
    if (gameOver || isWaveClear) return;
    const assassin = typeof window.getCurrentAssassin === "function" ? window.getCurrentAssassin() : null;
    const vitacharged = typeof window.getVitachargedEnemies === "function" ? window.getVitachargedEnemies() : null;
    const pool = activePool.filter(key =>
        !guessedEnemiesList.includes(key) &&
        (!assassin || enemyDatabase[key].name !== assassin.name) &&
        (!vitacharged || !vitacharged.has(key))
    );
    if (pool.length === 0) return;
    inputElement.value = enemyDatabase[pool[Math.floor(Math.random() * pool.length)]].name;
    submitGuess();
}
window.makeRandomGuess = makeRandomGuess;

function makeRandomWrongGuess() {
    if (gameOver || isWaveClear) return;
    const assassin = typeof window.getCurrentAssassin === "function" ? window.getCurrentAssassin() : null;
    const vitacharged = typeof window.getVitachargedEnemies === "function" ? window.getVitachargedEnemies() : null;
    const pool = activePool.filter(key =>
        !guessedEnemiesList.includes(key) &&
        enemyDatabase[key].name !== secretEnemy.name &&
        (!assassin || enemyDatabase[key].name !== assassin.name) &&
        (!vitacharged || !vitacharged.has(key))
    );
    if (pool.length === 0) return;
    inputElement.value = enemyDatabase[pool[Math.floor(Math.random() * pool.length)]].name;
    submitGuess();
}
window.makeRandomWrongGuess = makeRandomWrongGuess;

function makeAccurateRadarGuess() {
    if (gameOver || isWaveClear) return;
    const pool = activePool.filter(key => {
        if (guessedEnemiesList.includes(key)) return false;
        if (enemyDatabase[key].name === secretEnemy.name) return false;
        const e = enemyDatabase[key];
        return e.health === secretEnemy.health ||
            e.waves === secretEnemy.waves ||
            e.encounter.toLowerCase() === secretEnemy.encounter.toLowerCase();
    });
    const fallback = activePool.filter(k => !guessedEnemiesList.includes(k) && enemyDatabase[k].name !== secretEnemy.name);
    const chosen = pool.length > 0 ? pool : fallback;
    if (chosen.length === 0) return;
    inputElement.value = enemyDatabase[chosen[Math.floor(Math.random() * chosen.length)]].name;
    submitGuess();
}
window.makeAccurateRadarGuess = makeAccurateRadarGuess;


const SPLIT_COLORS = { correct: "#1b663b", partial: "#e6b800", incorrect: "#791a24" };

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
        parts = [td.dataset.value, td.dataset.arrow].filter(p => p);
    }
    let text = parts.filter(p => p !== undefined && p !== "").join(" ");
    if (td.dataset.warning === "true") text += " ⚠";
    td.innerText = text;
};

window.flipArrowChar = function(arrow) {
    return { "↑": "↓", "↓": "↑", "→": "←", "←": "→" }[arrow] || arrow;
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

window.getEligibleCategorySlots = function(row, guessedEnemy, secretEnemy) {
    const se2 = typeof window.getSecondSecretEnemy === "function" ? window.getSecondSecretEnemy() : null;
    const se3 = typeof window.getThirdSecretEnemy === "function" ? window.getThirdSecretEnemy() : null;
    const doubleTrouble = typeof Modifiers !== "undefined" && Modifiers.active.has("doubleTrouble") && !!se2;
    const targets = doubleTrouble ? [secretEnemy, se2, ...(se3 ? [se3] : [])] : [secretEnemy];

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
                if (field.guessedVal !== field.targetVal(target)) slots.push({ cell, side: i, cls: field.cls });
            });
        } else if (field.guessedVal !== field.targetVal(targets[0])) {
            slots.push({ cell, side: null, cls: field.cls });
        }
    });
    return slots;
};

window.addExtraGuessCount = function(n) { guessCount += n; };

window.handleTimerTimeout = function() {
    if (gameOver || isWaveClear) return;
    if (revives > 0) {
        revives--;
        updatePoolDisplay();
        const messageElement = document.getElementById("gameMessage");
        if (messageElement) {
            messageElement.innerText = `REVIVE USED! Security Protocol ran out but a revive absorbed it. (${revives} revive${revives !== 1 ? "s" : ""} left) Target was ${secretEnemy.name}.`;
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
        return;
    }
    triggerFail(`DETECTED BY SECURITY PROTOCOL! Out of time. Target was: ${secretEnemy.name}.`);
};

window.handleAssassinGuess = function(assassinEnemy) {
    if (gameOver || isWaveClear) return;
    if (revives > 0) {
        revives--;
        updatePoolDisplay();
        const messageElement = document.getElementById("gameMessage");
        if (messageElement) {
            messageElement.innerText = `REVIVE USED! ${assassinEnemy.name} tried to assassinate you but a revive blocked it. (${revives} revive${revives !== 1 ? "s" : ""} left) Target was ${secretEnemy.name}.`;
            messageElement.style.color = "#33ff66";
        }
        return;
    }
    triggerFail(`Assassinated by ${assassinEnemy.name}. Target was ${secretEnemy.name}. You reached Wave ${currentWave}.`);
};

function triggerFail(message) {
    if (revives > 0) {
        revives--;
        updatePoolDisplay();
        const messageElement = document.getElementById("gameMessage");
        if (messageElement) {
            messageElement.innerText = `REVIVE USED! ${message} A revive absorbed the failure. (${revives} revive${revives !== 1 ? "s" : ""} left)`;
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
        return;
    }

    const messageElement = document.getElementById("gameMessage");
    if (messageElement) {
        messageElement.innerText = message;
        messageElement.style.color = "#ff3333";
    }

    stopRunTimer();
    gameOver = true;
    if (inputElement) inputElement.disabled = true;
    if (submitButton) submitButton.disabled = true;

    if (continueButton) {
        continueButton.innerText = "Play Again";
        continueButton.style.display = "inline-block";
        continueButton.onclick = restartRun;
    }
}

function applyAimAssist(originalKey) {
    if (typeof Modifiers === "undefined" || !Modifiers.active.has("aimAssist")) return originalKey;
    if (bountyKey && originalKey === bountyKey) return originalKey;
    const guessedEnemy = enemyDatabase[originalKey];
    if (!guessedEnemy) return originalKey;

    const se2 = typeof window.getSecondSecretEnemy === "function" ? window.getSecondSecretEnemy() : null;
    const se3 = typeof window.getThirdSecretEnemy === "function" ? window.getThirdSecretEnemy() : null;
    const doubleTroubleActive = Modifiers.active.has("doubleTrouble") && !!se2;
    const targets = doubleTroubleActive ? [secretEnemy, se2, ...(se3 ? [se3] : [])] : [secretEnemy];

    // If the guess is already an exact match for any active target, never touch it.
    if (targets.some(t => t && guessedEnemy.name === t.name)) return originalKey;

    const lowerOrder = encounterOrder.map(i => i.toLowerCase());
    const gi = lowerOrder.indexOf(guessedEnemy.encounter.toLowerCase());

    let target = null;
    let healthPartial = false, wavesPartial = false, encounterPartial = false;
    for (const t of targets) {
        if (!t) continue;
        const hp = guessedEnemy.health !== t.health && Math.abs(guessedEnemy.health - t.health) <= 50;
        const wp = guessedEnemy.waves !== t.waves && Math.abs(guessedEnemy.waves - t.waves) <= 6;
        const ti = lowerOrder.indexOf(t.encounter.toLowerCase());
        const ep = guessedEnemy.encounter.toLowerCase() !== t.encounter.toLowerCase() &&
            gi !== -1 && ti !== -1 && Math.abs(gi - ti) <= 2;
        if (hp || wp || ep) {
            target = t;
            healthPartial = hp;
            wavesPartial = wp;
            encounterPartial = ep;
            break;
        }
    }

    if (!target) return originalKey;

    if (Modifiers.isBuffed("aimAssist")) {
        const targetKey = activePool.find(key => enemyDatabase[key].name === target.name);
        return targetKey || originalKey;
    }

    const candidates = activePool.filter(key => {
        if (guessedEnemiesList.includes(key)) return false;
        const enemy = enemyDatabase[key];
        if (enemy.name === guessedEnemy.name) return false;
        if (targets.some(t => t && enemy.name === t.name && t !== target)) return false;
        return (healthPartial && enemy.health === target.health) ||
            (wavesPartial && enemy.waves === target.waves) ||
            (encounterPartial && enemy.encounter.toLowerCase() === target.encounter.toLowerCase());
    });
    if (candidates.length === 0) return originalKey;
    return candidates[Math.floor(Math.random() * candidates.length)];
}

function showFilteredOptions() {
    if (gameOver || isWaveClear || !dropdownMenu || !inputElement) return;
    const value = inputElement.value.toLowerCase();
    dropdownMenu.innerHTML = "";

    const filtered = activePool.filter(key => key.includes(value));
    if (filtered.length === 0) { dropdownMenu.style.display = "none"; return; }

    filtered.forEach(key => {
        const item = document.createElement("div");
        item.className = "dropdown-item";

        const img = document.createElement("img");
        img.src = `images/enemies/${key.replace(/\s+/g, "-")}.png`;
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

    if (!enemyDatabase[guessName] || !activePool.includes(guessName)) {
        if (messageElement) {
            messageElement.innerText = "Unknown enemy! Choose an option from the list.";
            messageElement.style.color = "#ff3333";
        }
        return;
    }

    if (messageElement) messageElement.innerText = "";

    guessName = applyAimAssist(guessName);

    if (!overchargerActive) guessCount++;
    bountyGuessCount++;
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
        img.src = `images/enemies/${guessedEnemy.name.toLowerCase().replace(/\s+/g, "-")}.png`;
        img.alt = guessedEnemy.name;
        img.className = "table-enemy-icon";
        img.onerror = function() { this.style.display = "none"; };
        const textSpan = document.createElement("span");
        textSpan.innerText = guessedEnemy.name;
        wrapper.appendChild(img);
        wrapper.appendChild(textSpan);
        td.appendChild(wrapper);

        const isDummy = n => n.toLowerCase().startsWith("dummy ");
        const isOld = n => n.toLowerCase().startsWith("old ");
        const pdcGroup = new Set(["pdc kit","governor kit","old pdc","mads kit","vehicle pdc","adc","sprayer kit","turret kit"]);

        if (guessedEnemy.name === targetEnemy.name) td.classList.add("cell-correct");
        else if (isDummy(guessedEnemy.name) && isDummy(targetEnemy.name)) td.classList.add("cell-partial");
        else if (isOld(guessedEnemy.name) && isOld(targetEnemy.name)) td.classList.add("cell-partial");
        else if (pdcGroup.has(guessedEnemy.name.toLowerCase()) && pdcGroup.has(targetEnemy.name.toLowerCase())) td.classList.add("cell-partial");
        else td.classList.add("cell-incorrect");
        return td;
    }

    function createCell(guessedValue, targetValue, displayString, extraClass = "") {
        const td = document.createElement("td");
        if (extraClass) td.classList.add(extraClass);
        td.innerText = displayString;
        td.classList.add(guessedValue === targetValue ? "cell-correct" : "cell-incorrect");
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
            td.classList.add(Math.abs(guessedValue - targetValue) <= threshold ? "cell-partial" : "cell-incorrect");
        }
        window.redrawCategoryCell(td);
        return td;
    }

    function createEncounterCell(guessedEncounter, targetEncounter, threshold, extraClass = "") {
        const td = document.createElement("td");
        if (extraClass) td.classList.add(extraClass);
        td.dataset.value = guessedEncounter;
        const lowerOrder = encounterOrder.map(i => i.toLowerCase());
        const gi = lowerOrder.indexOf(guessedEncounter.toLowerCase());
        const ti = lowerOrder.indexOf(targetEncounter.toLowerCase());
        if (gi === ti) {
            td.dataset.arrow = "";
            td.classList.add("cell-correct");
        } else {
            td.dataset.arrow = gi < ti ? "→" : "←";
            td.classList.add((gi !== -1 && ti !== -1 && Math.abs(gi - ti) <= threshold) ? "cell-partial" : "cell-incorrect");
        }
        window.redrawCategoryCell(td);
        return td;
    }

    function nameMatchStatus(guessedEnemy, target) {
        const isDummy = n => n.toLowerCase().startsWith("dummy ");
        const isOld = n => n.toLowerCase().startsWith("old ");
        const pdcGroup = new Set(["pdc kit","governor kit","old pdc","mads kit","vehicle pdc","adc","sprayer kit","turret kit"]);
        if (guessedEnemy.name === target.name) return "correct";
        if (isDummy(guessedEnemy.name) && isDummy(target.name)) return "partial";
        if (isOld(guessedEnemy.name) && isOld(target.name)) return "partial";
        if (pdcGroup.has(guessedEnemy.name.toLowerCase()) && pdcGroup.has(target.name.toLowerCase())) return "partial";
        return "incorrect";
    }

    function createSplitNameCell(guessedEnemy, targets) {
        const td = document.createElement("td");
        td.className = "name-cell cell-name";
        const wrapper = document.createElement("div");
        wrapper.className = "name-cell-wrapper";
        const img = document.createElement("img");
        img.src = `images/enemies/${guessedEnemy.name.toLowerCase().replace(/\s+/g, "-")}.png`;
        img.alt = guessedEnemy.name;
        img.className = "table-enemy-icon";
        img.onerror = function() { this.style.display = "none"; };
        const textSpan = document.createElement("span");
        textSpan.innerText = guessedEnemy.name;
        wrapper.appendChild(img);
        wrapper.appendChild(textSpan);
        td.appendChild(wrapper);
        window.applySplitBackground(td, targets.map(t => nameMatchStatus(guessedEnemy, t)));
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
        return { arrow: guessedValue < targetValue ? "↑" : "↓", status: Math.abs(guessedValue - targetValue) <= threshold ? "partial" : "incorrect" };
    }

    function createSplitNumericCell(guessedValue, targetValues, threshold, extraClass = "") {
        const td = document.createElement("td");
        if (extraClass) td.classList.add(extraClass);
        td.dataset.value = guessedValue;
        const results = targetValues.map(tv => numericArrowAndStatus(guessedValue, tv, threshold));
        results.forEach((r, i) => { td.dataset[`arrow${i}`] = r.arrow; });
        window.applySplitBackground(td, results.map(r => r.status));
        window.redrawCategoryCell(td);
        return td;
    }

    function encounterArrowAndStatus(gi, ti, threshold) {
        if (gi === ti) return { arrow: "", status: "correct" };
        return { arrow: gi < ti ? "→" : "←", status: (gi !== -1 && ti !== -1 && Math.abs(gi - ti) <= threshold) ? "partial" : "incorrect" };
    }

    function createSplitEncounterCell(guessedEncounter, targetEncounters, threshold, extraClass = "") {
        const td = document.createElement("td");
        if (extraClass) td.classList.add(extraClass);
        td.dataset.value = guessedEncounter;
        const lowerOrder = encounterOrder.map(i => i.toLowerCase());
        const gi = lowerOrder.indexOf(guessedEncounter.toLowerCase());
        const results = targetEncounters.map(te => encounterArrowAndStatus(gi, lowerOrder.indexOf(te.toLowerCase()), threshold));
        results.forEach((r, i) => { td.dataset[`arrow${i}`] = r.arrow; });
        window.applySplitBackground(td, results.map(r => r.status));
        window.redrawCategoryCell(td);
        return td;
    }

    const se3forRow = typeof window.getThirdSecretEnemy === "function" ? window.getThirdSecretEnemy() : null;
    const doubleTroubleActive = typeof Modifiers !== "undefined" && Modifiers.active.has("doubleTrouble") && secretEnemy2;
    const doubleTroubleTargets = doubleTroubleActive
        ? [secretEnemy, secretEnemy2, ...(se3forRow ? [se3forRow] : [])]
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

    if (typeof Modifiers !== "undefined") Modifiers.onGuess(row, guessedEnemy, secretEnemy);

    if (bountyKey && !isBountyWave()) {
        const bountyEnemy = enemyDatabase[bountyKey];
        if (bountyEnemy) {
            const lowerOrderForBounty = encounterOrder.map(i => i.toLowerCase());
            const gi = lowerOrderForBounty.indexOf(guessedEnemy.encounter.toLowerCase());
            const bi = lowerOrderForBounty.indexOf(bountyEnemy.encounter.toLowerCase());

            const bountyChecks = [
                { cls: "cell-health", correct: guessedEnemy.health === bountyEnemy.health, close: Math.abs(guessedEnemy.health - bountyEnemy.health) <= 50 },
                { cls: "cell-waves", correct: guessedEnemy.waves === bountyEnemy.waves, close: Math.abs(guessedEnemy.waves - bountyEnemy.waves) <= 6 },
                { cls: "cell-encounter", correct: gi !== -1 && bi !== -1 && gi === bi, close: gi !== -1 && bi !== -1 && Math.abs(gi - bi) <= 2 }
            ];

            bountyChecks.forEach(({ cls, correct, close }) => {
                if (!close) return;
                const cell = row.querySelector(`.${cls}`);
                if (!cell) return;
                const icon = document.createElement("span");
                icon.className = "bounty-proximity-icon";
                icon.innerText = correct ? "✅" : "🎯";
                cell.appendChild(icon);
            });
        }
    }

    if (tbody) tbody.insertBefore(row, tbody.firstChild);
    if (typeof Modifiers !== "undefined") Modifiers.afterGuess();

    inputElement.value = "";
    if (dropdownMenu) dropdownMenu.style.display = "none";

    if (bountyKey && guessName === bountyKey) {
        const foundBountyName = enemyDatabase[bountyKey].name;
        if (doubleTroubleActive && Array.isArray(Modifiers.doubleTroubleFound)) {
            doubleTroubleTargets.forEach((target, i) => {
                if (Modifiers.doubleTroubleFound[i]) {
                    const k = activePool.find(key => enemyDatabase[key].name === target.name);
                    if (k) retireEnemy(k);
                }
            });
        }
        const roll = Math.floor(Math.random() * 5);
        let rewardName = null;
        if (roll === 0) {
            revives++;
            rewardName = `Revive (${revives} total)`;
        } else if (roll === 1) {
            const available = BOUNTY_POSITIVE_MODIFIERS.filter(k =>
                typeof Modifiers !== "undefined" && Modifiers.definitions[k]
            );
            if (available.length > 0) {
                bountyRewardModifier = available[Math.floor(Math.random() * available.length)];
                bountyRewardWavesLeft = 3;
                skipNextBountyRewardDecrement = true;
                const def = Modifiers.definitions[bountyRewardModifier];
                rewardName = `${typeof def.name === "function" ? def.name(false) : def.name} for the next 3 waves`;
            }
        } else if (roll === 2) {
            overchargerPending = true;
            rewardName = "Overcharger — unlimited guesses for 12 seconds next wave (won't count toward your limit)";
        } else if (roll === 3) {
            refillCharges++;
            updateRefillDisplay();
            rewardName = "Refill charge — click the Refill button to reset your guesses whenever you want";
        } else {
            resetCharges++;
            updateResetDisplay();
            rewardName = "Reset timer charge — click the timer to restore it to 5:00 whenever you want";
        }
        addRunTime(60);
        bountyWavesRemaining = 0;
        pickBounty();
        skipNextBountyDecrement = true;
        updateBountyIndicator();
        updateBountySwapIndicator();
        updatePoolDisplay();
        if (messageElement) {
            let msg = `🎯 Bounty found! Reward: ${rewardName}.`;
            msg += ` Auto-advancing.`;
            messageElement.innerText = msg;
            messageElement.style.color = "#ffe44d";
        }
        isWaveClear = true;
        if (inputElement) inputElement.disabled = true;
        if (submitButton) submitButton.disabled = true;
        if (continueButton) {
            continueButton.innerText = "Continue";
            continueButton.style.display = "inline-block";
            continueButton.onclick = advanceNextWave;
        }
        return;
    }

    const secretKeyForRetire = activePool.find(k => enemyDatabase[k].name === secretEnemy.name);

    function handleWaveSuccess(targetNames) {
        addRunTime(30);
        if (doubleTroubleActive && doubleTroubleTargets) {
            doubleTroubleTargets.forEach(target => {
                const k = activePool.find(key => enemyDatabase[key].name === target.name);
                if (k) retireEnemy(k);
            });
        } else {
            if (secretKeyForRetire) retireEnemy(secretKeyForRetire);
        }

        const wasBounty = isBountyWave();

        updatePoolDisplay();

        if (messageElement) {
            const doublePart = targetNames ? `All targets found: ${targetNames}! ` : ""
            let msg = `SUCCESS! ${doublePart}Wave ${currentWave} Complete! Enemy retired from pool. (${activePool.length} remaining)`;
            if (wasBounty) msg += ` The target was also the bounty!`;
            const assassin = typeof window.getCurrentAssassin === "function" ? window.getCurrentAssassin() : null;
            if (assassin) msg += ` The assassin was ${assassin.name}.`;
            messageElement.innerText = msg;
            messageElement.style.color = "#00ffcc";
        }

        isWaveClear = true;
        if (inputElement) inputElement.disabled = true;
        if (submitButton) submitButton.disabled = true;

        if (continueButton) {
            if (activePool.length <= MIN_POOL_SIZE) {
                continueButton.innerText = "See Final Score";
                continueButton.onclick = () => { currentWave++; showEndScreen(); };
            } else {
                continueButton.innerText = "Continue";
                continueButton.onclick = advanceNextWave;
            }
            continueButton.style.display = "inline-block";
        }
    }

    if (doubleTroubleActive) {
        if (!Array.isArray(Modifiers.doubleTroubleFound) || Modifiers.doubleTroubleFound.length !== doubleTroubleTargets.length) {
            Modifiers.doubleTroubleFound = new Array(doubleTroubleTargets.length).fill(false);
        }
        doubleTroubleTargets.forEach((target, i) => {
            if (guessedEnemy.name === target.name) {
                Modifiers.doubleTroubleFound[i] = true;
                const k = activePool.find(key => enemyDatabase[key].name === target.name);
                if (k) retireEnemy(k);
            }
        });

        const targetNames = doubleTroubleTargets.map(t => t.name);
        const namesList = targetNames.length === 2
            ? `${targetNames[0]} and ${targetNames[1]}`
            : `${targetNames.slice(0, -1).join(", ")}, and ${targetNames[targetNames.length - 1]}`;

        if (Modifiers.doubleTroubleFound.every(Boolean)) {
            handleWaveSuccess(namesList);
            return;
        }

        if (guessCount >= MAX_GUESSES && !gameOver) {
            const foundNames = targetNames.filter((_, i) => Modifiers.doubleTroubleFound[i]);
            const foundNote = foundNames.length > 0 ? `You found ${foundNames.join(", ")} but not the rest.` : "None of the targets were found.";
            triggerFail(`Out of guesses. The targets were: ${namesList}. ${foundNote} You reached Wave ${currentWave}.`);
            return;
        }

        const foundSoFar = targetNames.filter((_, i) => Modifiers.doubleTroubleFound[i]);
        if (messageElement && foundSoFar.length > 0) {
            messageElement.innerText = `${foundSoFar.join(", ")} confirmed! Keep guessing for the rest.`;
            messageElement.style.color = "#e6b800";
        }
        return;
    }

    if (guessedEnemy.name === secretEnemy.name) {
        handleWaveSuccess(null);
        return;
    }

    if (guessCount >= MAX_GUESSES && !gameOver) {
        triggerFail(`Out of guesses. Target was: ${secretEnemy.name}. You reached Wave ${currentWave}.`);
    }
}
