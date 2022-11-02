import React, {Component} from 'react'
import classes from './Users.module.css'


class User extends Component{
    render(){
        return  <li className={classes.user}>
        {this.props.name}
    </li>
    }
}
export default User

// export default function User(props) {
//   return (
//     <li className={classes.user}>
//         {props.name}
//     </li>
//   )
// }
