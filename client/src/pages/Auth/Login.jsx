import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { useNavigate,useLocation } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../../context/auth";


const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPass]=useState("");
  const [auth,setAuth]=useAuth();

  const navigate=useNavigate();
  const location=useLocation();
  const loginSubmit=async(e)=>{
    e.preventDefault();
    try {
        const res=await axios.post(`${import.meta.env.VITE_APP_URL}/api/v1/auth/login`,{
            email,
            password,
        });
        if(res && res.data.success){
          toast.success(res && res.data.message);
          setAuth({
            ...auth,
            user:res.data.user,
            token:res.data.token
          });
          localStorage.setItem("auth",JSON.stringify(res.data));
          navigate(location.state || '/');
        }else{
          toast.error(res.data.error)
        }
        
    } catch (error) {
        console.log(error)
        // toast.error('Something Went Wrong')
    }
}
  return (
    <Layout title="Register - Ecommer App">
      <div className="form-container ">
        <form onSubmit={loginSubmit}>
          <h4 className="title">LOGIN FORM</h4>

          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPass(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            LOGIN
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default Login