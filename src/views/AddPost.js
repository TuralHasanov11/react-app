import NewPostForm from "../components/posts/NewPostForm"
import { useNavigate } from 'react-router-dom'
import useHttp from "../hooks/use-http"

function AddPostView(){

    const navigate = useNavigate()
    const {loading, error, sendRequest:createPost} = useHttp()

    function onAddPost(data){
        createPost({
            url:'https://react-app-aad1b-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data),
        }, ()=>{
            navigate('/', {replace:true})
        })
    }

    return <div id="AddPost">
        <h1>Add New Post</h1>
        <NewPostForm onAddPost={onAddPost}/>
    </div>
}

export default AddPostView