class Panel extends egret.DisplayObjectContainer{

	private background:egret.Shape;

	private _width:number;
	private _height:number;

	public constructor(x,y,width,height) {
		super();
		this.Init();

		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;

		this.drawPanel();
	}

	private Init() {
		this.background = new egret.Shape();

	}


	private drawPanel() {

		this.background.graphics.lineStyle(10, 0x000000 );
        this.background.graphics.beginFill( 0x071444, 1);
        this.background.graphics.drawRect( 0, 0, this.width, this.height );
        this.background.graphics.endFill();
		this.background.alpha = 0.5;
        this.addChild( this.background );

	}

}


class EquipmentPanel extends egret.DisplayObjectContainer{
	
	backpanel:Panel;

	name_Texfield:egret.TextField;
	attack_Textfield:egret.TextField;
	strength_Textfield:egret.TextField;
	agility_Textfield:egret.TextField;
	intelligence_Textfield:egret.TextField;
	endurance_Textfield:egret.TextField;
	fightPower_Textfield:egret.TextField;
	
	public constructor() {
		super();
		this.backpanel = new Panel(0,0,400,400);
		this.addChild(this.backpanel);
		this.init();

	}

	private init() {

		this.name_Texfield = new egret.TextField();
		this.name_Texfield.text = userPanelTextConfig[0].name;
		this.name_Texfield.x = userPanelTextConfig[0].x;
		this.name_Texfield.y = userPanelTextConfig[0].y;
		this.addChild(this.name_Texfield);
		
		
		this.attack_Textfield = new egret.TextField();
		this.attack_Textfield.text = userPanelTextConfig[1].name;
		this.attack_Textfield.x = userPanelTextConfig[1].x;
		this.attack_Textfield.y = userPanelTextConfig[1].y;
		this.addChild(this.attack_Textfield);

		this.strength_Textfield = new egret.TextField();
		this.strength_Textfield.text = userPanelTextConfig[2].name;
		this.strength_Textfield.x = userPanelTextConfig[2].x;
		this.strength_Textfield.y = userPanelTextConfig[2].y;
		this.addChild(this.strength_Textfield);

		this.agility_Textfield = new egret.TextField();
		this.agility_Textfield.text = userPanelTextConfig[3].name;
		this.agility_Textfield.x = userPanelTextConfig[3].x;
		this.agility_Textfield.y = userPanelTextConfig[3].y;
		this.addChild(this.agility_Textfield);

		this.intelligence_Textfield = new egret.TextField();
		this.intelligence_Textfield.text = userPanelTextConfig[4].name;
		this.intelligence_Textfield.x = userPanelTextConfig[4].x;
		this.intelligence_Textfield.y = userPanelTextConfig[4].y;
		this.addChild(this.intelligence_Textfield);

		this.endurance_Textfield = new egret.TextField();
		this.endurance_Textfield.text = userPanelTextConfig[5].name;
		this.endurance_Textfield.x = userPanelTextConfig[5].x;
		this.endurance_Textfield.y = userPanelTextConfig[5].y;
		this.addChild(this.endurance_Textfield);

		this.fightPower_Textfield = new egret.TextField();
		this.fightPower_Textfield.text = userPanelTextConfig[6].name;
		this.fightPower_Textfield.x = userPanelTextConfig[6].x;
		this.fightPower_Textfield.y = userPanelTextConfig[6].y;
		this.addChild(this.fightPower_Textfield);
		
		
	}

	public setPanel(equipment:Equipment) {
		this.setPanelText(equipment);
		this.setPanelPos(equipment.equipmentID.equipmentType);
	}

	public setPanelText(equipment:Equipment) {
		this.name_Texfield.text = userPanelTextConfig[0].name + equipment.equipmentID.equipmentType;
		this.attack_Textfield.text = "    +" + equipment.attack + userPanelTextConfig[1].name;
		this.strength_Textfield.text = "    +" + equipment.strength + userPanelTextConfig[2].name;
		this.agility_Textfield.text = "    +" + equipment.agility + userPanelTextConfig[3].name;
		this.intelligence_Textfield.text = "    +" + equipment.intelligence + userPanelTextConfig[4].name;
		this.endurance_Textfield.text = "    +" + equipment.endurance + userPanelTextConfig[5].name;
		this.fightPower_Textfield.text = "    +" + equipment.FightPower + userPanelTextConfig[6].name;
	}

	public setPanelPos(typeNumber:number) {

		switch(typeNumber) {

			case equipmentType.WEAPON:
				this.x = posConfig[0].x;
				this.y = posConfig[0].y;
				break;

			case equipmentType.SHIELD:
				this.x = posConfig[1].x;
				this.y = posConfig[1].y;
				break;

			case equipmentType.HEAD:
				this.x = posConfig[2].x;
				this.y = posConfig[2].y;
				break;

			case equipmentType.NECK:
				this.x = posConfig[3].x;
				this.y = posConfig[3].y;
				break;

			case equipmentType.SHOULDER:
				this.x = posConfig[4].x;
				this.y = posConfig[4].y;
				break;

			case equipmentType.BODY:
				this.x = posConfig[5].x;
				this.y = posConfig[5].y;
				break;

		}

	}

}
class HeroInfoPanel extends egret.DisplayObjectContainer{

	backpanel:Panel;
	name_Texfield:egret.TextField;

	maxHp_Textfield:egret.TextField;
	maxMp_Textfield:egret.TextField;

	attack_Textfield:egret.TextField;
	strength_Textfield:egret.TextField;
	agility_Textfield:egret.TextField;
	intelligence_Textfield:egret.TextField;
	endurance_Textfield:egret.TextField;

	fightPower_Textfield:egret.TextField;

	public constructor() {
		super();
		this.backpanel = new Panel(0,0,400,400);
		this.addChild(this.backpanel);
		this.init();

	}

	private init() {

		this.name_Texfield = new egret.TextField();
		this.name_Texfield.text = heroTextConfig[0].name;
		this.name_Texfield.x = heroTextConfig[0].x;
		this.name_Texfield.y = heroTextConfig[0].y;
		this.addChild(this.name_Texfield);
		
		
		this.attack_Textfield = new egret.TextField();
		this.attack_Textfield.text = heroTextConfig[1].name;
		this.attack_Textfield.x = heroTextConfig[1].x;
		this.attack_Textfield.y = heroTextConfig[1].y;
		this.addChild(this.attack_Textfield);

		this.strength_Textfield = new egret.TextField();
		this.strength_Textfield.text = heroTextConfig[2].name;
		this.strength_Textfield.x = heroTextConfig[2].x;
		this.strength_Textfield.y = heroTextConfig[2].y;
		this.addChild(this.strength_Textfield);

		this.agility_Textfield = new egret.TextField();
		this.agility_Textfield.text = heroTextConfig[3].name;
		this.agility_Textfield.x = heroTextConfig[3].x;
		this.agility_Textfield.y = heroTextConfig[3].y;
		this.addChild(this.agility_Textfield);

		this.intelligence_Textfield = new egret.TextField();
		this.intelligence_Textfield.text = heroTextConfig[4].name;
		this.intelligence_Textfield.x = heroTextConfig[4].x;
		this.intelligence_Textfield.y = heroTextConfig[4].y;
		this.addChild(this.intelligence_Textfield);

		this.endurance_Textfield = new egret.TextField();
		this.endurance_Textfield.text = heroTextConfig[5].name;
		this.endurance_Textfield.x = heroTextConfig[5].x;
		this.endurance_Textfield.y = heroTextConfig[5].y;
		this.addChild(this.endurance_Textfield);

		this.fightPower_Textfield = new egret.TextField();
		this.fightPower_Textfield.text = heroTextConfig[6].name;
		this.fightPower_Textfield.x = heroTextConfig[6].x;
		this.fightPower_Textfield.y = heroTextConfig[6].y;
		this.addChild(this.fightPower_Textfield);

		this.maxHp_Textfield = new egret.TextField();
		this.maxHp_Textfield.text = heroTextConfig[7].name;
		this.maxHp_Textfield.x = heroTextConfig[7].x;
		this.maxHp_Textfield.y = heroTextConfig[7].y;
		this.addChild(this.maxHp_Textfield);

		this.maxMp_Textfield = new egret.TextField();
		this.maxMp_Textfield.text = heroTextConfig[8].name;
		this.maxMp_Textfield.x = heroTextConfig[8].x;
		this.maxMp_Textfield.y = heroTextConfig[8].y;
		this.addChild(this.maxMp_Textfield);
		
		
	}



	public setPanelText(hero:Hero) {

		this.name_Texfield.text = heroTextConfig[0].name + hero.property.name;
		this.attack_Textfield.text = heroTextConfig[1].name + hero.attack;
		this.strength_Textfield.text = heroTextConfig[2].name + hero.strength;
		this.agility_Textfield.text = heroTextConfig[3].name + hero.agility;
		this.intelligence_Textfield.text = heroTextConfig[4].name + hero.intelligence;
		this.endurance_Textfield.text = heroTextConfig[5].name + hero.endurance;
		this.fightPower_Textfield.text = heroTextConfig[6].name + hero.FightPower;

		this.maxHp_Textfield.text = heroTextConfig[7].name + hero.maxHp;
		this.maxMp_Textfield.text = heroTextConfig[8].name + hero.maxMp;

	}

}

class HeroPanel extends egret.DisplayObjectContainer{
	
	equipmentMap:EquipmentMap;
	heroMap:HeroMap;
	equipmentPanel:EquipmentPanel;
	heroInfoPanel:HeroInfoPanel;
	hero:Hero;
	
	public constructor() {
		super();
		this.heroMap = new HeroMap(this);
		this.equipmentMap = new EquipmentMap(this);
		this.equipmentPanel = new EquipmentPanel();
		this.heroInfoPanel = new HeroInfoPanel();
		this.addTouchEvent();

		this.heroInfoPanel.x = 0;
		this.heroInfoPanel.y = 600;
		this.addChild(this.heroInfoPanel);
		
	}

	showPanel(equipment:Equipment){
		this.equipmentPanel.setPanel(equipment);
		this.addChild(this.equipmentPanel);
	}

	offShowPanel() {
		this.removeChild(this.equipmentPanel);
	}

	public addTouchEvent() {

		this.touchEnabled = false;
		
		this.equipmentMap.weapon.touchEnabled = true;
		this.equipmentMap.weapon.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTapWeapon,this);

		this.equipmentMap.shield.touchEnabled = true;
		this.equipmentMap.shield.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTapShield,this);

		this.equipmentMap.head.touchEnabled = true;
		this.equipmentMap.head.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTapHead,this);
		
	}
		
	onTapWeapon(e:egret.TouchEvent) {
		console.log("weapon");	
		var weapon:Equipment;
		for(var i=0; i<this.hero.equipments.length; i++) {
			if(this.hero.equipments[i].equipmentID.equipmentType == equipmentType.WEAPON) {
				weapon = this.hero.equipments[i];
			}
		}

		this.showPanel(weapon);

		this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTapWeapon,this);
		this.equipmentMap.weapon.touchEnabled = false;

		this.addEventListener(egret.TouchEvent.TOUCH_END,this.onTapBack,this);
		this.touchEnabled = true;

	}

	onTapShield(e:egret.TouchEvent) {
		console.log("shield");	
		var shield:Equipment;
		for(var i=0; i<this.hero.equipments.length; i++) {
			if(this.hero.equipments[i].equipmentID.equipmentType == equipmentType.SHIELD) {
				shield = this.hero.equipments[i];
			}
		}

		this.showPanel(shield);

		this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTapWeapon,this);
		this.equipmentMap.weapon.touchEnabled = false;

		this.addEventListener(egret.TouchEvent.TOUCH_END,this.onTapBack,this);
		this.touchEnabled = true;

	}

	onTapHead(e:egret.TouchEvent) {
		console.log("head");	
		var head:Equipment;
		for(var i=0; i<this.hero.equipments.length; i++) {
			if(this.hero.equipments[i].equipmentID.equipmentType == equipmentType.HEAD) {
				head = this.hero.equipments[i];
			}
		}

		this.showPanel(head);

		this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTapHead,this);
		this.equipmentMap.head.touchEnabled = false;

		this.addEventListener(egret.TouchEvent.TOUCH_END,this.onTapBack,this);
		this.touchEnabled = true;

	}


	onTapBack(e:egret.TouchEvent) {
		console.log("back");
		this.offShowPanel();

		this.removeEventListener(egret.TouchEvent.TOUCH_END,this.onTapBack,this);
		this.touchEnabled = false;

		this.equipmentMap.weapon.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTapWeapon,this);
		this.equipmentMap.weapon.touchEnabled = true;

		this.equipmentMap.shield.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTapShield,this);
		this.equipmentMap.shield.touchEnabled = true;

		this.equipmentMap.head.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTapHead,this);
		this.equipmentMap.head.touchEnabled = true;

	}

	setHero(hero:Hero) {
		this.hero = hero;
		this.heroInfoPanel.setPanelText(this.hero);
	}

	
}
