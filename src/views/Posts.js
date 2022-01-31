import Posts from "../components/posts/Posts"
import {useState, useEffect} from 'react'

function PostsView(){

    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState([])

    async function getPosts(){
        
        try {
            const res = await fetch('https://react-app-aad1b-default-rtdb.europe-west1.firebasedatabase.app/posts.json')
            
            if(res.ok){
                const data = await res.json() 
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
                
            }else{
                throw new Error('Somethign went wrong!')
            }

            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        setLoading(true)

        getPosts()
        
        return () => {}
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
