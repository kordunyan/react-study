import {useEffect, useState} from "react";
import axios from "axios";
import {LoadingSpinner} from "../LoadingSpinner/LoadingSpinner";
import {PostList} from "./PostList/PostList";

export const Posts = () => {

    const [isLoading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setLoading(true);
        axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _page: 0,
                _limit: 10
            }
        }).then((response) => {
            setPosts(response.data);
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    if (isLoading) {
        return (
            <div className="h-100">
                <LoadingSpinner/>
            </div>
        )
    }
    return (
        <div className="h-100 m-4">
            <PostList posts={posts}/>
        </div>
    )
};
