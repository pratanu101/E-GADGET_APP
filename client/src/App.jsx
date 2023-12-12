
import {Routes,Route} from 'react-router-dom';
import Home from "./pages/Home";
import { About } from "./pages/About";
import Contact from "./pages/Contact";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Dashboard from './pages/user/Dashboard';
import { PrivateRoute } from './components/Routes/Private';
import { AdminRoute } from './components/Routes/AdminRoute';
import AdminDashboard from './pages/admin/AdminDashboard';
import CreateProduct from './pages/admin/CreateProduct';
import Users from './pages/admin/Users';
import Products from './pages/admin/Products';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/CartPage';
import Order from './pages/user/Order';
import UpdateProduct from './pages/admin/UpdateProduct';



function App() {


  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product/:id" element={<ProductDetails/>} />
      <Route path="/cart" element={<CartPage/>} />
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="*" element={<Pagenotfound/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>} />
      
      <Route path="/dashboard" element={<PrivateRoute/>}>
        <Route path="user" element={<Dashboard/>} />
        <Route path="user/orders" element={<Order/>} />
      </Route>

      <Route path="/dashboard" element={<AdminRoute/>}>
        <Route path="admin" element={<AdminDashboard/>} />
        <Route path="admin/create-product" element={<CreateProduct/>} />
        <Route path="admin/products" element={<Products/>} />
        <Route path="admin/product/:id" element={<UpdateProduct/>} />
        <Route path="admin/users" element={<Users/>} />

      </Route>


     </Routes>
    </>
  )
}

export default App
