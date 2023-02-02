import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { IProductFormat } from "../../types/types";
import { formatPrice } from "../../Util/formatPrice";
import ComponentProdCarousel from "../ComponentProdCarousel";

export default function SimpleSlider() {
  const productList = useAppSelector(
    (state: RootState) => state.products.productCarousel
  );
  // console.log(list);
  // let productListFormat:IProductFormat[] = [];
  // productList.map((prod, index) => {
  //   let priceFormat = formatPrice(prod.price);
  //   productListFormat[index] = {
  //     ...prod,
  //     price: priceFormat,
  //   };
  // });
  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    // autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1090,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <Typography variant="h4" fontWeight="600" align="center" mb="60px">
        Featured Collection
      </Typography>
      <Box width="85%" margin="0 auto">
        <Slider {...settings}>
          {productList.map((prod, index) => (
            <ComponentProdCarousel product={prod} key={index} />
            //   <Box border='1px solid #000'  display='flex' justifyContent='center' key={index}>
            // </Box>
          ))}
        </Slider>
      </Box>
    </>
  );
}
