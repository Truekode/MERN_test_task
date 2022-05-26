import React from 'react';
import {getPagesArray} from "../../utils/pages";

const MyPagination = ({totalPages, changePage, page}) => {
    const pageArray = getPagesArray(totalPages);

    return (<div className="page__wrp">
        {pageArray.map(p => <span
            onClick={() => changePage(p)}
            key={p}
            className={page === p ? 'page page__current' : 'page'}>
                        {p}
                    </span>)}
    </div>);
};

export default MyPagination;