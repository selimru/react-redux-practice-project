import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../getPosts/getPosts";

const Posts = () => {
    const dispatch = useDispatch()
    const { loading, posts, error } = useSelector(state => state)
    console.log(posts);

    useEffect(() => {
        dispatch(getAllPosts())
    }, [])
    return (
        <div className=" max-w-7xl mx-auto px-2">
            <h3 className=" my-5">Redux posts fetching</h3>
            {
                loading && !error &&
                <p className=" text-center">loading...</p>
            }
            {
                !loading && error &&
                <p>error.message</p>
            }
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
                {
                    posts &&
                    posts.map(post => <div className=" border p-5 space-y-3" key={post.id}>
                        <p>Id: {post.id}</p>
                        <p>Title: {post.title}</p>
                        <p>Body: {post.body}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Posts;