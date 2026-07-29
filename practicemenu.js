const PRACTICE_MODIFIERS = [
    { key: "cloaked", name: "Cloaked" },
    { key: "jammedRadar", name: "Jammed Radar" },
    { key: "securityProtocol", name: "Security Protocol" },
    { key: "fog", name: "Fog" },
    { key: "sabotage", name: "Sabotage" },
    { key: "weakenedSignal", name: "Sapped Communications" },
    { key: "miscommunication", name: "Miscommunication" },
    { key: "vitacharge", name: "Vitacharge" },
    { key: "assassin", name: "Assassin" },
    { key: "mutilatedDeaths", name: "Mutilated Deaths" },
    { key: "strengthenedSignal", name: "Strengthened Signal" },
    { key: "accurateRadar", name: "Accurate Radar" },
    { key: "extraLife", name: "Resuscitator" },
    { key: "aimAssist", name: "Aim Assist" },
    { key: "colorblind", name: "Colorblind" },
    { key: "chubbyTroops", name: "Chubby Troops" }
];

const PRACTICE_ENEMIES = [
    { key: "infantry", name: "Infantry", type: "Fodder" },
    { key: "cloaker", name: "Cloaker", type: "Fodder" },
    { key: "shielder", name: "Shielder", type: "Fodder" },
    { key: "saboteur", name: "Saboteur", type: "Fodder" },
    { key: "landmine", name: "Landmine", type: "Fodder" },
    { key: "administrator", name: "Administrator", type: "Fodder" },
    { key: "grenadier", name: "Grenadier", type: "Advanced" },
    { key: "jetpacker", name: "Jetpacker", type: "Advanced" },
    { key: "gunner", name: "Gunner", type: "Advanced" },
    { key: "sniper", name: "Sniper", type: "Advanced" },
    { key: "tranquilizer", name: "Tranquilizer", type: "Advanced" },
    { key: "medic", name: "Medic", type: "Advanced" },
    { key: "engineer", name: "Engineer", type: "Advanced" },
    { key: "level 1 building", name: "Level 1 Building", type: "Mech" },
    { key: "level 2 building", name: "Level 2 Building", type: "Mech" },
    { key: "level 3 building", name: "Level 3 Building", type: "Mech" },
    { key: "ranger", name: "Ranger", type: "Mech" },
    { key: "apu", name: "APU", type: "Mech" },
    { key: "apu operator", name: "APU Operator", type: "Advanced" },
    { key: "apu-r", name: "APU-R", type: "Elite Mech" },
    { key: "apu-r operator", name: "APU-R Operator", type: "Advanced" },
    { key: "tank", name: "Tank", type: "Mech" },
    { key: "fuel tank (tank)", name: "Fuel Tank (Tank)", type: "Mech" },
    { key: "platform", name: "Platform", type: "Mech" },
    { key: "platform-a", name: "Platform-A", type: "Elite Mech" },
    { key: "emplacement", name: "Emplacement", type: "Mech" },
    { key: "helicopter sentry", name: "Helicopter Sentry", type: "Elite Mech" },
    { key: "administrant helicopter", name: "Administrant Helicopter", type: "Elite Mech" },
    { key: "combatant", name: "Combatant", type: "Elite Fodder" },
    { key: "informant", name: "Informant", type: "Elite Fodder" },
    { key: "confidant", name: "Confidant", type: "Elite Fodder" },
    { key: "agitator", name: "Agitator", type: "Elite Fodder" },
    { key: "fuel tank (agitator)", name: "Fuel Tank (Agitator)", type: "Elite Fodder" },
    { key: "agreement", name: "Agreement", type: "Elite Fodder" },
    { key: "jagant", name: "Jagant", type: "Elite Fodder" },
    { key: "jagant bomb", name: "Jagant Bomb", type: "Elite Fodder" },
    { key: "bombardier", name: "Bombardier", type: "Elite Fodder" },
    { key: "operant", name: "Operant", type: "Elite Fodder" },
    { key: "sergeant", name: "Sergeant", type: "Elite Advanced" },
    { key: "adjutant", name: "Adjutant", type: "Elite Advanced" },
    { key: "observant", name: "Observant", type: "Elite Fodder" },
    { key: "administrant", name: "Administrant", type: "Elite Fodder" },
    { key: "fusilier", name: "Fusilier", type: "Boss" },
    { key: "daedalus", name: "Daedalus", type: "Boss" },
    { key: "tempest", name: "Tempest", type: "Boss" },
    { key: "lelantos", name: "Lelantos", type: "Boss" },
    { key: "gaia", name: "Gaia", type: "Boss" },
    { key: "escort shielder", name: "Escort Shielder", type: "Elite Fodder" },
    { key: "shield", name: "Shield", type: "Elite Fodder" },
    { key: "escort gunner", name: "Escort Gunner", type: "Elite Advanced" },
    { key: "prometheus", name: "Prometheus", type: "Boss" },
    { key: "fuel tank (prometheus)", name: "Fuel Tank (Prometheus)", type: "Boss" },
    { key: "hermes", name: "Hermes", type: "Boss" },
    { key: "hermes pods", name: "Hermes Pods", type: "Boss" },
    { key: "sparta", name: "Sparta", type: "Boss" },
    { key: "trident", name: "Trident", type: "Boss" },
    { key: "achilles", name: "Achilles", type: "Boss" },
    { key: "drone", name: "Drone", type: "Boss" },
    { key: "zeus", name: "Zeus", type: "Boss" },
    { key: "dreadnought", name: "Dreadnought", type: "Boss" },
    { key: "dreadnought armor", name: "Dreadnought Armor", type: "Boss" },
    { key: "chassis", name: "Chassis", type: "Boss" },
    { key: "mastermind", name: "Mastermind", type: "Boss" },
    { key: "ares", name: "Ares", type: "Boss" },
    { key: "london prime", name: "London Prime", type: "Boss" },
    { key: "manglenether345", name: "MangleNether345", type: "Boss" },
    { key: "a-10", name: "A-10", type: "Boss" },
    { key: "the wicked", name: "The Wicked", type: "Boss" },
    { key: "sparchilles", name: "Sparchilles", type: "Boss" },
    { key: "mega joe", name: "Mega Joe", type: "Boss" },
    { key: "baby", name: "Baby", type: "Elite Fodder" },
    { key: "jetnuker", name: "JetNuker", type: "Elite Advanced" },
    { key: "mart", name: "Mart", type: "Boss" },
    { key: "squad infantry", name: "Squad Infantry", type: "Elite Fodder" },
    { key: "old apu", name: "Old APU", type: "Mech" },
    { key: "operator", name: "Operator", type: "Advanced" },
    { key: "apc", name: "APC", type: "Mech" },
    { key: "grenade", name: "Grenade", type: "Nightmare" },
    { key: "level 1 sentry", name: "Level 1 Sentry", type: "Nightmare" },
    { key: "level 2 sentry", name: "Level 2 Sentry", type: "Nightmare" },
    { key: "level 3 sentry", name: "Level 3 Sentry", type: "Nightmare" },
    { key: "level 1 teleporter", name: "Level 1 Teleporter", type: "Nightmare" },
    { key: "level 2 teleporter", name: "Level 2 Teleporter", type: "Nightmare" },
    { key: "level 3 teleporter", name: "Level 3 Teleporter", type: "Nightmare" },
    { key: "lightning grenade", name: "Lightning Grenade", type: "Nightmare" },
    { key: "squad gunner", name: "Squad Gunner", type: "Nightmare" },
    { key: "squad medic", name: "Squad Medic", type: "Nightmare" },
    { key: "squad officer", name: "Squad Officer", type: "Nightmare" },
    { key: "squad strider", name: "Squad Strider", type: "Nightmare" },
    { key: "old prometheus", name: "Old Prometheus", type: "Nightmare" },
    { key: "old sparta", name: "Old Sparta", type: "Nightmare" },
    { key: "old fusilier", name: "Old Fusilier", type: "Nightmare" },
    { key: "old trident", name: "Old Trident", type: "Nightmare" },
    { key: "orb", name: "Orb", type: "Nightmare" },
    { key: "old medic", name: "Old Medic", type: "Nightmare" },
    { key: "old gaia", name: "Old Gaia", type: "Nightmare" },
    { key: "gaia sensei", name: "Gaia Sensei", type: "Nightmare" },
    { key: "gaia pre", name: "Gaia PRE", type: "Nightmare" },
    { key: "daedalus pre", name: "Daedalus PRE", type: "Nightmare" },
    { key: "achilles (ht)", name: "Achilles (Ht)", type: "Nightmare" },
    { key: "prometheustest", name: "PrometheusTest", type: "Nightmare" },
    { key: "wall of jericho", name: "Wall Of Jericho", type: "Nightmare" },
    { key: "icarus", name: "Icarus", type: "Nightmare" },
    { key: "icarus helicopter", name: "Icarus Helicopter", type: "Nightmare" },
    { key: "vehicle pdc", name: "Vehicle PDC", type: "Nightmare" },
    { key: "pdc kit", name: "PDC Kit", type: "Nightmare" },
    { key: "governor kit", name: "Governor Kit", type: "Nightmare" },
    { key: "mads kit", name: "MADS Kit", type: "Nightmare" },
    { key: "old pdc", name: "Old PDC", type: "Nightmare" },
    { key: "adc", name: "ADC", type: "Nightmare" },
    { key: "sprayer kit", name: "Sprayer Kit", type: "Nightmare" },
    { key: "turret kit", name: "Turret Kit", type: "Nightmare" },
    { key: "barrier kit", name: "Barrier Kit", type: "Nightmare" },
    { key: "brace", name: "BRACE", type: "Nightmare" },
    { key: "hallucinator kit", name: "Hallucinator Kit", type: "Nightmare" },
    { key: "stonehedge kit", name: "Stonehedge Kit", type: "Nightmare" },
    { key: "fast", name: "FAST", type: "Nightmare" },
    { key: "tripwire trip", name: "Tripwire trip", type: "Nightmare" },
    { key: "supplier", name: "Supplier", type: "Nightmare" },
    { key: "artillery", name: "Artillery", type: "Nightmare" },
    { key: "dummy infantry", name: "Dummy Infantry", type: "Nightmare" },
    { key: "dummy cloaker", name: "Dummy Cloaker", type: "Nightmare" },
    { key: "dummy shielder", name: "Dummy Shielder", type: "Nightmare" },
    { key: "dummy saboteur", name: "Dummy Saboteur", type: "Nightmare" },
    { key: "dummy grenadier", name: "Dummy Grenadier", type: "Nightmare" },
    { key: "dummy jetpacker", name: "Dummy Jetpacker", type: "Nightmare" },
    { key: "dummy gunner", name: "Dummy Gunner", type: "Nightmare" },
    { key: "dummy sniper", name: "Dummy Sniper", type: "Nightmare" },
    { key: "dummy tranquilizer", name: "Dummy Tranquilizer", type: "Nightmare" },
    { key: "dummy medic", name: "Dummy Medic", type: "Nightmare" },
    { key: "dummy apu", name: "Dummy APU", type: "Nightmare" },
    { key: "dummy tank", name: "Dummy Tank", type: "Nightmare" },
    { key: "fuel tank (dummy tank)", name: "Fuel Tank (Dummy Tank)", type: "Nightmare" },
    { key: "dummy platform", name: "Dummy Platform", type: "Nightmare" },
    { key: "dummy combatant", name: "Dummy Combatant", type: "Nightmare" },
    { key: "dummy informant", name: "Dummy Informant", type: "Nightmare" },
    { key: "dummy confidant", name: "Dummy Confidant", type: "Nightmare" },
    { key: "dummy agitator", name: "Dummy Agitator", type: "Nightmare" },
    { key: "dummy jagant", name: "Dummy Jagant", type: "Nightmare" },
    { key: "dummy bombardier", name: "Dummy Bombardier", type: "Nightmare" },
    { key: "dummy operant", name: "Dummy Operant", type: "Nightmare" },
    { key: "dummy fusilier", name: "Dummy Fusilier", type: "Nightmare" },
    { key: "dummy daedalus", name: "Dummy Daedalus", type: "Nightmare" },
    { key: "dummy tempest", name: "Dummy Tempest", type: "Nightmare" },
    { key: "dummy lelantos", name: "Dummy Lelantos", type: "Nightmare" },
    { key: "dummy prometheus", name: "Dummy Prometheus", type: "Nightmare" },
    { key: "fuel tank (dummy prometheus)", name: "Fuel Tank (Dummy Prometheus)", type: "Nightmare" },
    { key: "dummy hermes", name: "Dummy Hermes", type: "Nightmare" },
    { key: "dummy hermes pods", name: "Dummy Hermes Pods", type: "Nightmare" },
    { key: "dummy sparta", name: "Dummy Sparta", type: "Nightmare" },
    { key: "dummy trident", name: "Dummy Trident", type: "Nightmare" },
    { key: "refugee", name: "Refugee", type: "Nightmare" },
    { key: "refugee2", name: "Refugee2", type: "Nightmare" },
    { key: "apu backup", name: "APU Backup", type: "Nightmare" },
    { key: "apu (unoptimized)", name: "APU (unoptimized)", type: "Nightmare" },
    { key: "punching bag", name: "Punching Bag", type: "Nightmare" },
    { key: "punching bag resistant", name: "Punching Bag Resistant", type: "Nightmare" },
    { key: "punching bag boss", name: "Punching Bag Boss", type: "Nightmare" },
    { key: "punching bag armored", name: "Punching Bag Armored", type: "Nightmare" },
];

const ENEMY_TYPE_ORDER = ["Fodder", "Elite Fodder", "Advanced", "Elite Advanced", "Mech", "Elite Mech", "Boss", "Nightmare"];

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
            checkbox.checked = enemy.type !== "Nightmare";
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
