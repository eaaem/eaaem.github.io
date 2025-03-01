class HeroData {
   constructor(name, imageURL, character, isMeleeOnly = false) {
      this.name = name;
      this.imageURL = imageURL;
      this.character = character;
      this.isMeleeOnly = isMeleeOnly;
   }
}

class WeaponData {
   constructor(name, imageURL, careers, isMelee = false, character = "") {
      this.name = name;
      this.imageURL = imageURL;
      this.careers = careers;
      this.isMelee = isMelee;
      this.character = character;
   }
}

heroes = [
   new HeroData("Mercenary", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/0/0d/Portrait_kruber_mercenary.png", "Kruber"),
   new HeroData("Huntsman", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/a/ad/Portrait_kruber_huntsman.png", "Kruber"),
   new HeroData("Foot Knight", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/e/e3/Portrait_kruber_footknight.png", "Kruber"),
   new HeroData("Ranger Veteran", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/c/c2/Portrait_bardin_veteranranger.png", "Bardin"),
   new HeroData("Ironbreaker", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/1/1d/Portrait_bardin_ironbreaker.png", "Bardin"),
   new HeroData("Slayer", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/7/7e/Portrait_bardin_slayer.png", "Bardin", true),
   new HeroData("Waystalker", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/1/12/Portrait_kerillian_waystalker.png", "Kerillian"),
   new HeroData("Handmaiden", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/c/ce/Portrait_kerillian_handmaiden.png", "Kerillian"),
   new HeroData("Shade", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/a/a1/Portrait_kerillian_shade.png", "Kerillian"),
   new HeroData("Witch Hunter Captain", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/4/4b/Portrait_saltzpyre_witchhuntercapatain.png", "Saltzpyre"),
   new HeroData("Bounty Hunter", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/e/e8/Portrait_saltzpyre_bountyhunter.png", "Saltzpyre"),
   new HeroData("Zealot", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/5/53/Portrait_saltzpyre_zealot.png", "Saltzpyre"),
   new HeroData("Battle Wizard", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/a/a9/Portrait_sienna_battlewizard.png", "Sienna"),
   new HeroData("Pyromancer", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/1/11/Portrait_sienna_pyromancer.png", "Sienna"),
   new HeroData("Unchained", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/b/b3/Portrait_sienna_unchained.png", "Sienna")
]

let meleeWeapons = {};

meleeWeapons["Kruber"] = [
   new WeaponData("Greatsword", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/b/bd/Two-HandedSword.png", ["Mercenary", "Huntsman", "Foot Knight", "Grail Knight"]),
   new WeaponData("Halberd", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/1/12/Halberd.png", ["Mercenary", "Huntsman", "Foot Knight"]),
   new WeaponData("Sword", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/8/89/Sword.png", ["Mercenary", "Huntsman", "Foot Knight", "Grail Knight"]),
   new WeaponData("Executioner Sword", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/4/48/ExecutionerSword.png", ["Mercenary", "Huntsman", "Foot Knight", "Grail Knight"]),
   new WeaponData("Great Hammer", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/5/52/Two-HandedHammer.png", ["Mercenary", "Huntsman", "Foot Knight", "Grail Knight"]),
   new WeaponData("Sword and Shield", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/3/31/SwordAndShield.png", ["Mercenary", "Huntsman", "Foot Knight", "Grail Knight"]),
   new WeaponData("Mace", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/6/63/Mace.png", ["Mercenary", "Huntsman", "Foot Knight", "Grail Knight"]),
   new WeaponData("Mace and Shield", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/3/38/MaceAndShield.png", ["Mercenary", "Huntsman", "Foot Knight", "Grail Knight"]),
   new WeaponData("Sword", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/8/89/Sword.png", ["Mercenary", "Huntsman", "Foot Knight", "Grail Knight"]),
]
meleeWeapons["Bardin"] = [
   new WeaponData("Great Hammer", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/1/10/Bardin_hammer.png", ["Ranger Veteran", "Ironbreaker", "Slayer", "Outcast Engineer"]),
   new WeaponData("Great Axe", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/b/b5/Bardin_greataxe.png", ["Ranger Veteran", "Ironbreaker", "Slayer", "Outcast Engineer"]),
   new WeaponData("Hammer", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/9/9a/Bardin_weapon_Hammer.png", ["Ranger Veteran", "Ironbreaker", "Slayer"]),
   new WeaponData("War Pick", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/0/05/Pickaxe_icon.png", ["Ranger Veteran", "Ironbreaker", "Slayer"]),
   new WeaponData("Axe and Shield", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/d/d8/Shield_axe.png", ["Ranger Veteran", "Ironbreaker", "Outcast Engineer"]),
   new WeaponData("Hammer and Shield", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/3/39/Hammer_shield_icon.png", ["Ranger Veteran", "Ironbreaker", "Outcast Engineer"]),
   new WeaponData("Dual Axes", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/8/8e/Duel_axes.png", ["Slayer"]),
]
meleeWeapons["Kerillian"] = [
   new WeaponData("Sword", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/5/5f/1hsword.png", ["Waystalker", "Handmaiden", "Shade", "Sister of the Thorn"]),
   new WeaponData("Dual Daggers", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/4/45/Dagger.png", ["Waystalker", "Handmaiden", "Shade", "Sister of the Thorn"]),
   new WeaponData("Dual Swords", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/0/0b/Duel-sword.png", ["Waystalker", "Handmaiden", "Shade", "Sister of the Thorn"]),
   new WeaponData("Sword and Dagger", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/2/23/Sword-dagger.png", ["Waystalker", "Handmaiden", "Shade", "Sister of the Thorn"]),
   new WeaponData("Glaive", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/e/e9/Glaive.png", ["Waystalker", "Handmaiden", "Shade", "Sister of the Thorn"]),
   new WeaponData("Greatsword", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/6/68/Greatsword.png", ["Waystalker", "Handmaiden", "Shade", "Sister of the Thorn"]),
   new WeaponData("Elven Spear", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/4/4f/Spear.png", ["Waystalker", "Handmaiden", "Shade"])
]
meleeWeapons["Saltzpyre"] = [
   new WeaponData("Rapier", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/5/5d/Saltz_rapier_icon.png", ["Witch Hunter Captain", "Bounty Hunter", "Zealot"]),
   new WeaponData("Falchion", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/0/01/Saltz_falchion_icon.png", ["Witch Hunter Captain", "Bounty Hunter", "Zealot"]),
   new WeaponData("Axe", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/7/70/Saltz_axe_icon.png", ["Witch Hunter Captain", "Bounty Hunter", "Zealot"]),
   new WeaponData("Greatsword", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/2/29/Saltz_2_handed_sword_icon.png", ["Witch Hunter Captain", "Bounty Hunter", "Zealot"]),
   new WeaponData("Flail", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/8/88/Flail_icon.png", ["Witch Hunter Captain", "Bounty Hunter", "Zealot"])
]
meleeWeapons["Sienna"] = [
   new WeaponData("Sword", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/1/16/Sienna_Weapons_Icon_-_Sword.png", ["Battle Wizard", "Pyromancer", "Unchained"]),
   new WeaponData("Mace", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/2/29/Sienna_Weapons_Icon_-_Mace.png", ["Battle Wizard", "Pyromancer", "Unchained"]),
   new WeaponData("Fire Sword", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/a/a5/Sienna_Weapons_Icon_-_Fire_Sword.png", ["Battle Wizard", "Pyromancer", "Unchained"]),
   new WeaponData("Dagger", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/a/a1/Sienna_Weapons_Icon_-_Dagger.png", ["Battle Wizard", "Pyromancer", "Unchained"])
]

let rangedWeapons = {};

rangedWeapons["Kruber"] = [
   new WeaponData("Blunderbuss", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/8/83/Kruber_Blunderbuss.png", ["Mercenary", "Huntsman", "Foot Knight"]),
   new WeaponData("Handgun", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/2/2a/Kruber_handgun.png", ["Mercenary", "Huntsman", "Foot Knight"]),
   new WeaponData("Longbow", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/8/8d/Kuber_Longbow.png", ["Huntsman"]),
   new WeaponData("Repeater Handgun", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/6/60/Kruber_repeater_handgun.png", ["Mercenary", "Huntsman", "Foot Knight"])
]
rangedWeapons["Bardin"] = [
   new WeaponData("Crossbow", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/3/3e/Bardin_weapon_ranged_crossbow.png", ["Ranger Veteran", "Ironbreaker"]),
   new WeaponData("Handgun", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/f/f7/Bardin_handgun_icon.png", ["Ranger Veteran", "Ironbreaker"]),
   new WeaponData("Grudge-Raker", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/9/9b/Grudge_raker.png", ["Ranger Veteran", "Ironbreaker"]),
   new WeaponData("Drakefire Pistols", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/b/b1/Drakefire_pistols.png", ["Outcast Engineer", "Ironbreaker"]),
   new WeaponData("Drakegun", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/b/b2/Drakegun.png", ["Outcast Engineer", "Ironbreaker"]),
]
rangedWeapons["Kerillian"] = [
   new WeaponData("Swiftbow", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/a/a6/Swiftbow.png", ["Waystalker", "Handmaiden", "Shade", "Sister of the Thorn"]),
   new WeaponData("Longbow", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/e/e4/Longbow.png", ["Waystalker", "Handmaiden", "Shade", "Sister of the Thorn"]),
   new WeaponData("Hagbane Shortbow", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/a/a6/Swiftbow.png", ["Waystalker", "Handmaiden", "Shade", "Sister of the Thorn"]),
   new WeaponData("Volley Crossbow", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/0/00/Xbow.png", ["Shade"]),
]
rangedWeapons["Saltzpyre"] = [
   new WeaponData("Brace of Pistols", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/f/f8/Brace_of_pistols_icon.png", ["Witch Hunter Captain", "Bounty Hunter", "Zealot"]),
   new WeaponData("Volley Crossbow", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/6/6d/Saltz_volley_crossbow.png", ["Witch Hunter Captain", "Bounty Hunter", "Zealot"]),
   new WeaponData("Repeater Pistol", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/b/ba/Saltz_repeater_pistol_icon.png", ["Witch Hunter Captain", "Bounty Hunter", "Zealot"]),
   new WeaponData("Crossbow", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/4/41/Saltz_crossbow_icon.png", ["Witch Hunter Captain", "Bounty Hunter", "Zealot"])
]
rangedWeapons["Sienna"] = [
   new WeaponData("Fireball Staff", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/8/83/Sienna_Weapons_Icon_-_Fireball_Staff.png", ["Battle Wizard", "Pyromancer", "Unchained"]),
   new WeaponData("Flamestorm Staff", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/1/1a/Sienna_Weapons_Icon_-_Flamestorm_Staff.png", ["Battle Wizard", "Pyromancer", "Unchained"]),
   new WeaponData("Bolt Staff", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/4/45/Sienna_Weapons_Icon_-_Bolt_Staff.png", ["Battle Wizard", "Pyromancer", "Unchained"]),
   new WeaponData("Beam Staff", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/6/6d/Sienna_Weapons_Icon_-_Beam_Staff.png", ["Battle Wizard", "Pyromancer", "Unchained"]),
   new WeaponData("Conflagration Staff", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/2/2a/Sienna_Weapons_Icon_-_Conflagration_Staff.png", ["Battle Wizard", "Pyromancer", "Unchained"])
]

let dlcCharacters = {};

dlcCharacters["grail"] = new HeroData("Grail Knight", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/0/0f/Portrait_kruber_grailknight.png", "Kruber", true);
dlcCharacters["outcast"] = new HeroData("Outcast Engineer", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/a/a6/Portrait_bardin_outcastengineer.png", "Bardin");
dlcCharacters["sister"] = new HeroData("Sister of the Thorn", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/6/6a/Portrait_SisterOfTheThorn.png", "Kerillian");
dlcCharacters["warrior"] = new HeroData("Warrior Priest of Sigmar", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/5/52/Portrait_WarriorPriestOfSigmar.png", "Saltzpyre", true);
dlcCharacters["necromancer"] = new HeroData("Necromancer", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/a/a7/Portrait_Necromancer.png", "Sienna");

let dlcWeapons = {};
dlcWeapons["forgotten"] = [
   new WeaponData("Spear and Shield", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/d/de/Kruber_Spear_and_Shield.png", ["Mercenary", "Huntsman", "Foot Knight"], true, "Kruber"),
   new WeaponData("Trollhammer Torpedo", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/7/73/Bardin_Trollhammer_Torpedo.png", ["Ironbreaker", "Outcast Engineer"], false, "Bardin"),
   new WeaponData("Moonfire Bow", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/2/2c/Kerillian_Moonfire_Bow.png", ["Waystalker", "Handmaiden", "Shade", "Sister of the Thorn"], false, "Kerillian"),
   new WeaponData("Griffonfoot Pistols", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/2/2e/Saltzpyre_Griffonfoot_Pistols.png", ["Witch Hunter Captain", "Bounty Hunter", "Zealot"], false, "Saltzpyre"),
   new WeaponData("Coruscation Staff", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/0/06/Sienna_Coruscation_Staff.png", ["Battle Wizard", "Pyromancer", "Unchained"], false, "Sienna")
]
dlcWeapons["grail"] = [
   new WeaponData("Bretonnian Longsword", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/0/0d/Bretonnian_Longsword.png", ["Mercenary", "Huntsman", "Foot Knight", "Grail Knight"], true, "Kruber"),
   new WeaponData("Bretonnian Sword and Shield", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/6/6d/BretonnianSwordAndShield.png", ["Grail Knight"], true, "Kruber")
]
dlcWeapons["ubersreik"] = [
   new WeaponData("Mace and Sword", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/5/5d/Mace_and_Sword.png", ["Mercenary", "Huntsman", "Foot Knight", "Grail Knight"], true, "Kruber"),
   new WeaponData("Dual Hammers", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/f/f5/Bardin_dual_hammers.png", ["Ranger Veteran", "Ironbreaker", "Slayer", "Outcast Engineer"], true),
   new WeaponData("Elven Axe", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/3/38/Kerillian_axe.png", ["Waystalker", "Handmaiden", "Shade", "Sister of the Thorn"], true, "Kerillian"),
   new WeaponData("Crowbill", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/6/6f/Sienna_Weapons_Icon_-Crowbill.png", ["Battle Wizard", "Pyromancer", "Unchained"], true, "Sienna")
]
dlcWeapons["outcast"] = [
   new WeaponData("Cog Hammer", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/b/bc/Bardin_cog_hammer.png", ["Ranger Veteran", "Ironbreaker", "Slayer", "Outcast Engineer"], true, "Bardin"),
   new WeaponData("Masterwork Pistol", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/9/9c/Bardin_masterwork_pistol.png", ["Ranger Veteran", "Ironbreaker", "Outcast Engineer"], false, "Bardin")
]
dlcWeapons["sister"] = [
   new WeaponData("Briar Javelin", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/5/50/Kerillian_Javelin.png", ["Waystalker", "Handmaiden", "Shade", "Sister of the Thorn"], false, "Kerillian"),
   new WeaponData("Deepwood Staff", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/c/c2/Kerillian_Deepwood_Staff.png", ["Sister of the Thorn"], false, "Kerillian")
]
dlcWeapons["warrior"] = [
   new WeaponData("Flail and Shield", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/6/62/Saltzpyre_Flail_Shield.png", ["Warrior Priest of Sigmar"], true),
   new WeaponData("Reckoner Great Hammer", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/6/62/Saltzpyre_Holy_Great_Hammer.png", ["Zealot", "Warrior Priest of Sigmar"], true),
   new WeaponData("Paired Skull-Splitters", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/e/e8/Saltzpyre_Paired_Skull_Splitters.png", ["Zealot", "Warrior Priest of Sigmar"], true),
   new WeaponData("Skull-Splitter and Blessed Tome", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/f/f7/Saltzpyre_Skull_Splitter_Blessed_Tome.png", ["Warrior Priest of Sigmar"], true),
   new WeaponData("Skull-Splitter and Shield", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/5/57/Saltzpyre_Skull_Splitter_Shield.png", ["Warrior Priest of Sigmar"], true),
   new WeaponData("Skull-Splitter Hammer", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/5/5e/Saltzpyre_Skull_Splitter_Hammer.png", ["Zealot", "Warrior Priest of Sigmar"], true)
]
dlcWeapons["necromancer"] = [
   new WeaponData("Ensorcelled Reaper", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/f/f8/Sienna_Weapons_Icon_-_Ensorcelled_Reaper.png", ["Battle Wizard", "Pyromancer", "Unchained", "Necromancer"], true, "Sienna"),
   new WeaponData("Soulstealer Staff", "https://static.wikia.nocookie.net/vermintide2_gamepedia_en/images/6/67/Sienna_Weapons_Icon_-_Soulstealer_Staff.png", ["Necromancer"], false, "Sienna")
]

unselectedPlayers = [0, 1, 2, 3];
playerHeroChoices = [null, null, null, null];
playerCareerChoices = [null, null, null, null];

document.getElementById("rollAll").onclick = function() { rollAll() };
document.getElementById("reroll1").onclick = function() { rerollOne(0) };
document.getElementById("reroll2").onclick = function() { rerollOne(1) };
document.getElementById("reroll3").onclick = function() { rerollOne(2) };
document.getElementById("reroll4").onclick = function() { rerollOne(3) };
document.getElementById("rollOne").onclick = function() { rollOne() };
document.getElementById("finalize").onclick = function () { setCounter() };
document.getElementById("exportCounter").onclick = function () { showCounterExport() };
document.getElementById("importCounter").onclick = function () { showImportCounter() };
isShowingExport = false;
isShowingImport = false;
document.getElementById("submitImport").onclick = function () { importCounterValues() };

setCounter();
initializeSelectedDLCs();

function rollCharacter(index, heroPool, useUnselectedPlayers = true)
{
   playerIndex = index;

   if (useUnselectedPlayers)
   {
      playerIndex = unselectedPlayers[index];
   }

   let dlcs = document.getElementsByName((playerIndex + 1) + 'dlc');
   numberOfDlcChars = 0;

   for (j = 0; j < dlcs.length; j++)
   {
      if (dlcs[j].checked)
      {
         // Add DLC characters and track how many will need to be removed at the end
         if (dlcs[j].value in dlcCharacters && !(playerHeroChoices.includes(dlcCharacters[dlcs[j].value].character)))
         {
            numberOfDlcChars++;
            heroPool.push(dlcCharacters[dlcs[j].value]);
         }
      }

      // Save off DLCs so they stay between sessions
      localStorage.setItem((playerIndex + 1) + dlcs[j].value, dlcs[j].checked);
   }

   heroChoice = Math.floor(Math.random() * heroPool.length);

   document.getElementById("player" + (playerIndex + 1) + "Text").innerHTML = heroPool[heroChoice].name;
   let image = document.getElementById("player" + (playerIndex + 1) + "HeroImage");
   image.src = heroPool[heroChoice].imageURL;

   characterType = heroPool[heroChoice].character;

   playerHeroChoices[playerIndex] = characterType;
   playerCareerChoices[playerIndex] = heroPool[heroChoice].name;

   // Weapon choosing
   meleeChoices = [];
   rangedChoices = [];

   // Check for DLCs that add weapons to the pool
   for (j = 0; j < dlcs.length; j++)
   {
      if (dlcs[j].checked && dlcs[j].value in dlcWeapons)
      {
         for (k = 0; k < dlcWeapons[dlcs[j].value].length; k++)
         {
            if (dlcWeapons[dlcs[j].value][k].careers.includes(heroPool[heroChoice].name))
            {
               if (dlcWeapons[dlcs[j].value][k].isMelee)
               {
                  meleeChoices.push(dlcWeapons[dlcs[j].value][k]);
               }
               else
               {
                  rangedChoices.push(dlcWeapons[dlcs[j].value][k]);
               }
            }
         }
      }
   }

   // Push on melee weapons for this career
   for (j = 0; j < meleeWeapons[heroPool[heroChoice].character].length; j++)
   {
      if (meleeWeapons[heroPool[heroChoice].character][j].careers.includes(heroPool[heroChoice].name))
      {
         meleeChoices.push(meleeWeapons[heroPool[heroChoice].character][j]);
      }
   }

   meleeWeaponChoice = Math.floor(Math.random() * meleeChoices.length);

   let meleeImage = document.getElementById("player" + (playerIndex + 1) + "MeleeWeaponImage");
   meleeImage.src = meleeChoices[meleeWeaponChoice].imageURL;
   document.getElementById("player" + (playerIndex + 1) + "MeleeWeaponText").innerHTML = meleeChoices[meleeWeaponChoice].name;

   // Melee only heroes have two melee weapons, so have their ranged weapon pick from the same melee pool
   if (heroPool[heroChoice].isMeleeOnly)
   {
      rangedChoices = meleeChoices;
   }
   else
   {
      for (j = 0; j < rangedWeapons[heroPool[heroChoice].character].length; j++)
      {
         if (rangedWeapons[heroPool[heroChoice].character][j].careers.includes(heroPool[heroChoice].name))
         {
            rangedChoices.push(rangedWeapons[heroPool[heroChoice].character][j]);
         }
      }
   }

   rangedWeaponChoice = Math.floor(Math.random() * rangedChoices.length);

   let rangedImage = document.getElementById("player" + (playerIndex + 1) + "RangedWeaponImage");
   rangedImage.src = rangedChoices[rangedWeaponChoice].imageURL;
   document.getElementById("player" + (playerIndex + 1) + "RangedWeaponText").innerHTML = rangedChoices[rangedWeaponChoice].name;

   if (useUnselectedPlayers)
   {
      // Remove hero choices from the pool
      unselectedPlayers.splice(index, 1);
   }

   if (numberOfDlcChars > 0)
   {
      // Remove DLC characters for next roll
      heroPool.splice(heroPool.length - numberOfDlcChars, numberOfDlcChars);
   }

   for (j = 0; j < heroPool.length; j++)
   {
      if (heroPool[j].character == characterType)
      {
         heroPool.splice(j, 1);
         j--;
      }
   }
}

function rerollOne(index)
{
   heroPool = [];
   for (i = 0; i < heroes.length; i++)
   {
      if (!(playerHeroChoices.includes(heroes[i].character)) || heroes[i].character == playerHeroChoices[index])
      {
         heroPool.push(new HeroData(heroes[i].name, heroes[i].imageURL, heroes[i].character, heroes[i].isMeleeOnly));
      }
   }

   rollCharacter(index, heroPool, false);
}

function rollOne()
{
   heroPool = [];
   for (i = 0; i < heroes.length; i++)
   {
      if (!(playerHeroChoices.includes(heroes[i].character)))
      {
         heroPool.push(new HeroData(heroes[i].name, heroes[i].imageURL, heroes[i].character, heroes[i].isMeleeOnly));
      }
   }

   rollCharacter(Math.floor(Math.random() * unselectedPlayers.length), heroPool);

   if (unselectedPlayers.length == 0)
   {
      document.getElementById("rollOne").disabled = true;
   }
}

function rollAll() {
   heroPool = [];
   unselectedPlayers = [0, 1, 2, 3];

   for (i = 0; i < heroes.length; i++)
   {
      heroPool[i] = new HeroData(heroes[i].name, heroes[i].imageURL, heroes[i].character, heroes[i].isMeleeOnly);
   }

   for (i = 0; i < 4; i++)
   {
      nextPlayer = Math.floor(Math.random() * unselectedPlayers.length);
      rollCharacter(nextPlayer, heroPool);
   }

   document.getElementById("rollOne").disabled = true;
}

function initializeSelectedDLCs()
{
   for (i = 0; i < 4; i++)
   {
      let dlcs = document.getElementsByName((i + 1) + 'dlc');

      for (j = 0; j < dlcs.length; j++)
      {
         if (localStorage.getItem((i + 1) + dlcs[j].value) != null)
         {
            dlcs[j].checked = (localStorage.getItem((i + 1) + dlcs[j].value) === "true");
         }
      }
   }
}

function setCounter(includeIncrements = true)
{
   counterText = "";

   for (i = 0; i < heroes.length; i++)
   {
      counterText += addHeroCounter(heroes[i], includeIncrements);

      if (i == 2)
      {
         counterText += addHeroCounter(dlcCharacters["grail"], includeIncrements);
      }
      else if (i == 5)
      {
         counterText += addHeroCounter(dlcCharacters["outcast"], includeIncrements);
      }
      else if (i == 8)
      {  
         counterText += addHeroCounter(dlcCharacters["sister"], includeIncrements);
      }
      else if (i == 11)
      {
         counterText += addHeroCounter(dlcCharacters["warrior"], includeIncrements);
      }
      else if (i == 14)
      {
         counterText += addHeroCounter(dlcCharacters["necromancer"], includeIncrements);
      }
   } 

   document.getElementById("counts").innerHTML = counterText;
}

function addHeroCounter(hero, factorInAdds)
{
   result = "";
   addOne = false;

   if (playerCareerChoices.includes(hero.name) && factorInAdds)
   {
      addOne = true;
   }

   result += hero.name + ": ";

   if (window.localStorage.getItem(hero.name) != null)
   {
      if (addOne)
      {
         result += parseInt(window.localStorage.getItem(hero.name)) + 1;
         window.localStorage.setItem(hero.name, parseInt(window.localStorage.getItem(hero.name)) + 1);
      }
      else
      {
         result += parseInt(window.localStorage.getItem(hero.name));
      }
   }
   else
   {
      if (addOne)
      {
         result += "1";
         window.localStorage.setItem(hero.name, "1");
      }
      else
      {
         result += "0";
         window.localStorage.setItem(hero.name, "0");
      }
   }

   result += "<br>";
   return result;
}

function showCounterExport()
{
   if (isShowingExport)
   {
      document.getElementById("exportCounterBox").style = "display: none;"
      isShowingExport = false;
   }
   else
   {
      result = "";

      for (i = 0; i < heroes.length; i++)
      {
         result += addExportLine(heroes[i]);
      }

      result += addExportLine(dlcCharacters["grail"]);
      result += addExportLine(dlcCharacters["outcast"]);
      result += addExportLine(dlcCharacters["sister"]);
      result += addExportLine(dlcCharacters["warrior"]);
      result += addExportLine(dlcCharacters["necromancer"]);

      document.getElementById("exportCounterBox").innerHTML = result;
      document.getElementById("exportCounterBox").style = "display: block;";
      isShowingExport = true;
   }
}

function addExportLine(hero)
{
   result = hero.name;

   if (localStorage.getItem(hero.name) !== null)
   {
      result += localStorage.getItem(hero.name) + "|";
   }
   else
   {
      result += "0|";
   }

   return result;
}

function showImportCounter()
{ 
   if (!isShowingImport)
   {
      document.getElementById("importCounterBox").style = "display: block;"
      document.getElementById("submitImport").style = "display: block;"
      isShowingImport = true;
   }
   else
   {
      document.getElementById("importCounterBox").style = "display: none;"
      document.getElementById("submitImport").style = "display: none;"
      isShowingImport = false;
   }
}

function importCounterValues()
{
   importText = document.getElementById("importCounterBox").value;

   // Hide the submit button/import text field
   showImportCounter();

   heroName = "";
   count = "";
   for (i = -1; i < importText.length - 1; i++)
   {
      if (importText[i + 1] == '|')
      {
         localStorage.setItem(heroName, count);
         heroName = "";
         count = "";
         continue;
      }

      if (importText[i + 1] >= '0' && importText[i + 1] <= '9')
      {
         count += importText[i + 1];
      }
      else
      {
         heroName += importText[i + 1];
      }
   }

   document.getElementById("importCounterBox").value = "";
   setCounter(false);
}