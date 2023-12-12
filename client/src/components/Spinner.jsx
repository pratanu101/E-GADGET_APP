import { useState,useEffect } from "react";
import { useNavigate,useLocation } from "react-router-dom";

const Spinner = () => {
  const [count,setCount]=useState(3);
  const navigate=useNavigate();
  const location=useLocation();

  useEffect(()=>{
    const interval=setInterval(()=>{
      setCount((pval)=>--pval);
    },1000)
    count === 0 && navigate("/login",{
      state:location.pathname,
    }); 
    return ()=>clearInterval(interval);
  },[count,navigate,location])

  return (
    <>
      <div style={{height:'80vh'}} className="d-flex justify-content-center align-items-center">
        <div className="spinner-grow text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Spinner;
