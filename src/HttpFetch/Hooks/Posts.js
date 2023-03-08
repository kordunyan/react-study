import {useEffect, useState} from "react";
import axios from "axios";

export const useFetchPosts = (userId, page) => {
    const [isLoadingPosts, setIsLoadingPosts] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const currentPage = page == null ? 0 : page -1;
        if (!userId) {
            return;
        }
        setIsLoadingPosts(true);
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/posts`, {
            params: {
                _page: currentPage,
                _limit: 10
            }
        }).then((response) => setPosts(response.data))
            .finally(() => setIsLoadingPosts(false));
    }, [userId, page]);

    return {posts, isLoadingPosts}
};
