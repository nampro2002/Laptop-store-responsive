import { Box, Rating } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./style.css";
import { IProduct } from "../../types/types";
import { createSearchParams, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { CheckCart } from "../../redux/cartSlice";
import { formatPrice } from "../../Util/formatPrice";

interface ProductComponentProps {
  product: IProduct;
}

function ProductComponent({ product }: ProductComponentProps) {
  const dispatch = useAppDispatch();
  const userInfo = JSON.parse(localStorage.getItem("user") || '{}')
  const userId = userInfo.id
  const navigate = useNavigate();
  const handleToProductDetail = (productId: string) => {
    return navigate({
      pathname: "/detail",
      search: createSearchParams({
        productId: productId as string,
      }).toString(),
    });
  };
  const handleAddToCart = (productId: string, quantity: number) => {
    if (!userInfo.id) {
      return navigate('/login')
  }
  else {
    dispatch(CheckCart({ productId, quantity, userId }));
  }
    
  };
  return (
    <Box width="90%" marginBottom="10%" boxShadow="">
      <Box
        sx={{
          padding: "2px",
          bgcolor: "#E3E3E3",
        }}
        className="product"
      >
        <Box
          onClick={() => handleToProductDetail(product.id)}
          sx={{ cursor: "pointer" }}
        >
          <img src={product.imageUrl1} alt="" width="100%" />
        </Box>
        <Box
          px="15px"
          bgcolor="#fff"
          className="box-product-detail"
          minHeight="50px"
        >
          <Typography variant="body1" fontWeight="600">
            {product.name}
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="body1" fontWeight="900" color="red">
              {formatPrice(product.price)}
            </Typography>
            <Rating
              size="small"
              value={product.rate}
              precision={0.5}
              // readOnly
              // highlightSelectedOnly
            />
          </Box>
        </Box>
        <Box
          //   width="90%"
          //   margin="auto"
          bgcolor="#fff"
          className="box-product-button"
          minHeight="50px"
          display="none"
        >
          <Button
            onClick={() => handleAddToCart(product.id, 1)}
            variant="contained"
            size="large"
            sx={{
              width: "100%",
              height: "100%",
              padding: "12px",
              borderRadius: "0",
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
      </Box>
    </Box>
  );
}

export default ProductComponent;
