import NewPostForm from "../components/posts/NewPostForm"
import { useNavigate } from 'react-router-dom'

function AddPostView(){

    const navigate = useNavigate()

    async function onAddPost(data){
        const res = await fetch('https://react-app-aad1b-default-rtdb.europe-west1.firebasedatabase.app/posts.json',{
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                'Content-Type':"application/json"
            }
        })

        if(res.ok){
            navigate('/', {replace:true})
        }
        
    }


    return <div id="AddPost">
        <h1>Add New Post</h1>
        <NewPostForm onAddPost={onAddPost}/>
    </div>
}

export default AddPostView