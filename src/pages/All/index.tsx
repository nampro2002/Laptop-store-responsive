import { Box } from "@mui/material";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { getAllCart } from "../../redux/cartSlice";
import { useAppDispatch } from "../../redux/hooks";
import { getAllCategory, getAllProduct, getTypicalProduct } from "../../redux/productSlice";
import { getAllUser } from "../../redux/userSlice";
function All() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    // console.log("dispatch");
    dispatch(getTypicalProduct());
    dispatch(getAllProduct());
    dispatch(getAllCategory());
    const userInfo = JSON.parse(localStorage.getItem("user") || "{}");
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
