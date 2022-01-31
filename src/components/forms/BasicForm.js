import useInput from "../../hooks/use-input";

const BasicForm = (props) => {

  const {
    value: firstName, 
    isValid: firstNameIsValid,
    hasError:firstNameHasError, 
    valueChange: firstNameChange, 
    valueBlur: firstNameBlur,
    reset:resetFirstName
  } = useInput(value => value.trim() !== '')

  const {
    value: lastName, 
    isValid: lastNameIsValid,
    hasError:lastNameHasError, 
    valueChange: lastNameChange, 
    valueBlur: lastNameBlur,
    reset:resetLastName
  } = useInput(value => value.trim() !== '')

  const {
    value: email, 
    isValid: emailIsValid,
    hasError:emailHasError, 
    valueChange: emailChange, 
    valueBlur: emailBlur,
    reset:resetEmail
  } = useInput(value => value.includes('@'))


  let formIsValid = (firstNameIsValid && lastNameIsValid && emailIsValid)

  function formSubmit(event){
    
    event.preventDefault()

    if(!formIsValid){
      return
    } 

    // submit form
    console.log(firstName,lastName, email)

    resetFirstName()
    resetLastName()
    resetEmail()

  }

  return (
    <form onSubmit={formSubmit}>
      <div className='control-group'>
        <div className='form-group'>
          <label htmlFor='firstName'>First Name</label>
          <input type='text' id='firstName' value={firstName} className={`form-control ${firstNameHasError?'is-invalid':'is-valid'}`} onChange={firstNameChange} onBlur={firstNameBlur}/>
          {!firstNameHasError ?? <small className="invalid-feedback">Invalid</small>}
        </div>
        <div className='form-group'>
          <label htmlFor='lastName'>Last Name</label>
          <input type='text' id='lastName' value={lastName} className={`form-control ${lastNameHasError?'is-invalid':'is-valid'}`} onChange={lastNameChange} onBlur={lastNameBlur}/>
          {!lastNameHasError ?? <small className="invalid-feedback">Invalid</small>}
        </div>
      </div>
      <div className='form-group'>
        <label htmlFor='email'>E-Mail Address</label>
        <input type='text' id='email' value={email} className={`form-control ${emailHasError?'is-invalid':'is-valid'}`} onChange={emailChange} onBlur={emailBlur}/>
        {!emailHasError ?? <small className="invalid-feedback">Invalid</small>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
