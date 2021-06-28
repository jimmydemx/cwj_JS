// polyfill Array.prototype.filter

arr=[1,2,3]

function fun(p){
    console.log(this)
    return p>1
}

// console.log(arr.filter((fun)))

function fun2(){


}
Array.prototype.p=function(cb,thisArg){

if(typeof(cb)!=="function" || Array.isArray(this))
throw new TypeError()
// call the cb, the parameter: elements of array arr=[1,2,3]
// new array, capture return value of cb 
// arr.filter :this
var new_array=[];

for(let i=0;i<this.length;i++){
    // element,index,arr
    if(thisArg===null){
    let res=cb(this[i],i,arr)
    if(res)
    new_array.push(this[i])
    }
    else{
        let res=cb.call(thisArg,this[i],i,arr)
        if(res)
        new_array.push(this[i])

    }
}



return new_array

}

console.log(arr.p((fun),fun2))

var str="123"
console.log(str.p((fun),fun2))