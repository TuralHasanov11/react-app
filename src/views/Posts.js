import Posts from "../components/posts/Posts"
import {useState, useEffect} from 'react'

function PostsView(){

    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        setLoading(true)

        fetch('https://react-app-aad1b-default-rtdb.europe-west1.firebasedatabase.app/posts.json')
            .then(res => res.json())
            .then(data => {

                const postsContainer = []
                
                for (const key in data) {
                    const post = {
                        id:key,
                        ...data[key]
                    } 

                    postsContainer.push(post)
                }

                setLoading(false)
                setPosts(postsContainer)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    
    if(loading){
        return <p>Loading...</p>
    }

    return <section>
        <h1>Posts</h1>
        <Posts posts={posts}/>
    </section>
}

export default PostsView
