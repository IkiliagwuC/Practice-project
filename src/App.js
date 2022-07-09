import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);
  //add users by passing props upwards
  const addUserHandler = (uname, uage) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uname, age: uage, id: Math.random.toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
