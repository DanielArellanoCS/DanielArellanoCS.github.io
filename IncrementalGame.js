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
var maxWood = 50;
var maxFoood = 150;
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
	if(wood < maxWood){
	wood = wood +1;
	document.getElementById("wood").innerHTML = wood.toFixed(2);
	displayLog("Gathered wood!");
	}
	else{
		var temp = (wood-maxWood);
		wood = wood - temp;
		temp = 0;
		displayLog("Build more (temp) Storage to increase wood supply!");
	}
}

function displayMaxResources(resource){
	document.getElementById(resource).innerHTML = resource();
	
}

function cutWood(workers){
	if(wood < maxWood){
	wood = wood + (workers * (woodUpgrades));
		if (wood >= maxWood){
			var temp = (wood-maxWood);
			document.getElementById("wood").innerHTML = wood.toFixed(2);
			wood = wood - temp;
			temp = 0;
		}
	document.getElementById("wood").innerHTML = wood.toFixed(2);
	}
	else if (wood >= maxWood){
		var temp = (wood-maxWood);
		document.getElementById("wood").innerHTML = wood.toFixed(2);
		wood = wood - temp;
		temp = 0;
}
}

function gatherFood(){
	food = food + workers*(woodUpgrades);
	document.getElementById("food").innerHTML = food;
	console.log("Debug: Gathered Food")
	displayLog("collected " + workers + " food");
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
			displayLog("Worker Added");
		}
		else{
			console.log("Debug: Error: Not enough food!");
			displayLog("Not enough food");
	}}
	else{
	console.log("Debug: Reached max workers!");
		displayLog("You don't have enough houses!");
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
				document.getElementById("addWorker").innerHTML = workers;
				console.log("Debug: Worker Added");
				displayLog("Worker Added");
				specResourcesUpdate(allocatedWorkers);
				//updateButton("WC",1);
			}
			else{
				console.log("Debug: Not enough workers!");
				displayLog("Not enough workers");
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
			 	displayLog("Worker removed");
				
			}
		else{
			console.log("Debug: You have no more workers to remove!");
			displayLog("You have no more workers to remove!");
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
function displayLog(nextLog){
	var para = document.createElement("p");
	var node = document.createTextNode("- "+ nextLog);
	para.appendChild(node);
	var element = document.getElementById("rightColumn");
	var child = document.getElementById("SpanLog");
	element.insertBefore(para,child);

	$('#rightColumn').scrollTop($('#rightColumn')[0].scrollHeight);
	//document.getElementById("Log").innerHTML = (display1 +" "+ nextLog);
	
}

