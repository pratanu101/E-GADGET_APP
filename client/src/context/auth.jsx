import {useState,useContext,createContext, useEffect } from "react";
import axios from "axios";
const AuthContext=createContext()

const AuthProvider=({children})=>{
    const [auth,setAuth]=useState({
        user:null,
        token:""
    });

     //default axios
  axios.defaults.headers.common["Authorization"] = auth?.token;
    useEffect(()=>{
        const data=localStorage.getItem('auth');
        if(data){
            const parsdata=JSON.parse(data);
            setAuth({
                ...auth,
                user:parsdata.user,
                token:parsdata.token
            })
        }
    },[])

    return(
        <AuthContext.Provider value={[auth,setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth=()=>useContext(AuthContext);

export {AuthProvider,useAuth}