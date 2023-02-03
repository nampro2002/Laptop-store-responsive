import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../redux/cartSlice";
import { useAppDispatch } from "../../redux/hooks";
import { ICartProduct } from "../../types/types";
import { formatPrice } from "../../Util/formatPrice";
import { Toast } from "../../Util/toastify";
import "./style.css";
interface CartModelComponentProps {
  cartProduct: ICartProduct;
}

function CartModelComponent({ cartProduct }: CartModelComponentProps) {
  const userInfo = JSON.parse(localStorage.getItem("user") || "{}");
  const userId = userInfo.id;
  const [quantity, setQuantity] = useState(cartProduct.quantity);
  const dispatch = useAppDispatch();
  const handleSetQuantity = (value: string) => {
    if (value === "up") {
      setQuantity((quantity) => quantity + 1);
      dispatch(
        increaseQuantity({
          id: cartProduct.id,
          prodId: cartProduct.prodId,
          userId,
          quantity: cartProduct.quantity + 1,
        })
      )
        .unwrap()
        .catch((error) => {
          Toast.error("Lỗi");
        });
    } else if (value === "down") {
      if (quantity === 1) {
        return;
      }
      dispatch(
        decreaseQuantity({
          id: cartProduct.id,
          prodId: cartProduct.prodId,
          userId,
          quantity: cartProduct.quantity - 1,
        })
      )
        .unwrap()
        .catch((error) => {
          Toast.error("Lỗi");
        });
      setQuantity((quantity) => quantity - 1);
    } else {
      return;
    }
  };
  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart(id))
      .unwrap()
      .catch((error) => {
        Toast.error("Lỗi");
      });
  };
  const total = cartProduct.price * cartProduct.quantity;
  return (
    <Box
      // py="10px"
      sx={{
        border: "1px solid #b6b4b4",
        paddingY: {
          xl: "10px",
          lg: "10px",
          md: "10px",
          sm: "10px",
          xs: "0",
        },
      }}
    >
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        theme="light"
      />
      <Box
        display="flex"
        sx={{
          flexDirection: "row",
          justifyContent: {
            xl: "none",
            lg: "none",
            md: "none",
            sm: "none",
            xs: "space-between",
          },
        }}
      >
        <img
          className="prod-model-img"
          src={cartProduct.imgUrl}
          alt=""
          width="100px"
          style={
            {
              // border: "1px solid #000",
            }
          }
        />
        <Stack
          direction="row"
          ml="30px"
          width="calc(100% - 100px)"
          alignItems="center"
          display="flex"
          sx={{
            width: {
              xl: "calc(100% - 100px)",
              lg: "calc(100% - 100px)",
              md: "calc(100% - 100px)",
              sm: "100%",
              xs: "calc(100% - 120px)",
            },
            flexDirection: {
              xl: "row",
              lg: "row",
              md: "row",
              sm: "column",
              xs: "column",
            },
            marginLeft: {
              xl: "30px",
              lg: "30px",
              md: "30px",
              sm: "5px",
              xs: "0",
            },
          }}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              flexDirection: "column",
              width: {
                xl: "calc(100% - 80px)",
                lg: "calc(100% - 80px)",
                md: "100%",
                sm: "120%",
                xs: "100%",
              },
              alignItems: {
                xl: "flex-start",
                lg: "flex-start",
                md: "center",
                sm: "center",
                xs: "center",
              },
            }}
          >
            <Typography
              className="text-model"
              variant="h5"
              sx={{
                fontSize: {
                  xl: "25px",
                  lg: "25px",
                  md: "25px",
                  sm: "20px",
                  xs: "16px",
                },
              }}
            >
              {cartProduct.name}
            </Typography>
            <Typography
              className="text-model"
              variant="h6"
              color="red"
              fontWeight="500"
              sx={{
                fontSize: {
                  xl: "25px",
                  lg: "25px",
                  md: "25px",
                  sm: "20px",
                  xs: "16px",
                },
              }}
            >
              {formatPrice(total)}
            </Typography>
          </Box>
          <Stack direction="row" alignItems="center">
            <Stack
              direction="row"
              // mr="20px"
              // sx={{
              //   width: {
              //     xl: "35px",
              //     lg: "35px",
              //     md: "35px",
              //     sm: "25px",
              //     xs: "25px",
              //   }
              // }}
              // justifyContent="center"
            >
              <Typography
                onClick={(e) => handleSetQuantity("down")}
                // width="35px"
                // height="35px"
                sx={{
                  width: {
                    xl: "35px",
                    lg: "35px",
                    md: "35px",
                    sm: "25px",
                    xs: "25px",
                  },
                  height: {
                    xl: "35px",
                    lg: "35px",
                    md: "35px",
                    sm: "25px",
                    xs: "25px",
                  },
                  cursor: "pointer",
                }}
                bgcolor="#e3e3e3"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize="20px"
                className="quantity-modal"
              >
                -
              </Typography>
              <input
                type="number"
                className="input-model"
                style={{
                  border: "none",
                  width: "30px",
                  textAlign: "center",
                  color: "#000",
                  fontWeight: "700",
                  fontSize: "15px",
                }}
                value={quantity}
                onChange={(e) => setQuantity(Number.parseInt(e.target.value))}
              />
              <Typography
                className="quantity-modal"
                onClick={() => handleSetQuantity("up")}
                sx={{
                  width: {
                    xl: "35px",
                    lg: "35px",
                    md: "35px",
                    sm: "25px",
                    xs: "25px",
                  },
                  height: {
                    xl: "35px",
                    lg: "35px",
                    md: "35px",
                    sm: "25px",
                    xs: "25px",
                  },
                  cursor: "pointer",
                }}
                bgcolor="#e3e3e3"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize="20px"
              >
                +
              </Typography>
            </Stack>
            <IconButton
              onClick={() => handleRemoveFromCart(cartProduct.id)}
              className="iconbtn-model"
            >
              <DeleteOutlineIcon fontSize="medium" sx={{ color: "red" }} />
            </IconButton>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

export default CartModelComponent;
