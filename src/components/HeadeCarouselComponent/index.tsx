import { Box, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { ICategory } from "../../types/types";
import CardVideo from "../CardVideo";

interface HeadeCarouselComponentProps {
  category: ICategory;
}

function HeadeCarouselComponent({ category }: HeadeCarouselComponentProps) {
  const handleLearnMore = () => {
    window.open(`${category.webUrl}`, "_blank");
  };
  return (
    <Box>
      <Stack
        direction="row"
        sx={{
          color: "white",
          visibility: {
            xl: "true",
            lg: "true",
            md: "false",
            sm: "false",
            xs: "false",
          },
        }}
        display="flex"        
        justifyContent="center"
        alignItems="center"
        //   bgcolor="red"
        //   width='80%'
        //   margin='0 auto'
        ml="5%"
      >
        <Box>
          <Typography
            variant="h4"
            fontWeight="600"
            align="left"
            mb="50px"
            sx={{
              textTransform: "uppercase",
              fontSize: {
                xl: "30px",
                lg: "30px",
                md: "30px",
                sm: "15px",
                xs: "15px",
              },
            }}
          >
            {category.name}
            <Typography
              variant="body2"
              align="left"
              alignSelf="center"
              mt="20px"
              fontSize="12px"
              sx={{
                width: {
                  xl: "380px",
                  lg: "380px",
                  md: "280px",
                  sm: "280px",
                  xs: "240px",
                },
                fontSize: {
                  xl: "12px",
                  lg: "12px",
                  md: "10px",
                  sm: "10px",
                  xs: "10px",
                },
              }}
            >
              {category.description}
            </Typography>
          </Typography>
          <Button
            onClick={handleLearnMore}
            variant="outlined"
            sx={{
              paddingY: "9px",
              paddingX: "25px",
              borderRadius: "7px",
              color: "#fff",
              border: "2px solid #fff",
              "&:hover": {
                border: "2px solid #fff",
              },
            }}
          >
            LEARN MORE
          </Button>
        </Box>
        <Box
          ml="4%"
          sx={{
            display: {
              xl: "block",
              lg: "block",
              md: "block",
              sm: "none",
              xs: "none",
            },
          }}
        >
          <CardVideo category={category} />
        </Box>
      </Stack>
    </Box>
  );
}

export default HeadeCarouselComponent;
