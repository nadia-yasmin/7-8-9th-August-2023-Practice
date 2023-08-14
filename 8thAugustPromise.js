let promise=new Promise((resolve,reject)=>{
    const x=3;
    if(x==3){
        resolve();
    }
    else
{
    reject("Error value");
}
}).then(()=>{
    console.log("It worked");
})
.then(()=>{
console.log("As it worked we can move");
}
)
.catch((err)=>{
console.log("Error message",err);
})
.finally(()=>{
    console.log("It will work even if its a error or resolve");
});