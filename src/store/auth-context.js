import { createContext, useState, useEffect, useCallback } from "react";

const AuthContext = createContext({
   user:{},
   token:null,
   isAuthenticated:false,
   login:(token)=>{},
   logout:()=>{},

})

let logoutTimer = ''
function retrieveStoredToken(){
    const storedToken = localStorage.getItem('token')
    const storedExpirationDate = localStorage.getItem('expirationTime')
    const remainingTime = calcRemainingTime(storedExpirationDate)

    if(remainingTime <= 60000){
        localStorage.removeItem('token')
        localStorage.removeItem('expirationTime')
        return null
    }

    return {token: storedToken, duration: remainingTime}
}

const calcRemainingTime = (expTime) => {
    const currentTime = new Date().getTime()
    const adjExpTime = new Date(expTime).getTime()
    const remainingTime = adjExpTime - currentTime
    return remainingTime
}

export function AuthContextProvider(props){
    const tokenData = retrieveStoredToken()
    let initialToken
    if(tokenData){
        initialToken = tokenData.token
    }

    const [token, setToken] = useState(initialToken)
    const isAuthenticated = !!token

    function login(token, expirationTime){
        setToken(token)
        localStorage.setItem('token', token)
        localStorage.setItem('expirationTime', expirationTime)
        logoutTimer = setTimeout(logout, calcRemainingTime(expirationTime))
    }

    const logout = useCallback(()=>{
        setToken(null)
        localStorage.removeItem('token')
        localStorage.removeItem('expirationTime')

        if(logoutTimer){
            clearTimeout(logoutTimer)
        }
    }, [])

    useEffect(()=>{
        if(tokenData){
            logoutTimer = setTimeout(logout, tokenData.duration)
        }
    }, [tokenData, logout])

    return  <AuthContext.Provider value = {{
                    token,
                    isAuthenticated,
                    login,
                    logout
                }}>
                {props.children}
            </AuthContext.Provider>
}

export default AuthContext