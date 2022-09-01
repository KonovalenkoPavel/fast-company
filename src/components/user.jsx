import React from "react";
import Qualities from "./qualities";
import Bookmark from "./bookmark";

const User = (props) => {
    const tableUsers = props.users.map(user => {
        return <tr key={user._id}>
          <td>{user.name}</td>
          <td><Qualities user={user}/></td>
          <td>{user.profession.name}</td>
          <td>{user.completedMeetings}</td>
          <td>{user.rate} /5</td>
          <td><Bookmark /></td>
          <td><button className="btn btn-danger" onClick={() => props.setUsers(props.users.filter( item => item._id !== user._id))}>delete</button></td>
    
        </tr>
      })
    return tableUsers
}

export default User