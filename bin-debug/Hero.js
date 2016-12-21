var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// TypeScript file
//每个用户都有英雄，每个英雄都有装备，每个装备都有宝石,根据不同道具、等级等属性可以计算出战斗力，生命值等数值。
var User = (function () {
    function User() {
        var _this = this;
        this.heros = [];
        this.herointeam = [];
        this.dirtyFlag = true;
        this.herosinTeamCache = function (target, propertyName, desc) {
            if (!_this.dirtyFlag) {
                var getter_1 = desc.get;
                desc.get = function () {
                    return getter_1.apply(this);
                };
                return desc;
            }
        };
        this.fightpowerCache = function (target, propertyName, desc) {
            if (!_this.dirtyFlag) {
                var getter_2 = desc.get;
                desc.get = function () {
                    return getter_2.apply(this);
                };
                return desc;
            }
        };
    }
    var d = __define,c=User,p=c.prototype;
    p.getheroInTeam = function () {
        var heroInTeam = [];
        for (var i = 0; i < this.heros.length; i++) {
            if (this.heros[i].isInTeam) {
                heroInTeam.push(this.heros[i]);
            }
        }
        return heroInTeam;
    };
    d(p, "FightPower"
        ,function () {
            var result = 0;
            var heros = this.getheroInTeam();
            this.heros.forEach(function (e) { return result += e.FightPower; });
            result = result / 150;
            return result;
        }
    );
    __decorate([
        this.herosinTeamCache
    ], p, "getheroInTeam", null);
    __decorate([
        this.fightpowerCache
    ], p, "FightPower", null);
    return User;
}());
egret.registerClass(User,'User');
var EquipmentMap = (function () {
    function EquipmentMap(stage) {
        this.head = new egret.Bitmap();
        this.neck = new egret.Bitmap();
        this.shoulder = new egret.Bitmap();
        this.body = new egret.Bitmap();
        this.weapon = new egret.Bitmap();
        this.shield = new egret.Bitmap();
        this.setBackMap();
        stage.addChild(this.head);
        stage.addChild(this.neck);
        stage.addChild(this.shoulder);
        stage.addChild(this.body);
        stage.addChild(this.weapon);
        stage.addChild(this.shield);
    }
    var d = __define,c=EquipmentMap,p=c.prototype;
    p.setBackMap = function () {
        this.weapon.texture = RES.getRes(equipmentBackMapConfig[equipmentType.WEAPON].image);
        this.weapon.x = equipmentBackMapConfig[equipmentType.WEAPON].x;
        this.weapon.y = equipmentBackMapConfig[equipmentType.WEAPON].y;
        this.shield.texture = RES.getRes(equipmentBackMapConfig[equipmentType.SHIELD].image);
        this.shield.x = equipmentBackMapConfig[equipmentType.SHIELD].x;
        this.shield.y = equipmentBackMapConfig[equipmentType.SHIELD].y;
        this.head.texture = RES.getRes(equipmentBackMapConfig[equipmentType.HEAD].image);
        this.head.x = equipmentBackMapConfig[equipmentType.HEAD].x;
        this.head.y = equipmentBackMapConfig[equipmentType.HEAD].y;
        this.neck.texture = RES.getRes(equipmentBackMapConfig[equipmentType.NECK].image);
        this.neck.x = equipmentBackMapConfig[equipmentType.NECK].x;
        this.neck.y = equipmentBackMapConfig[equipmentType.NECK].y;
        this.shoulder.texture = RES.getRes(equipmentBackMapConfig[equipmentType.SHOULDER].image);
        this.shoulder.x = equipmentBackMapConfig[equipmentType.SHOULDER].x;
        this.shoulder.y = equipmentBackMapConfig[equipmentType.SHOULDER].y;
        this.body.texture = RES.getRes(equipmentBackMapConfig[equipmentType.BODY].image);
        this.body.x = equipmentBackMapConfig[equipmentType.BODY].x;
        this.body.y = equipmentBackMapConfig[equipmentType.BODY].y;
    };
    p.equip = function (equipment) {
        var image; //equipment.property.configId
        for (var i = 0; i < equipmentMapConfig.length; i++) {
            if (equipmentMapConfig[i].configId == equipment.equipmentID.configId) {
                image = equipmentMapConfig[i].image;
                break;
            }
        }
        switch (equipment.equipmentID.equipmentType) {
            case equipmentType.HEAD:
                this.head.texture = RES.getRes(image);
                break;
            case equipmentType.NECK:
                this.neck.texture = RES.getRes(image);
                break;
            case equipmentType.SHOULDER:
                this.shoulder.texture = RES.getRes(image);
                break;
            case equipmentType.BODY:
                this.body.texture = RES.getRes(image);
                break;
            case equipmentType.WEAPON:
                this.weapon.texture = RES.getRes(image);
                break;
            case equipmentType.SHIELD:
                this.shield.texture = RES.getRes(image);
                break;
            default:
                console.log("fail");
        }
    };
    return EquipmentMap;
}());
egret.registerClass(EquipmentMap,'EquipmentMap');
var HeroMap = (function () {
    function HeroMap(stage) {
        this.hero = new egret.Bitmap();
        this.setBackMap();
        stage.addChild(this.hero);
    }
    var d = __define,c=HeroMap,p=c.prototype;
    p.setBackMap = function () {
        this.hero.texture = RES.getRes(HeroBackMapConfig[0].image);
        this.hero.x = HeroBackMapConfig[0].x;
        this.hero.y = HeroBackMapConfig[0].y;
    };
    return HeroMap;
}());
egret.registerClass(HeroMap,'HeroMap');
var Hero = (function () {
    function Hero(type) {
        var _this = this;
        this.level = 1;
        this.isInTeam = false;
        this.basicAttFactor = 1;
        this.strFactor = 1;
        this.agiFactor = 1;
        this.intFactor = 1;
        this.endFactor = 1;
        this.dirtyFlag = true;
        this.equipments = [];
        this.basicattackCache = function (target, propertyName, desc) {
            if (!_this.dirtyFlag) {
                var getter_3 = desc.get;
                desc.get = function () {
                    return getter_3.apply(this);
                };
                return desc;
            }
        };
        this.maxhpCache = function (target, propertyName, desc) {
            if (!_this.dirtyFlag) {
                var getter_4 = desc.get;
                desc.get = function () {
                    return getter_4.apply(this);
                };
                return desc;
            }
        };
        this.maxmpCache = function (target, propertyName, desc) {
            if (!_this.dirtyFlag) {
                var getter_5 = desc.get;
                desc.get = function () {
                    return getter_5.apply(this);
                };
                return desc;
            }
        };
        this.defenceCache = function (target, propertyName, desc) {
            if (!_this.dirtyFlag) {
                var getter_6 = desc.get;
                desc.get = function () {
                    return getter_6.apply(this);
                };
                return desc;
            }
        };
        this.strengthCache = function (target, propertyName, desc) {
            if (!_this.dirtyFlag) {
                var getter_7 = desc.get;
                desc.get = function () {
                    return getter_7.apply(this);
                };
                return desc;
            }
        };
        this.intelligenceCache = function (target, propertyName, desc) {
            if (!_this.dirtyFlag) {
                var getter_8 = desc.get;
                desc.get = function () {
                    return getter_8.apply(this);
                };
                return desc;
            }
        };
        this.agilityCache = function (target, propertyName, desc) {
            if (!_this.dirtyFlag) {
                var getter_9 = desc.get;
                desc.get = function () {
                    return getter_9.apply(this);
                };
                return desc;
            }
        };
        this.enduranceCache = function (target, propertyName, desc) {
            if (!_this.dirtyFlag) {
                var getter_10 = desc.get;
                desc.get = function () {
                    return getter_10.apply(this);
                };
                return desc;
            }
        };
        this.attackCache = function (target, propertyName, desc) {
            if (!_this.dirtyFlag) {
                var getter_11 = desc.get;
                desc.get = function () {
                    return getter_11.apply(this);
                };
                return desc;
            }
        };
        this.fightpowerCache = function (target, propertyName, desc) {
            if (!_this.dirtyFlag) {
                var getter_12 = desc.get;
                desc.get = function () {
                    return getter_12.apply(this);
                };
                return desc;
            }
        };
        this.basicAttFactor = heroConfig[type].basicattack;
        this.strFactor = heroConfig[type].strength;
        this.agiFactor = heroConfig[type].agility;
        this.intFactor = heroConfig[type].intelligence;
        this.endFactor = heroConfig[type].endurance;
    }
    var d = __define,c=Hero,p=c.prototype;
    p.setInTeam = function (status) {
        this.isInTeam = status;
        this.dirtyFlag = true;
    };
    d(p, "basicattack"
        ,function () {
            return this.level * 3 * this.basicAttFactor;
        }
    );
    d(p, "maxhp"
        ,function () {
            return this.level * 2 * this.endurance;
        }
    );
    d(p, "maxmp"
        ,function () {
            return this.level * this.intelligence;
        }
    );
    d(p, "defence"
        ,function () {
            return this.level * this.endurance * 3;
        }
    );
    d(p, "strength"
        ,function () {
            return this.level * this.strFactor * 2;
        }
    );
    d(p, "intelligence"
        ,function () {
            return this.level * this.intFactor * 2;
        }
    );
    d(p, "agility"
        ,function () {
            return this.level * this.agiFactor * 2;
        }
    );
    d(p, "endurance"
        ,function () {
            return this.level * this.endFactor * 5;
        }
    );
    d(p, "attack"
        ,function () {
            return this.basicattack + this.strength;
        }
    );
    d(p, "FightPower"
        ,function () {
            var result = 0;
            this.equipments.forEach(function (e) { return result += e.FightPower; });
            result += this.attack * 1.5 + this.defence + (this.maxhp + this.maxmp * 0.5) * 0.5;
            return result;
        }
    );
    d(p, "maxHp"
        ,function () {
            return this.level * 50;
        }
    );
    d(p, "maxMp"
        ,function () {
            return this.intelligence * 40;
        }
    );
    __decorate([
        this.basicattackCache
    ], p, "basicattack", null);
    __decorate([
        this.maxhpCache
    ], p, "maxhp", null);
    __decorate([
        this.maxmpCache
    ], p, "maxmp", null);
    __decorate([
        this.defenceCacheCache
    ], p, "defence", null);
    __decorate([
        this.strengthCache
    ], p, "strength", null);
    __decorate([
        this.intelligenceCache
    ], p, "intelligence", null);
    __decorate([
        this.agilityCache
    ], p, "agility", null);
    __decorate([
        this.enduranceCache
    ], p, "endurance", null);
    __decorate([
        this.attackCache
    ], p, "attack", null);
    __decorate([
        this.fightpowerCache
    ], p, "FightPower", null);
    return Hero;
}());
egret.registerClass(Hero,'Hero');
//# sourceMappingURL=Hero.js.map