function makeForm(){
	let wrapper = document.getElementById('wrapper');
	
	let firstName = document.createElement('div');
	firstName.setAttribute('id', 'first-name');
	firstName.style.cssText = 'display: grid;';
	wrapper.appendChild(firstName);
	
	let lastName = document.createElement('div');
	lastName.setAttribute('id', 'last-name');
	lastName.style.cssText = 'display: grid;';
	wrapper.appendChild(lastName);
	
	}
makeForm();

function getStyle(currElement, key){
	
    
    let line = document.getElementById(currElement);
    
    
    let letter = document.createElement('span');
    letter.setAttribute('id',`${key}`);    
    line.appendChild(letter);
   
    let Body = document.createElement('div');
    Body.setAttribute('id',`${key}Body`);
    letter.appendChild(Body);
    
    let Inner = document.createElement('div');
    Inner.setAttribute('id',`${key}Inner`);
    letter.appendChild(Inner);    
    
    let Vert = document.createElement('div');
    Vert.setAttribute('id',`${key}Vert`);
    letter.appendChild(Vert);  
        
    let Horz = document.createElement('div');
    Horz.setAttribute('id',`${key}Horz`);
    letter.appendChild(Horz);  
    
    let Tail = document.createElement('div'); Tail.setAttribute('id',`${key}Tail`);
    letter.appendChild(Tail);  
   
    
}



let grids = {
	firstName: [],
	lastName: [],
	upperFirst: [],
    upperLast: [],
	};
	





function getLetters(){
grids.enterPressed = false;
let shift = false;
let capsLock = false;

let keysDown = document.addEventListener('keydown', ()=>{

	let key = event.which || event.keycode;
	const letterInput = 64 <= key && key <= 90;  

	if(key === 13 && grids.enterPressed === false){
		grids.enterPressed = true;
		console.log('lastName!');
		console.log(grids.lastName);
		} else if(key === 13 && grids.enterPressed === true){
		grids.enterPressed = false;
		console.log('firstName!');
	    console.log(grids.firstName);
				};
//enter key toggles between lastName and firstName

		if(letterInput && grids.enterPressed === false){
	grids.firstName.push(String.fromCharCode(key));
	console.log(grids.firstName.length);
	console.log('first-input');
	makeFirstSection();
	getStyle('first-name', String.fromCharCode(key).toLowerCase());
	}else if(letterInput && grids.enterPressed === true){
		grids.lastName.push(String.fromCharCode(key));
		console.log(grids.lastName.length);	
		console.log('last-input');
		makeSecondSection();
		getStyle('last-name', String.fromCharCode(key).toLowerCase());
		}else if(key === 8 || 13 || 16 || 20){}
		 else{
	console.log('Only Letters Will Be Accepted');
		};
//all keycodes for letters pressed are converted to letters and..
//added to a name array
//all non-letters except for shift, capslock, enter, or backspace 
//will be ignored  		
		if(key === 8 && grids.enterPressed === false){
	grids.firstName.pop();
	grids.upperFirst.pop();
	console.log(grids.firstName);
	console.log(grids.upperFirst);
		}else if(key === 8 && grids.enterPressed === true){
		grids.lastName.pop();
		grids.upperLast.pop();
		console.log(grids.lastName);
		console.log(grids.upperLast);
		};
//backspace key deletes the last letter of the selected array
	
	if(key === 16 && shift === false){
	shift = true;
	console.log(`shift: ${shift}`);
		}
//shift key toggled true if pressed	
	let keysUp = document.addEventListener('keyup', ()=>{
		let keyup = event.which || event.keycode;
		
		if(keyup === 16 && shift === true){
		shift = false;
		console.log(`shift: ${shift}`);
			}
	});
//shift will be toggled to false if key is released	
	if(key === 20 && capsLock === false){
	capsLock = true;
	console.log(`capsLock: ${capsLock}`);
		}else if(key === 20 && capsLock === true){
		 capsLock = false;
		 console.log(`capsLock: ${capsLock}`);				
		 }

//capsLock variable toggled true or false		 
	
	if(letterInput && 
	   (shift === false &&
	    capsLock === false &&
	    grids.enterPressed === false)
		){
	grids.upperFirst.push('low');
	console.log(grids.upperFirst);
	}else if(letterInput &&
			 (shift === true ||
			 capsLock === true)&&
			 grids.enterPressed === false
			 ){
		grids.upperFirst.push('upper');
		console.log(grids.upperFirst);
		};
	
	if(letterInput && 
	   (shift === false &&
	    capsLock === false &&
	    grids.enterPressed === true)
		){
	grids.upperLast.push('low');
	console.log(grids.upperLast);
	}else if(letterInput &&
			 (shift === true ||
			 capsLock === true)&&
			 grids.enterPressed === true
			 ){
		grids.upperLast.push('upper');
		console.log(grids.upperLast);
		};	
//pressing shift or capsLock will make subsequent...
// ...key presses also store an 'upper' property in ...
//...separate arrays for each name array


	});

}
getLetters();


function makeFirstSection(){
	grids.firstGrid = document.getElementById('first-name');
	grids.lastGrid = document.getElementById('last-name');
	
	
	grids.firstColumnNum = grids.firstName.length;
	console.log('firstColumns :' + grids.firstColumnNum);
	
	grids.firstColumnWidth = 100 / grids.firstColumnNum;
	grids.firstRowNum = 1;
	grids.firstRowHeight = 50;
	
	grids.firstGrid.style.gridTemplateColumns = 
	`repeat(${grids.firstColumnNum},${grids.firstColumnWidth}vw)`;
	grids.firstGrid.style.gridTemplateRows = 
	`repeat(${grids.firstRowNum},${grids.firstRowHeight}px)`;
}	
	
	
function makeSecondSection(){	
	grids.lastColumnNum = grids.lastName.length;
	console.log('lastColumns :' + grids.lastColumnNum);
	
	grids.lastColumnWidth = 100 / grids.lastColumnNum;
	grids.lastRowNum = 1;
	grids.lastRowHeight = 50; 
	grids.lastGrid.style.gridTemplateColumns = 
	`repeat(${grids.lastColumnNum},${grids.lastColumnWidth}vw)`;
	grids.lastGrid.style.gridTemplateRows = 
	`repeat(${grids.lastRowNum},${grids.lastRowHeight}px)`;
}	







 
 
 

	




