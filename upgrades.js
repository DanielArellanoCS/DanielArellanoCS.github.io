// JavaScript Document

//dojo.declare("classes.managers.UpgradeManager", null, {
	
	var buildName;
	var resource
	var intCost;
	var cost;
	var costMult;
	var rPS;
	var count = 0;
	
	function Building(buildName, intCost, cost, costMult, rPS){
		this.buildName = buildName;
		this.intCost = intCost;
		this.cost = cost;
		this.costMult= costMult;
		this.rPs = rPs;		
	}

	function buyUpgarde(object,resource){
		
		if(object.buildName == "axe"){
			if(resource >= cost){
				axe.count = axe.count+1;
				axe.cost = axe.cost*axe.costMult;
			}
		}
		
	}


	var axe = {
		
		buildName: "axe",
		cost: 10,
		//intCost: 10,
		costMult: 1.2,
		resourcePerSecond : .3

	}
	//var manyResources;
	var updateWood;	
	function updateResource(manyResources){
		clearInterval(updateWood);
		console.log("Debug: interval reset");
		
		updateWood = setInterval(
				function(){
					cutWood(manyResources);
					//document.getElementById("wood").innerHTML= wood;
					console.log("Debug: you are currently passing " + manyResources);
					console.log("Debug: you have " + wood.toFixed(2));
					console.log("Debug: and the cost is  " + axe.cost);
				}, (1000));	
		
		
		
	}
	function updateAllResource(){
		
		
		
	}
	
	function buyUpgrade(upgradeName){
				if(upgradeName == "up1")
			{
				if(wood >= axe.cost){
					count = count +1;
					axe.resourcePerSecond = (axe.resourcePerSecond*count).toFixed(2);
					updateResource(axe.resourcePerSecond);
					wood = wood - axe.cost;
					document.getElementById("wood").innerHTML= wood.toFixed(2);
					axe.cost = axe.cost*axe.costMult;
				}
				}
				
			}

		
	//}
