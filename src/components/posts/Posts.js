import Post from './Post'
import classes from './Posts.module.css'
import PropTypes from 'prop-types';

function Posts({posts}){
    return <ul className={classes.list}>
        {posts.map((post, index) => (
            <Post id={post.id} key={index} title={post.title} image={post.image} description={post.description} />
        ))}
    </ul>
}

Posts.defaultProps = {
    posts:[]
}

Posts.propTypes={
    posts: PropTypes.array.isRequired
}

export default Posts