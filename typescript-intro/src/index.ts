let awesome = "Welcome to the world of Typescript";
// automatically awesome is assigned to a type of string that is the feature of typescript
let value = 1;

let state = true

document.getElementsByTagName("p")[0].innerText = awesome;

function applyDiscount (
    price: number, 
    discountedPrice: number = 50,
    //we can assign default values such as above for discounted price = 50
    giveToCharity ?: boolean): number{
    //The "?" here represents that giveToCharity is optional    
        
    let newPrice = price-(price * discountedPrice)/100
    if(giveToCharity){
        newPrice--
    }
    return(
        newPrice
    )
};

let finalPrice = applyDiscount(100, 50, true)

console.log("final price", finalPrice)