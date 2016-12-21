// TypeScript file
//每个用户都有英雄，每个英雄都有装备，每个装备都有宝石,根据不同道具、等级等属性可以计算出战斗力，生命值等数值。
class User {

    heros: Hero[] = [];
    herointeam: Hero[] = [];

    dirtyFlag: boolean = true;

    @this.herosinTeamCache
    getheroInTeam(): Hero[] {

        var heroInTeam: Hero[] = [];

        for (var i = 0; i < this.heros.length; i++) {
            if (this.heros[i].isInTeam) {
                heroInTeam.push(this.heros[i]);

            }
        }

        return heroInTeam;

    }

    @this.fightpowerCache
    get FightPower(): number {

        var result = 0;

        var heros: Hero[] = this.getheroInTeam();

		this.heros.forEach(e => result += e.FightPower)

		result=result/150;

        return result;

    }

    herosinTeamCache: MethodDecorator = (target: any, propertyName, desc: PropertyDescriptor) => {

		if (!this.dirtyFlag) {
			const getter = desc.get;
			desc.get = function () {
				return getter.apply(this);
			}

			return desc;
		}

	}

    fightpowerCache: MethodDecorator = (target: any, propertyName, desc: PropertyDescriptor) => {

		if (!this.dirtyFlag) {
			const getter = desc.get;
			desc.get = function () {
				return getter.apply(this);
			}

			return desc;
		}

	}

}


class EquipmentMap {

	head:egret.Bitmap;
	neck:egret.Bitmap;
	shoulder:egret.Bitmap;
	body:egret.Bitmap;
	
	weapon:egret.Bitmap;
	shield:egret.Bitmap;

	public constructor(stage:egret.DisplayObjectContainer) {

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

	public setBackMap() {

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
		

	}

	public equip(equipment:Equipment) {
		
		var image:string;//equipment.property.configId

		for(var i = 0; i < equipmentMapConfig.length; i++) {

			if(equipmentMapConfig[i].configId == equipment.equipmentID.configId) {
				image = equipmentMapConfig[i].image;
				break;
			}

		}

		switch(equipment.equipmentID.equipmentType) {
			
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
	}

}

class HeroMap {

	hero:egret.Bitmap;

	public constructor(stage:egret.DisplayObjectContainer) {

		this.hero = new egret.Bitmap();

		this.setBackMap();

		stage.addChild(this.hero);

	}

	public setBackMap() {

		this.hero.texture = RES.getRes(HeroBackMapConfig[0].image);
		this.hero.x = HeroBackMapConfig[0].x;
		this.hero.y = HeroBackMapConfig[0].y;

	}

}

class Hero {
	level: number = 1;

	isInTeam: boolean = false;

	property:HeroProperty;

	basicAttFactor: number = 1;
	strFactor: number = 1;
	agiFactor: number = 1;
	intFactor: number = 1;
	endFactor: number = 1;

	dirtyFlag: boolean = true;

	equipments: Equipment[] = [];

	public constructor(type: number) {

		this.basicAttFactor = heroConfig[type].basicattack;
		this.strFactor = heroConfig[type].strength;
		this.agiFactor = heroConfig[type].agility;
		this.intFactor = heroConfig[type].intelligence;
		this.endFactor = heroConfig[type].endurance;

	}

	public setInTeam(status: boolean) {

		this.isInTeam = status;
		this.dirtyFlag = true;

	}

	@this.basicattackCache
	get basicattack(): number {
		return this.level * 3* this.basicAttFactor;

	}

	@this.maxhpCache
	get maxhp(): number {
		return this.level * 2 * this.endurance;
	}

	@this.maxmpCache
	get maxmp(): number {
		return this.level * this.intelligence;
	}

	@this.defenceCacheCache
	get defence(): number {
		return this.level * this.endurance*3;
	}

	@this.strengthCache
	get strength(): number {
		return this.level * this.strFactor*2;
	}

	@this.intelligenceCache
	get intelligence(): number {
		return this.level * this.intFactor*2;
	}

	@this.agilityCache
	get agility(): number {
		return this.level * this.agiFactor*2;
	}

	@this.enduranceCache
	get endurance(): number {
		return this.level *this.endFactor*5;
	}

	@this.attackCache
	get attack(): number {
		return this.basicattack + this.strength;
	}

	@this.fightpowerCache
	get FightPower(): number {

		var result = 0;

		this.equipments.forEach(e => result += e.FightPower)

		result += this.attack * 1.5 + this.defence + (this.maxhp + this.maxmp * 0.5) *0.5;

		return result;

	}
	get maxHp():number {
		return this.level * 50;
	}

	get maxMp():number {
		return this.intelligence * 40;
	}


	basicattackCache: MethodDecorator = (target: any, propertyName, desc: PropertyDescriptor) => {

		if (!this.dirtyFlag) {
			const getter = desc.get;
			desc.get = function () {
				return getter.apply(this);
			}

			return desc;
		}

	}

	maxhpCache: MethodDecorator = (target: any, propertyName, desc: PropertyDescriptor) => {

		if (!this.dirtyFlag) {
			const getter = desc.get;
			desc.get = function () {
				return getter.apply(this);
			}

			return desc;
		}

	}

	maxmpCache: MethodDecorator = (target: any, propertyName, desc: PropertyDescriptor) => {

		if (!this.dirtyFlag) {
			const getter = desc.get;
			desc.get = function () {
				return getter.apply(this);
			}

			return desc;
		}

	}

	defenceCache: MethodDecorator = (target: any, propertyName, desc: PropertyDescriptor) => {

		if (!this.dirtyFlag) {
			const getter = desc.get;
			desc.get = function () {
				return getter.apply(this);
			}

			return desc;
		}

	}

	strengthCache: MethodDecorator = (target: any, propertyName, desc: PropertyDescriptor) => {

		if (!this.dirtyFlag) {
			const getter = desc.get;
			desc.get = function () {
				return getter.apply(this);
			}

			return desc;
		}

	}

	intelligenceCache: MethodDecorator = (target: any, propertyName, desc: PropertyDescriptor) => {

		if (!this.dirtyFlag) {
			const getter = desc.get;
			desc.get = function () {
				return getter.apply(this);
			}

			return desc;
		}

	}

	agilityCache: MethodDecorator = (target: any, propertyName, desc: PropertyDescriptor) => {

		if (!this.dirtyFlag) {
			const getter = desc.get;
			desc.get = function () {
				return getter.apply(this);
			}

			return desc;
		}

	}

	enduranceCache: MethodDecorator = (target: any, propertyName, desc: PropertyDescriptor) => {

		if (!this.dirtyFlag) {
			const getter = desc.get;
			desc.get = function () {
				return getter.apply(this);
			}

			return desc;
		}

	}

	attackCache: MethodDecorator = (target: any, propertyName, desc: PropertyDescriptor) => {

		if (!this.dirtyFlag) {
			const getter = desc.get;
			desc.get = function () {
				return getter.apply(this);
			}

			return desc;
		}

	}

	fightpowerCache: MethodDecorator = (target: any, propertyName, desc: PropertyDescriptor) => {

		if (!this.dirtyFlag) {
			const getter = desc.get;
			desc.get = function () {
				return getter.apply(this);
			}

			return desc;
		}

	}

}