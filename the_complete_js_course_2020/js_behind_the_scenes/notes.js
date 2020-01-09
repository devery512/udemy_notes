/*
SECTION 3: HOW JavaScript Works Behind the Scenes

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

Scoping In JavaScript
	Scoping answers the question "where can we access a certain variable?"

	Each new function creates a scope:
		The space/enviorment, in which the variables it defiens are accessible.
	
	Lexical scoping: 
		A function that is lexically within another function gets access to the scope of the outer function.

The 'this' Variable
	Regular function call:
		The 'this' keyword points at the global object, (the window object, in the browser)
	Method call:
		The 'this' variable points to the object that is calling the method.
	**THE 'this' KEYWORD IS NOT ASSIGNED A VALUE UNTIL A FUNCTION WHERE IT IS DEFINED IS ACTUALLY CALLED.**
*/

// HOISTING

	calculate_age( 1990 );

	function calculate_age( year ){
		console.log( 2020 - year );
	}


	//  retirment(1990); function expression does not work.
	let retirment = function(year){
		console.log( 65 - ( 2016 - year ) );
	}

	retirment( 1990 );


//Variables
	console.log( age );
	let age = 23;

	function foo(){
		let age = 65;
		console.log( age );
	}

	foo();
	console.log( age );


// Scoping And The Scope Chain
	// EXECUTION STACK (Order in which functions are called) VS SCOPE CHAIN (Order in which functions are written lexically)
		var a = 'Hello!';
		first();

		function first(){
			let b = 'Hi!';
			second();

			function second(){
				let c = 'Hey!';
				third();
			}
		}

		function third(){
			let d = 'John';
			console.log( a + b + c + d );
		}

// The 'this' Keyword
	calculate_age(1992);

	function calculate_age( year ){
		console.log( 2020 - year );
		console.log( this );
	}

	let john = {
		name: 'John',
		birth_year: 1990,
		calculate_age: function(){
			console.log( this );
			console.log( 2020 - this.birth_year );

			function inner_function(){
				console.log( this );
			}
			inner_function();
		}
	}

	john.calculate_age();


