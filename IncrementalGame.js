// JavaScript Document
var workers = 1;
var food = 0;
var wood = 0;
/*var c = 0;
var d = 0;
var e = 0;
var f = 0;
*/
var woodUpgrades=1;
var maxWorkers = 5;
var totalWorkers =1;
var foodCost=5;
var allocatedWorkers = 0;
var woodCutter = 0;

function resource (resource){
	if (resource == maxWorkers)
		return maxWorkers;
	else if (resource == maxFood);
		return maxFood;
	
}
function cutWoodDef(){
	wood = wood +1;
	document.getElementById("wood").innerHTML = wood.toFixed(2);

}

function displayMaxResources(resource){
	document.getElementById(resource).innerHTML = resource();
	
}

function cutWood(workers){
	wood = wood + (workers * (woodUpgrades));
	document.getElementById("wood").innerHTML = wood.toFixed(2);
	console.log("Debug: Wood Cut!");
}

function gatherFood(){
	food = food + workers*(woodUpgrades);
	document.getElementById("food").innerHTML = food;
	console.log("Debug: Gathered Food")
}



/*var newfood = 10
	newfood= newfood *10.5
	new worker = 10 + newfood
	
	
function clickWood(){
	onclick	= cutWood();
}
*/
function createWorker(){
	if (totalWorkers < maxWorkers){
		if (food >= foodCost){
			totalWorkers = totalWorkers+1;
			workers = workers +1;
			food = food - foodCost;
			document.getElementById("addWorker").innerHTML = workers;
			document.getElementById("food").innerHTML = food;
			foodCost = foodCost*1.8;
			console.log("Debug: Worker added");
		}
		else{
			console.log("Debug: Error: Not enough food!");
	}}
	else{
	console.log("Debug: Reached max workers!");
}}
/*
function buyUpgrade1(){
	
	
}
*/
function allocateWorkers(allocateChoice){
	if (allocateChoice == "wood cutter add"){
			if ((workers > 0) && (totalWorkers <= maxWorkers)){
				workers = workers-1;
				woodCutter = woodCutter+1;
				allocatedWorkers +=1;
				document.getElementById("woodCutter").innerHTML = woodCutter;
				console.log("Debug: Worker Added");
				document.getElementById("addWorker").innerHTML = workers;
				specResourcesUpdate(allocatedWorkers);
				//updateButton("WC",1);
			}
			else{
				console.log("Debug: Not enough workers!");
			}
		
	}
	else if (allocateChoice == "wood cutter minus"){
		 if (woodCutter >= 1 && workers != totalWorkers){
				workers = workers+1;
				woodCutter = woodCutter-1
			 	allocatedWorkers = allocatedWorkers - 1;
			    specResourcesUpdate(allocatedWorkers);
				document.getElementById("woodCutter").innerHTML = woodCutter;
			  	document.getElementById("addWorker").innerHTML = workers;
				console.log("Debug: Worker removed");
				
			}
		else{
			console.log("Debug: You have no more workers to remove!");
			}

	}
//	else if (allocateChoice == "food gather add"){
		
		
	}
	
var intervalWood;
function specResourcesUpdate(allocatedWorkers){
	var count = allocatedWorkers;
	clearInterval(intervalWood);
	if (allocatedWorkers > 0){
		intervalWood = setInterval(
			function(){
				if(allocatedWorkers > 0){
			cutWood(allocatedWorkers);
				}
			}, (5000));	
		console.log("Debug: Interval start " + (count));
	}
	else if (allocatedWorkers <= 0){
		clearInterval(intervalWood);
	//	clearInterval(cutWood());
	console.log("Debug: Interval cleared");
		}
	}
function calcPerSecond(resource){
	var minute = 60;
	
}

function specResourcesStop(allocatedWorkers){
	if(allocatedWorkers == 0){
	clearInterval(intervalWood);
	//	clearInterval(cutWood());
	console.log("Debug: Interval cleared");
		}
}
var setBTNgrey;
function updateButton(type, workers /*, food, wood, workers, maxWorkers*/){
		
		if(type == "WC"){
			if(food > foodCost && workers < maxWorkers){
				clearInterval(setBTNgrey);
				setBTNgrey= setInterval(
				function(){
					
					document.getElementById("minusWCBTN").style.cursor = "default";
					console.log("Debug: Checking button");
				}, (500));	
			}
			else{
				clearInterval(setBTNgrey);
				setBTNgrey = setInterval(
				function(){
					document.getElementById("minusWCBTN").style.cursor = "not-allowed";
					console.log("Debug: checking button");
				}, (500));	
			}
		}
	}
	

