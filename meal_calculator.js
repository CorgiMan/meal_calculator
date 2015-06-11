// author: wieger
// improvement: round costs in a smart way such that there are no off-by-a-few-cents mistakes


function Item(name, cost) {
	this.name = name
	this.cost = cost
}

function Diner(name, meal) {
	this.name = name
	this.meal = meal
}

function print_bill(diners, tax_rate, tip_ratio) {
	var cost = 0  
	for(i in diners) {
		var diner = diners[i]
		for(j in diner.meal) {
			var dish = diner.meal[j]
			cost += dish.cost
		}
	}

	var cost_incl_tax = cost * (tax_rate + 1)
	var tip_per_person = cost_incl_tax * tip_ratio / diners.length

	console.log("RESTAURANT BILL")
	console.log("-----------------------")
	console.log("cost:\t\t\t" + cost)
	console.log("tax:\t\t\t" + cost * tax_rate)
	console.log("tip:\t\t\t" + cost_incl_tax * tip_ratio)
	console.log("total:\t\t\t" + cost_incl_tax * (1 + tip_ratio))
	console.log("-----------------------")
	for(i in diners) {
		var diner = diners[i]
		var meal = diner.meal
		console.log(diner.name+":")
		var cost = 0
		for(j in meal) {
			var dish = meal[j]
			console.log("    " + dish.name + "\t\t" + dish.cost)
			cost += dish.cost
		}
		console.log()
		console.log("    cost:\t\t" + cost)
		console.log("    tax:\t\t" + cost * tax_rate)
		console.log("    tip:\t\t" + tip_per_person)
		console.log("    total:\t\t" + (cost * (1+tax_rate) + tip_per_person))
		console.log("-----------------------")
	}
}

var menu = {
	fish: new Item('fish', 20),
	beef: new Item('beef', 15),
	pork: new Item('pork', 10),
	white_wine: new Item('chardonnay', 5),
	beer: new Item('heineken', 3)
};

var diners = [
	new Diner("wieger", [menu.fish, menu.white_wine, menu.beer]),
	new Diner("gijs",   [menu.beef, menu.beer, menu.beer]),
	new Diner("shayla", [menu.pork, menu.white_wine, menu.white_wine])
];

console.log()
print_bill(diners, 0.21, 0.1)
