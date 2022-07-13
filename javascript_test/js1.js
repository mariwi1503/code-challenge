/**
 * Direction:
 * Find the higher value from the array bellow
 *
 * Expected Result:
 * 8
 */
 let numbers = [3, 1, 2, 3, 7, 5, 6, 8, 2, 1];

 function result(numbers) {
     numbers = Math.max.apply(null, numbers)

     return numbers
 }
 
 console.log(result(numbers));