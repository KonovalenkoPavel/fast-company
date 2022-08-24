import React, { useState } from 'react'
import api from '../api/index'
import 'bootstrap/dist/css/bootstrap.css'



const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll())
  const tableUsers = users.map(user => {
    return <tr key={user._id}>
      <td>{user.name}</td>
      <td>{user.qualities.map(item => <span key={item._id} className={'badge m-1 text-bg-' + item.color}>{item.name}</span>)}</td>
      <td>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>{user.rate} /5</td>
      <td><button class="btn btn-danger" onClick={() => setUsers(users.filter( item => item._id !== user._id))}>delete</button></td>

    </tr>
  })

  const meetinCount = users.length === 0 ? 'Никто не тусанет с тобой сегодня' : 
  (users.length === 1 || users.length >= 5) ? `${users.length} человек тусанет с тобой сегодня` :
  `${users.length} человека тусанет с тобой сегодня`

  return <>
    <h2><span className={"badge text-bg-" + (users.length === 0 ? 'danger' : 'primary')}>{meetinCount}</span></h2>
    {users.length > 0 &&
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Имя</th>
          <th scope="col">Качества</th>
          <th scope="col">Профессия</th>
          <th scope="col">Встретился, раз</th>
          <th scope="col">Оценка</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {tableUsers}
      
      </tbody>
    </table>}
</>
}

export default Users
