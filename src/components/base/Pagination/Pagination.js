import {Link} from "react-router-dom";
import {usePagination} from "./pagination-hooks";


export const Pagination = (props) => {

    const currentPage = usePagination();

    const isActivePage = (page) => {
        if (page === 1 && !currentPage) {
            return true;
        }
        return +page === +currentPage;
    };

    const getPagesLinks = (pages) => {
        const pageElements = [];
        for (let i = 1; i <= +pages; i++) {
            pageElements.push((
                <li key={i} className="page-item">
                    <Link className={"page-link " + (isActivePage(i) && 'active')} to={`${props.basePath}?page=${i}`}>{i}</Link>
                </li>
            ))
        }
        return pageElements;
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                {getPagesLinks(props.pages)}
            </ul>
        </nav>
    );

};
