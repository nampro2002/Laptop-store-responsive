import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Modal,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import {
  createSearchParams,
  Link,
  NavLink,
  useNavigate,
} from "react-router-dom";
import CartModel from "../CartModel";
import PersonIcon from "@mui/icons-material/Person";
import { Logout } from "../../redux/userSlice";
import { useAppDispatch } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { logOutRemoveCart } from "../../redux/cartSlice";
import { Avatar } from "@mui/joy";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LaptopOutlinedIcon from "@mui/icons-material/LaptopOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
function Navbar() {
  const [navHighLight, setNavHighLight] = useState("");
  const [inputSearch, setInputSearch] = useState<string>("");
  const [sideBar, setSideBar] = useState(false);
  const userInfo = JSON.parse(localStorage.getItem("user") || "{}");
  // console.log("navHighLight", navHighLight);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleSubmitSearch = () => {
    if (inputSearch === "") {
      return;
    }
    const input = inputSearch;
    setInputSearch("");
    return navigate({
      pathname: "search",
      search: createSearchParams({
        input: input as string,
      }).toString(),
    });
  };
  const handleChange = (path: string) => {
    setNavHighLight(path);
  };
  const handleLogout = () => {
    handleChange("");
    dispatch(Logout());
    dispatch(logOutRemoveCart());
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    height: {
      xl: "85%",
      lg: "85%",
      md: "70%",
      sm: "85%",
      xs: "85%",
    },
    bgcolor: "background.paper",
    boxShadow: 24,
    p: {
      xl: "4",
      lg: "4",
      md: "4",
      sm: "5px",
      xs: "5px",
    },
  };

  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: "none",
        bgcolor: "#00000000",
        paddingY: "15px",
        width: { xl: "80%", lg: "90%", md: "95%", sm: "95%", xs: "95%" },
        // marginBottom: "2%",
        margin: "0 auto 2% auto",
      }}
    >
      {/* = position fixed */}
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box color="inherit">
          <Box
            width="130px"
            sx={{ cursor: "pointer", padding: "10px" }}
            onClick={() => {
              handleChange("");
              return navigate("/");
            }}
          >
            <img src="/imgs/others/logo-white.png" alt="" width="130px" />
          </Box>
        </Box>
        <Box
          sx={{
            bgcolor: "#fff",
            borderRadius: "10px",
            alignItems: "center",
            height: "80%",
            display: {
              xl: "flex",
              lg: "flex",
              md: "flex",
              sm: "none",
              xs: "none",
            },
          }}
        >
          <TextField
            value={inputSearch}
            required
            id="outlined-required"
            placeholder="Search"
            fullWidth
            onChange={(e) => setInputSearch(e.target.value)}
            sx={{
              "& fieldset": { border: "none" },
              "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "none",
                borderRadius: "0",
              },

              // width: "80%",
            }}
          />
          <Button
            onClick={() => {
              handleSubmitSearch();
              handleChange("");
            }}
            sx={{
              color: "#000",
              paddingX: "20px",
            }}
          >
            Search
          </Button>
        </Box>
        <Box>
          <Drawer
            anchor="right"
            open={sideBar}
            onClose={() => setSideBar(!sideBar)}
          >
            <Stack
              direction="column"
              spacing="50px"
              fontSize="20px"
              alignItems="center"
              sx={{
                width: {
                  xl: "350px",
                  lg: "350px",
                  md: "350px",
                  sm: "180px",
                  xs: "120px",
                },
                fontSize: {
                  xl: "20px",
                  lg: "20px",
                  md: "20px",
                  sm: "12px",
                  xs: "12px",
                },
              }}
              height="100%"
              paddingY="50px"
              paddingX="20px"
            >
              <Box
                sx={{
                  width: "80%",
                  bgcolor: "#fff",
                  borderRadius: "10px",
                  alignItems: "center",
                  border: "2px solid #000",
                  mb: "20px",
                  display: {
                    xl: "none",
                    lg: "none",
                    md: "none",
                    sm: "flex",
                    xs: "flex",
                  },
                  flexDirection: {
                    md: "row",
                    sm: "column",
                    xs: "column",
                  },
                }}
              >
                <TextField
                  value={inputSearch}
                  required
                  id="outlined-required"
                  placeholder="Search"
                  fullWidth
                  onChange={(e) => setInputSearch(e.target.value)}
                  sx={{
                    "& fieldset": { border: "none" },
                    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                      borderRadius: "0",
                    },
                    fontSize: "12px",
                    // width: "80%",
                  }}
                />
                <Button
                  onClick={() => {
                    handleSubmitSearch();
                    setSideBar(true);
                    handleChange("");
                  }}
                  sx={{
                    color: "#000",
                    paddingX: "5px",
                    fontSize: "12px",
                  }}
                >
                  Search
                </Button>
              </Box>
              <NavLink
                onClick={() => handleChange("")}
                to="/"
                style={({ isActive }) => ({
                  borderBottom: "2px solid #000",
                  borderLeft: isActive ? "2px solid #000" : "2px solid #fff",
                  borderTop: isActive ? "2px solid #000" : "2px solid #fff",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  padding: "20px",
                  width: "150px",
                  backgroundColor: isActive ? "#e3e3e3" : "#fff",
                  color: "#000",
                  textDecoration: "none",
                  margin: "0",
                })}
              >
                <HomeOutlinedIcon fontSize="large" sx={{ mr: "5px" }} />
                HOME
              </NavLink>
              <NavLink
                onClick={() => handleChange("")}
                to="/products"
                style={({ isActive }) => ({
                  borderBottom: "2px solid #000",
                  borderLeft: isActive ? "2px solid #000" : "2px solid #fff",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  padding: "20px",
                  width: "150px",
                  backgroundColor: isActive ? "#e3e3e3" : "#fff",
                  color: "#000",
                  textDecoration: "none",
                  margin: "0",
                })}
              >
                <LaptopOutlinedIcon fontSize="large" sx={{ mr: "5px" }} />
                PRODUCTS
              </NavLink>
              {/* <Button sx={{ color: "#978D8D" }} size="small">
            MEDIA
          </Button> */}
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                margin="0!important"
                sx={
                  navHighLight === "/cart"
                    ? {
                        borderBottom: "2px solid #000",
                        borderLeft: "2px solid #000",
                        padding: "20px",
                        width: "150px",
                        backgroundColor: "#e3e3e3",
                        color: "#000",
                        textDecoration: "none",
                        cursor: "pointer",
                      }
                    : {
                        borderBottom: "2px solid #000",
                        borderLeft: "2px solid #fff",
                        padding: "20px",
                        width: "150px",
                        backgroundColor: "#fff",
                        color: "#000",
                        textDecoration: "none",
                        cursor: "pointer",
                      }
                }
                onClick={handleOpen}
              >
                <ShoppingCartOutlinedIcon fontSize="large" sx={{ mr: "5px" }} />
                CART
              </Stack>
              {!userInfo.id && (
                <>
                  <NavLink
                    onClick={() => handleChange("")}
                    to="/login"
                    style={({ isActive }) => ({
                      borderBottom: "2px solid #000",
                      borderLeft: isActive
                        ? "2px solid #000"
                        : "2px solid #fff",
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      padding: "20px",
                      width: "150px",
                      backgroundColor: isActive ? "#e3e3e3" : "#fff",
                      color: "#000",
                      textDecoration: "none",
                      margin: "0",
                    })}
                  >
                    <LoginOutlinedIcon fontSize="large" sx={{ mr: "5px" }} />
                    LOGIN
                  </NavLink>
                  <NavLink
                    onClick={() => handleChange("")}
                    to="/signup"
                    style={({ isActive }) => ({
                      borderBottom: "2px solid #000",
                      borderLeft: isActive
                        ? "2px solid #000"
                        : "2px solid #fff",
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      padding: "20px",
                      width: "150px",
                      backgroundColor: isActive ? "#e3e3e3" : "#fff",
                      color: "#000",
                      textDecoration: "none",
                      margin: "0",
                    })}
                  >
                    <PersonAddOutlinedIcon
                      fontSize="large"
                      sx={{ mr: "5px" }}
                    />
                    SIGN UP
                  </NavLink>
                </>
              )}
              {userInfo.id && (
                <>
                  <Stack
                    onClick={() => {
                      handleChange("/user/detail");
                      return navigate("/user/detail");
                    }}
                    direction="row"
                    paddingX="20px"
                    paddingY="10px"
                    alignItems="center"
                    sx={
                      navHighLight === "/user/detail"
                        ? {
                            borderBottom: "2px solid #000",
                            borderLeft: "2px solid #000",
                            margin: "0!important",
                            width: "150px",
                            backgroundColor: "#e3e3e3",
                            color: "#000",
                            textDecoration: "none",
                            cursor: "pointer",
                          }
                        : {
                            borderBottom: "2px solid #000",
                            borderLeft: "2px solid #fff",
                            margin: "0!important",
                            width: "150px",
                            backgroundColor: "#fff",
                            color: "#000",
                            textDecoration: "none",
                            cursor: "pointer",
                          }
                    }
                  >
                    <NavLink
                      to="/user/detail"
                      style={({ isActive }) => ({
                        border: isActive ? "2px solid #000" : "2px solid #fff",
                        textDecoration: "none",
                        borderRadius: "50%",
                      })}
                    >
                      <Avatar alt="Remy Sharp" src={userInfo.imgUrl} />
                    </NavLink>
                    <Typography fontSize="20px" ml="5px">
                      USER
                    </Typography>
                  </Stack>

                  <NavLink
                    onClick={handleLogout}
                    to="/"
                    style={{
                      borderBottom: "2px solid #000",
                      margin: "0",
                      padding: "20px",
                      width: "150px",
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      color: "#000",
                      textDecoration: "none",
                    }}
                  >
                    <LogoutOutlinedIcon fontSize="large" sx={{ mr: "5px" }} />
                    LOGOUT
                  </NavLink>
                </>
              )}
              <Stack>
                <img src="/imgs/others/logo-black.png" alt="" />
              </Stack>
            </Stack>
          </Drawer>
        </Box>
        <Stack
          direction="row"
          spacing="50px"
          fontSize="15px"
          alignItems="center"
          sx={{
            display: {
              xl: "flex",
              lg: "flex",
              md: "none",
              sm: "none",
              xs: "none",
            },
          }}
        >
          <NavLink
            onClick={() => handleChange("")}
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#978D8D",
              textDecoration: "none",
            })}
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => handleChange("")}
            to="/products"
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#978D8D",
              textDecoration: "none",
            })}
          >
            PRODUCTS
          </NavLink>
          {/* <Button sx={{ color: "#978D8D" }} size="small">
            MEDIA
          </Button> */}
          <Stack
            direction="row"
            alignItems="center"
            sx={
              navHighLight === "/cart"
                ? { color: "#fff", cursor: "pointer" }
                : { color: "#978D8D", cursor: "pointer" }
            }
            onClick={handleOpen}
          >
            <ShoppingCartOutlinedIcon fontSize="small" />
            CART
          </Stack>
          {!userInfo.id && (
            <>
              <NavLink
                onClick={() => handleChange("")}
                to="/login"
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#978D8D",
                  textDecoration: "none",
                })}
              >
                LOGIN
              </NavLink>
              <NavLink
                onClick={() => handleChange("")}
                to="/signup"
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#978D8D",
                  textDecoration: "none",
                })}
              >
                SIGN UP
              </NavLink>
            </>
          )}
          {userInfo.id && (
            <>
              <NavLink
                onClick={() => handleChange("")}
                to="/user/detail"
                style={({ isActive }) => ({
                  border: isActive ? "2px solid #fff" : "2px solid #000",
                  textDecoration: "none",
                  borderRadius: "50%",
                })}
              >
                <Avatar alt="Remy Sharp" src={userInfo.imgUrl} />
              </NavLink>

              <NavLink
                onClick={handleLogout}
                to="/"
                style={{
                  color: "#978D8D",
                  textDecoration: "none",
                }}
              >
                LOGOUT
              </NavLink>
            </>
          )}
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          onClick={() => setSideBar(true)}
          sx={{
            display: {
              xl: "none",
              lg: "none",
              md: "block",
              sm: "block",
              xs: "block",
            },
            marginTop: {
              xl: "0",
              lg: "0",
              md: "0",
              sm: "20px",
              xs: "block",
            },
          }}
        >
          <DensityMediumIcon fontSize="large" />
        </Stack>
      </Stack>
      <Box
        height="600px"
        width="100%"
        sx={{
          position: "absolute",
          top: "0",
          right: "0",
          zIndex: "-1",
          // borderBottomLeftRadius: "240px",
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg"
          alt=""
          width="100%"
          height="100%"
          style={{
            clipPath:
              "polygon(0% 15%, 0 0, 15% 0%, 85% 0%, 100% 0, 100% 15%, 100% 85%, 100% 100%, 67% 89%, 23% 92%, 16% 82%, 0% 85%)",
          }}
        />
      </Box>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <CartModel handleClose={handleClose} handleChange={handleChange} setSideBar={setSideBar}/>
          </Box>
        </Modal>
      </div>
    </AppBar>
  );
}

export default Navbar;
