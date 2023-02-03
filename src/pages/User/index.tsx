import { Box, Stack } from "@mui/material";
import { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { getAllCart } from "../../redux/cartSlice";
import { useAppDispatch } from "../../redux/hooks";
import {
  getAllCategory,
  getAllProduct,
  getTypicalProduct,
} from "../../redux/productSlice";
import { getAllUser, GetUserInfo } from "../../redux/userSlice";
export function User() {
  const userInfo = JSON.parse(localStorage.getItem("user") || "{}");
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
      <Box width="50%" margin="0 auto 4% auto">
        <Stack
          direction="row"
          spacing="50px"
          bgcolor="#000"
          justifyContent="center"
        >
          <NavLink
            to="detail"
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#978D8D",
              textDecoration: "none",
              fontSize: "25px",
              fontWeight: "700",
            })}
          >
            User Info
          </NavLink>
          <NavLink
            to="history"
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#978D8D",
              textDecoration: "none",
              fontSize: "25px",
              fontWeight: "700",
            })}
          >
            History
          </NavLink>
        </Stack>
      </Box>
      <Box mb="6%">
        <Outlet />
      </Box>
    </Box>
  );
}

export default User;
