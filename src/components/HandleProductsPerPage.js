import React from 'react'

const handleProductsPerPage = ({ productsPerPage, onProductsPerPageChange }) => {
    return (
      <div className="page-dropdown">
        <label htmlFor="productsPerPage">Products per page:</label>
        <select
          id="productsPerPage"
          value={productsPerPage}
          onChange={(event) => onProductsPerPageChange(Number(event.target.value))}
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>
    );
  };
  
export default handleProductsPerPage;