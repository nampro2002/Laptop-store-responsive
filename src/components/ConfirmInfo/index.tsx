import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import React from "react";
import { ToastContainer } from "react-toastify";
import * as Yup from "yup";
import { Toast } from "../../Util/toastify";

function ConfirmInfo() {
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
      payments: Yup.string().required("bạn chọn phương thức thanh toán"),
    }),
    onSubmit: (values, { resetForm }) => {
      if (true) {
        // dispatch();
        Toast.notify("đặt hàng thành công");
        resetForm();
      }
    },
  });
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
      <Typography variant="h6" fontWeight="600" fontSize="20px" mb="20px">
        THÔNG TIN GIAO HÀNG
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Stack direction="column" spacing="20px">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6" fontWeight="400" fontSize="19px">
              Họ Tên :
            </Typography>
            <TextField
              placeholder="Nhập họ tên"
              sx={{
                flexBasis: "600px",
                "& fieldset": { borderRadius: "0" },
                "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: "1px solid #000",
                  borderRadius: "0",
                },
                paddingX: "10px",
              }}
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6" fontWeight="400" fontSize="19px">
              Số điện Thoại :
            </Typography>
            <TextField
              placeholder="Nhập số điện thoại"
              sx={{
                flexBasis: "600px",
                "& fieldset": { borderRadius: "0" },
                "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: "1px solid #000",
                  borderRadius: "0",
                },
                paddingX: "10px",
              }}
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
            />
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6" fontWeight="400" fontSize="19px">
              Địa chỉ :
            </Typography>
            <TextField
              placeholder="Nhập địa chỉ"
              sx={{
                flexBasis: "600px",
                "& fieldset": { borderRadius: "0" },
                "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: "1px solid #000",
                  borderRadius: "0",
                },
                paddingX: "10px",
              }}
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
            />
          </Stack>
          <FormControl>
            <Typography variant="h6" fontWeight="500" fontSize="20px" my="20px">
              Phương thức thanh toán
            </Typography>
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
                  <Typography variant="h6" fontWeight="400" fontSize="19px">
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
                  <Typography variant="h6" fontWeight="400" fontSize="19px">
                    Thanh toán online
                  </Typography>
                }
              />
            </RadioGroup>
          </FormControl>
        </Stack>
      </form>
    </Box>
  );
}

export default ConfirmInfo;
