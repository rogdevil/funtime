// from what i understood by the questio is that if a number is divisilbe by 2 thne it should print 
// "candy" if not then it should pint the numerical value of number similar goes for all three cases
var printRandomText = function (value) {
    value % 2 === 0 ? console.log("candy") : console.log(value);
    value % 11 === 0 ? console.log("bar") : console.log(value);
    value % 22 === 0 ? console.log("candybar") : console.log(value);
};
printRandomText(2);
