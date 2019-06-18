

function animate(delay,
				duration,
				properties,
				translation,
				...objects){	
let prefixList = [];

let startList = [];
let destinationList = [];
let suffixList = [];


let position = 0;
let progression = 0;
let propString = '';
	
	//Convert Properties
	
		
		
		for(let i = 0; i < properties.length; i++){
			let fourWrap = (i%4)+1;
			if(fourWrap === 1) prefixList.push(properties[i])
			else if(fourWrap === 2) startList.push(properties[i])
			else if(fourWrap === 3) destinationList.push(properties[i])
			else if(fourWrap === 4) suffixList.push(properties[i]);
			
			
			
			if(i === properties.length - 1){
				console.log('\n\nprefix:\n\n' + prefixList,
				 '\n\ndestination:\n\n' + destinationList,
				'\n\nsuffix:\n\n' + suffixList)
			}
		}
		
	
	function move() {

		 
//Convert Time		
		
		let now = performance.now();
		progression = (now - delay) / duration;
		if(progression < 1) requestAnimationFrame(move)
		
	
	
		 

//Apply Properties Over Time		
	
	for(let i = 0; i < prefixList.length; i++){ 	
		position = startList[i] +(progression * (destinationList[i] - startList[i])) * translation;
			
		
		if(progression < 0){
			if (i === 0){
			propString = prefixList[i] + startList[i] + suffixList[i];
			}
			else{
			propString += prefixList[i] + startList[i] + suffixList[i];
			console.log(propString);
		}
			}
		
		else{
		if (i === 0){
			propString = prefixList[i] + position + suffixList[i];
			}
			else{
			propString += prefixList[i] + position + suffixList[i];
			console.log(propString);
		}
			
			
		   objects.forEach((e)=>{
				
			    e.style.cssText = propString;
				
			});
			}		 
		}
	}
requestAnimationFrame(move);	
		
}	

function one(){
let num = 1;
return num;
}


