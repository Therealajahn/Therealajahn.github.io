const topCircle = document.getElementById('top-circle');
const bottomCircle = document.getElementById('bottom-circle');

let propellors = [ 'transform: rotate(',0,30, 'deg);',
					'margin-top: ',50,150, 'px;',
					'width: ',100,300, 'px;',
				]


animate(2000,
		2000,
		propellors,
		one(),
		topCircle,
		bottomCircle)
		
 

