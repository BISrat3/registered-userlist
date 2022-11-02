import React ,{useState, Component} from 'react'
import User from './User'

import classes from './Users.module.css' 

const DUMMY_USERS = [
    {id:'u1', name:'Max'},
    {id:'u2', name:'Manuel'},
    {id:'u3', name:'Julie'},
]

class Users extends Component{
    constructor(){
        super()
        this.state ={
            showUsers:true,
            more:'Test'
        }
    }
    toggleUsersHandler(){
        this.setState((curState) =>{
            return {showUsers: !curState.showUsers}
        })
    }
// export default function Users() {
//     const [showUsers, setShowUsers] = useState(true)

//     const toggleUsersHandler = () =>{
//         setShowUsers((currState) => !currState)
//     }

//     const usersList = (
//         <ul>
//             {DUMMY_USERS.map((user) =>(
//                 <User key={user.id} name={user.name}/>
//             ))}
//         </ul>
//     )
render (){
    const usersList = (
                <ul>
                    {DUMMY_USERS.map((user) =>(
                        <User key={user.id} name={user.name}/>
                    ))}
                </ul>
    )
  return (
    <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
            {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
    </div>
  )}
}

export default Users