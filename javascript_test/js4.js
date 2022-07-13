/**
 * Direction
 * Get name of the day of 4 days ago from today
 *
 * Expected result:
 * 1. if date now = monday
 * 2. then result = thursday
 */
 function result() {
    // write your code here
    let days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
    let now = new Date()
    let day = now.getDay() - 4 + 6

    return days[day]
  }
  
  console.log(result());