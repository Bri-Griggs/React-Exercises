import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// PRACTICE 1
// function Helloworld() {
//   return (
//     <div className="background">
//       <h1>Hello World</h1>
//     </div>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Helloworld />
//   </React.StrictMode>
// );

//PRACTICE 2
// function ClickedMe(){
//   return (
//     <>
//     <div className="button">
//       <button onClick={() => {
//         alert('YOU JUST LOST THE GAME!');
//       }}>DON'T Click Me!</button>
//       <h1>You've been warned!</h1>
//     </div></>
//   )}

//   const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <ClickedMe />
//   </React.StrictMode>
// );

//PRACTICE 3
// function RenderButton(click) {
//   return (
//     <button
//       onClick={() => {
//         alert(click.children);
//       }}
//     >
//       Click Me!
//     </button>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <RenderButton>This is the first click!</RenderButton>
//     <RenderButton>This is the second click!</RenderButton>
//     <RenderButton>This is the third click!</RenderButton>
//   </React.StrictMode>
// );

//PRACTICE 4
// function ClickCount() {
//   // Declare a new state variable, which we'll call "count"
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <ClickCount />
//   </React.StrictMode>
// );

//PRACTICE 5
// const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
// function AnimalList(){
//   const listAnimals = animals.map(animal =>
//   <li>{animal}</li>);
//   return <ul>{listAnimals}</ul>
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <AnimalList />
//   </React.StrictMode>
// );

//PRACTICE 6
//every time page is reloaded the animal changes

// function RandomAnimals({ animals }) {
//     const randomIndex = Math.floor(Math.random() * animals.length);
//     const randomAnimal = animals[randomIndex];

//     return <h1>{randomAnimal}</h1>;
//   }

//   function App() {
//     const animalList = ["dog", "cat", "chicken", "cow", "sheep", "horse"];

//     return <RandomAnimals animals={animalList} />;
//   }

//   const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   );

//Practice 7
//In React, form data is usually handled by the components.
//We can use the useState Hook to keep track of each inputs value and
//provide a "single source of truth" for the entire application.
//onChange is the event handler which will update the state of the new user value
// const Create = () => {
//     const [firstName, setFirstName] = useState('')
//     const [lastName, setLastName] = useState('')
//     return (
//       <div className = "whatisname">
//         <h4>Wie ist Ihr Name?</h4>
//         <form>
//           <input type="text" placeholder ="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value) }/>
//           <input type="text" placeholder ="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value) }/>
//           <button className= "submitbtn" type="submit" onClick={() => alert(`Guten tag, ${firstName} ${lastName}.`)}>Submit</button>
//         </form>
//       </div>
//     )
//   }

//   const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(
//     <React.StrictMode>
//       <Create />
//     </React.StrictMode>
//   );

//Practice 8
// { id: 1, setup: "What's the best thing about a Boolean?", punchline: "Even if you're wrong, you're only off by a bit" }, { id: 2, setup: "Why do programmers wear glasses?", punchline: "Because they need to C#" } ]

// const jokes = [ { id: 1, setup: "What's the best thing about a Boolean?", punchline: "Even if you're wrong, you're only off by a bit" },
//  { id: 2, setup: "Why do programmers wear glasses?", punchline: "Because they need to C#" } ]

// function Jokes(){
//   return (
//     <div>
//         <h1>Jokes</h1>
//       {jokes.map(joke => (
//         <li key={joke.id}>{joke.setup} <button onClick={() => alert(` ${joke.punchline} `)}>Clicky Click</button></li>
//       ))}
//     </div>

// )

// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Jokes />
//   </React.StrictMode>
// );

//Practice 9

function MyButton({ setMyUsers }) {
  return (
    <button
      className="button1"
      onClick={() => {
        fetch("https://random-data-api.com/api/users/random_user?size=10")
          .then((response) => response.json())
          .then((data) => setMyUsers(data));
      }}
    >
      Click Me
    </button>
  );
}
//   function Count({onClick}) {
//     const [count, setCount] = useState(0);

//     const handleButtonClick = () => {
//         setCount(count + 1);
//         onClick();
//     };

//     return (
//       <div>
//         <MyButton onClick={handleButtonClick} />
//         <p className='p1'>Times Rendered: {count}</p>
//       </div>
//     );
//   }

function Cards() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch("https://random-data-api.com/api/users/random_user?size=10")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  };

  return (
    <div>
      <MyButton setMyUsers={setUsers}/>
      {/* <Count /> */}
      {users.map((user) => (
        <div className="flip-card" key={user.id}>
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={user.avatar} alt="user avatar" />
            </div>
            <div className="flip-card-back">
              <h1>
                {user.first_name} {user.last_name}
              </h1>
              <h3>{user.date_of_birth}</h3>
              <h3>{user.social_insurance_number}</h3>
              <p>{user.phone_number}</p>
              <p>{user.email}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Cards />
  </React.StrictMode>
);
