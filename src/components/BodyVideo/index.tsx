import { Stack } from "@mui/joy";
import { Box, Grid, Typography, Button } from "@mui/material";

function BodyVideo() {
  return (
    <Box bgcolor="#fff">
      <Box width="80%" margin="0 auto" paddingY="80px">
        <Stack
          direction="row"
          alignItems="center"
          sx={{
            justifyContent: {
              xl: "space-between",
              lg: "space-between",
              md: "space-between",
              sm: "center",
              xs: "center",
            },
          }}
        >
          <Stack>
            <Box
              sx={{
                display: {
                  xl: "block",
                  lg: "block",
                  md: "block",
                  sm: "none",
                  xs: "none",
                },
                width: {
                  xl: "400px",
                  lg: "400px",
                  md: "300px",
                },
              }}
            >
              <video width="100%" controls>
                <source src="imgs/others/sangtran.mp4" type="video/mp4" />
                Your browser does not support HTML video.
              </video>
            </Box>
          </Stack>
          <Stack
            direction="column"
            spacing="20px"
            alignItems="flex-start"
            sx={{
              width: {
                xl: "560px",
                lg: "560px",
                md: "500px",
                sm: "450px",
                xs: "350px",
              },
            }}
          >
            <Typography variant="h4" fontWeight="600" align="left">
              Why Choose Us?
            </Typography>
            <Typography
              variant="body2"
              align="left"
              alignSelf="center"
              fontSize="12px"
            >
              Neque quisque sollicitudin tempor vestibulum elit taciti. Sagittis
              tempor consequat turpis. Aenean curae elementum vestibulum dapibus
              vitae laoreet. Bibendum suspendisse himenaeos malesuada. Nisl
              taciti si platea dui. Euismod malesuada facilisis duis lobortis
              aliquet massa. Tincidunt vivamus ac consectetuer molestie
              pharetra. Sodales pulvinar non habitant.
            </Typography>
            <Typography
              variant="body2"
              align="left"
              alignSelf="center"
              fontSize="12px"
            >
              Nisl taciti si platea dui. Euismod malesuada facilisis duis
              lobortis aliquet massa. Tincidunt vivamus ac consectetuer molestie
              pharetra. Sodales pulvinar non habitant.
            </Typography>
            <Typography style={{ fontSize: "12px", fontWeight: "400" }}>
              <li>SUSTAINABLY SOURCED</li>
              <li>EASY TO RECYCLE</li>
              <li>IMPROVED HOME RESALE VALUE</li>
              <li>A SMART WAY TO LEED CERTIFICATION</li>
            </Typography>
            {/* <Button
              variant="contained"
              sx={{
                paddingY: "9px",
                paddingX: "30px",
                borderRadius: "7px",
                bgcolor: "#000",
                marginTop: "30px",
                "&:hover": {
                  bgcolor: "#E3E3E3",
                  color: "#000",
                },
              }}
            >
              LEARN MORE
            </Button> */}
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

export default BodyVideo;
