import { Box, Button } from "@mui/material";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { CheckCart } from "../../redux/cartSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import SwiperDetail from "./SwiperDetail";
import "./style.css";
import ProductRating from "../../components/ProductRating";
import { formatPrice } from "../../Util/formatPrice";
import { Toast } from "../../Util/toastify";
import { ToastContainer } from "react-toastify";
function ProductDetail() {
  const userInfo = JSON.parse(localStorage.getItem("user") || "{}");
  const [searchParam] = useSearchParams();
  const navigate = useNavigate();
  const productId = searchParam.get("productId");

  const productsList = useAppSelector(
    (state: RootState) => state.products.productList
  );

  const productInformation = productsList.find((prod) => prod.id === productId);
  const [quantity, setQuantity] = useState(1);
  const userId = userInfo.id;
  const dispatch = useAppDispatch();
  const handleSetQuantity = (value: string) => {
    if (value === "up") {
      setQuantity((quantity) => quantity + 1);
    } else if (value === "down") {
      if (quantity === 1) {
        return;
      }
      setQuantity((quantity) => quantity - 1);
    } else {
      return;
    }
  };
  const handleAddToCart = (productId: string, quantity: number) => {
    dispatch(CheckCart({ productId, quantity, userId }))
      .unwrap()
      .then(() => {
        Toast.notify(
          `đã thêm vào giỏ hàng ${quantity} ${productInformation?.name}`
        );
      })
      .catch((error) => {
        Toast.error("Lỗi");
      });
  };

  const listImg = [
    productInformation?.imageUrl1,
    productInformation?.imageUrl2,
    productInformation?.imageUrl3,
    productInformation?.imageUrl4,
  ];
  return (
    <Box>
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
      {productInformation && (
        <>
          <Box
            bgcolor="#fff"
            display="flex"
            justifyContent="space-around"
            width="80%"
            margin="0 auto"
            py="5%"
            sx={{
              flexDirection: {
                xl: "row",
                lg: "row",
                md: "row",
                sm: "column",
                xs: "column",
              },
              justifyContent: {
                xl: "space-around",
                lg: "space-around",
                md: "space-around",
              },
              alignItems: {
                xl: "normal",
                lg: "normal",
                md: "normal",
                sm: "center",
                xs: "center",
              },
            }}
          >
            <Box maxHeight="630px">
              <SwiperDetail listImg={listImg} />
            </Box>
            <Stack
              direction="column"
              spacing="26px"
              maxHeight="630px"
              sx={{
                paddingX: {
                  xl: "0",
                  lg: "0",
                  md: "0",
                  sm: "12px",
                  xs: "12px",
                },
              }}
            >
              <Typography
                variant="h4"
                fontWeight="600"
                sx={{
                  fontSize: {
                    xl: "30px",
                    lg: "30px",
                    md: "30px",
                    sm: "21px",
                    xs: "21px",
                  },
                }}
              >
                {productInformation.name}
              </Typography>
              <Rating
                size="large"
                value={productInformation.rate}
                precision={0.5}
                readOnly
                sx={{
                  margin: {
                    sm: "0!important",
                    xs: "0!important",
                  },
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  margin: {
                    sm: "10px!important",
                    xs: "0!important",
                  },
                  fontSize: {
                    xl: "15px",
                    lg: "15px",
                    md: "15px",
                    sm: "12px",
                    xs: "12px",
                  },
                }}
              >
                - CPU: AMD Ryzen 5-5500U (2.1GHz upto 4.0GHz, 8MB)
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  margin: {
                    sm: "10px!important",
                    xs: "0!important",
                  },
                  fontSize: {
                    xl: "15px",
                    lg: "15px",
                    md: "15px",
                    sm: "12px",
                    xs: "12px",
                  },
                }}
              >
                - RAM: 8GB khe rời DDR4 3200Mhz (2 khe, Nâng cấp tối đa 32GB)
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  margin: {
                    sm: "10px!important",
                    xs: "0!important",
                  },
                  fontSize: {
                    xl: "15px",
                    lg: "15px",
                    md: "15px",
                    sm: "12px",
                    xs: "12px",
                  },
                }}
              >
                - Ổ cứng: 256GB PCIe NVMe SSD cắm sẵn (nâng cấp tối đa 1TB SSD)
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  margin: {
                    sm: "10px!important",
                    xs: "0!important",
                  },
                  fontSize: {
                    xl: "15px",
                    lg: "15px",
                    md: "15px",
                    sm: "12px",
                    xs: "12px",
                  },
                }}
              >
                - VGA: NVIDIA® GeForce® GTX 1650 4GB GDDR6
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  margin: {
                    sm: "10px!important",
                    xs: "0!important",
                  },
                  fontSize: {
                    xl: "15px",
                    lg: "15px",
                    md: "15px",
                    sm: "12px",
                    xs: "12px",
                  },
                }}
              >
                - Màn hình: 15.6 inch FHD(1920 x 1080) Acer ComfyView IPS LED
                LCD, 60Hz
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  margin: {
                    sm: "10px!important",
                    xs: "0!important",
                  },
                  fontSize: {
                    xl: "15px",
                    lg: "15px",
                    md: "15px",
                    sm: "12px",
                    xs: "12px",
                  },
                }}
              >
                - Pin: 3 Cell, 48Wh
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  margin: {
                    sm: "10px!important",
                    xs: "0!important",
                  },
                  fontSize: {
                    xl: "15px",
                    lg: "15px",
                    md: "15px",
                    sm: "12px",
                    xs: "12px",
                  },
                }}
              >
                - Cân nặng: 2.1kg
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  margin: {
                    sm: "0!important",
                    xs: "0!important",
                  },
                }}
              >
                - HĐH: Windows 11 Home
              </Typography>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box display="flex" alignItems="center">
                  <Typography
                    fontWeight=" 600"
                    fontSize="16px"
                    sx={{
                      fontSize: {
                        xl: "15px",
                        lg: "15px",
                        md: "15px",
                        sm: "12px",
                        xs: "12px",
                      },
                    }}
                  >
                    Số lượng
                  </Typography>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    height="40px"
                    border=" 1.5px solid #e3e3e3"
                    ml="15px"
                    sx={{
                      fontSize: {
                        xl: "15px",
                        lg: "15px",
                        md: "15px",
                        sm: "12px",
                        xs: "12px",
                      },
                    }}
                  >
                    <input
                      type="number"
                      className="input-quantity"
                      style={{
                        border: "none",
                        width: "41px",
                        textAlign: "center",
                        color: "#000",
                        fontWeight: "700",
                        fontSize: "15px",
                      }}
                      value={quantity}
                      onChange={(e) =>
                        setQuantity(Number.parseInt(e.target.value))
                      }
                    />
                    <Stack
                      direction="column"
                      height="100%"
                      borderLeft="1.5px solid #e3e3e3"
                    >
                      <Typography
                        variant="body1"
                        onClick={() => handleSetQuantity("up")}
                        sx={{
                          display: "flex",
                          width: "24px",
                          height: "50%",
                          justifyContent: "center",
                          alignItems: "center",
                          fontSize: "22px",
                          cursor: "pointer",
                          WebkitUserSelect: "none",
                          userSelect: "none",
                          borderBottom: "1.5px solid #e3e3e3",
                        }}
                      >
                        +
                      </Typography>
                      <Typography
                        variant="body1"
                        onClick={(e) => handleSetQuantity("down")}
                        sx={{
                          display: "flex",
                          width: "24px",
                          height: "50%",
                          justifyContent: "center",
                          alignItems: "center",
                          fontSize: "22px",
                          cursor: "pointer",
                          WebkitUserSelect: "none",
                          userSelect: "none",
                        }}
                      >
                        -
                      </Typography>
                    </Stack>
                  </Stack>
                </Box>
                <Typography
                  variant="h4"
                  fontWeight="700"
                  color="red"
                  mr="2%"
                  sx={{
                    fontSize: {
                      xl: "35px",
                      lg: "35px",
                      md: "35px",
                      sm: "20px",
                      xs: "20px",
                    },
                  }}
                >
                  {formatPrice(productInformation.price)}
                </Typography>
              </Stack>
              <Box
                justifyContent="space-between"
                display="flex"
                sx={{
                  flexDirection: {
                    xl: "row",
                    lg: "row",
                    md: "row",
                    sm: "column",
                    xs: "column",
                  },
                }}
              >
                <Button
                  onClick={() =>
                    handleAddToCart(productInformation.id, quantity)
                  }
                  sx={{
                    width: {
                      xl: "45%",
                      lg: "45%",
                      md: "45%",
                      sm: "100%",
                      xs: "100%",
                    },
                    marginBottom: {
                      xl: "0",
                      lg: "0",
                      md: "0",
                      sm: "15px",
                      xs: "15px",
                    },
                    height: "50px",
                    color: "#000",
                    border: "2px solid #000",
                    borderRadius: "0px",
                    "&:hover": {
                      border: "2px solid #000",
                    },
                  }}
                >
                  Them vao gio hang
                </Button>
                <Button
                  onClick={() => {
                    handleAddToCart(productInformation.id, quantity);
                    return navigate("/confirmcart");
                  }}
                  sx={{
                    width: {
                      xl: "45%",
                      lg: "45%",
                      md: "45%",
                      sm: "100%",
                      xs: "100%",
                    },
                    height: "50px",
                    color: "#000",
                    bgcolor: "#e3e3e3",
                    border: "2px solid #000",
                    borderRadius: "0px",
                    "&:hover": {
                      border: "2px solid #000",
                    },
                  }}
                >
                  Mua ngay
                </Button>
              </Box>
            </Stack>
          </Box>
          <ProductRating product={productInformation} />
        </>
      )}
    </Box>
  );
}

export default ProductDetail;
