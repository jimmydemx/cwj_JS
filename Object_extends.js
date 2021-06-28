
///////////part 1: after ES5////////////////

// class Fruit{
//     constructor(color,size){
//         this.color=color
//         this.size=size

//     }

//     buy_fruit(){

//         console.log('buy_fruit')
//     }

// }

// // class in JS: constructor + Fruit.prototype.methods
// // create another class, it will inherit method, it has own mehthos, override,


// class Apple extends Fruit{
//     constructor(shape){
//         // by using extends , "this" does not automaticlly create
//         // super() // initiate this
//         super("red") // initialize this, also pass "red" to color 
//     //    console.log("this",this)
//         this.shape=shape
//     }
// }

// var Apple1=new Apple("round")
// console.log(Apple1.shape)
// console.log(Apple1.color)
// console.log(Apple1.buy_fruit())



///////////part 2: before ES5////////////////

function Fruit(color,size){

    this.color=color
    this.size=size


}


Fruit.prototype.buy_fruit=function(){
    console.log('buy_fruit')

}


// var Fruit_1=new Fruit("yellow", "small")
// console.log(Fruit_1.color)
// console.log(Fruit_1.buy_fruit())

function Apple(shape){
    Fruit.call(this,"red","big")
    this.shape=shape

}

// Apple.prototype inherits the buy_fruit function:Fruit.prototype

Apple.prototype= Object.create(Fruit.prototype)

Object.defineProperty(Apple.prototype,"constructor",{

    value:Apple,

})

var Apple1=new Apple("round")
console.log(Apple1.shape)
console.log(Apple1.color)
console.log(Apple1.buy_fruit())

