import React, { useState } from 'react'
import api from '../api/index'
import 'bootstrap/dist/css/bootstrap.css'
import User from './user'
import SearchStatus from './searchStatus'


const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll())
  

  

  return <>
    <SearchStatus users={users}/>
    {users.length > 0 &&
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Имя</th>
          <th scope="col">Качества</th>
          <th scope="col">Профессия</th>
          <th scope="col">Встретился, раз</th>
          <th scope="col">Оценка</th>
          <th scope="col">Избранное</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <User users={users} setUsers={setUsers}/>
      </tbody>
    </table>}
</>
}

export default Users
