import Post from './Post'
import classes from './Posts.module.css'

function Posts(props){
    return <ul className={classes.list}>
        {props.posts.map((post, index) => (
            <Post id={post.id} key={index} title={post.title} image={post.image} description={post.description} />
        ))}
    </ul>
}

export default Posts