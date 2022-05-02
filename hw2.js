/* DONT CHANGE THIS CODE - START */
function wait(ms = 1000) { return new Promise(resolve => setTimeout(resolve, ms)) }

class Dish {
    constructor(cookingTime) {
        this.cookingTime = cookingTime;
    }

    async cook() {
        const actualCookingTime = this.cookingTime * (1 + Math.random()) * 100;
        await wait(actualCookingTime);
        return this;
    }
}
/* DONT CHANGE THIS CODE - END */

class Ingridient{
    constructor(name, count) {
        this.name = name;
        this.count = count;
    }

    useIngrid(){
        this.count -= 1;
    }

}

class Bolognese extends Dish{
    constructor() {
        super(10);
        this.reqIngridietns = [
            new Ingridient('spaghetti', 1),
            new Ingridient('meat', 1),
            new Ingridient('tomato', 1)
        ];
    }
}

class MashedPotatoes extends Dish{
    constructor() {
        super(8);
        this.reqIngridietns = [
            new Ingridient('potato', 1)
        ];
    }
}

class Steak extends Dish{
    constructor() {
        super(7);
        this.reqIngridietns = [
            new Ingridient('meat', 1)
        ];
    }
}

class SteakAndFries extends Dish{
    constructor() {
        super(15);
        this.reqIngridietns = [
            new Ingridient('meat', 1),
            new Ingridient('potato', 1)
        ];
    }
}

class Kitchen{
    constructor() {
        this.fridgeContents = [];
        this.orderQueue = [];
    }
    addToFridge(ingridients){
        for(let i=0; i<ingridients.length; i++){
            this.fridgeContents.push(ingridients[i]);
        }
    }

    order(what){
        for(let i=0; i<what.reqIngridietns.length; i++){
            let ingrid = this.fridgeContents.find(({name}) => name === what.reqIngridietns[i].name);
            if(ingrid.count < 1){
                throw new Error("Not enough ingridients in fridge")
            }
        }
        for(let i=0; i<what.reqIngridietns.length; i++){
            let ingrid = this.fridgeContents.find(({name}) => name === what.reqIngridietns[i].name);
            ingrid.useIngrid();
        }
        this.orderQueue.push(what);
    }

    async cookFastestOrder(){
        let fastest = this.orderQueue.shift();
        for(let i=0; i<this.orderQueue.length; i++){
            let curr = this.orderQueue.shift();
            if(curr.cookingTime < fastest.cookingTime){
                this.orderQueue.push(fastest);
                fastest = curr;
            }
            else{
                this.orderQueue.push(curr);
            }
        }
        await fastest.cook();
        return fastest;
    }

    async cookAllOrders(){
        let cooked = [];
        for(let i=0; i<this.orderQueue.length; i++){
            await this.orderQueue[i].cook();
            cooked.push(this.orderQueue[i]);
        }
        return cooked;
    }

}

async function test() {
    const kitchen = new Kitchen();
    kitchen.addToFridge([
        new Ingridient('potato', 1),
        new Ingridient('spaghetti', 1),
        new Ingridient('meat', 3),
        new Ingridient('tomato', 2)
    ])

    kitchen.order(new Bolognese()); // Bolognese extends Dish (cookingTime = 10)
    kitchen.order(new MashedPotatoes()); // MashedPotatoes extends Dish (cookingTime = 8)
    kitchen.order(new Steak()); // Steak extends Dish (cookingTime = 7)

    // Feel free to experiment with various dishes and ingridients

    await kitchen.cookFastestOrder(); // Returns fastest dish to make
    await kitchen.cookAllOrders(); // Returns two dishes in array

    kitchen.order(new SteakAndFries()); // Throws Error: Not enough ingridients in fridge
}

test();
