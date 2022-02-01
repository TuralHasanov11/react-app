import Post from './Post'
import classes from './Posts.module.css'
import PropTypes from 'prop-types';

function Posts({posts, error, loading, getPosts}){

    function onFetch(){
        getPosts()
    }

    if (error) {
       return <button onClick={onFetch}>Try again</button>;
    }

    if (loading) {
       return 'Loading tasks...';
    }

    return <ul className={classes.list}>
        {posts.map((post, index) => (
            <Post id={post.id} key={index} title={post.title} image={post.image} description={post.description} />
        ))}
    </ul>
}

Posts.defaultProps = {
    posts:[],
    error:null,
    loading:false
}

Posts.propTypes={
    posts: PropTypes.array.isRequired
}

export default Posts