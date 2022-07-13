// Question
// Given a object data, return the data multiple by 3 and sort the data.
// Expected output : { j: 0, k: 9, i: 18, l: 36 }

const data = { i: 6, j: null, k: 3, l: 12 };

function result(data) {
  // write your code here
    let keys = Object.keys(data)
    let values = Object.values(data)
    let newObj = {}
    for(let x= 0; x<values.length; x++) {
        if(values[x] % 3 === 0) {
            newObj.keys[x] = values[x]
        }
    }
    return newObj
}

console.log(result(data));