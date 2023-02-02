import { Box } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import HeadeCarouselComponent from "../HeadeCarouselComponent";
import "./style.css";
function HeaderCarousel() {
  const listCategory = useAppSelector((state:RootState)=>state.products.category)
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dotsClass: "abc",
    // autoplay:true,
    autoplaySpeed:5000
  };
  return (
    <Box position="relative">
      {/* <Box
        bgcolor="#000"
        height="800px"
        width="100%"
        sx={{
          transform: "rotate(-7deg)",
          position: "absolute",
          top: "-320px",
          right: "-8%",
          zIndex: "-1",
          borderBottomLeftRadius: "240px",
        }}
      >
        bgcarosel
      </Box> */}
      <Box margin="0 auto" sx={{
        width: {
          xl: "100%",
          lg: "100%",
          md: "80%",
          sm: "80%",
          xs: "80%",
        },
      }}>
        <Slider {...settings}>
          {listCategory.map((category, index)=>(
          <HeadeCarouselComponent category={category} key={index}/>
          ))}        
        </Slider>        
      </Box>
    </Box>
  );
}

export default HeaderCarousel;
