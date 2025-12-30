const Pagination = ({ page, totalPages, setPage }) => {
  return (
    <div className="pagination">
      <button
        className="btn"
        disabled={page === 0}
        onClick={() => setPage((prev) => prev - 1)}
      >
        Prev
      </button>

      <span className="page-info">
        Page {page + 1} of {totalPages}
      </span>

      <button
        className="btn"
        disabled={page === totalPages - 1 || totalPages === 0}
        onClick={() => setPage((prev) => prev + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;