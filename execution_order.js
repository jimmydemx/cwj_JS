async function async1(){
    console.log('async1 start')
    await async2()
    console.log('async1 end')
}
async function async2(){
    console.log('async2')
}
console.log('script start')
setTimeout(function(){
    console.log('setTimeout')
},0)  
async1();
new Promise(function(resolve){
    setTimeout(function(){
    console.log('setTimeouttt')
    },0)
    console.log('promise1')
    Promise.resolve().then(()=>console.log("Promise4"))
    resolve();
}).then(function(){
    console.log('promise2')
})
// "script start"
// "async1 start"
// "async2"  Aysnc2与Promise2的顺序浏览器不同二不确定
// "promise1"
// "Promise4"
// "promise2" promise2一定回在Promise4后执行
// "async1 end"
// "setTimeout"
// "setTimeouttt"