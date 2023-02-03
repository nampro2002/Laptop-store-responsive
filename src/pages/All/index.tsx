import { Box } from "@mui/material";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { getAllCart } from "../../redux/cartSlice";
import { useAppDispatch } from "../../redux/hooks";
import { getAllCategory, getAllProduct, getTypicalProduct } from "../../redux/productSlice";
import { getAllUser, GetUserInfo } from "../../redux/userSlice";
function All() {
  const userInfo = JSON.parse(localStorage.getItem("user") || "{}");
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTypicalProduct());
    dispatch(GetUserInfo(userInfo));
    dispatch(getAllProduct());
    dispatch(getAllCategory());
    if (userInfo.id) {
      dispatch(getAllCart(userInfo.id));
    }
    dispatch(getAllUser());
  }, [dispatch]);
  return (
    <div>
      <Box>
        <Navbar />
      </Box>
      <Box mb="6%">
        <Outlet />
      </Box>
      <Box>
        <Footer />
      </Box>
    </div>
  );
}

export default All;
