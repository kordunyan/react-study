import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {LoadingSpinner} from "../LoadingSpinner/LoadingSpinner";
import {PostList} from "./PostList/PostList";
import {UserContext} from "../../../constants/context";
import {WarningAlert} from "../Alerts/WarningAlert";

export const Posts = () => {

    const [isLoading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const {userId} = useContext(UserContext);

    useEffect(() => {
        if (!userId) {
            return;
        }
        setLoading(true);
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/posts`, {
            params: {
                _page: 0,
                _limit: 10
            }
        }).then((response) => setPosts(response.data))
            .finally(() => setLoading(false));
    }, [userId]);


    if (!userId) {
        return (
            <div className="mt-3">
                <WarningAlert text='Please select a user id.' />
            </div>
        );
    }
    if (isLoading) {
        return (
            <div className="h-100">
                <LoadingSpinner/>
            </div>
        )
    }
    return (
        <div className="h-100 m-4">
            {posts.length ? <PostList posts={posts}/> : <WarningAlert text='No post for selected user'/>}
        </div>
    )
};
