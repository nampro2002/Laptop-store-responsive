import { Box, IconButton, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
const listCategory = ["acer", "asus", "lenovo", "dell", "hp"];
function Footer() {
  return (
    <Box bgcolor="#000" position="relative">
      <Box
        width="85%"
        margin="0 auto"
        display="flex"
        justifyContent="space-between"
        paddingTop="50px"
        paddingBottom="10px" 
        flexWrap="wrap"
      >
        <Box marginRight="6%">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            sx={{
              flexGrow: 1,
              justifyContent: "flex-start",
              pointerEvents: "none",
              marginBottom: "35px",
            }}
          >
            <img src="/imgs/others/logo-white.png" alt="" width="130px" />
          </IconButton>
          <Typography
            variant="h5"
            color="white"
            fontSize="17px"
            mb="15px"
            fontWeight="600"
          >
            Social Media
          </Typography>
          <IconButton size="small" sx={{ padding: "0" }}>
            <FacebookIcon sx={{ color: "white", marginRight: "10px" }} />
            <TwitterIcon sx={{ color: "white", marginRight: "10px" }} />
            <InstagramIcon sx={{ color: "white" }} />
          </IconButton>
          <Typography variant="body1" color="#A4A4A4" mt="30px" fontSize="8px">
            Copyright © 2021 | All Rights Reserved.
          </Typography>
          <Typography variant="body1" color="#A4A4A4" fontSize="8px">
            thecreation.design + Nam Can
          </Typography>
        </Box>
        <Box marginRight="6%">
          <Typography
            variant="h5"
            color="white"
            fontSize="17px"
            mb="10px"
            fontWeight="600"
          >
            Products
          </Typography>
          <Typography
            variant="h5"
            color="#A4A4A4"
            fontSize="19px"
            mb="4px"
            fontWeight="300"
          >
            Acer
          </Typography>
          <Typography
            variant="h5"
            color="#A4A4A4"
            fontSize="19px"
            mb="4px"
            fontWeight="300"
          >
            Asus
          </Typography>
          <Typography
            variant="h5"
            color="#A4A4A4"
            fontSize="19px"
            mb="4px"
            fontWeight="300"
          >
            Dell
          </Typography>
          <Typography
            variant="h5"
            color="#A4A4A4"
            fontSize="19px"
            mb="4px"
            fontWeight="300"
          >
            Lenovo
          </Typography>
          <Typography
            variant="h5"
            color="#A4A4A4"
            fontSize="19px"
            mb="4px"
            fontWeight="300"
          >
            HP
          </Typography>
        </Box>
        <Box marginRight="6%">
          <Typography
            variant="h5"
            color="white"
            fontSize="17px"
            mb="10px"
            fontWeight="600"
          >
            Services
          </Typography>
          <Typography
            variant="h5"
            color="#A4A4A4"
            fontSize="19px"
            mb="4px"
            fontWeight="300"
          >
            Measurement Service
          </Typography>
          <Typography
            variant="h5"
            color="#A4A4A4"
            fontSize="19px"
            mb="4px"
            fontWeight="300"
          >
            Product Advice
          </Typography>
          <Typography
            variant="h5"
            color="#A4A4A4"
            fontSize="19px"
            mb="4px"
            fontWeight="300"
          >
            Interior Design
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h5"
            color="white"
            fontSize="17px"
            mb="10px"
            fontWeight="600"
          >
            Contact information
          </Typography>
          <Typography
            variant="h5"
            color="#A4A4A4"
            fontSize="19px"
            mb="4px"
            fontWeight="300"
          >
            3181 Al Imam Saud Ibn Abdul Aziz Branch Rd,
          </Typography>
          <Typography
            variant="h5"
            color="#A4A4A4"
            fontSize="19px"
            mb="4px"
            fontWeight="300"
          >
            An Nuzhah, Riyadh 12474,
          </Typography>
          <Typography
            variant="h5"
            color="#A4A4A4"
            fontSize="19px"
            mb="4px"
            fontWeight="300"
          >
            Saudi Arabia
          </Typography>
        </Box>
        <Box
          display="flex"
          flexWrap="wrap"
          alignContent="flex-start"
          justifyContent="flex-end"
        >
          {listCategory.map((cate, index) => {
            let imgUrl = `imgs/logo/${cate}.jpg`;
            return (
              <img
                key={index}
                src={imgUrl}
                width="80px"
                height="50px"
                style={{ padding: "10px", borderRadius: "20px" }}
              />
            );
          })}
        </Box>
      </Box>
      <Box        
        height="350px"
        width="100%"
        sx={{
          position: "absolute",
          bottom: "0",
          right: "0",
          zIndex: "-1",
          // borderBottomLeftRadius: "240px",
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg"
          alt=""
          width="100%"
          height="100%"
          style={{ clipPath: "polygon(0% 15%, 9% 7%, 25% 20%, 76% 2%, 100% 10%, 100% 12%, 100% 85%, 100% 100%, 85% 100%, 15% 100%, 0 100%, 0% 85%)" }}
        />
      </Box>
    </Box>
  );
}

export default Footer;
