import React from "react";
import ReactPaginate from 'react-paginate';
import "./Pagination.css";

const Pagination = ({perPage, totalOrders, paginate }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalOrders / perPage); i++){
        pageNumbers.push(i)
    }

    return(
        <div className="pagination-form">
            <ReactPaginate 
            pageCount={pageNumbers.length}
            pageRangeDisplayed={5}
            onPageChange={(e) => paginate(e.selected)}
            containerClassName={"pagination"}
            pageClassName={"pages"}
            activeClassName={"active-page"}
            previousLabel={"«"}
            nextLabel={"»"}
            nextLinkClassName={"prev-page"}
            />
        </div>
    )
}

export default Pagination;