import {useReducer, useState} from 'react'

const inputStateReducer = (state, action) => {

    switch (action.type) {
        case 'INPUT':
            return {value:action.value, touched: state.touched}
        case 'BLUR':
            return {touched: state.touched}
        case 'RESET':
            return {value: '', touched:false}
        default:
            break;
    }

    return {
        value: '',
        touched:''
    }
}

const useInput = (validateValue)=>{

     // *** USING REDUCER *** 
    const [inputState, dispatch] = useReducer(inputStateReducer,{})
    const valueIsValid = validateValue(inputState.value)
    const hasError = !valueIsValid && inputState.touched


    // *** USING STATE *** 
    // const [value, setValue] = useState('')
    // const [touched, setTouched] = useState(false)
    // const valueIsValid = validateValue(value)
    // const hasError = !valueIsValid && touched

    function valueChange(event){
        // setValue(event.target.value)
        dispatch({type:'INPUT', value:event.target.value})
    }
    
    function valueBlur(event){
        dispatch({type:'BLUR'})
    }

    function reset(){
        dispatch({type:'RESET'})
    }
    

    return {
        // value, 
        value:inputState.value, 
        isValid: valueIsValid, 
        hasError, 
        valueChange, 
        valueBlur,
        reset
    }
}

export default useInput