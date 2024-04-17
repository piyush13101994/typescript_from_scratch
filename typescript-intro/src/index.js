var awesome = "Its gonna be awesome";
// automatically awesome is assigned to a type of string that is the feature of typescript
var value = 1;
var state = true;
document.getElementsByTagName("p")[0].innerText = awesome;
function applyDiscount(price, discountedPrice, giveToCharity) {
    if (discountedPrice === void 0) { discountedPrice = 50; }
    // also we can assign default values such as above for discounted price = 50
    //The "?" here represents that giveToChsrity is optional
    //here we are assigning both the parameters to the type of number also what is final return value of this function is should be a number
    var newPrice = price - (price * discountedPrice) / 100;
    if (giveToCharity) {
        newPrice--;
    }
    return (newPrice);
}
;
var finalPrice = applyDiscount(100, 50, true);
console.log("final price", finalPrice);
