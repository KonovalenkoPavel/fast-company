import React, { useState, useEffect } from "react";
import api from "../api/index";
import "bootstrap/dist/css/bootstrap.css";
import User from "./user";
import SearchStatus from "./searchStatus";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import GroupList from "./groupList";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const [professions, setProfessions] = useState();
  const count = users.length;
  const pageSize = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProf, setSelectedProf] = useState();
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  useEffect(() => {
    api.proffesions.fetchAll().then((data) => setProfessions(data));
  }, []);
  const handleProfessionSelect = (item) => {
    setSelectedProf(item);
  };
  const filteredUsers = selectedProf ? users.filter(user => user.profession === selectedProf) : users;
  const userCrop = paginate(filteredUsers, currentPage, pageSize);
  const clearFilter = () => {
    setSelectedProf();
  };

  return (
    <>
      {professions && (
        <>
          <GroupList selectedItem={selectedProf} items={professions} onItemSelect={handleProfessionSelect}/>
          <button className="btn btn-secondary mt-2" onClick={clearFilter}>очистить</button>
        </>)}
      <SearchStatus users={users} />
      {users.length > 0 && (
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
            <User users={userCrop} setUsers={setUsers} />
          </tbody>
        </table>
      )}
      <Pagination
        count={count}
        pageSize={pageSize}
        onPageIndex={handlePageChange}
        currentPage={currentPage}
      />
    </>
  );
};

export default Users;
