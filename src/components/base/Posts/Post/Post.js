export const Post = (props) => {
    const {post} = props;

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
            </div>
        </div>
    );
}
