import React, { useRef, useState } from "react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


const Slider = ({images,sliderClass}) => {
  return (
    <Swiper
    slidesPerView={1}
    spaceBetween={30}
    loop={true}
    pagination={{
      clickable: true,
    }}
    // navigation={true}
    modules={[Pagination, Navigation]}
    className={sliderClass}
  >
    {
      images.map((data, idx) => <SwiperSlide key={idx} >
        <img src={data.img} alt="" className="sliderImage" />
      </SwiperSlide>
      )
    }
  </Swiper>
  )
}

export default Slider