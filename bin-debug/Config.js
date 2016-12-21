// TypeScript file
var heroConfig = [
    { basicattack: 1.2, strength: 1.5, agility: 1.2, intelligence: 1, endurance: 1.2 },
    { basicattack: 1.5, strength: 1, agility: 1, intelligence: 4, endurance: 0.7 }
];
var jewelConfig = [
    { basicattack: 10, strength: 5, agility: 5, intelligence: 5, quality: 3.2 },
    { basicattack: 20, strength: 5, agility: 5, intelligence: 5, quality: 3.2 }
];
var weapenConfig = [
    { basicattack: 30, strength: 100, agility: 100, intelligence: 100, endurance: 100, quality: 3.2, weight: 5 },
    { basicattack: 25, strength: 200, agility: 200, intelligence: 200, endurance: 100, quality: 3.2, weight: 5 },
    { basicattack: 15, strength: 200, agility: 200, intelligence: 200, endurance: 100, quality: 3.2, weight: 5 }
];
var equipConfig = [
    { strength: 5, agility: 5, intelligence: 5, endurance: 5, quality: 3.2, weight: 3.5 },
    { strength: 5, agility: 5, intelligence: 5, endurance: 5, quality: 3.2, weight: 3 },
    { strength: 5, agility: 5, intelligence: 5, endurance: 5, quality: 3.2, weight: 3 },
    { strength: 3, agility: 3, intelligence: 3, endurance: 5, quality: 3.2, weight: 3.5 },
    { strength: 1, agility: 2, intelligence: 5, endurance: 5, quality: 3.2, weight: 4 },
    { strength: 3, agility: 2, intelligence: 2, endurance: 5, quality: 3.2, weight: 3 },
    { strength: 2, agility: 3, intelligence: 2, endurance: 5, quality: 3.2, weight: 3 },
    { strength: 1, agility: 5, intelligence: 2, endurance: 5, quality: 3.2, weight: 3 },
    { strength: 2, agility: 2, intelligence: 2, endurance: 5, quality: 3.2, weight: 3 },
    { strength: 3, agility: 3, intelligence: 1, endurance: 5, quality: 3.2, weight: 4 },
    { strength: 2, agility: 4, intelligence: 2, endurance: 5, quality: 3.2, weight: 3.5 },
    { strength: 3, agility: 3, intelligence: 2, endurance: 5, quality: 3.2, weight: 3 },
    { strength: 2, agility: 4, intelligence: 2, endurance: 5, quality: 3.2, weight: 3 },
    { strength: 1, agility: 2, intelligence: 5, endurance: 5, quality: 3.2, weight: 3.5 },
    { strength: 1, agility: 2, intelligence: 5, endurance: 5, quality: 3.2, weight: 3.5 },
];
var userPanelTextConfig = [
    { name: "  英雄姓名:  ", x: 0, y: 50 },
    { name: "  攻击力", x: 0, y: 100 },
    { name: "  力量", x: 0, y: 150 },
    { name: "  敏捷", x: 0, y: 200 },
    { name: "  智力", x: 0, y: 250 },
    { name: "  耐力", x: 0, y: 300 },
    { name: "  战斗力数值", x: 0, y: 350 }
];
var equipmentType = {
    WEAPON: 0,
    SHIELD: 1,
    HEAD: 2,
    NECK: 3,
    SHOULDER: 4,
    BODY: 5
};
var posConfig = [
    { x: 60, y: 0 },
    { x: 60, y: 100 },
    { x: 60, y: 200 },
    { x: 60, y: 300 },
    { x: 60, y: 400 },
    { x: 60, y: 500 }
];
var HeroBackMapConfig = [
    { image: "hero_png", x: 0, y: 0 }
];
var heroMapConfig = [
    { id: "h0", image: "hero_png" },
    { id: "h1", image: "hero_png" },
];
var equipmentBackMapConfig = [
    { type: equipmentType.WEAPON, image: "backMap_png", x: 0, y: 0 },
    { type: equipmentType.SHIELD, image: "backMap_png", x: 0, y: 100 },
    { type: equipmentType.HEAD, image: "backMap_png", x: 0, y: 200 },
    { type: equipmentType.NECK, image: "backMap_png", x: 0, y: 300 },
    { type: equipmentType.SHOULDER, image: "backMap_png", x: 0, y: 400 },
    { type: equipmentType.BODY, image: "backMap_png", x: 0, y: 500 }
];
var equipmentMapConfig = [
    { configId: "weapon_0", image: "weapon_png" },
    { configId: "shield_0", image: "shield_png" },
    { configId: "head_0", image: "head_png" }
];
var heroTextConfig = [
    { name: "  name:  ", x: 0, y: 50 },
    { name: "  attack:  ", x: 0, y: 100 },
    { name: "  strength:  ", x: 0, y: 150 },
    { name: "  agility:  ", x: 0, y: 200 },
    { name: "  intelligence:  ", x: 0, y: 250 },
    { name: "  endurance:  ", x: 0, y: 300 },
    { name: "  fightPower:  ", x: 0, y: 350 },
    { name: "  HP:  ", x: 200, y: 100 },
    { name: "  MP:  ", x: 200, y: 150 }
];
//# sourceMappingURL=Config.js.map