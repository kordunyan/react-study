import {LoadingSpinner} from "../LoadingSpinner/LoadingSpinner";
import {PostList} from "./PostList/PostList";
import {useUserContext} from "../../../constants/context";
import {WarningAlert} from "../Alerts/WarningAlert";
import {useFetchPosts} from "../../../HttpFetch/Hooks/Posts";

export const Posts = () => {
    const userId = useUserContext();
    const {posts, isLoadingPosts} = useFetchPosts(userId)

    if (!userId) {
        return (
            <div className="mt-3">
                <WarningAlert text='Please select a user id.'/>
            </div>
        );
    }
    if (isLoadingPosts) {
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
