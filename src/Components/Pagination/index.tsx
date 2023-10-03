import { Strings } from "Resource/Strings";
import React, { FC } from "react";

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChangeHandler: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  page,
  totalPages,
  onPageChangeHandler,
}) => {
  const handlePreviousPage = () => {
    if (page > 1) {
      onPageChangeHandler(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      onPageChangeHandler(page + 1);
    }
  };

  const renderPageButtons = () => {
    const buttons = [];
    for (let i = 0; i <= totalPages - 1; i++) {
      const ButtonClass = i === page ? "active" : "";
      if (i <= 9) {
        buttons.push(
          <button
            key={i}
            className={ButtonClass}
            onClick={() => onPageChangeHandler(i + 1)}
          >
            {i + 1}
          </button>
        );
      } else if (totalPages - 1 <= i) {
        buttons.push(
          <button
            key={i}
            className={ButtonClass}
            onClick={() => onPageChangeHandler(i + 1)}
          >
            {i + 1}
          </button>
        );
      }
    }
    return buttons;
  };
  console.log("page", page)

  return (
    <div
      className="pagination"
      style={{ textAlign: "center", marginBottom: "10px" }}
    >
      <span>{`Page ${page} of ${totalPages}:`}</span>
      <>
        <button onClick={handlePreviousPage} disabled={page === 1}>
          {Strings.prev}
        </button>
        {renderPageButtons()}
        <button onClick={handleNextPage} disabled={page === totalPages}>
          {Strings.next}
        </button>
      </>
    </div>
  );
};
export default Pagination;
