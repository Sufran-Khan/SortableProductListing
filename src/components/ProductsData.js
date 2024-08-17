import React from 'react';
import axios from 'axios';
import { useEffect,useState } from 'react';
import ProductsTable from './ProductsTable';
import HandlePagination from './HandlePagination';
import HandleProductsPerPage from './HandleProductsPerPage';

const ProductsData = () =>{

    const [products,setProducts]= useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    // const productsPerPage = 10;

    const [productsPerPage, setProductsPerPage] = useState(10); 

    const totalPages = Math.ceil(products.length / productsPerPage);
 
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleProductsPerPageChange = (newPageSize) => {
        setProductsPerPage(newPageSize);
        setCurrentPage(1);
    };

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
        .then((response)=>{
            const data = response.data.products;
            setProducts(data);
            // console.log(products)
        })
        .catch((error)=>{
            console.log('API response error', error.message);
        })

    }, []);


    return (
        <div>
            <h1 className='page-title'>MITS Products List</h1>
            <HandleProductsPerPage
                productsPerPage={productsPerPage}
                onProductsPerPageChange={handleProductsPerPageChange}
            />
            <ProductsTable products={currentProducts}/>
            <HandlePagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
      );
}

export default ProductsData;
