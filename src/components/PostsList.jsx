import Post from "./Post"
import PostAdd from "./PostAdd"

const PostsList = () => {
    return (
        <>
        <PostAdd />
        <Post poster="testuser2" content="Pretend I'm saying something. HEhe." />
        <Post poster="testuser3" content="Haha" />
        <Post poster="testuser1" content="Hehe" />
        <Post poster="ahliesanti" content="Hehe" privacy="public" />
        <Post poster="ahliesanti" content="Hehe" privacy="private" />
        </>
    )
}

export default PostsList