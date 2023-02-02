import { Box } from "@mui/material";
import BodyService from "../../components/BodyService";
import BodyVideo from "../../components/BodyVideo";
import CategoryCarousel from "../../components/CategoryCarousel";
import HeaderCarousel from "../../components/HeaderCarousel";
import ProductCarousel from "../../components/ProductCarousel";
import { useAppDispatch } from "../../redux/hooks";
import { useEffect } from "react";
import { getAllCategory, getAllProduct, getTypicalProduct } from "../../redux/productSlice";
import { getAllCart } from "../../redux/cartSlice";
import { getAllUser } from "../../redux/userSlice";
function Home() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log("dispatch");
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
    <Box>      
      <Box height="550px" mb="100px">
        <HeaderCarousel />
      </Box>
      <Box>
        <ProductCarousel />
      </Box>
      <Box mt="100px">
        <CategoryCarousel />
      </Box>
      <Box mt="100px">
        <BodyService />
      </Box>
      <Box mt="100px">
        <BodyVideo />
      </Box>     
 
    </Box>
  );
}

export default Home;
