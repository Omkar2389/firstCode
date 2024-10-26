// VARIABLES//

// const accountId = 456789;
// const accountId = 674898;
// accountId = 2423;
// console.log(accountId);


// let name = "omkar";
//  let name = "sagar";
//  name ="sagar";
// console.log(name);


// let score = 100
// console.log(typeof score);


// let score ="100"
// console.log(typeof score);

// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);


// let score = "100abc";
// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);

// let str = "nkvdfdjfkdhjfkbxbhkjhglfjgnsljb"
// console.log(str.charAt(13));

// const str1="my name ";
// const str2="is omkar";
// console.log(str1+str2);
// console.log(str1.concat(str2));

// const str = "my name is omkar"

// console.log(str.includes("n"));

// const str = "omkar";
// console.log(str.indexOf("k"));

// const str = "omkarjhdfjhgs";
// console.log(str.slice(0,5));


// const str = "omkar";
// console.log(str.substr(0,2));

/*
How can you find the length of a string in JavaScript?
*/

// const str ="omkar";
// console.log(str.length);

/*
How do you concatenate two strings in JavaScript?
ans:using concat method.
*/
// const str1 ="omkar";
// const str2 ="is my name";
// console.log(str1.concat( " "+str2));


// const str1 = "omkar";
// const percentage = 50;
// console.log(`my name is ${str1.toUpperCase()} and i have ${percentage}% in 10th std`);



// number and math

// const score = 100;
// console.log(score);

// const balance = new Number(1000);
// console.log(balance)
// console.log(balance.toString().charAt(0));

// const balance = 1000;
// console.log(balance.toFixed(5));

// const otherNumber =  123.895;
// console.log(otherNumber.toPrecision(3));

// const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));


// const num = 1.4;
// const num2 = [1,2,3,4,5,6]
// console.log(Math.ceil(num));
// console.log(Math.floor(num));
// console.log(Math.random()*10 );
// console.log((Math.random()*10 )+1);
// console.log(Math.floor(Math.random()*10)+1);

// const min = 10;
// const max = 20;

// console.log(Math.floor(Math.random() * ( max - min + 1)) + min);
// console.log(Math.floor(Math.random(max-min)*10)+min);


//array


// const arr= [1,2,3,4,5]
// arr.push(4);
// arr.pop();
// console.log(arr);

// const arr= [0,1,2,3,4,5]
// arr.unshift(9);
// arr.shift();
// console.log(arr);

// const arr =[0,1,2,3,4,5]
// const newArr= arr.join();
// console.log(arr);
// console.log(newArr);


// const arr =[0,1,2,3,4,5]

// console.log("a ",arr);
// const newArr = arr.slice(1,3);
// console.log(newArr);
// console.log("b ",arr);
// const myn1 = arr.splice(1,3);
// console.log(myn1);
// console.log("c",arr);


// const marvelHeros = ["ironman","spiderman","thor"]
// const dcHeros =["batman","superman","wonderwomen"]

// marvelHeros.push(dcHeros);
// console.log(marvelHeros)
// const allHeros=marvelHeros.concat(dcHeros);
// allHeros.push("omkar");
// console.log(allHeros);


// const multipleArr = [1,2,3,[4,5,6],7,[8,9],[10,11,[12,13]]]
// console.log(multipleArr);

// const addArr=multipleArr.flat(Infinity);
// console.log(addArr);


/////// objects


// const sym=Symbol("key");
// const user={
//     name:"omkar",
//     age:25,
//     email:"omkar2389@gmail.com",
//     isLoggedIn:false,
//     [sym]:"key",
// }
// console.log(typeof user[sym]);

// user.email="omkar23455";
// console.log(user);
// Object.freeze(user);

// user.email="oasbjgsjfg";
// console.log(user);




// const sym =Symbol("key");

// const user = {
//     name:"omkar",
//     age:25,
//     email:"omkar2389@gmail.com",
//     isLoggedIn:false,
//     [sym]:"key",
// }
// user.greetings = function(){
//     console.log("hello");
// }
// user.greetingsTwo = function(){
//     console.log(`hello, ${this.name}`);
// }
// console.log(user.greetings());
// console.log(user.greetingsTwo());


// const sym = Symbol("@");
// const user ={
//     name:"omkar",
//     age:25,
//     contact:9552976899
// }

// user.greeting = function() {
//    console.log("hello") 
// }

// user.greetingTwo = function() {
//     console.log(`hello my name is ${this.name}`) 
//  }
// console.log(user.greeting());
// console.log(user.greetingTwo());