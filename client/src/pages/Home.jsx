import axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout/Layout"
import { useAuth } from "../context/auth"
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useCart } from "../context/cart";

const Home = () => {
  const navigate=useNavigate();
  // const [auth,setAuth]=useAuth();
  const [products,setProducts]=useState([]);
  const [cart,setCart]=useCart()
  // const [total,setTotal]=useState(0);
  

  // get Products
  const getAllProducts=async()=>{
      try {
        const {data}=await axios.get(`${import.meta.env.VITE_APP_URL}/api/v1/product/allproducts`);
        setProducts(data.products);

      } catch (error) {
        console.log(error)
      }   
  }

  useEffect(()=>{
        getAllProducts()
  },[])
  return (
    <Layout title={"ALl Products - Best offers "}>
    <div className="container-fluid row mt-12">
      <div className="col-md-12">
        <h1 className="text-center">All Products</h1>
        <div className="d-flex flex-wrap">
          {products?.map((p) => (
            <div className="card m-2" style={{ width: "18rem" }} key={p._id}>
              <img
                src={`${import.meta.env.VITE_APP_URL}/api/v1/product/product-photo/${p._id}`}
                className="card-img-top"
                alt={p.name}
              />
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">
                  {p.description.substring(0, 30)}...
                </p>
                <p className="card-text"> $ {p.price}</p>
                <button onClick={()=>navigate(`/product/${p._id}`)} className="btn btn-primary ms-1">More Details</button>
                <button className="btn btn-secondary ms-1" onClick={()=>{
                  setCart([...cart,p]);
                  localStorage.setItem("cart",JSON.stringify([...cart,p]))
                  toast.success("product add to Cart")
                }}>ADD TO CART</button>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="m-2 p-3">
          {products && products.length < total && (
            <button
              className="btn btn-warning"
              onClick={(e) => {
                e.preventDefault();
                setPage(page + 1);
              }}
            >
              {loading ? "Loading ..." : "Loadmore"}
            </button>
          )}
        </div> */}
      </div>
    </div>
  </Layout>
  )
}

export default Home