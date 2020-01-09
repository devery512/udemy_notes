/*
SECTION 3: HOW JavaScript Works Behind the Scenes



*/


/*
	Execution Context Object
		Variable Object (VO)
		Scope Chain
		"This" variable


		1. Creation phase
			A) Creation of the Variable Object (VO)
			B) Creation of the scope chain
			C) Determine value of the "this" variable
		2. Execution phase
			The code of the function that generated the current execution context is ran line by line.


The Variable Object
	The argument object is create, containing all the arguments that were passed into the function.
	
	Hoisted
		Code is scanned for function declarations: for each function, a property is created in the Variable Object, pointing to the function.
	
		Code is scanned for variable declarations: for each variable, a property is created in the Variable Object, and set to undefined.


*/


// HOISTING

calculate_age(1990);

function calculate_age(year){
	console.log(2020 - year);
}


//  retirment(1990); function expression does not work.
let retirment = function(year){
	console.log(65 - (2016 - year));
}

retirment(1990);


//Variables


console.log(age);
let age = 23;

function foo(){
	let age = 65;
	console.log(age);
}







