import NewPostForm from "../components/posts/NewPostForm"
import { useNavigate } from 'react-router-dom'

function AddPostView(){

    const navigate = useNavigate()

    function onAddPost(data){
        fetch('https://react-app-aad1b-default-rtdb.europe-west1.firebasedatabase.app/posts.json',{
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                'Content-Type':"application/json"
            }
        }).then(res => {
            navigate('/', {replace:true})
        }).catch(err => {
            console.log(err)
        })
    }


    return <div id="AddPost">
        <h1>Add New Post</h1>
        <NewPostForm onAddPost={onAddPost}/>
    </div>
}

export default AddPostView