/*
CODING CHALLENGE 4

Let's remember the first coding challenge where Mark and John compared their BMI's. Let's now implement the same functionality with objects and methods.

	1) For each of them, create an object with properties for their full name, mass, and height.
	2) Then, add a mehtod to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
	3) In the end, log to the console who has the hightest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

	Remeber: BMI = mass / height^2 "(height * height)" mass in kg and height in meters.
*/ 

let people = {
	john: {
		first_name: 'John',
		last_name: 'Smith',
		mass: 92,
		height: 1.95,
		calculate_BMI: function(){
	 		return this.bmi = Math.round( ( this.mass / ( this.height * this.height ) ) * 100 ) / 100 ;	
	 	}
	},
	mark: {
		first_name: 'Mark',
		last_name: 'Hopkins',
		mass: 78,
		height: 1.69,
		calculate_BMI: function(){
	 		return this.bmi = Math.round( ( this.mass / ( this.height * this.height ) ) * 100 ) / 100 ;	
	 	}
	}
};

people.john.bmi = people.john.calculate_BMI();
people.mark.bmi = people.mark.calculate_BMI();

if ( people.john.bmi > people.mark.bmi ) {
	console.log(` ${ people.john.first_name } ${ people.john.last_name } has a BMI of ${ people.john.bmi } which is larger than ${ people.mark.first_name } ${ people.mark.last_name }'s.` );
} else if ( people.john.bmi < people.mark.bmi ) {
	console.log( `${ people.mark.first_name } ${ people.mark.last_name } has a BMI of ${ people.mark.bmi } which is larger than ${ people.john.first_name } ${ people.john.last_name }'s.` );
} else {
	console.log( "They have the same BMI." );
}
