import React, { useState } from "react";
import api from "../api/index";
import "bootstrap/dist/css/bootstrap.css";
import User from "./user";
import SearchStatus from "./searchStatus";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const count = users.length;
  const pageSize = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const userCrop = paginate(users, currentPage, pageSize);
  return (
    <>
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
