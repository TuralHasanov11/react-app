import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";


const ProfileForm = () => {

  const newPasswordInput = useRef()
  const authCtx = useContext(AuthContext)

  const navigate = useNavigate()

  function submitForm(event){
    event.preventDefault()

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCk4ZMfvGciiKjLFS9HFItIZi6bpdYSVPM',{
      method:'POST',
      body:JSON.stringify({
        idToken:authCtx.token, 
        password:newPasswordInput.current.value,
        returnSecureToken:true
      })
    }).then(res => {
      alert('Password changed!')
      navigate('/', {replace:true})
    })
  }

  return (
    <form onSubmit={submitForm}>
      <div className='mb-3'>
        <label htmlFor='new-password'>New Password</label>
        <input className='form-control' minLength='7' ref={newPasswordInput} type='password' id='new-password' />
      </div>
      <div className='mb-3'>
        <button className="btn btn-success">Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
