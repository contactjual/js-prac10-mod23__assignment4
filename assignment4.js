// problem1: help zoo manager 

input = 10;
function calculateMoney(input) {
    let ticketPerPrice = 120;

    let giveDarowan = 500;

    let stuffQuantity = 8;
    let perStuffCost = 50;
    const totalStuffCost = stuffQuantity * perStuffCost;

    const totalPriceAllTickets = input * ticketPerPrice;

    if (input >= 0) {
        const todayMoney = (totalPriceAllTickets) - (totalStuffCost + giveDarowan);
        const result = 'Amount money of today: ' + todayMoney + ' taka';
        return result;
    }
    else {
        return 'please input the actual quantity of ticket selling number';
    }
}
console.log(calculateMoney(input))




// Problem-02: Good Name , Bad Name

input = 'RAFFsdfdfgEfFFOU'
function checkName(input) {

    // console.log(typeof input);

    let letters = ['a', 'y', 'i', 'f', 'o', 'u', 'w'];

    const lastLtrInput = input[input.length - 1].toLowerCase();
    // console.log(lastLtrInput)

    if (typeof input === 'string') {

        for (const key of letters) {
            // console.log(key);

            if (lastLtrInput === key) {
                return 'Good Name';
            }

        }
    }

    else {
        return 'invalid';
    }

    return 'Bad Name';
}

console.log(checkName(input));







// Problem 03 : Virus in my Array

// const check = NaN;
// console.log(typeof check);


input = [undefined, 'sdhfkd', 'sdfdi', 1, 12, 0, -1, NaN];

function deleteInvalids(input) {

    // console.log(Array.isArray(input));
    if (Array.isArray(input) === true) {

        let container = [];
        for (const key of input) {
            // console.log(key);

            if (typeof key === "number") {
                container.push(key);
            }
        }
        return container;
    }

    else {
        return 'please input an array';
    }
}
console.log(deleteInvalids(input));

// let convert = NaN;
// let str = String(convert);
// console.log(typeof str)











