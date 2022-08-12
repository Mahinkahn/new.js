// Problem: 1  radianToDegree

function radianToDegree(raden) {
    return raden * 57.2958;
}

let result1 = radianToDegree(25).toFixed(2);



// Problem: 2  isJavaScriptFile

function isJavaScriptFile(fileName) {
    const isJs = fileName.slice(-3);
    if (isJs === ".js")
        return true;
    else {
        return false
    }

}

let result2 = isJavaScriptFile("index.js");


// Problem: 3  oilPrice

function oilPrice(petrol, diesl, octane) {
    return petrol * 114 + diesl * 130 + octane * 135;
}
let result = oilPrice(30, 20, 10);



// Problem: 4 publicBusFare

function publicBusFare(busPassanger) {
    if (typeof busPassanger === 'number') {
        let microPassanger = busPassanger % 50;
        let restPassanger = microPassanger % 11;
        let totalBusFare = restPassanger * 250;
        return totalBusFare;
    }
    else {
        return "enter a valid number";
    }

}


// Problem: 5 isBestFriend

function isBestFriend(friend1, friend2) {
    if (typeof friend1.name === 'string' && typeof friend2.name === 'string' && typeof friend1.friend === 'string' && typeof friend2.friend === 'string') {
        if (friend1.friend === friend2.name && friend2.friend === friend1.name) {
            return true;
        }
        else {
            return false;
        }
    }
    return "enter valid name";
}