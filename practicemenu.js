const PRACTICE_MODIFIERS = [
    { key: "cloaked", name: "Cloaked" },
    { key: "jammedRadar", name: "Jammed Radar" },
    { key: "securityProtocol", name: "Security Protocol" },
    { key: "fog", name: "Fog" },
    { key: "sabotage", name: "Sabotage" },
    { key: "weakenedSignal", name: "Weakened Signal" },
    { key: "miscommunication", name: "Miscommunication" },
    { key: "vitacharge", name: "Vitacharge" },
    { key: "assassin", name: "Assassin" },
    { key: "mutilatedDeaths", name: "Mutilated Deaths" },
    { key: "strengthenedSignal", name: "Strengthened Signal" },
    { key: "accurateRadar", name: "Accurate Radar" },
    { key: "extraLife", name: "Extra Life" },
    { key: "aimAssist", name: "Aim Assist" }
];

const PRACTICE_ENEMIES = [
    { key: "administrator", name: "Administrator", type: "Fodder" },
    { key: "cloaker", name: "Cloaker", type: "Fodder" },
    { key: "infantry", name: "Infantry", type: "Fodder" },
    { key: "landmine", name: "Landmine", type: "Fodder" },
    { key: "saboteur", name: "Saboteur", type: "Fodder" },
    { key: "shielder", name: "Shielder", type: "Fodder" },
    { key: "administrant", name: "Administrant", type: "Elite Fodder" },
    { key: "agitator", name: "Agitator", type: "Elite Fodder" },
    { key: "agreement", name: "Agreement", type: "Elite Fodder" },
    { key: "baby", name: "Baby", type: "Elite Fodder" },
    { key: "bombardier", name: "Bombardier", type: "Elite Fodder" },
    { key: "combatant", name: "Combatant", type: "Elite Fodder" },
    { key: "confidant", name: "Confidant", type: "Elite Fodder" },
    { key: "escort shielder", name: "Escort Shielder", type: "Elite Fodder" },
    { key: "fuel tank (agitator)", name: "Fuel Tank (Agitator)", type: "Elite Fodder" },
    { key: "informant", name: "Informant", type: "Elite Fodder" },
    { key: "jagant", name: "Jagant", type: "Elite Fodder" },
    { key: "jagant bomb", name: "Jagant Bomb", type: "Elite Fodder" },
    { key: "observant", name: "Observant", type: "Elite Fodder" },
    { key: "operant", name: "Operant", type: "Elite Fodder" },
    { key: "shield", name: "Shield", type: "Elite Fodder" },
    { key: "squad infantry", name: "Squad Infantry", type: "Elite Fodder" },
    { key: "apu operator", name: "APU Operator", type: "Advanced" },
    { key: "apu-r operator", name: "APU-R Operator", type: "Advanced" },
    { key: "engineer", name: "Engineer", type: "Advanced" },
    { key: "grenadier", name: "Grenadier", type: "Advanced" },
    { key: "gunner", name: "Gunner", type: "Advanced" },
    { key: "jetpacker", name: "Jetpacker", type: "Advanced" },
    { key: "medic", name: "Medic", type: "Advanced" },
    { key: "operator", name: "Operator", type: "Advanced" },
    { key: "sniper", name: "Sniper", type: "Advanced" },
    { key: "tranquilizer", name: "Tranquilizer", type: "Advanced" },
    { key: "adjutant", name: "Adjutant", type: "Elite Advanced" },
    { key: "escort gunner", name: "Escort Gunner", type: "Elite Advanced" },
    { key: "jetnuker", name: "JetNuker", type: "Elite Advanced" },
    { key: "sergeant", name: "Sergeant", type: "Elite Advanced" },
    { key: "apu", name: "APU", type: "Mech" },
    { key: "emplacement", name: "Emplacement", type: "Mech" },
    { key: "fuel tank (tank)", name: "Fuel Tank (Tank)", type: "Mech" },
    { key: "level 1 building", name: "Level 1 Building", type: "Mech" },
    { key: "level 2 building", name: "Level 2 Building", type: "Mech" },
    { key: "level 3 building", name: "Level 3 Building", type: "Mech" },
    { key: "old apu", name: "Old APU", type: "Mech" },
    { key: "platform", name: "Platform", type: "Mech" },
    { key: "ranger", name: "Ranger", type: "Mech" },
    { key: "tank", name: "Tank", type: "Mech" },
    { key: "administrant helicopter", name: "Administrant Helicopter", type: "Elite Mech" },
    { key: "apu-r", name: "APU-R", type: "Elite Mech" },
    { key: "helicopter sentry", name: "Helicopter Sentry", type: "Elite Mech" },
    { key: "platform-a", name: "Platform-A", type: "Elite Mech" },
    { key: "a-10", name: "A-10", type: "Boss" },
    { key: "achilles", name: "Achilles", type: "Boss" },
    { key: "ares", name: "Ares", type: "Boss" },
    { key: "chassis", name: "Chassis", type: "Boss" },
    { key: "daedalus", name: "Daedalus", type: "Boss" },
    { key: "dreadnought", name: "Dreadnought", type: "Boss" },
    { key: "dreadnought armor (backpack)", name: "Dreadnought Armor (Backpack)", type: "Boss" },
    { key: "drone", name: "Drone", type: "Boss" },
    { key: "fuel tank (prometheus)", name: "Fuel Tank (Prometheus)", type: "Boss" },
    { key: "fusilier", name: "Fusilier", type: "Boss" },
    { key: "gaia", name: "Gaia", type: "Boss" },
    { key: "hermes", name: "Hermes", type: "Boss" },
    { key: "hermes pods", name: "Hermes Pods", type: "Boss" },
    { key: "lelantos", name: "Lelantos", type: "Boss" },
    { key: "london prime", name: "London Prime", type: "Boss" },
    { key: "manglenether345", name: "MangleNether345", type: "Boss" },
    { key: "mart", name: "Mart", type: "Boss" },
    { key: "mastermind", name: "Mastermind", type: "Boss" },
    { key: "mega joe", name: "Mega Joe", type: "Boss" },
    { key: "prometheus", name: "Prometheus", type: "Boss" },
    { key: "sparchilles", name: "Sparchilles", type: "Boss" },
    { key: "sparta", name: "Sparta", type: "Boss" },
    { key: "tempest", name: "Tempest", type: "Boss" },
    { key: "the wicked", name: "The Wicked", type: "Boss" },
    { key: "trident", name: "Trident", type: "Boss" },
    { key: "zeus", name: "Zeus", type: "Boss" }
];

const ENEMY_TYPE_ORDER = ["Fodder", "Elite Fodder", "Advanced", "Elite Advanced", "Mech", "Elite Mech", "Boss"];

document.addEventListener("DOMContentLoaded", () => {
    const listContainer = document.getElementById("practiceModifierList");
    const selectAllBtn = document.getElementById("selectAllBtn");
    const clearAllBtn = document.getElementById("clearAllBtn");
    const startBtn = document.getElementById("startPracticeBtn");

    const enemyListContainer = document.getElementById("practiceEnemyList");
    const selectAllEnemiesBtn = document.getElementById("selectAllEnemiesBtn");
    const clearAllEnemiesBtn = document.getElementById("clearAllEnemiesBtn");
    const enemySearchInput = document.getElementById("enemySearchInput");

    // ---- Modifiers ----
    PRACTICE_MODIFIERS.forEach(mod => {
        const row = document.createElement("div");
        row.className = "practice-modifier-row";

        const nameSpan = document.createElement("span");
        nameSpan.className = "practice-modifier-name";
        nameSpan.innerText = mod.name;

        const enableLabel = document.createElement("label");
        enableLabel.className = "practice-checkbox-label";
        const enableCheckbox = document.createElement("input");
        enableCheckbox.type = "checkbox";
        enableCheckbox.className = "practice-enable-checkbox";
        enableCheckbox.dataset.key = mod.key;
        enableLabel.appendChild(enableCheckbox);
        enableLabel.appendChild(document.createTextNode(" Enable"));

        const vitaragedLabel = document.createElement("label");
        vitaragedLabel.className = "practice-checkbox-label practice-vitaraged-label";
        const vitaragedCheckbox = document.createElement("input");
        vitaragedCheckbox.type = "checkbox";
        vitaragedCheckbox.className = "practice-vitaraged-checkbox";
        vitaragedCheckbox.dataset.key = mod.key;
        vitaragedCheckbox.disabled = true;
        vitaragedLabel.appendChild(vitaragedCheckbox);
        vitaragedLabel.appendChild(document.createTextNode(" Vitaraged"));

        enableCheckbox.addEventListener("change", () => {
            vitaragedCheckbox.disabled = !enableCheckbox.checked;
            if (!enableCheckbox.checked) vitaragedCheckbox.checked = false;
        });

        row.appendChild(nameSpan);
        row.appendChild(enableLabel);
        row.appendChild(vitaragedLabel);
        listContainer.appendChild(row);
    });

    selectAllBtn.addEventListener("click", () => {
        listContainer.querySelectorAll(".practice-enable-checkbox").forEach(cb => {
            cb.checked = true;
            cb.dispatchEvent(new Event("change"));
        });
    });

    clearAllBtn.addEventListener("click", () => {
        listContainer.querySelectorAll(".practice-enable-checkbox").forEach(cb => {
            cb.checked = false;
            cb.dispatchEvent(new Event("change"));
        });
    });

    // ---- Enemy roster ----
    const grouped = {};
    PRACTICE_ENEMIES.forEach(enemy => {
        if (!grouped[enemy.type]) grouped[enemy.type] = [];
        grouped[enemy.type].push(enemy);
    });

    ENEMY_TYPE_ORDER.forEach(type => {
        const enemies = grouped[type];
        if (!enemies || enemies.length === 0) return;

        const groupDiv = document.createElement("div");
        groupDiv.className = "practice-enemy-group";

        const header = document.createElement("div");
        header.className = "practice-enemy-group-header";
        header.innerText = type;
        groupDiv.appendChild(header);

        enemies.forEach(enemy => {
            const row = document.createElement("div");
            row.className = "practice-modifier-row practice-enemy-row";
            row.dataset.enemyName = enemy.name.toLowerCase();

            const nameSpan = document.createElement("span");
            nameSpan.className = "practice-modifier-name";
            nameSpan.innerText = enemy.name;

            const label = document.createElement("label");
            label.className = "practice-checkbox-label";
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.className = "practice-enemy-checkbox";
            checkbox.dataset.key = enemy.key;
            checkbox.checked = true;
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(" Include"));

            row.appendChild(nameSpan);
            row.appendChild(label);
            groupDiv.appendChild(row);
        });

        enemyListContainer.appendChild(groupDiv);
    });

    if (selectAllEnemiesBtn) {
        selectAllEnemiesBtn.addEventListener("click", () => {
            enemyListContainer.querySelectorAll(".practice-enemy-checkbox").forEach(cb => {
                cb.checked = true;
            });
        });
    }

    if (clearAllEnemiesBtn) {
        clearAllEnemiesBtn.addEventListener("click", () => {
            enemyListContainer.querySelectorAll(".practice-enemy-checkbox").forEach(cb => {
                cb.checked = false;
            });
        });
    }

    if (enemySearchInput) {
        enemySearchInput.addEventListener("input", () => {
            const query = enemySearchInput.value.trim().toLowerCase();
            enemyListContainer.querySelectorAll(".practice-enemy-group").forEach(group => {
                let anyVisible = false;
                group.querySelectorAll(".practice-enemy-row").forEach(row => {
                    const match = !query || row.dataset.enemyName.includes(query);
                    row.style.display = match ? "" : "none";
                    if (match) anyVisible = true;
                });
                group.style.display = anyVisible ? "" : "none";
            });
        });
    }

    // ---- Start ----
    startBtn.addEventListener("click", () => {
        const enabled = Array.from(listContainer.querySelectorAll(".practice-enable-checkbox"))
            .filter(cb => cb.checked)
            .map(cb => cb.dataset.key);

        const vitaraged = Array.from(listContainer.querySelectorAll(".practice-vitaraged-checkbox"))
            .filter(cb => cb.checked && !cb.disabled)
            .map(cb => cb.dataset.key);

        const roster = Array.from(enemyListContainer.querySelectorAll(".practice-enemy-checkbox"))
            .filter(cb => cb.checked)
            .map(cb => cb.dataset.key);

        const randomizeCheckbox = document.getElementById("randomizeModifiersCheckbox");
        const randomize = !!(randomizeCheckbox && randomizeCheckbox.checked);

        let warning = document.getElementById("enemyRosterWarning");

        if (roster.length === 0) {
            if (!warning) {
                warning = document.createElement("p");
                warning.id = "enemyRosterWarning";
                warning.className = "practice-warning";
                warning.innerText = "Select at least one enemy to start.";
                enemyListContainer.insertAdjacentElement("afterend", warning);
            }
            return;
        }

        if (warning) warning.remove();

        localStorage.setItem("practiceModifierConfig", JSON.stringify({ enabled, vitaraged, randomize }));
        localStorage.setItem("practiceEnemyRoster", JSON.stringify(roster));
        window.location.href = "practice.html";
    });
});
