import React from 'react';
import logo from './logo.svg';
import './App.css';
import StudentInfo from './components/StudentInfo';

const App = () => {
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
  },
  {
    firstName: "Julie",
    lastName: "Winston",
    id: 565,
    course: "Ruby on Rails" 
  },
  {
    firstName: "Anthony",
    lastName: "Miller",
    id: 121,
    course: "SASS" 
  }];

  const myInfo = () => {
    const age = 24;
    
    /*
    if(age >= 21){
      return(<p> I am old enough to drink and drive. </p>)
    }
    else{
      return(<p> I am not old enough to drink and drive. </p>)
    }*/

    let message =  (age >= 21) ? 
      <p> I am old enough to drink and drive. </p> :
      <p> I am not old enough to drink and drive. </p>
    return message;
  }
  let numbers = "";

  for(let i = 1; i <= 5; i ++){
    numbers += i + " ";
  }

  let names = ["Ana", "Roger", "Max", "Alan"];
  let programmingLanguages = {
    language : "JavaScript"
  }
  return (
    <main>
      <div className="App">
        <h1> Welcome to our lecture of JSX and props </h1>
      </div>
      {
        students.map((student, index) => {
          return (
            <StudentInfo 
              key={index}
              firstName={student.firstName}
              lastName={student.lastName}
              id={student.id}
              course={student.course}
            />
          );
        })
      }
      <div>
        {myInfo()}
      </div>
      <img src="#" alt="No image yet" />
      <div>
        Numbers: {numbers}
      </div>
      <div>
        Names: {names}
      </div>
      <div>
        Languages: {programmingLanguages.language}
      </div>
    </main>
  );
}

export default App;

