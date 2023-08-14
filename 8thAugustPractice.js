// PRINT
console.log("Self practice session");
// LET VAR CONST
let x=10;
var y=20;
const z=221;
console.log(x,y,z);
//OPERATORS: * % / ** ++ -- + -
var y=30;
x=100;
console.log(x,y,z);
let a=200;
let b=36;
let c=2;
console.log(a*b,a/b,a%b,b**c, a++,b--,a+b,a-b);
// DATA TYPES: String, UNDEFINED, NULL, NUMBER,BOOLEAN
a="MERN";
b=b/0;
c=null;
x=999;
y= true;
// OBJECT
console.log(a,b,c,x,y);
const obj1={
    name:"Tom",
    Age:4,
    health:true,
};
console.log(obj1);
console.log(obj1.name,"is a cat. Age:",obj1.Age,"His health is",obj1.health);
// ARRAY
const arr=[{
    name:"Tom",
    Age:4,
    health:true,
}, {
    name:"Jerry",
    Age:2,
    health:false,
},
];
console.log(arr);
console.log(arr[1]);
console.log("2nd animal is",arr[1].name,"His age is",arr[1].Age);

const arr2=[{
    name:"Tom",
    Age:4,
    health:true,
}, "Japan",55, 10.07,
];
console.log(arr);

// FUNCTION

function rectangle(L,W){
    console.log("Area: ",L*W);
}
function triangle(L,W){
    return 0.5*L*W;
}
rectangle(5,10);
console.log("Triangles area is",triangle(6,4));

// ANONYMOUS FUNCTION

const anonym=function(a,b){
    const sumConcat=a+b;
    return sumConcat;
}
console.log(anonym("Nadia ","Yasmin"));

const anonym2=function(a,b){
    for(let i=0;i<3;i++){
        console.log("Iteration:",i,": ",a*i,b**i);
    }
}
anonym2(8,9);

// HOISTING

hoist();
function hoist(){
    console.log("This function is called before declaring");
}

// ARROW FUNCTION
const var1=(p1,p2)=>{
    console.log("First parameter is",p1,"Second parameter is",p2);
    return p1+p2;
}
console.log(var1("Football","Cricket"));

// CALLBACK FUNCTION

function even(value){
    console.log(value,"has even length");
}
function odd(value){
    console.log(value,"has odd length");

}
function outer(arr,f1,f2){
    for(let i=0;i<arr.length;i++){
       if(arr[i].length%2==0){
        f1(arr[i]);
       }
       else{
        f2(arr[i]);
    }
    }
}
arr3=['Bangladesh','Japan','Germany','Africa'];
outer(arr3,even,odd);
    // PUSH

let v="Saudi Arabia";
arr3.push(v);
console.log(arr3);


// TERNARY OPERATOR
function tern(a,b){
    a%b==0 ? console.log(a,"is divisible by",b):console.log(a,"is not divisible by",b);
}
tern(10,5);
tern(36,7);

// MAP

const arr4=['Harry','Margot','Cillian','Zendaya','Mahnul'];
const arr5=arr4.map((x)=>x+" San");
console.log(arr5);

let arr6=[8,12,3,4,6];
const arr7=arr6.map((x)=>x**0.5);
console.log(arr7);
// ARRAY REVERSE
arr6.reverse();
console.log("Reversed array is",arr6);
// FILTER ARRAY
let arr8=arr4.filter((x)=>x.length%2==0);
console.log(arr8);
// REDUCE ARRAY
let arr9=[1,2,3,4,5,6];
let arr10=arr9.reduce((x,y)=>x+y);
console.log(arr10);
let arr11=arr9.reduce((x,y)=>x*y,100);
console.log(arr11);
let arr12=['A','E','I','O','U'];
let var2=arr12.reduce((concat,primary)=>concat+primary,"Vowel: ");
console.log(var2);

// SYNCHRONOUS

console.log("Early message");
for(let i=0;i<1000000000;i++){

}
console.log("Late message");

// ASYNCHRONOUS

console.log("One");
console.log("Two");
console.log("Three");
setTimeout(function(){console.log("Four, This message will appear in the end since it takes longer time to load");},2000);
console.log("Five");
console.log("Six");

// PROMISE

let p=new Promise((a,b)=>{
    const q=7;
    if(q==7){
        a("Lucky 7");
    }
    else{
        b("Not lucky 7");
    }

}).then(()=>{
    console.log("Youre very lucky");
}).then(()=>{
    console.log("Congrats");
}).catch((err)=>{
    console.log("Better luck next time");
}).finally((err)=>{
    console.log("Keep trying");
});