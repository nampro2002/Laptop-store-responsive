import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { removeAllFromCart } from "../../redux/cartSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { formatPrice } from "../../Util/formatPrice";
import CartModelComponent from "../CartModelComponent";
import "./style.css";
interface CartModelProps {
  handleClose: () => void;
  handleChange: (path: string) => void;
  setSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}

function CartModel({ handleClose, handleChange, setSideBar }: CartModelProps) {
  const cartList = useAppSelector((state: RootState) => state.cart.cartList);
  const dispatch = useAppDispatch();
  const cartLength = cartList.length;
  const productList = useAppSelector(
    (state: RootState) => state.products.productList
  );

  let cartPorductList = cartList.map((cart) => {
    const product = productList.find((prod) => prod.id === cart.prodId);
    if (product) {
      return {
        id: cart.id,
        prodId: cart.prodId,
        quantity: cart.quantity,
        name: product.name,
        price: product.price,
        imgUrl: product.imageUrl1,
      };
    } else {
      return {
        id: "0",
        prodId: "0",
        quantity: 1,
        name: "abc",
        price: 0,
        imgUrl: "none",
      };
    }
  });

  const totalAll = cartPorductList.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0
  );
  const handleCloseModal = () => {
    handleClose();
  };
  const handleRemoveAll = () => {
    dispatch(removeAllFromCart(cartList));
  };
  const navigate = useNavigate();
  const handleMoveTo = (path: string) => {
    return navigate(path);
  };
  return (
    <Box
      sx={{
        padding: {
          xl: "10px",
          lg: "10px",
          md: "10px",
          sm: "0",
          xs: "0",
        },
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb="1%"
      >
        <Typography
          variant="body1"
          fontWeight="600"
          fontSize="13px"
          sx={{
            fontSize: {
              xl: "25px",
              lg: "25px",
              md: "25px",
              sm: "20px",
              xs: "13px",
            },
          }}
        >
          Bạn có {cartLength} sản phẩm trong giỏ hàng
        </Typography>
        <IconButton onClick={handleCloseModal}>
          <CloseIcon fontSize="medium" sx={{ color: "#000" }} />
        </IconButton>
      </Stack>
      <Box
        display="flex"
        // justifyContent="space-between"
        sx={{
          flexDirection: {
            xl: "row",
            lg: "row",
            md: "column",
            sm: "column",
            xs: "column",
          },
        }}
      >
        <Stack
          className="container-prod-modal"
          // paddingRight="5px"
          direction="column"
          spacing="10px"
          sx={{
            width: {
              xl: "calc(100% - 300px)",
              lg: "calc(100% - 300px)",
              md: "100%",
              sm: "100%",
              xs: "100%",
            },
            height: {
              xl: "600px",
              lg: "600px",
              md: "600px",
              sm: "380px",
              xs: "270px",
            },
            overflowY: "scroll",
            overflowX: "hidden",
          }}
        >
          {cartPorductList.map((component, index) => (
            <CartModelComponent cartProduct={component} key={index} />
          ))}
        </Stack>
        <Box
          flexBasis="300px"
          sx={{
            ml: {
              xl: "50px",
              lg: "50px",
              md: "0",
              sm: "0",
              xs: "0",
            },
          }}
        >
          <Stack direction="column" spacing="10px">
            <Stack>
              <Typography
                variant="h5"
                fontWeight="600"
                sx={{
                  fontSize: {
                    xl: "20px",
                    lg: "20px",
                    md: "20px",
                    sm: "15px",
                    xs: "15px",
                  },
                }}
              >
                Thông tin giỏ hàng
              </Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography
                variant="h6"
                fontWeight="600"
                sx={{
                  fontSize: {
                    xl: "15px",
                    lg: "15px",
                    md: "15px",
                    sm: "13px",
                    xs: "13px",
                  },
                }}
              >
                Số lượng sản phẩm
              </Typography>
              <Typography
                variant="h6"
                fontWeight="600"
                sx={{
                  fontSize: {
                    xl: "15px",
                    lg: "15px",
                    md: "15px",
                    sm: "13px",
                    xs: "13px",
                  },
                }}
              >
                {cartLength}
              </Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography
                variant="h6"
                fontWeight="600"
                sx={{
                  fontSize: {
                    xl: "15px",
                    lg: "15px",
                    md: "15px",
                    sm: "13px",
                    xs: "13px",
                  },
                }}
              >
                Tổng
              </Typography>
              <Typography
                variant="h6"
                fontWeight="600"
                sx={{
                  fontSize: {
                    xl: "20px",
                    lg: "20px",
                    md: "20px",
                    sm: "15px",
                    xs: "15px",
                  },
                }}
                color="red"
              >
                {formatPrice(totalAll)}
              </Typography>
            </Stack>

            <Button
              onClick={() => {
                handleCloseModal();
                handleChange("/cart");
                setSideBar(false);
                handleMoveTo("/cart");
              }}
              sx={{
                paddingY: "10px",
                borderRadius: "0",
                color: "#fff",
                bgcolor: "#000",
                "&:hover": {
                  bgcolor: "#000",
                },
              }}
              className="btn-cart-modal"
            >
              ĐẾN GIỎ HÀNG
            </Button>
            <Button
              onClick={handleRemoveAll}
              sx={{
                paddingY: "10px",
                borderRadius: "0",
                color: "#fff",
                bgcolor: "red",
                "&:hover": {
                  bgcolor: "red",
                },
              }}
              className="btn-cart-modal"
            >
              XÓA GIỎ HÀNG
            </Button>
            <Button
              className="btn-cart-modal"
              onClick={() => {
                handleCloseModal();
                handleMoveTo("/");
              }}
              variant="outlined"
              sx={{
                border: "1px solid #000",
                paddingY: "10px",
                borderRadius: "0",
                color: "#000",
                bgcolor: "#fff",
                "&:hover": {
                  bgcolor: "#fff",
                },
              }}
              
            >
              VỀ TRANG CHỦ
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default CartModel;
