import {useRef, useState} from 'react' // reading inputs
import Card from '../ui/Card'
import classes from './NewPostForm.module.css'

function NewPostForm(props){

    const titleInputRef = useRef()
    const imageInputRef = useRef('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Claes_Kurck_Skåne_hammer_-_HST_DIG55488_original.jpg/220px-Claes_Kurck_Skåne_hammer_-_HST_DIG55488_original.jpg')
    const descriptionInputRef = useRef()

    const [confirm, setConfirm] = useState(false)

    function onSubmit(event){
        event.preventDefault()

        const title = titleInputRef.current.value
        const image = imageInputRef.current.value
        const description = descriptionInputRef.current.value


        const postData = {
            title:title,
            image:image,
            description:description
        }

        if(confirm){
            props.onAddPost(postData)
        }

    }


    return (<Card>
        <form className={classes.form} onSubmit={onSubmit}>
            <div className={classes.control}>
                <label htmlFor="title">Title</label>
                <input type="text" required id="title" ref={titleInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="image">Image</label>
                <input type="url" required id="image" ref={imageInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="description">Description</label>
                <textarea required id="description" rows="10" ref={descriptionInputRef}></textarea>
            </div>
            <div>
                <label htmlFor="confirm">Confirm</label>
                <input type="checkbox" id="confirm" onChange={()=>setConfirm(!confirm)}/>
            </div>
            <div className={classes.actions}>
                <button>Add Post</button>
            </div>
        </form>
    </Card>)


}

export default NewPostForm