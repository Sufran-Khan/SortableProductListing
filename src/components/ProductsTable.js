import React from 'react';
import { useState,useMemo } from 'react';

const ProductsTable = ({products}) =>{

    const [sortColumnData, setSortColumnData] = useState({ key: 'price', direction: 'descending' });

    const sortedProducts = useMemo(() => {
        let sortableProducts = [...products];
        if (sortColumnData !== null) {
        sortableProducts.sort((a, b) => {
            if (a[sortColumnData.key] < b[sortColumnData.key]) {
            return sortColumnData.direction === 'ascending' ? -1 : 1;
            }
            if (a[sortColumnData.key] > b[sortColumnData.key]) {
            return sortColumnData.direction === 'ascending' ? 1 : -1;
            }
            return 0;
        });
        }
        return sortableProducts;
    }, [products, sortColumnData]);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortColumnData.key === key && sortColumnData.direction === 'ascending') {
        direction = 'descending';
        }
        setSortColumnData({ key, direction });
    };

    const getClassNamesFor = (name) => {
        if (!sortColumnData) {
        return;
        }
        return sortColumnData.key === name ? sortColumnData.direction : undefined;
    };


    return(
        <div className='products-data-table'>
            <table>
                <thead>
                    <tr>
                    <th onClick={() => requestSort('title')} className={`${getClassNamesFor('title')} title`}>
                        Title
                    </th>
                    <th onClick={() => requestSort('brand')} className={`${getClassNamesFor('brand')} brand`}>
                        Brand
                    </th>
                    <th onClick={() => requestSort('category')} className={`${getClassNamesFor('category')} category`}>
                        Category
                    </th>
                    <th onClick={() => requestSort('price')} className={`${getClassNamesFor('price')} price`}>
                        Price
                    </th>
                    </tr>
                </thead> 
                <tbody>
                    {sortedProducts.map((product) => (
                        <tr key={product.id}>
                            <td>{product.title}</td>
                            <td>{product.brand}</td>
                            <td>{product.category}</td>
                            <td>${product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )

}

export default ProductsTable;