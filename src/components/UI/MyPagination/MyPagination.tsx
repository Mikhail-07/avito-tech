import React, { FC } from 'react';
import MyButton from '../Form/MyButton';

interface MyPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const MyPagination: FC<MyPaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const maxPagesToShow = 3;

  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  const renderPageButtons = () => {
    const buttons = [];
    const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (startPage > 1) {
      buttons.push(
        <MyButton key={1} onClick={() => handlePageChange(1)}>
          1
        </MyButton>
      );
      if (startPage > 2) {
        buttons.push(<span key="ellipsis1">...</span>);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <MyButton
          key={i}
          onClick={() => handlePageChange(i)}
          active={i === currentPage}
        >
          {i}
        </MyButton>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        buttons.push(<span key="ellipsis2">...</span>);
      }
      buttons.push(
        <MyButton key={totalPages} onClick={() => handlePageChange(totalPages)}>
          {totalPages}
        </MyButton>
      );
    }

    return buttons;
  };

  return (
    <div className="flex justify-center space-x-4">
      {renderPageButtons()}
    </div>
  );
};

export default MyPagination;
