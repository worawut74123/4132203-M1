document.getElementById("message1").innerHTML = "Hello World"

//variable
let a = 5;
var b = "Hello";
const x = 10;

console.log(b);

add(5,10);

//function
function add(aa,bb){
    let cc = aa + bb;
    console.log(cc);
    return cc;
}

let result = add(5,10);

let add2 = function(aa,bb){
    let cc = aa + bb;
    console.log(cc);
}

let add3 = (aa,bb) => {
    let cc = aa + bb;
    console.log(cc);
}

//array
let arr = [1,"test",3.15,4,5];
const car = [];
car[0] = "Toyota";
car[1] = "Honda";
const fruit = new Array("Apple","Banana","Cherry");

console.log(car[1]);

let colors = [[1, 2, 3], "green", "blue"];
console.log(colors[0][2]);


//array method
fruit.push("Orange");
console.log(fruit);

arr.map((item) => {
    console.log(item);
});

//object
let person = {
    firstName: "Peet",
    lastName: "Kumrum",
    age: 50,
    child: ["Ann", "Billy"],
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }
};

person.address = {
    street: "123 Main St",
    city: "New York",
};

console.log(person.fullName());

//spread operator
const arrCombine = [...car, ...fruit];
const arrCombine2 = [car, fruit];
console.log(arrCombine);
console.log(arrCombine2);


if (x == 10){
    let c = "test";
    var d = "test2";
    console.log("a is equal to");
}

//short term if else
let e = x==10 ? "Yes" : "No";    
    
    