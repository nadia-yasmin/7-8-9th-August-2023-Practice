const arr=[2,4,6,7,8];
const mappedArr=arr.map((x)=>x+1);
const multipledArr=arr.map((x,i)=>{
    const multiplication= i%2==0 ? x : x*3;
    console.log(multiplication,i);
});
console.log(mappedArr);

const objArr=[
    {
        color:"Blue", number:1, 
    }
]

reversedArr=arr.reverse();
console.log(reversedArr);

const obj=[
    {
        color:'blue',
        id:1,
    },
    {
        color:"red",
        id:2,
    },
];
const mappedObj=obj.map((x,i)=>{
    // const multiplication= i%2==0 ? x : x*3;
    console.log('The object',x,'id:',i+1);
    x.id=x.id+1;
    console.log('ID',x.id);
    
});

