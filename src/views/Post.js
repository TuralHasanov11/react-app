import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Post from '../components/posts/Post'

function Posts({match}){
    const params = useParams()
    const [loading, setLoading] = useState(true)
    const [post, setPost] = useState({})

    useEffect(()=>{
        setLoading(true)
        getPost()
    }, [])

    async function getPost(){
        try {
            const res = await fetch(`https://react-app-aad1b-default-rtdb.europe-west1.firebasedatabase.app/posts/${params.post}.json`)
            if(res.ok){
                setLoading(false)
                setPost({id:params.post, ...await res.json()})
            }else{
                throw new Error('Error')
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    if(loading){
        return <p>Loading...</p>
    }

    return (
        <Post id={post.id} title={post.title} image={post.image} description={post.description} />
    )
}


export default Posts