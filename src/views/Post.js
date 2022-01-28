import { useEffect, useState } from 'react'
import Post from './Post'
import classes from './Posts.module.css'

function Posts({match}){

    const [loading, setLoading] = useState(true)
    const [post, setPost] = useState([])

    useEffect(()=>{
        setLoading(true)
        let postId = match.params.post
        fetch(`url/${postId}`)
        .then(res => res.json())
        .then(data => {   

            setLoading(false)
            setPost({id:key, ...data[key]})
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    if(loading){
        return <p>Loading...</p>
    }

    return (
        <Post id={post.id} key={index} title={post.title} image={post.image} description={post.description} />
    )
}


export default Posts