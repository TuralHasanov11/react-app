import { createContext, useState } from "react";

const AuthContext = createContext({
   user:{},
   token:null,
   isAuthenticated:false,
   login:(token)=>{},
   logout:()=>{},

})

const calcRemainingTime = (expTime) => {
    const currentTime = new Date().getTime()
    const adjExpTime = new Date(expTime).getTime()
    const remainingTime = adjExpTime - currentTime
    return remainingTime
}

export function AuthContextProvider(props){
    const initialToken = localStorage.getItem('token')
    const [token, setToken] = useState(initialToken)
    const isAuthenticated = !!token

    function login(token, expirationTime){
        setToken(token)
        localStorage.setItem('token', token)
        setTimeout(logout, calcRemainingTime(expirationTime))
    }

    function logout(){
        setToken(null)
        localStorage.removeItem('token')
    }

    return <AuthContext.Provider value = {{
           token,
           isAuthenticated,
           login,
           logout
        }}>
            {props.children}
        </AuthContext.Provider>
}

export default AuthContext