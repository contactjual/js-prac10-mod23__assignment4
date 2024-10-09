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

    if (Array.isArray(input) === true) {

        let container = [];
        let empty = [];

        for (const key of input) {

            if (typeof key === "number" && !isNaN(key)) {  // "!isNaN(key)" 

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














// ---------------------allkeysPres------------------

// console.log(JSON.stringify(Object.keys(input))==JSON.stringify([ 'name', 'birthYear', 'siteName' ]));
// let necessaryKeys = ['name', 'birthYear', 'siteName']
// let objectKeys = Object.keys(input);
// for (let i = 0; i <= Object.keys(input).length; i++) 
// necessaryKeys[i] === objectKeys[i] &&

// ----------------------- --------------------------------



// Problem 04 : Make A Great Password

input = { birthYear: 1999, name: "kolimudssdin", siteName: "google" }

function password(input) {

    let necessaryKeys = ['name', 'birthYear', 'siteName']
    let allkeysPres = true;

    for (let key in input) {
        if (!necessaryKeys.includes(key)) {
            allkeysPres = false;
            break;
        }
    }

    if (allkeysPres && typeof input === 'object' && Object.keys(input).length === 3 && input.birthYear.toString().length === 4) {
        // console.log('I am in');

        let splitSite = input.siteName.split('');

        let capitFirstLtr = splitSite[0].toUpperCase();
        // console.log(capitFirstLtr)

        const capSiteLtr = capitFirstLtr + splitSite.slice(1).join('')
        // console.log(capSiteLtr);

        let password = capSiteLtr + '#' + input.name + "@" + input.birthYear;
        return 'The Great Password is: ' + password;
    }
    else {
        // const result = [];
        // const retry = 'invalid';
        // result.push(retry);
        // return result;
        // console.log(typeof retry);
        return 'invalid';
    }
}

console.log(password(input));













// Problem 05 : Monthly Savings of a Freelancer

function monthlySavings(arr, livingCost) {


    if (Array.isArray(arr) === true && typeof livingCost === "number" && livingCost >= 0) {

        sum = 0;

        for (let key of arr) {

            if (key >= 3000) {

                // console.log('working in first')

                let newArray = [];
                for (let i = 0; arr.length > i; i++) {

                    const value = arr[i];

                    if (value >= 3000) {

                        const texAddReturn = value - (value * 0.2);
                        newArray.push(texAddReturn);

                    }
                    else if (value < 3000 && 0 < value) {
                        newArray.push(value)
                    }
                    else {
                        return 'invalid input';
                    }
                }

                // console.log(newArray);

                for (let key2 of newArray) {
                    sum += key2;
                }
                var savingsAmount2 = sum - livingCost;
                return 'Total Savings: ' + savingsAmount2 + ' taka';

            }
        }

        // console.log('working in last')

        for (const number of arr) {

            if (number <= 0) {
                return 'invalid input';
            }

            sum += number;

        }
        // console.log(sum);

        var savingsAmount1 = sum - livingCost;

        if (savingsAmount1 < 0) {

            return 'earn more';

        }

        else {
            return 'Total Savings: ' + savingsAmount1 + ' taka'
        }
    }

    else {
        return 'invalid input';
    }
}
console.log(monthlySavings([ 1000 , 2000 , 3000 ] , 5400));


