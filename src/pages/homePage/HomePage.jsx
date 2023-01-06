import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";



const images=[
  {
   img :'https://qcs24.com/assets/gallery/1669478466176_112b1bdb-0e77-4137-aad8-6a54888f360a__UR3000,600_SX3000_FMwebp_.jpg'
  },
 
  {
   img :"https://qcs24.com/assets/gallery/1669478424415_31facd80-5bdc-4de8-9035-74836ecdb7f5__UR3000,600_SX3000_FMwebp__(1)_(1).jpg"
  },
  {
    img :'https://qcs24.com/assets/gallery/1669478466176_112b1bdb-0e77-4137-aad8-6a54888f360a__UR3000,600_SX3000_FMwebp_.jpg'
   },
  
  {
   img :"https://qcs24.com/assets/gallery/1669478424415_31facd80-5bdc-4de8-9035-74836ecdb7f5__UR3000,600_SX3000_FMwebp__(1)_(1).jpg"
  },
  

  
]

const HomePageSection=()=>{
  return(
    <div className='homePageSections' >
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >

        {
images.map((data)=><SwiperSlide>
<img src={data.img} alt="" />
        </SwiperSlide>
)

        }
       
      
      </Swiper>

    </div>
  )
}


const HomePage = () => {
  return (
    <div className='homePage' >

<HomePageSection/>

    </div>
  )
}

export default HomePage