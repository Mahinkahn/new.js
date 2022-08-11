// Problem: 1  radianToDegree

function radianToDegree(raden) {
    return raden * 57.2958;
}

let result = radianToDegree(25).toFixed(2);
console.log(result);


// Problem: 2  isJavaScriptFile

// function isJavaScriptFile(fileName) {
//     const isJs = fileName.slice(-3);
//     if (isJs === ".js")
//         return true;
//     else {
//         return false
//     }

// }

// // const fileName = "index.jpg";
// let result = isJavaScriptFile("index.js");
// console.log(result);



// Problem: 3  oilPrice

// function oilPrice(petrol, diesl, octane) {
//     return petrol * 114 + diesl * 130 + octane * 135;
// }
// let result = oilPrice(30, 20, 10);
// console.log(result);