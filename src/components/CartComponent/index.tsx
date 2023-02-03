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
import CartComponentAcordion from "../CartComponentAcordion";
import "./style.css";

interface CartComponentProps {
  cartProduct: ICartProduct;
}

function CartComponent({ cartProduct }: CartComponentProps) {
  const userInfo = JSON.parse(localStorage.getItem("user") || "{}");
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(cartProduct.quantity);
  const userId = userInfo.id;
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
        .catch(() => {
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
        .catch(() => {
          Toast.error("Lỗi");
        });
      setQuantity((quantity) => quantity - 1);
    } else {
      return;
    }
  };
  const total = cartProduct.price * cartProduct.quantity;
  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart(id))
      .unwrap()
      .catch((error) => {
        Toast.error("Lỗi");
      });
  };
  return (
    <Box
      py="10px"
      sx={{
        border: "1px solid #b6b4b4",
        width: {
          xl: "100%",
          lg: "100%",
          md: "100%",
          sm: "100%",
          xs: "100%",
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
      <Stack direction="row">
        <img
          src={cartProduct.imgUrl}
          alt=""
          width="100px"
          style={{
            maxHeight: "100px",
          }}
        />
        <Box
          // ml="30px"
          display="flex"
          sx={{
            flexDirection: {
              xl: "row",
              lg: "row",
              md: "row",
              sm: "row",
              xs: "column",
            },
          }}
          width="calc(100% - 100px)"
          alignItems="center"
        >
          <Box
            sx={{
              width: {
                xl: "calc(100% - 310px)",
                lg: "calc(100% - 310px)",
                md: "100%",
                sm: "100%",
                xs: "100%",
              },
            }}
          >
            <Typography variant="h5" className="cart-prod-name">
              {cartProduct.name}
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            sx={{
              flexDirection: {
                xl: "row",
                lg: "row",
                md: "column",
                sm: "column",
                xs: "column",
              },
              marginRight: {
                xl: "10px",
                lg: "10px",
                md: "0",
                sm: "0",
                xs: "0",
              },
            }}
          >
            <Typography
              variant="h6"
              color="red"
              fontWeight="500"
              sx={{
                marginRight: {
                  xl: "10px",
                  lg: "10px",
                  md: "10px",
                  sm: "10px",
                  xs: "0",
                },
              }}
              className="cart-prod-price"
            >
              {formatPrice(total)}
            </Typography>
            <Stack
              direction="row"
              sx={{
                marginRight: {
                  xl: "20px",
                  lg: "20px",
                  md: "0",
                  sm: "0",
                  xs: "0",
                },
              }}
            >
              <Typography
                onClick={(e) => handleSetQuantity("down")}
                width="35px"
                height="35px"
                bgcolor="#e3e3e3"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize="20px"
                sx={{ cursor: "pointer" }}
              >
                -
              </Typography>
              <input
                type="number"
                className="input-quantity"
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
                onClick={() => handleSetQuantity("up")}
                width="35px"
                height="35px"
                bgcolor="#e3e3e3"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize="20px"
                sx={{ cursor: "pointer" }}
              >
                +
              </Typography>
            </Stack>
            <IconButton onClick={() => handleRemoveFromCart(cartProduct.id)}>
              <DeleteOutlineIcon fontSize="medium" sx={{ color: "red" }} />
            </IconButton>
          </Box>
        </Box>
      </Stack>
      <CartComponentAcordion cartProduct={cartProduct} />
    </Box>
  );
}

export default CartComponent;
