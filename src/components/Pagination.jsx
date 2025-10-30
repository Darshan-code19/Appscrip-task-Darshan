import React from "react";
import "./Pagination.css";

const Pagination = ({ page, setPage, totalPages }) => {
  return (
    <div className="pagination">
      <button onClick={() => setPage(page - 1)} disabled={page <= 1}>
        Prev
      </button>
      <span>
        Page {page} / {totalPages}
      </span>
      <button onClick={() => setPage(page + 1)} disabled={page >= totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
