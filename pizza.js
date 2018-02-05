var toppingsList = {
    pepperoni: { name: 'pepperoni', kcal: 800, price: .99 },
    cheese: { name: 'cheese', kcal: 10000, price: 0 },
    anchovies: { name: 'anchovies', kcal: 10, price: 5 },
    olives: { name: 'olives', kcal: 77, price: .99 }
}

var pizza = {
    baseCost: 4.99,
    toppings: [],
    customerName: 'Jake'
}

function Pizza(customerName) {
    this.customerName = customerName
    this.baseCost = 4.99
    this.toppings = [toppingsList.cheese]
}

var myPizza = new Pizza("Mike", 4.99, Pizza.toppings)
    //console.log(myPizza)

function addTopping(toppingName, pizza) {
    //AKA BRACKET NOTATION!!!!!!
    var topping = toppingsList[toppingName]
    if (topping) {
        // if pizza has topping do nothing or skip at the very least dont ADD
        // if (pizza.toppings.find(t => t.name == toppingName)) { return }
        // SANITY CHECK a business rule
        for (let i = 0; i < pizza.toppings.length; i++) {

            const topping = pizza.toppings[i];
            if (topping.name == toppingName) {
                return console.log('already got that one bub')
            }
        }
        pizza.toppings.push(topping)
        console.log("Added", pizza.toppings) // before modifying data check above
    } else {
        console.log('SORRY WE DONT HAVE THAT AS AN OPTION')
        console.log('here are the available toppings', toppingsList)
    }
}

addTopping('pepperoni', myPizza)
addTopping('pepperoni', myPizza)
addTopping('anchovies', myPizza)
addTopping('olives', myPizza)


function totalKCals(pizza) {
    var totalKCals = 0

    for (let i = 0; i < pizza.toppings.length; i++) {
        const topping = pizza.toppings[i]; // ALIAS
        totalKCals += topping.kcal
    }

    return totalKCals
}

function pizzaCost(pizza) {
    var cost = 4.99
    debugger
    for (let i = 0; i < pizza.toppings.length; i++) {
        var topping = pizza.toppings[i];
        cost += topping.price
    }
    console.log("Total price:  ", cost)
}
pizzaCost(myPizza)