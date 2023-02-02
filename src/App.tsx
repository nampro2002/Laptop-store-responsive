import { Route, Routes } from "react-router-dom";
import "./App.css";
import All from "./pages/All";
import Cart from "./pages/Cart";
import CheckoutHistory from "./pages/CheckoutHistory";
import ConfirmCart from "./pages/ConfrimCart";
import FinalCheckOut from "./pages/FinalCheckOut";
import MediaQuery from "./pages/formDemo";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import SearchPage from "./pages/Search";
import SignUp from "./pages/SignUp";
import User from "./pages/User";
import UserDetail from "./pages/UserDetail";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<All />}>
          <Route path="" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="detail" element={<SearchPage />} />
          <Route path="cart" element={<Cart />} />
          <Route path="confirmcart" element={<ConfirmCart />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="finalcheckout" element={<FinalCheckOut />} />
          <Route path="formdemo" element={<MediaQuery />} />
          <Route path="user" element={<User />} >
          <Route path="detail" element={<UserDetail />} />
          <Route path="history" element={<CheckoutHistory />} />
          </Route>
          <Route path="detail" element={<ProductDetail />}>
            <Route path="?productId=:productId" element={<ProductDetail />} />
            <Route index element={<NotFound />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
