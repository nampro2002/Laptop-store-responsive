import { Box, Typography, Grid } from "@mui/material";

function ProductCategory() {
  return (
    <Box bgcolor="#000" height="900px">
      <Typography
        variant="h4"
        fontWeight="600"
        align="center"
        mb="60px"
        color="white"
      >
        Products
      </Typography>
      <Box width="85%" height='100%' margin="0 auto">
        <Grid container md={12}>
          <Grid item md={4}>
            <Box height="99%" p="10px" boxSizing="border-box">
              <img
                src="/imgs/dell/dell.jpg"
                alt=""
                width="100%"
                height='100%'
                style={{
                  borderRadius: "20px",
                  backgroundColor:'#000'
                }}
              />
            </Box>
          </Grid>
          <Grid item md={8} height="50%">
            <Grid container md={12}>
              <Grid item md={6}>
                <Box px="10px" pt="10px" boxSizing="border-box">
                  <img
                    src="/imgs/hp/hp.jpg"
                    alt=""
                    width="100%"
                    height="90%"
                    style={{
                      borderRadius: "20px",
                    }}
                  />
                </Box>
              </Grid>
              <Grid item md={6} height="88%">
                <Box px="10px" pt="10px" boxSizing="border-box">
                  <img
                    src="/imgs/acer/acer.jpg"
                    alt=""
                    width="100%"
                    height="100%"
                    style={{
                      borderRadius: "20px",
                    }}
                  />
                </Box>
              </Grid>
              <Box
                height="100%"
                width="100%"
                px="10px"
                pt="10px"
                pb="10px"
                boxSizing="border-box"
              >
                <img
                  src="/imgs/asus/asus.jpg"
                  alt=""
                  width="100%"
                  height="200px"
                  style={{
                    borderRadius: "20px",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default ProductCategory;
