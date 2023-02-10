import {Post} from "../Post/Post";

export const PostList = (props) => {

    const posts = props.posts.map(it => {
        return (
            <div key={it.id} className="col">
                <Post post={it}/>
            </div>
        );
    });

    return (
        <div className="row row-cols-1 row-cols-md-2 g-4">
            {posts}
        </div>
    )
};
