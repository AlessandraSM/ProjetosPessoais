import { useEffect, useState } from "react"
import axios from 'axios'

const useRequestData = (initialData, url) =>{
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(initialData) 
    
    useEffect(()=>{
        setLoading(true)
        axios.get(url,{
            headers:{
                Authorization: localStorage.getItem('token')
            }
        }).then((res)=>{
            setLoading(false)
            setData(res.data)
        }).catch((error)=>{
            setLoading(false)
            console.log(error)
            alert("Ocorreu um erro, tente novamente")
        })
    },[url])
    return (data)
}

export default useRequestData