import {useRef, useState, useReducer, useEffect} from 'react' // reading input
import { createPortal } from 'react-dom'
import Card from '../ui/Card'
import classes from './NewPostForm.module.css'
import Modal from '../ui/Modal'


const addressReducer = (state, action)=>{
    if(action.type === 'USER_INPUT'){
        return {value:action.value, isValid:action.value.includes('@')}
    }
    return {value:state.value, isValid:state.value.includes('@')}
}


function NewPostForm(props){

    const titleInputRef = useRef()
    const imageInputRef = useRef('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Claes_Kurck_Skåne_hammer_-_HST_DIG55488_original.jpg/220px-Claes_Kurck_Skåne_hammer_-_HST_DIG55488_original.jpg')
    const descriptionInputRef = useRef()
    const [address, dispatchAddress] = useReducer(addressReducer, {
        value:'',
        isValid:false
    })

    const [confirm, setConfirm] = useState(false)
    const [formIsValid, setFormIsValid] = useState(false)

    useEffect(()=>{
        setFormIsValid(address.isValid && confirm)

        return ()=>{}
    }, [address, confirm])

    function addressChangeHandler(event){
        dispatchAddress({type:'USER_INPUT',value:event.target.value})
    }

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

        if(formIsValid){
            props.onAddPost(postData)
        }

    }


    return (
        <>
            {createPortal(<Modal></Modal>, document.getElementById('overlay-root'))}

            <Card>
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
                <div className={classes.control}>
                    <label htmlFor="email">Email</label>
                    <input type="email" required id="email" value={address} onChange={addressChangeHandler} />
                </div>
                <div>
                    <label htmlFor="confirm">Confirm</label>
                    <input type="checkbox" id="confirm" value={confirm} onChange={()=>setConfirm(!confirm)}/>
                </div>
                <div className={classes.actions}>
                    <button>Add Post</button>
                </div>
            </form>
            </Card>
        </>
    )


}

export default NewPostForm