import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import React from "react";
import Stack from "@mui/material/Stack";

function BodyService() {
  return (
    <Stack direction="column" spacing="30px" alignItems="center">
      <Box
        display="flex"
        bgcolor="#E3E3E3"
        margin="0 auto"
        p="10px"
        sx={{
          width: {
            xl: "85%",
            lg: "85%",
            md: "70%",
            sm: "60%",
            xs: "60%",
          },
          justifyContent: {
            xl: "space-between",
            lg: "space-between",
            md: "center",
            sm: "center",
            xs: "center",
          },
          borderTopRightRadius: {
            xl: "25px",
            lg: "25px",
            md: "0",
            sm: "0",
            xs: "0",
          },
          borderBottomRightRadius: {
            xl: "25px",
            lg: "25px",
            md: "0",
            sm: "0",
            xs: "0",
          },
        }}
      >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          ml="7%"
          spacing="20px"
        >
          <Typography variant="h5" fontWeight="500" align="left">
            Sửa chữa bảo dưỡng
          </Typography>
          <Typography
            variant="body2"           
            align="left"
            alignSelf="center"
            mt="10px"
            fontSize="16px"
            sx={{
              width: {
                xl: "500px",
                lg: "500px",
                md: "500px",
                sm: "350px",
                xs: "190px",
              },
            }}
          >
            Our sales support team will come & measure your property in order to
            ensure accuracy in design and help you calculate how many tiles you
            need. Please call our toll free number 800 122 22 20 to arrange a
            visit, or visit one of our Showrooms.
          </Typography>
          {/* <Button
            variant="outlined"
            sx={{
              color: "#000",
              border: "2px solid #000",
              paddingY: "7px",
              paddingX: "20px",
              // borderRadius: "7px",
              "&:hover": {
                border: "2px solid #000",
              },
            }}
          >
            LEARN MORE
          </Button> */}
        </Stack>
        <Box
          sx={{
            display: {
              xl: "block",
              lg: "block",
              md: "none",
              sm: "none",
              xs: "none",
            },
          }}
        >
          <img src="/imgs/service/repair.png" alt="" width="500px" />
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="row-reverse"
        bgcolor="#E3E3E3"
        margin="0 auto"
        justifyContent="space-between"
        p="10px"
        sx={{
          width: {
            xl: "85%",
            lg: "85%",
            md: "70%",
            sm: "60%",
            xs: "60%",
          },
          borderTopLeftRadius: {
            xl: "25px",
            lg: "25px",
            md: "0",
            sm: "0",
            xs: "0",
          },
          borderBottomLeftRadius: {
            xl: "25px",
            lg: "25px",
            md: "0",
            sm: "0",
            xs: "0",
          },
          flexDirection: {
            xl: "row-reverse",
            lg: "row-reverse",
            md: "row",
            sm: "row",
            xs: "row",
          },
          justifyContent: {
            xl: "space-between",
            lg: "space-between",
            md: "center",
            sm: "center",
            xs: "center",
          },
        }}
      >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          sx={{
            marginRight: {
              xl: "7%",
              lg: "7%",
              md: "0",
              sm: "0",
              xs: "0",
            },
            marginLeft: {
              xl: "0",
              lg: "0",
              md: "7%",
              sm: "7%",
              xs: "7%",
            },
          }}
          spacing="20px"
        >
          <Typography variant="h5" fontWeight="500" align="left">
            Tư vấn sản phẩm
          </Typography>
          <Typography
            variant="body2"            
            align="left"
            alignSelf="center"
            mt="10px"
            fontSize="16px"
            sx={{
              width: {
                xl: "500px",
                lg: "500px",
                md: "500px",
                sm: "350px",
                xs: "190px",
              },
            }}
          >
            Our sales support team will come & measure your property in order to
            ensure accuracy in design and help you calculate how many tiles you
            need. Please call our toll free number 800 122 22 20 to arrange a
            visit, or visit one of our Showrooms.
          </Typography>
          {/* <Button
            variant="outlined"
            sx={{
              color: "#000",
              border: "2px solid #000",
              paddingY: "7px",
              paddingX: "20px",
              // borderRadius: "7px",
              "&:hover": {
                border: "2px solid #000",
              },
            }}
          >
            LEARN MORE
          </Button> */}
        </Stack>
        <Box
          sx={{
            display: {
              xl: "block",
              lg: "block",
              md: "none",
              sm: "none",
              xs: "none",
            },
          }}
        >
          <img src="/imgs/service/advice.png" alt="" width="500px" />
        </Box>
      </Box>
      <Stack
        direction="row"
        bgcolor="#E3E3E3"
        margin="0 auto"
        justifyContent="space-between"
        p="10px"
        sx={{
          width: {
            xl: "85%",
            lg: "85%",
            md: "70%",
            sm: "60%",
            xs: "60%",
          },
          justifyContent: {
            xl: "space-between",
            lg: "space-between",
            md: "center",
            sm: "center",
            xs: "center",
          },
          borderTopRightRadius: {
            xl: "25px",
            lg: "25px",
            md: "0",
            sm: "0",
            xs: "0",
          },
          borderBottomRightRadius: {
            xl: "25px",
            lg: "25px",
            md: "0",
            sm: "0",
            xs: "0",
          },
        }}
      >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          ml="7%"
          spacing="20px"
        >
          <Typography variant="h5" fontWeight="500" align="left">
            Giao hàng
          </Typography>
          <Typography
            variant="body2"
            align="left"
            alignSelf="center"
            mt="10px"
            fontSize="16px"
            sx={{
              width: {
                xl: "500px",
                lg: "500px",
                md: "500px",
                sm: "350px",
                xs: "190px",
              },
            }}
          >
            Our sales support team will come & measure your property in order to
            ensure accuracy in design and help you calculate how many tiles you
            need. Please call our toll free number 800 122 22 20 to arrange a
            visit, or visit one of our Showrooms.
          </Typography>
          {/* <Button
            variant="outlined"
            sx={{
              color: "#000",
              border: "2px solid #000",
              paddingY: "7px",
              paddingX: "20px",
              // borderRadius: "7px",
              "&:hover": {
                border: "2px solid #000",
              },
            }}
          >
            LEARN MORE
          </Button> */}
        </Stack>
        <Box
          sx={{
            display: {
              xl: "block",
              lg: "block",
              md: "none",
              sm: "none",
              xs: "none",
            },
          }}
        >
          <img
            src="/imgs/service/delivery.jpg"
            alt=""
            width="500px"
            style={{ borderRadius: "20px" }}
          />
        </Box>
      </Stack>
    </Stack>
  );
}

export default BodyService;
