import { Box, Button, Rating } from "@mui/material";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { IProduct } from "../../types/types";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CheckCart } from "../../redux/cartSlice";
import { useAppDispatch } from "../../redux/hooks";
import { createSearchParams, useNavigate } from "react-router-dom";
import { Stack } from "@mui/joy";
import { formatPrice } from "../../Util/formatPrice";
import "./style.css";
import { Toast } from "../../Util/toastify";
import { ToastContainer } from "react-toastify";
const StyledBox = styled("div")({
  // border:'1px solid #000'
  backgroundColor: "#E3E3E3",
  padding: "15px",
  // borderRadius: "35px",
  border: "2px solid #474646",
});

interface ComponentProdCarouselProps {
  product: IProduct;
}

function ComponentProdCarousel({ product }: ComponentProdCarouselProps) {
  const userInfo = JSON.parse(localStorage.getItem("user") || "{}");
  const navigate = useNavigate();
  const userId = userInfo.id;
  const dispatch = useAppDispatch();
  const handleAddToCart = (productId: string, quantity: number) => {
    if (!userInfo.id) {
      return navigate("/login");
    } else {
      dispatch(CheckCart({ productId, quantity, userId }))
        .unwrap()
        .then(() => {
          Toast.notify(`đã thêm vào giỏ hàng 1 ${product.name}`);
        })
        .catch((error) => {
          Toast.error("Lỗi");
        });
    }
  };
  const handleToProductDetail = (productId: string) => {
    return navigate({
      pathname: "/detail",
      search: createSearchParams({
        productId: productId as string,
      }).toString(),
    });
  };
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="space-around"
      height="500px"
      sx={{
        height: {
          xl: "500px",
          lg: "500px",
          md: "500px",
          sm: "500px",
          xs: "400px",
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
      <StyledBox className="product">
        <Box
          sx={{
            cursor: "pointer",
            width: {
              xl: "100%",
              lg: "100%",
              md: "80%",
              sm: "70%",
              xs: "80%",
            },
          }}
          onClick={() => handleToProductDetail(product.id)}
        >
          <img
            className="prod-car-img"
            src={product.imageUrl1}
            alt=""
            width="350px"
            style={
              {
                // borderRadius: "25px",
              }
            }
          />
        </Box>
        {/* <Box position="absolute" top="5%" paddingLeft="10px">
          <Rating
            size="medium"
            value={4.5}
            precision={0.5}
            readOnly
            // highlightSelectedOnly
          />
        </Box> */}
        <Box className="box-product-detail" bgcolor="#fff" mt="10px">
          <Stack direction="column" alignItems="center">
            <Typography variant="h6" fontWeight="600" align="center" mb="5px">
              {product.name}
            </Typography>
            <Typography
              variant="h6"
              width="310px"
              align="center"
              alignSelf="center"
              mb="5px"
              fontWeight="900"
              color="red"
              className="price"
            >
              {formatPrice(product.price)}
            </Typography>
            <Rating
              size="medium"
              value={product.rate}
              precision={0.5}
              readOnly
              // highlightSelectedOnly
            />
          </Stack>
        </Box>
        <Box
          className="box-product-button"
          height="90px"
          display="none"
          sx={{
            marginTop: "20px",
          }}
        >
          <Button
            onClick={() => handleAddToCart(product.id, 1)}
            variant="contained"
            size="large"
            sx={{
              width: "100%",
              height: "100%",
              padding: "12px",
              // borderRadius: "25px",
              bgcolor: "#000",
              "&:hover": {
                bgcolor: "#E3E3E3",
                color: "#000",
              },
            }}
            startIcon={<ShoppingCartIcon />}
          >
            ADD TO CART
          </Button>
        </Box>
      </StyledBox>
    </Box>
  );
}

export default ComponentProdCarousel;
