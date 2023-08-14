const arr=[5,6,7,8,9];
const reducedArr=arr.reduce((t,c)=> t+c,10);
console.log(reducedArr);
const arr2=['a','b','c'];
const reducedArr2=arr2.reduce((t,c)=> {
    console.log(t,c);
   const val= t+c;
   return val;

},"our String"
    );
console.log(reducedArr2);