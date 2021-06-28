// Array.prototype
// slice splice
// push pop shift unshift 
// concat
// join 
// arr=[1,3,4]
// arr[5]=function(){
//     console.log(1)
// }



// arr.key=6
// console.log(arr)
// console.log(arr.length)
// use key/value definition will not be reflected on arr.length

// var arr1=arr.slice(2,100)
// console.log("arr1=",arr1)
// console.log("arr1.key=",arr1.key)

// console.log("arr=",arr)

// splice

// var arr2=arr.splice(2,2,"1234",'1321')
// console.log(arr2)
// console.log(arr)

//push pop shift unshift 
// console.log(arr.push("12",12))
// console.log("arr=",arr)
// console.log(arr.pop())
// console.log("arr=",arr)
// console.log(arr.shift())
// console.log(arr)
// console.log(arr.unshift("a","b"))
// console.log(arr)

//concat
// join 
// var a=[1,2,4]
// var b=[2,["a","b",["c","d"]],"e"]
// console.log(a.concat(b))

// console.log(b.join("-"))




// Array.prototype.forEach()
// Array.prototype.filter()
// Array.prototype.find()
// Array.prototype.map()

arr=[1,2,3]

function fun(p){
    console.log(p)
    // console.log(this.name)
    return 
    
}

function func2(){}
// console.log(arr.forEach((fun),func2));
// console.log(arr.filter(fun))
// console.log(arr.find(fun))
// console.log(arr.map(fun))

// Array.prototype.reduce()
// arr=[1,2,3]
function fun3(a,b){
    return 

}
// step1: a=1 b=2=>a=3 b=3=>a=6
// step2: a=100 b=1=>a=101 b=2=>a=103 b=3=>106

console.log(arr.reduce((fun3),100))

