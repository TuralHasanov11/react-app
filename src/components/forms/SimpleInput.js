import { useEffect } from "react";
import useInput from "../../hooks/use-input";

const SimpleInput = (props) => {

  const {
    value: name, 
    isValid: nameIsValid,
    hasError:nameHasError, 
    valueChange: nameInputChange, 
    valueBlur: nameInputBlur,
    reset:resetNameInput
  } = useInput(value => value.trim() !== '')

  
  let formIsValid = false


  useEffect(()=>{
    if(nameIsValid){ // and other input valid states
      formIsValid = true
    }else{
      formIsValid = false
    }
  },[nameIsValid])

  function formSubmit(event){
    event.preventDefault()

    if(!formIsValid){
      return
    } 

    // submit form
    console.log(name)

    resetNameInput()

  }

  return (
    <form onSubmit={formSubmit}> 
      <div className={`form-control ${nameHasError?'is-invalid':'is-valid'}`} >
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChange} onBlur={nameInputBlur}/>
        {!nameHasError ?? <small className="invalid-feedback">Invalid</small>}
      </div>
      <div className="form-actions">
        <button className="btn btn-submit" disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
