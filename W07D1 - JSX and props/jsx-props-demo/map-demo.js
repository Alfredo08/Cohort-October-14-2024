const students = [{
    firstName: "Alex",
    lastName: "Miller",
    id: 123,
    course: "React Fundamentals" 
  },
  {
    firstName: "Martha",
    lastName: "Smith",
    id: 456,
    course: "Node/Express" 
  },
  {
    firstName: "Roger",
    lastName: "Anderson",
    id: 789,
    course: "jQuery and the DOM" 
  }];

const fullNames = students.map((student, index) => {
    return student.firstName + " " + student.lastName;
});

console.log(fullNames);
console.log(students);