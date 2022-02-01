import Posts from "../components/posts/Posts"
import {useState, useEffect} from 'react'
import useHttp from "../hooks/use-http";

function PostsView(){

    const [posts, setPosts] = useState([])

    const {loading, error, sendRequest: getPosts} = useHttp()

                
    useEffect(()=>{

        const arrangePosts = (posts)=>{
            const postsContainer = []    
            for (const key in posts) {
                const post = {
                    id:key,
                    ...posts[key]
                } 
                postsContainer.push(post)
            }
            setPosts(postsContainer)
        }

        getPosts({
            url:'https://react-app-aad1b-default-rtdb.europe-west1.firebasedatabase.app/posts.json',        
        }, arrangePosts)
        
        return () => {}
    }, [getPosts])


    return <section>
        <h1>Posts</h1>
        <Posts loading={loading} posts={posts} error={error} getPosts={getPosts}/>
    </section>
}

export default PostsView
