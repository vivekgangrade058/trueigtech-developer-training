// function greet(name, callback){
//     console.log("hello" +name);
// }
// function saybye(){
//     console.log("good bye Vivek");
// }

// greet("vivek", saybye)







// function calculator(a, b, op){
//     if(op === "add"){
//         return a+b;
//     }
//     else if(op === "sub"){
//         return a-b;
//     }
//     else if(op === "mul"){
//         return a*b;
//     }
//     else{
//         return a/b;
//     }
// }

// console.log(calculator(2, 5, "mul"));

// a();
// b();
// function a(){
//     console.log("a called");
// }
// var b = function (){
//     console.log("b called");
// }

// var b = function xyz(){
//     console.log("b called");
// }
// b();

// var b = function (param1){
//     console.log(param1);
// }
// function xyz(){

// }
// b(xyz);

// console.dir(document.body)

// const title = document.getElementById("title");
// const button = document.getElementById("btn");

// button.addEventListener("click", function() {
//     if(title.textContent === "Hello"){
//         title.textContent = "Hi vivek"
//     }
//     else{
//         title.textContent = "Hello"
//     }
// });


// const cart = ["shoes", "pants", "kurta"];

// createorder(cart)
// .then(function (orderid){
//     console.log(orderid);
//     return orderid;
// })
// .catch(function (err){
//     console.log(err.message);
// })
// .then(function (orderid){
//     return proceedtopayment(orderid);
// })
// .then(function (paymentinfo){
//     console.log(paymentinfo);
// })
// .catch(function (err){
//     console.log(err.message);
// })
// .then(function (orderid){
//     console.log("no matter");
// })

// function createorder(cart){
//     const pr = new Promise(function (resolve,reject){
//         if(!validatecart(cart)){
//             const err = new Error("cart is not valid");
//             reject(err);
//         }
//     const orderid = "123";
//         if(orderid){
//             setTimeout(function (){
//                 resolve(orderid);
//             }, 5000);
//         }
//     })
//     return pr;
// }

// function proceedtopayment(orderid){
//     return new Promise(function (resolve, reject){
//         resolve("payment successfull");
//     });
// }

// function validatecart(cart){
//     return true;
// }

// function login(callback){
//     setTimeout(() => {
//         console.log("login success");
//         callback();
//     }, 5000);
// }
// login(()=>{
//     console.log("login call");
// })

// const p = new Promise((resolve, reject)=>{
//     resolve("p resolved");
// });

// async function getdata(){
//     return p;
// }

// const datapromise = getdata();
// datapromise.then(res => console.log(res));


// const p = "https://api.github.com/users/vivekgangrade";

// async function data(){
//     const a = await fetch(p);
//     const b = await a.json();
//     console.log(b); 
//     console.log(b.avatar_url)
// }
// data();

// var a = [1,2,3];
// b = [4,5,6];
// a = [...a,...b];
// console.log(a);

// import {add, sub} from './utils.js'

// console.log(add(20,30));
// console.log(sub(50,20));


// async function getdata(){
    
//     try{
//         const a = "https://api.github.com/users/vivekgangrade";
//         const data = await fetch(a);
//         const data1 = await data.json();
        
//         if(!data.ok){
//             throw new Error("invalid data");
//         }
//         console.log(data1);
//     }catch(error){
//         console.log("failed",error.message)
//     }
// }
// getdata();

