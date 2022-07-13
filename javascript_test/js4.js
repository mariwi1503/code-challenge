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
    let days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    let now = new Date()
    let day = now.getDay() - 4
    if(day < 0) day += 6

    return days[day]
  }
  
  console.log(result());