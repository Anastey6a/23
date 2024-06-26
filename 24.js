// Константи для розмірів гамбургера
const SIZE_SMALL = {
    price: 50,
    calories: 20
};

const SIZE_LARGE = {
    price: 100,
    calories: 40
};

// Константи для начинок
const STUFFING_CHEESE = {
    price: 10,
    calories: 20
};

const STUFFING_SALAD = {
    price: 20,
    calories: 5
};

const STUFFING_POTATO = {
    price: 15,
    calories: 10
};

// Константи для добавок
const TOPPING_SAUCE = {
    price: 15,
    calories: 0
};

const TOPPING_MAYO = {
    price: 20,
    calories: 5
};

// Клас Гамбургер
class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }

    addTopping(topping) {
        this.toppings.push(topping);
    }

    calculatePrice() {
        let price = this.size.price + this.stuffing.price;
        for (const topping of this.toppings) {
            price += topping.price;
        }
        return price;
    }

    calculateCalories() {
        let calories = this.size.calories + this.stuffing.calories;
        for (const topping of this.toppings) {
            calories += topping.calories;
        }
        return calories;
    }
}

// Приклад використання
// маленький гамбургер з начинкою з сиру
var hamburger = new Hamburger(SIZE_SMALL, STUFFING_CHEESE);

// добавка з майонезу
hamburger.addTopping(TOPPING_MAYO);

// запитаємо скільки там калорій
console.log("Calories: " + hamburger.calculateCalories());

// скільки коштує
console.log("Price: " + hamburger.calculatePrice());

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(TOPPING_SAUCE);

// А скільки тепер коштує?
console.log("Price with sauce: " + hamburger.calculatePrice());