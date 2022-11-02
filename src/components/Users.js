import React ,{useState} from 'react'
import User from './User'

import classes from './Users.module.css' 

const DUMMY_USERS = [
    {id:'u1', name:'Max'},
    {id:'u2', name:'Manuel'},
    {id:'u3', name:'Julie'},
]
export default function Users() {
    const [showUsers, setShowUsers] = useState(true)

    const toggleUsersHandler = () =>{
        setShowUsers((currState) => !currState)
    }

    const usersList = (
        <ul>
            {DUMMY_USERS.map((user) =>(
                <User key={user.id} name={user.name}/>
            ))}
        </ul>
    )
  return (
    <div>
        <button onClick={toggleUsersHandler}>
            {showUsers ? "Hide" : "Show"} Users
        </button>
        {showUsers && usersList}
    </div>
  )
}
