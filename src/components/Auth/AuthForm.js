import { useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../store/auth-context';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const emailInput = useRef()
  const passwordInput = useRef()

  const authCtx = useContext(AuthContext)

  const navigate = useNavigate()

  function submitForm(event){
    event.preventDefault()

    if(isLogin){
      fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCk4ZMfvGciiKjLFS9HFItIZi6bpdYSVPM`,{
          method:'POST',
          body:JSON.stringify({
            email:emailInput.current.value, 
            password:passwordInput.current.value, 
            returnSecureToken:true
          }),
          headers:{
            'Content-Type':'application/json'
          }
        })
        .then(res => {
          if(res.ok){
            return res.json()
          }else{
            return res.json().then(data=>{
              throw new Error('Authentication failed!')
            })
          }
        })
        .then(data=>{
          const expTime = new Date(new Date().getTime()+(+data.expiresIn*1000))
          authCtx.login(data.idToken, expTime.toISOString())
          navigate('/', {replace:true})
        })
        .catch(err=>{
          alert(err.message)
        })
    }else{
      fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCk4ZMfvGciiKjLFS9HFItIZi6bpdYSVPM`,{
          method:'POST',
          body:JSON.stringify({
            email:emailInput.current.value, 
            password:passwordInput.current.value, 
            returnSecureToken:true
          }),
          headers:{
            'Content-Type':'application/json'
          }
        })
        .then(res => {
          if(res.ok){
            return res.json()
          }else{
            return res.json().then(data=>{
              if(data && data.error){
                alert(data.error.message)
              }
            })
          }
        })
    }
    
  }

  const switchAuthMode = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <section className='container'>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitForm}>
        <div className='mb-3'>
          <label htmlFor='email'>Your Email</label>
          <input className='form-control' type='email' id='email' ref={emailInput} required />
        </div>
        <div className='mb-3'>
          <label htmlFor='password'>Your Password</label>
          <input className='form-control' type='password' ref={passwordInput} id='password' required />
        </div>
        <div className='mb-3'>
          <button className='btn mx-1 btn-success'>{isLogin ? 'Login' : 'Create Account'}</button>
          <hr />
          <button
            type='button'
            className='btn btn-primary'
            onClick={switchAuthMode}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
