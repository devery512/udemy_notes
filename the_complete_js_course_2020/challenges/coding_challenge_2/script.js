/*
Coding Challenge 2

	John and his family went on a holiday and went to 3 different resturants. The bills were $124, $48, and $268.

	To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% when the bill is greater than $200.

	In the end, John would like to have 2 arrays:
		1) Containing all three tips, (one for each bill)
		2) Containing all three final paid amounts (bill + tip)

		(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
*/

	// 2 Arrays
	let tips = new Array();
	let final_amounts = new Array();
	let bills = [124,48,268];

	function tip_calculator(bill){
		let percentage = [.2,.15,.10]
		let tip = 0;
		if (bill < 50) {
			tip = bill * percentage[0];
		} else if (bill >= 50 && bill < 200) {
			tip = bill * percentage[1];
		} else {
			tip = bill * percentage[2];
		}
		let decimal_fix = Math.round(tip * 100) / 100;
		return decimal_fix;
	}

	function total_bill(bill){
		return bill + tip_calculator(bill);
	}

	tips.push(tip_calculator(bills[0]),tip_calculator(bills[1]),tip_calculator(bills[2]));
	final_amounts.push(total_bill(bills[0]),total_bill(bills[1]),total_bill(bills[2]));

	console.log(tips, final_amounts);


