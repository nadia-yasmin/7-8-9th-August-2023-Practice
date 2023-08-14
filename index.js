// console.log("Basic js env prep success")
console.log("7th August")
let x=6;
console.log("Value of x is",x);
var y=0;
var y=10;
console.log("Value of y is",y);
z=100;
console.log("Value of z is",z);
z="Hello";
console.log("Value of z is",z);
console.log(5**2);
console.log(5%2);
c=6;
a=c++;
b=++c;
console.log(a++);
console.log(b++);
console.log(c++);
const carObject={
    color:"red",
    model:'efgh',
    num_of_seats:2,
    isConditionOkay: true,
};
console.log(carObject);
console.log(carObject.color);

const arrayOdCars=[{
    id:1,
    color:"Blue",
    model:'abcd',
    num_of_seats:2,
    isConditionOkay: true,
},
{
    id:2,
    color:"Green",
    model:'xyz',
    num_of_seats:2,
    isConditionOkay: true,
},
"String Type",
3,];
console.log(arrayOdCars[0]);
console.log(arrayOdCars[0].color);

arrayOdCars.push({
    id:3,
    color:"pink",
    model:'xyz',
    num_of_seats:4,
    isConditionOkay: false,
});
console.log(arrayOdCars);
// let bigInt="99999999999999999999999999999999999999999999999999999999";
function first_function(x,y){
    console.log(x);
    console.log(y);
    console.log(x+y);

}
first_function(16,20);
first_function();
first_function(16,20,25);
first_function('hi','hello');
first_function('hi',334);

function second_function(s,ss){
    const sum=s+ss;
    return sum;


}
const s=10;
const ss=15;
const sumValue=second_function(s,ss);
console.log(sumValue);

const anonymFunc=function(s,ss){
    const sum=s+ss;
    return sum;


}
const sum2=anonymFunc(50,15);
console.log(sum2);

jog(13,12);
function jog(a,b){
    const sum=a+b;
    console.log(sum);
}
const biog=(a,b)=>{
    const sub=a-b;
    console.log(sub);
}
biog(50,3);