import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { register } from "../../redux/userSlice";
import { Toast } from "../../Util/toastify";
function SignUp() {
  const userList = useAppSelector((state: RootState) => state.user.users);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("bạn chưa nhập tên"),
      username: Yup.string()
        .required("bạn chưa nhập username")
        .test("duplicate-username", "username này đã tồn tại rồi", (value) => {
          return !userList.some((user) => user.username === value);
        }),
      password: Yup.string().required("bạn chưa nhập password"),
      confirmPassword: Yup.string()
        .required("bạn chưa nhập lại password")
        .oneOf([Yup.ref("password"), null], "phải trùng với password"),
      phone: Yup.string()
        .required("bạn chưa nhập số điện thoại")
        .matches(
          /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,
          "số điện thoại không hợp lệ"
        )
        .test(
          "duplicate-phonenumber",
          "số điện thoại này đã tồn tại rồi",
          (value) => {
            return !userList.some((user) => user.phone === value);
          }
        ),
    }),
    onSubmit: () => {
      const newUser = {
        name: formik.values.name,
        phone: formik.values.phone,
        username: formik.values.username,
        password: formik.values.password,
      };
      dispatch(register(newUser))
        .unwrap()
        .then(() => {
          Toast.notify("đăng ký thành công");
          setTimeout(() => {
            return navigate("/login");
          }, 1500);
        })
        .catch((error) => {
          Toast.error("Lỗi");
        });
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
      <Box width="40%" margin="0 auto" bgcolor="#fff" p="30px">
        <Stack>
          <Box>
            <Typography
              variant="h6"
              fontWeight="600"
              fontSize="30px"
              mb="20px"
              align="center"
            >
              SIGN UP
            </Typography>
            <Stack direction="column" spacing="30px">
              <form onSubmit={formik.handleSubmit}>
                <Stack direction="column" spacing="30px">
                  <Stack
                    direction="column"
                    justifyContent="space-between"
                    alignItems="flex-start"
                  >
                    <Stack direction="row" alignItems="center" spacing="20px">
                      <Typography variant="h6" fontWeight="400" fontSize="19px">
                        NAME
                      </Typography>
                      {formik.errors.name && formik.touched.name && (
                        <Typography color="red" fontWeight="600">
                          {formik.errors.name}
                        </Typography>
                      )}
                    </Stack>
                    <TextField
                      placeholder="name"
                      fullWidth
                      sx={{
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
                  <Stack
                    direction="column"
                    justifyContent="space-between"
                    alignItems="flex-start"
                  >
                    <Stack direction="row" alignItems="center" spacing="20px">
                      <Typography variant="h6" fontWeight="400" fontSize="19px">
                        PHONE NUMBER
                      </Typography>
                      {formik.errors.phone && formik.touched.phone && (
                        <Typography color="red" fontWeight="600">
                          {formik.errors.phone}
                        </Typography>
                      )}
                    </Stack>
                    <TextField
                      placeholder="phonenumber"
                      fullWidth
                      sx={{
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
                  <Stack
                    direction="column"
                    justifyContent="space-between"
                    alignItems="flex-start"
                  >
                    <Stack direction="row" alignItems="center" spacing="20px">
                      <Typography variant="h6" fontWeight="400" fontSize="19px">
                        USERNAME
                      </Typography>
                      {formik.errors.username && formik.touched.username && (
                        <Typography color="red" fontWeight="600">
                          {formik.errors.username}
                        </Typography>
                      )}
                    </Stack>
                    <TextField
                      placeholder="username"
                      fullWidth
                      sx={{
                        "& fieldset": { borderRadius: "0" },
                        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                          border: "1px solid #000",
                          borderRadius: "0",
                        },
                      }}
                      name="username"
                      value={formik.values.username}
                      onChange={formik.handleChange}
                    />
                  </Stack>
                  <Stack direction="column" justifyContent="space-between">
                    <Stack direction="row" alignItems="center" spacing="20px">
                      <Typography variant="h6" fontWeight="400" fontSize="19px">
                        PASSWORD
                      </Typography>
                      {formik.errors.password && formik.touched.password && (
                        <Typography color="red" fontWeight="600">
                          {formik.errors.password}
                        </Typography>
                      )}
                    </Stack>
                    <TextField
                      fullWidth
                      placeholder="password"
                      sx={{
                        "& fieldset": { borderRadius: "0" },
                        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                          border: "1px solid #000",
                          borderRadius: "0",
                        },
                      }}
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                    />
                  </Stack>
                  <Stack direction="column" justifyContent="space-between">
                    <Stack direction="row" alignItems="center" spacing="20px">
                      <Typography variant="h6" fontWeight="400" fontSize="19px">
                        CONFIRM PASSWORD
                      </Typography>
                      {formik.errors.confirmPassword &&
                        formik.touched.confirmPassword && (
                          <Typography color="red" fontWeight="600">
                            {formik.errors.confirmPassword}
                          </Typography>
                        )}
                    </Stack>
                    <TextField
                      fullWidth
                      placeholder="confirm password"
                      sx={{
                        "& fieldset": { borderRadius: "0" },
                        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                          border: "1px solid #000",
                          borderRadius: "0",
                        },
                      }}
                      name="confirmPassword"
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                    />
                  </Stack>
                  <Box px="20%">
                    <Stack direction="column" spacing="20px">
                      <Button
                        type="submit"
                        sx={{
                          height: "50px",
                          paddingY: "10px",
                          borderRadius: "0",
                          color: "#fff",
                          bgcolor: "#000",
                          fontSize: "19px",
                          "&:hover": {
                            bgcolor: "#000",
                          },
                        }}
                      >
                        SIGN UP
                      </Button>
                    </Stack>
                  </Box>
                </Stack>
              </form>
              <Box px="20%">
                <Stack direction="column" spacing="20px">
                  <Button
                    onClick={() => {
                      return navigate("/login");
                    }}
                    sx={{
                      height: "50px",
                      paddingY: "10px",
                      borderRadius: "0",
                      color: "#fff",
                      bgcolor: "red",
                      fontSize: "19px",
                      "&:hover": {
                        bgcolor: "red",
                      },
                    }}
                  >
                    LOGIN
                  </Button>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

export default SignUp;
