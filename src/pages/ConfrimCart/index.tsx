import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ConfirmCartAcordion from "../../components/ConfirmCartAcordion";
import ConfirmInfo from "../../components/ConfirmInfo";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { formatPrice } from "../../Util/formatPrice";
import * as Yup from "yup";
import { Toast } from "../../Util/toastify";
import { useState } from "react";
import { removeAllFromCart } from "../../redux/cartSlice";
import { saveAddress, updateInfo } from "../../redux/userSlice";
import { addCheckedOut } from "../../redux/checkedoutSlice";
function ConfirmCart() {
  const cartList = useAppSelector((state: RootState) => state.cart.cartList);
  const [checked, setChecked] = useState(false);
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
  const description = cartList.map((cart, index) => {
    return {
      prodId: cart.prodId,
      quantity: cart.quantity,
      descId: `${index + 1}`,
    };
  });
  console.log("description", description);

  const handleChecked = () => {
    setChecked(!checked);
  };
  const userInfo = JSON.parse(localStorage.getItem("user") || "{}");
  const formik = useFormik({
    initialValues: {
      name: userInfo.name as string,
      phone: userInfo.phone as string,
      address: userInfo.address as string,
      payments: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("bạn chưa nhập tên"),
      phone: Yup.string().required("bạn chưa nhập số điện thoại"),
      address: Yup.string().required("bạn chưa nhập địa chỉ"),
      payments: Yup.string().required("bạn chưa chọn phương thức thanh toán"),
    }),
    onSubmit: (values, { resetForm }) => {
      if (cartList.length > 0) {
        if (checked) {
          dispatch(
            saveAddress({
              userId: userInfo.id,
              address: values.address,
            })
          );
        }
        dispatch(
          addCheckedOut({
            userId: userInfo.id,
            description: description,
            name: values.name,
            phone: values.phone,
            address: values.address,
          })
        );
        dispatch(removeAllFromCart(cartList));
        Toast.notify("đặt hàng thành công");
        if (values.payments === "online") {
          setTimeout(() => {
            return navigate("/finalcheckout");
          }, 2000);
        } else {
          setTimeout(() => {
            return navigate("/");
          }, 2000);
        }
      }
    },
  });

  const totalAll = cartPorductList.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0
  );

  const navigate = useNavigate();
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
      <Typography
        variant="h2"
        fontWeight="900"
        color="white"
        align="center"
        mt="2%"
        mb="6%"
      >
        Check Out
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Box bgcolor="#fff" p="30px" width="80%" margin="0 auto">
          <Box
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
            // justifyContent="space-between"
          >
            <Stack
              paddingRight="5px"
              direction="column"
              spacing="10px"
              sx={{
                width: {
                  xl: "calc(100% - 300px)",
                  lg: "calc(100% - 300px)",
                  md: "calc(100% - 300px)",
                  sm: "100%",
                  xs: "100%",
                },
              }}
            >
              <Box>
                <Typography
                  variant="h6"
                  fontWeight="600"
                  fontSize="20px"
                  mb="20px"
                >
                  THÔNG TIN GIAO HÀNG
                </Typography>

                <Stack direction="column" spacing="20px">
                  <Stack>
                    <Stack direction="row" justifyContent="flex-end">
                      {formik.errors.name && formik.touched.name && (
                        <Typography color="red" fontWeight="600">
                          {formik.errors.name}
                        </Typography>
                      )}
                    </Stack>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography
                        variant="h6"
                        fontWeight="400"
                        sx={{
                          fontSize: {
                            xl: "19px",
                            lg: "19px",
                            md: "19px",
                            sm: "16px",
                            xs: "16px",
                          },
                        }}
                      >
                        Họ Tên :
                      </Typography>
                      <TextField
                        fullWidth
                        placeholder="Nhập họ tên"
                        sx={{
                          flexBasis: {
                            xl: "600px",
                            lg: "600px",
                            md: "600px",
                            sm: "400px",
                            xs: "240px",
                          },
                          "& fieldset": { borderRadius: "0" },
                          "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #000",
                            borderRadius: "0",
                          },
                        }}
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                      />
                    </Stack>
                  </Stack>
                  <Stack>
                    <Stack direction="row" justifyContent="flex-end">
                      {formik.errors.phone && formik.touched.phone && (
                        <Typography color="red" fontWeight="600">
                          {formik.errors.phone}
                        </Typography>
                      )}
                    </Stack>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography
                        variant="h6"
                        fontWeight="400"
                        sx={{
                          fontSize: {
                            xl: "19px",
                            lg: "19px",
                            md: "19px",
                            sm: "16px",
                            xs: "16px",
                          },
                        }}
                      >
                        Số điện Thoại :
                      </Typography>
                      <TextField
                        placeholder="Nhập số điện thoại"
                        sx={{
                          flexBasis: {
                            xl: "600px",
                            lg: "600px",
                            md: "600px",
                            sm: "350px",
                            xs: "250px",
                          },
                          "& fieldset": { borderRadius: "0" },
                          "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #000",
                            borderRadius: "0",
                          },
                        }}
                        name="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                      />
                    </Stack>
                  </Stack>
                  <Stack>
                    <Stack direction="row" justifyContent="flex-end">
                      {formik.errors.address && formik.touched.address && (
                        <Typography color="red" fontWeight="600">
                          {formik.errors.address}
                        </Typography>
                      )}
                    </Stack>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography
                        variant="h6"
                        fontWeight="400"
                        sx={{
                          fontSize: {
                            xl: "19px",
                            lg: "19px",
                            md: "19px",
                            sm: "16px",
                            xs: "16px",
                          },
                        }}
                      >
                        Địa chỉ :
                      </Typography>
                      <TextField
                        placeholder="Nhập địa chỉ"
                        sx={{
                          flexBasis: {
                            xl: "600px",
                            lg: "600px",
                            md: "600px",
                            sm: "400px",
                            xs: "250px",
                          },
                          "& fieldset": { borderRadius: "0" },
                          "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #000",
                            borderRadius: "0",
                          },
                        }}
                        name="address"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                      />
                    </Stack>
                  </Stack>
                  <Stack direction="row" justifyContent="flex-end">
                    <FormControlLabel
                      label="Dùng địa chỉ làm địa chỉ mặc định"
                      control={
                        <Checkbox
                          defaultChecked
                          checked={checked}
                          sx={{
                            color: "#000",
                            "&.Mui-checked": {
                              color: "#000",
                            },
                          }}
                          onChange={handleChecked}
                        />
                      }
                    />
                  </Stack>
                  <FormControl>
                    <Stack direction="row" alignItems="center" spacing="20px">
                      <Typography
                        variant="h6"
                        fontWeight="500"
                        sx={{
                          fontSize: {
                            xl: "19px",
                            lg: "19px",
                            md: "19px",
                            sm: "17px",
                            xs: "17px",
                          },
                        }}
                        my="20px"
                      >
                        Phương thức thanh toán
                      </Typography>
                      {formik.errors.payments && formik.touched.payments && (
                        <Typography color="red" fontWeight="600">
                          {formik.errors.payments}
                        </Typography>
                      )}
                    </Stack>

                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="male"
                        control={
                          <Radio
                            value="!online"
                            sx={{
                              "&.Mui-checked": {
                                color: "#000",
                              },
                            }}
                            name="payments"
                            onChange={formik.handleChange}
                          />
                        }
                        label={
                          <Typography
                            variant="h6"
                            fontWeight="400"
                            sx={{
                              fontSize: {
                                xl: "19px",
                                lg: "19px",
                                md: "19px",
                                sm: "17px",
                                xs: "17px",
                              },
                            }}
                          >
                            Thanh toán khi nhận hàng
                          </Typography>
                        }
                        sx={{ fontSize: "20px" }}
                      />
                      <FormControlLabel
                        value="other"
                        control={
                          <Radio
                            value="online"
                            sx={{
                              "&.Mui-checked": {
                                color: "#000",
                              },
                            }}
                            name="payments"
                            onChange={formik.handleChange}
                          />
                        }
                        label={
                          <Typography
                            variant="h6"
                            fontWeight="400"
                            sx={{
                              fontSize: {
                                xl: "19px",
                                lg: "19px",
                                md: "19px",
                                sm: "17px",
                                xs: "17px",
                              },
                            }}
                          >
                            Thanh toán online
                          </Typography>
                        }
                      />
                    </RadioGroup>
                  </FormControl>
                </Stack>
              </Box>
            </Stack>
            <Box
              flexBasis="300px"
              bgcolor="#fff"
              sx={{
                width: {
                  xl: "250px",
                  lg: "250px",
                  md: "250px",
                  sm: "block",
                  xs: "block",
                },
                marginTop: {
                  xl: "0",
                  lg: "0",
                  md: "0",
                  sm: "20px",
                  xs: "20px",
                },
                marginLeft: {
                  xl: "30px",
                  lg: "30px",
                  md: "30px",
                  sm: "0",
                  xs: "0",
                },
              }}
            >
              <Stack direction="column" spacing="20px">
                <Stack>
                  <Typography variant="h5" fontWeight="600" fontSize="20px">
                    THÔNG TIN GIỎ HÀNG
                  </Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="h6" fontWeight="600" fontSize="15px">
                    SỐ LƯỢNG SẢN PHẨM
                  </Typography>
                  <Typography variant="h6" fontWeight="600" fontSize="15px">
                    {cartLength}
                  </Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="h6" fontWeight="600" fontSize="15px">
                    TỔNG
                  </Typography>
                  <Typography
                    variant="h6"
                    fontWeight="600"
                    fontSize="20px"
                    color="red"
                  >
                    {formatPrice(totalAll)}
                  </Typography>
                </Stack>
                {cartPorductList.map((component, index) => (
                  <Box sx={{ borderBottom: "1px solid #e3e3e3" }} key={index}>
                    <Stack direction="row" justifyContent="space-between">
                      {component.quantity > 1 ? (
                        <Typography>
                          {component.name} x{component.quantity}
                        </Typography>
                      ) : (
                        <Typography>{component.name}</Typography>
                      )}
                      <Typography fontWeight="500">
                        {formatPrice(component.price * component.quantity)}{" "}
                      </Typography>
                    </Stack>
                    <ConfirmCartAcordion cartProduct={component} />
                  </Box>
                ))}
                <Button
                  type="submit"
                  sx={{
                    paddingY: "10px",
                    borderRadius: "0",
                    color: "#fff",
                    bgcolor: "#000",
                    "&:hover": {
                      bgcolor: "#000",
                    },
                  }}
                >
                  XÁC NHẬN MUA HÀNG
                </Button>
              </Stack>
            </Box>
          </Box>
        </Box>
      </form>
    </Box>
  );
}

export default ConfirmCart;
