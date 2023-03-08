import {LoadingSpinner} from "../LoadingSpinner/LoadingSpinner";
import {PostList} from "./PostList/PostList";
import {WarningAlert} from "../Alerts/WarningAlert";
import {useFetchPosts} from "../../../HttpFetch/Hooks/Posts";
import {useUserStore} from "../../../store/features/UserStore";
import {Pagination} from "../Pagination/Pagination";
import {usePagination} from "../Pagination/pagination-hooks";

export const Posts = () => {
    const userId = useUserStore();
    const currentPage = usePagination();
    const {posts, isLoadingPosts} = useFetchPosts(userId, currentPage);


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
            {posts.length ?
                (<>
                    <PostList posts={posts}/>
                    <div className="my-3">
                        <Pagination pages="5" basePath="/posts" />
                    </div>
                </>)
                : <WarningAlert text='No post for selected user'/>}
        </div>
    )
};
