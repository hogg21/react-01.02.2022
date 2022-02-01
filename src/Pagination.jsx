import React from "react";

const Pagination = (props) => {
    const isPrevPageAvailable = props.pageNumber > 0
    const isNextPageAvailable = props.pageNumber < Math.ceil(props.usersCount / props.itemsPerPage) - 1;
    return (
        <div className="pagination">
            <button className="btn" onClick={props.prev} disabled={!isPrevPageAvailable}>←</button>
            <span className="pagination__page">{props.pageNumber}</span>
            <button className="btn" onClick={props.next} disabled={!isNextPageAvailable}>→</button>
        </div>
    );
}
export default Pagination;