import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/auth.jsx";
import "antd/dist/reset.css";
import { CartProvider } from "./context/cart.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <CartProvider>
      <Router>
        <App />
      </Router>
    </CartProvider>
  </AuthProvider>
);
