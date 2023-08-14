function display(sum){
    const dummySum=20+sum;
        console.log("The sum is even",dummySum);
}
function display2(sum){
    console.log("The sum is odd",sum);
}

function sumFunc(x,y,funct,functt){
    const sum=x+y;
    if(sum==0){
        console.log("The number is zero")
    }
    else if(sum%2==0){
        display(sum);

    }
    else{functt(sum);}
    // sum%2==1 ? display(sum) : display2(sum);
}
// sumFunc(3,5,display);
// sumFunc(10,5,display2);
sumFunc(10,5,display,display2);
sumFunc(10,10,display,display2);
sumFunc(10,-10,display,display2);

// function even(sum){
//     const dummySum=20+sum;
//         // console.log("The sum is even",dummySum);
//         return dummySum;
// }
// function odd(sum){
//     console.log("The sum is odd",sum);
//     return sum;
// }

// function sumFunc(x,y,funct,functt){
//     const sum=x+y;
//     if(sum==0){
//         console.log("The number is zero")
//     }
//     else if(sum%2==0){
//         console.log(even(sum));

//     }
//     else{functt(sum);}
//     // sum%2==1 ? display(sum) : display2(sum);
//     console.log(even(sum));
// }
// sumFunc(3,5,display);
// sumFunc(10,5,display2);
sumFunc(10,5,display,display2);
sumFunc(10,10,display,display2);
sumFunc(10,-10,display,display2);