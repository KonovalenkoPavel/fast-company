import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ count, pageSize, onPageIndex, currentPage }) => {
  const pageCount = Math.ceil(count / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            className={"page-item" + (page === currentPage ? " active" : "")}
            key={"page_" + page}
          >
            <a className="page-link" onClick={() => onPageIndex(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
Pagination.propTypes = {
  count: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageIndex: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
};
export default Pagination;
