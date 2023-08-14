const arr=[
    'spray','hello','elite','Bangladesh','America',
];
const filteredArr=arr.filter((word)=>word.length>6);
const filteredArr2=arr.filter((word)=>{
    if(word.length<6){
        return word;
    }

});
console.log(filteredArr);
console.log(filteredArr2);