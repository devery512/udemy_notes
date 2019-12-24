/*Skipped the first few sections because I already know them
and this is just a refresher until I get later into the course.
*/

// WE OUT HERE TRYNA FUNCTION!!!!

function calculate_age(birth_year){
	return 2019 - birth_year;
}

let age_john = calculate_age(1995);

console.log(age_john);

let age_mike = calculate_age(1993);
let age_bob = calculate_age(1994);
let age_hugo = calculate_age(1996);
console.log(age_john, age_mike, age_bob, age_hugo);


function years_until_retirement(year, first_name){
	let age = calculate_age(year);
	let retirement = 65 - age;
	console.log(first_name + ' retires in ' + retirement + ' years.');
}

years_until_retirement(1995, 'John');
years_until_retirement(1993, 'William');
years_until_retirement(1990, 'Tony');
years_until_retirement(1997, 'Vip');


// FUNCTION STATEMENTS ADN EXPRESSIONS!!!!

// Function Declaration
function what_do_you_do(job,first_name){};

//Function Expression
let what_do_you_do function(job, first_name){
	switch(job){
		case 'teacher':
			return first_name + ' teaches kids how to code.';
		case 'driver':
			return first_name + ' drives a cab in Lisbon.';
		case 'designer':
			return first_name + ' designs beautiful websites';
		default:
			return first_name + ' does something else.';
	}
}

console.log(what_do_you_do('teacher','John'));
console.log(what_do_you_do('designer','Jane'));
console.log(what_do_you_do('retired','Mark'));





