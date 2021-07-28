//Workshop conducted by LetsGrowmore...
// 1.React js is a libraray,React is not a framework
// 2.It is developed by Facebook
// 3.Reactjs application is make up of diff diff components,and each componenets have its own login and controls.
// 4.JSX:stands for JavaScript XML.
// 5.ES6
// 6.States and Props
// 7.Async and Await
// 8.How to fetch and display data.

// Create a folder
// 1.open cmd.
// 2.Create React App
// 3.Create a new React <React project>
// 4.npm install -g create-react-app

// //Alt
// 1.Create a folder
// 2.open it any code editor
// 3.npm install
// 4.npm start

// import React from "react";
// const App = () => {
//   return (
//     <div>
//       <h1>Hello World</h1>
//       <h2>How are You???</h2>
//     </div>
//   );
// };
// export default App;

// import React from "react";
// const App = () => {
//   return (
//     <React.Fragment>
//       <h1>Hello World</h1>
//       <h2>How are You???</h2>
//     </React.Fragment>
//   );
// };
// export default App;

import React, { useEffect, useState } from "react";
import "./styles.css";

const App = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    console.log("before");
    const response = await fetch("https://api.github.com/users");
    const jsonResponse = await response.json();
    setUsers(jsonResponse);
  };
  return (
    <div className="App">
      <h1>Hello All</h1>
      <button onClick={loadUsers}>Get Data</button>

      <h2>Users:</h2>
      <ul>
        {users.map(({ id, login, avatar_url }) => (
          <li key={id}>
            Name:{login}
            Avator:{avatar_url}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default App;
