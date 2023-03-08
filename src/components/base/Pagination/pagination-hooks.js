import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";

export function usePagination() {
    let [searchParams] = useSearchParams();
    let [currentPage, setCurrentPage] = useState(null);

    useEffect(() => {
        setCurrentPage(searchParams.get('page'));
    }, [searchParams]);
    return currentPage;
}
