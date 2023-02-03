import { Box } from "@mui/material";
import BodyService from "../../components/BodyService";
import BodyVideo from "../../components/BodyVideo";
import CategoryCarousel from "../../components/CategoryCarousel";
import HeaderCarousel from "../../components/HeaderCarousel";
import ProductCarousel from "../../components/ProductCarousel";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";
import { getAllCategory, getAllProduct, getTypicalProduct } from "../../redux/productSlice";
import { getAllCart } from "../../redux/cartSlice";
import { getAllUser, GetUserInfo } from "../../redux/userSlice";
import { RootState } from "../../redux/store";
// console.log(userInfo);
function Home() {
  const userInfo = JSON.parse(localStorage.getItem("user") || "{}");
  const userState = useAppSelector((state:RootState)=>state.user.user)
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(GetUserInfo(userInfo));
    dispatch(getTypicalProduct());
    dispatch(getAllProduct());
    dispatch(getAllCategory());
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
