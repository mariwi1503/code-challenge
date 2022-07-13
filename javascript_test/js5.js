/**
 * Direction
 * Divide students to all of groups & students must sorted by first name
 * 
 * Expected Result
 * [
 *   [
 *     { "firstName": "Belle", "lastName": "Norton" },
 *     { "firstName": "Finnley", "lastName": "Rennie" }
 *   ],
 *   [
 *     { "firstName": "Kai", "lastName": "Lyons" },
 *     { "firstName": "Peyton", "lastName": "Gardner" }
 *   ],
 *   [{ "firstName": "Tatiana", "lastName": "Dickerson" }]
 * ]
 */
 const students = [
    { firstName: 'Kai', lastName: 'Lyons' },
    { firstName: 'Belle', lastName: 'Norton' },
    { firstName: 'Finnley', lastName: 'Rennie' },
    { firstName: 'Tatiana', lastName: 'Dickerson' },
    { firstName: 'Peyton', lastName: 'Gardner' },
  ];
  const groups = 3;
  
  function result(students, groups) {
    // your code here
    let group = []
    let max = students.length/groups
    max = Math.ceil(max)
    let sorted_student = students.sort((a, b) => {
        let fa = a.firstName.toLowerCase(),
        fb = b.firstName.toLowerCase();
            if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
            return 0;
    })

    let temp = []
    for(let i=0;i<sorted_student.length; i++){
        if(temp.length == max) {
            group.push(temp)
            temp = []
        }
        if(group.length == groups -1) {
            group.push(temp)
        }
        temp.push(sorted_student[i])
    }
    return group
    console.log(sorted_student[i])
  }
  
  console.log(result(students, groups))