function getColor(colorNumber=0) {
	colorNumber = parseInt(colorNumber);
	switch(colorNumber){
		case 1: return "red"; 
				break;
		case 2: return "yellow"; 
				break;
		case 3: return "blue"; 
				break;
		case 4: return "green"; 
				break;
		default: return "black"; 
				 break;
	}
}

function getAllStudentColors(nloops){
	for (let i = 1; i <= nloops; i++) {
		let random = Math.floor((Math.random() * 4) + 1);
		console.log(getColor(random));
	}
}

getAllStudentColors(10);

