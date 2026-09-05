const leapYears = function(year) {
    const isDivisibleByFour = year % 4 === 0;
    const isDivisibleByFourHundred = year % 400 === 0;
    const isCentury = year % 100 === 0;
    if (isDivisibleByFour && (!isCentury || isDivisibleByFourHundred)) {return true;}
    else { return false }
};

leapYears(2000); // is a leap year: returns true
leapYears(1985); // is not a leap year: returns false

// Do not edit below this line
module.exports = leapYears;
