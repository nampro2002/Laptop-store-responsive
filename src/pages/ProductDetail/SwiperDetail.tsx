import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import { useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Box } from "@mui/material";

interface SwiperDetailProps {
  listImg: (string | undefined)[];
}

function SwiperDetail({ listImg }: SwiperDetailProps) {
  const [activeThumb, setActiveThumb] = useState(null);
  return (
    <Box>
      <Box
        sx={{
          width: {
            xl: "500px",
            lg: "400px",
            md: "350px",
            sm: "350px",
            xs: "250px",
          },
          backgroundColor: "#fff",
          padding: "20px",
        }}
      >
        <Swiper
          // loop={true}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation, Thumbs]}
          grabCursor={true}
          thumbs={{ swiper: activeThumb }}
          className="product-images-slider"
        >
          {listImg.map((imgUrl, index) => {
            return (
              <SwiperSlide key={index}>
                <Box width="500px">
                  <img src={imgUrl} width="100%" />
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Box className="slider-lite">
          <Swiper
            onSwiper={(swiper: any) => setActiveThumb(swiper)}
            // loop={true}
            spaceBetween={10}
            slidesPerView={4}
            modules={[Navigation, Thumbs]}
            className="product-images-slider-thumbs"
          >
            {listImg.map((imgUrl, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="product-images-slider-thumbs-wrapper">
                    <img src={imgUrl} alt="product images" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
}

export default SwiperDetail;
