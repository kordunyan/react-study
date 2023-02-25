import {useEffect, useState} from "react";
import axios from "axios";

export const useFetchPosts = (userId) => {
    const [isLoadingPosts, setIsLoadingPosts] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (!userId) {
            return;
        }
        setIsLoadingPosts(true);
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/posts`, {
            params: {
                _page: 0,
                _limit: 10
            }
        }).then((response) => setPosts(response.data))
            .finally(() => setIsLoadingPosts(false));
    }, [userId]);

    return {posts, isLoadingPosts}
};
