const SANDBOX_MODIFIERS = [
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
    { key: "doubleTrouble", name: "Double Trouble" }
];

const SANDBOX_ITEMS = [
    { key: "rifle", name: "Rifle", type: "Weapon" },
    { key: "harpoon gun", name: "Harpoon Gun", type: "Weapon" },
    { key: "bolter", name: "Bolter", type: "Weapon" },
    { key: "masterminds rifle", name: "Masterminds Rifle", type: "Weapon" },
    { key: "shotgun", name: "Shotgun", type: "Weapon" },
    { key: "sprinters streak", name: "Sprinters Streak", type: "Weapon" },
    { key: "hallsweeper", name: "Hallsweeper", type: "Weapon" },
    { key: "dmr", name: "DMR", type: "Weapon" },
    { key: "gift of fire", name: "Gift Of Fire", type: "Weapon" },
    { key: "armor peeler", name: "Armor Peeler", type: "Weapon" },
    { key: "akimbo", name: "Akimbo", type: "Weapon" },
    { key: "voltaic impact", name: "Voltaic Impact", type: "Weapon" },
    { key: "gunslingers", name: "Gunslingers", type: "Weapon" },
    { key: "smg", name: "SMG", type: "Weapon" },
    { key: "twinface (light)", name: "Twinface (Light)", type: "Weapon" },
    { key: "twinface (heavy)", name: "Twinface (Heavy)", type: "Weapon" },
    { key: "loose trigger", name: "Loose Trigger", type: "Weapon" },
    { key: "burst rifle", name: "Burst Rifle", type: "Weapon" },
    { key: "stonewall", name: "Stonewall", type: "Weapon" },
    { key: "steelforge", name: "Steelforge", type: "Weapon" },
    { key: "rpg", name: "RPG", type: "Weapon" },
    { key: "rocket stormer", name: "Rocket Stormer", type: "Weapon" },
    { key: "shockwave device", name: "Shockwave Device", type: "Weapon" },
    { key: "grenade launcher", name: "Grenade Launcher", type: "Weapon" },
    { key: "intraplanar device", name: "Intraplanar Device", type: "Weapon" },
    { key: "parabolic hydra", name: "Parabolic Hydra", type: "Weapon" },
    { key: "medical bow", name: "Medical Bow", type: "Weapon" },
    { key: "recurve", name: "Recurve", type: "Weapon" },
    { key: "vitabow", name: "Vitabow", type: "Weapon" },
    { key: "pdc kit", name: "PDC kit", type: "Weapon" },
    { key: "governor kit", name: "Governor kit", type: "Weapon" },
    { key: "mads kit", name: "MADS kit", type: "Weapon" },
    { key: "striker", name: "Striker", type: "Weapon" },
    { key: "shovel", name: "Shovel", type: "Melee" },
    { key: "overcharger", name: "Overcharger", type: "Melee" },
    { key: "rallying cry", name: "Rallying Cry", type: "Melee" },
    { key: "machete", name: "Machete", type: "Melee" },
    { key: "handaxes", name: "Handaxes", type: "Melee" },
    { key: "torqueblade", name: "Torqueblade", type: "Melee" },
    { key: "ammo box", name: "Ammo Box", type: "Utility" },
    { key: "combat toolkit", name: "Combat Toolkit", type: "Utility" },
    { key: "proxy", name: "PROXY", type: "Utility" },
    { key: "defibrillator", name: "Defibrillator", type: "Utility" },
    { key: "pacemaker", name: "Pacemaker", type: "Utility" },
    { key: "resuscitator", name: "Resuscitator", type: "Utility" },
    { key: "jetpack", name: "Jetpack", type: "Utility" },
    { key: "terminal velocity", name: "Terminal Velocity", type: "Utility" },
    { key: "aerorig", name: "Aerorig", type: "Utility" },
    { key: "barrier", name: "Barrier", type: "Utility" },
    { key: "brace", name: "BRACE", type: "Utility" },
    { key: "hallucinator kit", name: "Hallucinator Kit", type: "Utility" },
    { key: "aidkit", name: "Aidkit", type: "Utility" },
    { key: "lifeline", name: "Lifeline", type: "Utility" },
    { key: "mercy kill", name: "Mercy Kill", type: "Utility" },
    { key: "fast", name: "FAST", type: "Utility" },
    { key: "tablet", name: "Tablet", type: "Utility" },
    { key: "motion hider", name: "Motion Hider", type: "Utility" },
    { key: "tripwire kit", name: "Tripwire Kit", type: "Utility" }
];

const NIGHTMARE_EXCLUSIVE_ITEMS = [
    { key: "anti-flesh rifle", name: "Anti-Flesh Rifle" },
    { key: "rifle (old model)", name: "Rifle (Old Model)" },
    { key: "hallsweeper (old)", name: "Hallsweeper (Old)" },
    { key: "doctors guilt", name: "Doctors Guilt" },
    { key: "shielder kit", name: "Shielder Kit" },
    { key: "handyman", name: "Handyman" },
    { key: "grenadiers choice", name: "Grenadiers Choice" },
    { key: "armor peeler (old)", name: "Armor Peeler (Old)" },
    { key: "mini smgs", name: "Mini Smgs" },
    { key: "bloodshot", name: "Bloodshot" },
    { key: "mini smgs (old)", name: "Mini Smgs (Old)" },
    { key: "surveillance creed", name: "Surveillance Creed" },
    { key: "stonewall (old)", name: "Stonewall (Old)" },
    { key: "trolldier", name: "TrollDier" },
    { key: "heads of hydra", name: "Heads Of Hydra" },
    { key: "rpg-nuke", name: "RPG-Nuke" },
    { key: "rpg (old method)", name: "RPG (Old Method)" },
    { key: "rocket stormer (old method)", name: "Rocket Stormer (Old Method)" },
    { key: "shockwave device (old method)", name: "Shockwave Device (Old Method)" },
    { key: "shockwave device (old)", name: "Shockwave Device (Old)" },
    { key: "parabola", name: "Parabola" },
    { key: "grenade launcher (old method)", name: "Grenade Launcher (Old Method)" },
    { key: "parabolic hydra (old method)", name: "Parabolic Hydra (Old Method)" },
    { key: "adhe launcher", name: "Adhe Launcher" },
    { key: "adhe launcher (old method)", name: "Adhe Launcher (Old Method)" },
    { key: "adhe infinite", name: "Adhe Infinite" },
    { key: "adc kit", name: "ADC kit" },
    { key: "turret kit", name: "Turret kit" },
    { key: "sprayer kit", name: "Sprayer kit" },
    { key: "lmg", name: "LMG" },
    { key: "a-10 machine gun", name: "A-10 Machine Gun" },
    { key: "mgl", name: "MGL" },
    { key: "fire tossing thing", name: "Fire Tossing Thing" },
    { key: "k's raven", name: "K's Raven" },
    { key: "engineer pistol", name: "Engineer Pistol" },
    { key: "shovel (old method)", name: "Shovel (Old Method)" },
    { key: "overcharger (old)", name: "Overcharger (Old)" },
    { key: "ronin", name: "Ronin" },
    { key: "stunstick", name: "StunStick" },
    { key: "wrench", name: "Wrench" },
    { key: "stick grenade", name: "Stick Grenade" },
    { key: "ammo box (ammo)", name: "Ammo Box (Ammo)" },
    { key: "combat toolkit (ammo)", name: "Combat Toolkit (Ammo)" },
    { key: "proxy (ammo)", name: "PROXY (Ammo)" },
    { key: "ammo box (old)", name: "Ammo Box (Old)" },
    { key: "terminal velocity (old)", name: "Terminal Velocity (Old)" },
    { key: "exoskeleton", name: "Exoskeleton" },
    { key: "shurarig", name: "Shurarig" },
    { key: "runners heat", name: "Runners Heat" },
    { key: "fractionate", name: "Fractionate" },
    { key: "aidkit (charges)", name: "Aidkit (Charges)" },
    { key: "mercy kill (old)", name: "Mercy Kill (Old)" },
    { key: "artillery tablet", name: "Artillery Tablet" },
    { key: "grenade shell", name: "Grenade Shell" },
    { key: "explosive bag", name: "Explosive Bag" },
    { key: "keycard", name: "Keycard" },
    { key: "bomb", name: "Bomb" },
    { key: "fuel can", name: "Fuel Can" },
    { key: "artillery placement", name: "Artillery Placement" },
    { key: "engineer wrench", name: "Engineer Wrench" }
].map(item => ({ ...item, type: "Nightmare Exclusive" }));

const ITEM_TYPE_ORDER = ["Weapon", "Melee", "Utility", "Nightmare Exclusive"];

document.addEventListener("DOMContentLoaded", () => {
    const listContainer = document.getElementById("practiceModifierList");
    const selectAllBtn = document.getElementById("selectAllBtn");
    const clearAllBtn = document.getElementById("clearAllBtn");
    const startBtn = document.getElementById("startPracticeBtn");

    const itemListContainer = document.getElementById("practiceEnemyList");
    const selectAllItemsBtn = document.getElementById("selectAllEnemiesBtn");
    const clearAllItemsBtn = document.getElementById("clearAllEnemiesBtn");
    const itemSearchInput = document.getElementById("enemySearchInput");

    // ---- Modifiers ----
    SANDBOX_MODIFIERS.forEach(mod => {
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

    // ---- Item roster ----
    const grouped = {};
    [...SANDBOX_ITEMS, ...NIGHTMARE_EXCLUSIVE_ITEMS].forEach(item => {
        if (!grouped[item.type]) grouped[item.type] = [];
        grouped[item.type].push(item);
    });

    ITEM_TYPE_ORDER.forEach(type => {
        const items = grouped[type];
        if (!items || items.length === 0) return;

        const groupDiv = document.createElement("div");
        groupDiv.className = "practice-enemy-group";

        const header = document.createElement("div");
        header.className = "practice-enemy-group-header";
        header.innerText = type;
        groupDiv.appendChild(header);

        items.forEach(item => {
            const row = document.createElement("div");
            row.className = "practice-modifier-row practice-enemy-row";
            row.dataset.enemyName = item.name.toLowerCase();

            const nameSpan = document.createElement("span");
            nameSpan.className = "practice-modifier-name";
            nameSpan.innerText = item.name;

            const label = document.createElement("label");
            label.className = "practice-checkbox-label";
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.className = "practice-enemy-checkbox";
            checkbox.dataset.key = item.key;
            checkbox.checked = item.type !== "Nightmare Exclusive";
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(" Include"));

            row.appendChild(nameSpan);
            row.appendChild(label);
            groupDiv.appendChild(row);
        });

        itemListContainer.appendChild(groupDiv);
    });

    if (selectAllItemsBtn) {
        selectAllItemsBtn.addEventListener("click", () => {
            itemListContainer.querySelectorAll(".practice-enemy-checkbox").forEach(cb => {
                cb.checked = true;
            });
        });
    }

    if (clearAllItemsBtn) {
        clearAllItemsBtn.addEventListener("click", () => {
            itemListContainer.querySelectorAll(".practice-enemy-checkbox").forEach(cb => {
                cb.checked = false;
            });
        });
    }

    if (itemSearchInput) {
        itemSearchInput.addEventListener("input", () => {
            const query = itemSearchInput.value.trim().toLowerCase();
            itemListContainer.querySelectorAll(".practice-enemy-group").forEach(group => {
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

        const roster = Array.from(itemListContainer.querySelectorAll(".practice-enemy-checkbox"))
            .filter(cb => cb.checked)
            .map(cb => cb.dataset.key);

        const randomizeCheckbox = document.getElementById("randomizeModifiersCheckbox");
        const randomize = !!(randomizeCheckbox && randomizeCheckbox.checked);

        let warning = document.getElementById("itemRosterWarning");

        if (roster.length === 0) {
            if (!warning) {
                warning = document.createElement("p");
                warning.id = "itemRosterWarning";
                warning.className = "practice-warning";
                warning.innerText = "Select at least one item to start.";
                itemListContainer.insertAdjacentElement("afterend", warning);
            }
            return;
        }

        if (warning) warning.remove();

        localStorage.setItem("sandboxModifierConfig", JSON.stringify({ enabled, vitaraged, randomize }));
        localStorage.setItem("sandboxItemRoster", JSON.stringify(roster));
        window.location.href = "sandbox.html";
    });
});
