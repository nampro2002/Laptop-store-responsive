import React from "react";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Carousel from "react-material-ui-carousel";
import Slider from "react-slick";
function HeaderCarousel() {
  return (
    <Box position="relative">
      <Box
        bgcolor="#000"
        height="800px"
        width="100%"
        sx={{
          transform: "rotate(-8deg)",
          position: "absolute",
          top: "-300px",
          right: "-10%",
          zIndex: "-1",
          borderBottomLeftRadius: "240px",
        }}
      >
        bgcarosel
      </Box>
      <Carousel
        sx={{ bgcolor: "#00000000"}}
        // NextIcon={<SkipNextIcon />}
        // PrevIcon={<SkipNextIcon />}
        indicatorIconButtonProps={{
          style: {
             marginTop:'50px',
             padding:'5px'
          }
      }}
      >
        <Box
          sx={{ color: "white" }}
          display="flex"
          justifyContent="center"
          alignItems="center"        
        //   width='80%'
        //   margin='0 auto'
       
        >
          <Box mr="2%" width="450px">
            <Typography variant="h4" fontWeight="600" align="left" mb="60px">
              New generation ceramic tile
              <Typography
                variant="body2"
                width="380px"
                align="left"
                alignSelf="center"
                mt="20px"
                fontSize="12px"
              >
                Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend
                aptent dapibus metus maecenas consequat. Elementum interdum a
                semper. Netus nullam eros nisi volutpat nibh ex ultricies.
                Pharetra sagittis sit aliquet at. Magna nam platea justo.
              </Typography>
            </Typography>
            <Button
              variant="outlined"
              sx={{
                color: "#fff",
                border: "2px solid #fff",
                paddingY: "9px",
                paddingX: "25px",
                borderRadius: "7px",
                "&:hover": {
                  border: "2px solid #fff",
                },
              }}
            >
              LEARN MORE
            </Button>
          </Box>
          <Box ml="4%">
            <img src="/imgs/others/header-video.png" alt="" width="500px" />
          </Box>          
        </Box>
        <Box
          sx={{ color: "white" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box mr="2%" width="450px">
            <Typography variant="h4" fontWeight="600" align="left" mb="60px">
              New generation ceramic #2
              <Typography
                variant="body2"
                width="380px"
                align="left"
                alignSelf="center"
                mt="20px"
                fontSize="12px"
              >
                Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend
                aptent dapibus metus maecenas consequat. Elementum interdum a
                semper. Netus nullam eros nisi volutpat nibh ex ultricies.
                Pharetra sagittis sit aliquet at. Magna nam platea justo.
              </Typography>
            </Typography>
            <Button
              variant="outlined"
              sx={{
                color: "#fff",
                border: "2px solid #fff",
                paddingY: "9px",
                paddingX: "25px",
                borderRadius: "7px",
                "&:hover": {
                  border: "2px solid #fff",
                },
              }}
            >
              LEARN MORE
            </Button>
          </Box>
          <Box ml="4%">
            <img src="/imgs/others/header-video.png" alt="" width="500px" />
          </Box>         
        </Box>
      </Carousel>
    </Box>
  );
}

export default HeaderCarousel;
