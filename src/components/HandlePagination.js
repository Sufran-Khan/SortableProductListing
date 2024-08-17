import React from 'react';

const HandlePagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className='page-change-btn-wrapper'>

      <div className='page-details-span'>
        <span>Page {currentPage} of {totalPages}</span>
      </div>

      <div className='page-change-btns'>
        <button onClick={() => onPageChange(1)} disabled={currentPage === 1}> First </button>
        <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}> Previous </button>

        
        
        <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}> Next </button>
        <button onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages}> Last </button>
      </div>
      
    </div>
  );
};

export default HandlePagination;
