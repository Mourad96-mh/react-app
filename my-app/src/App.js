

import './App.css';
import React, {useState} from 'react';

import AddUser from './Components/Users/AddUser';
import Users from './Components/Users/Users';

const DUMMY_USERS = [{name: 'Mourad Mhani', age: 23, id:'p1'},
  {name: 'jihad Mhani', age: 22, id:'p2'}
]

function App() {

  const [users, setUsers] = useState(DUMMY_USERS);

  const addUserHandler = (data)=> {
    setUsers((prevState) => [
      ...users,
      {name: data.userName, age: data.userAge, id: Math.random()}
    ])
  }

  return (
    <div className='container'>
      <AddUser onAddUser={addUserHandler} />
      <Users users={users} />
    </div>
  );
}

export default App;
