async function getProductData(){
    const response=await fetch("https://dummyjson.com/products");
    const jsonData=await response.json();
    console.log("Response",jsonData);
    // console.log("Response",response);
}
getProductData();