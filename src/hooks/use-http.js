
import { useCallback, useState } from "react";

const useHttp = ()=>{

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const sendRequest = useCallback(async (request, arrangeData)=>{

        setError(null);
        setLoading(true);

        try {
            const res = await fetch(request.url,{
                method:request.method ? request.method : 'GET',
                headers:request.headers ? request.headers : {},
                body:request.data ? JSON.stringify(request.data) : null
            })
            
            if(res.ok){
                const data = await res.json() 
                arrangeData(data)
                
            }else{
                throw new Error('Somethign went wrong!')
            }

        } catch (error) {
            setError(error.message || 'Something went wrong!');
        }

        setLoading(false)
    }, [])

    return {
        error,
        loading,
        sendRequest,
    }
}

export default useHttp