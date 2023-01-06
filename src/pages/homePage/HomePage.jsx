import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { catIcon } from "../../assets";
import { AiOutlineInsertRowLeft, AiOutlineLineChart, AiOutlineFork, AiOutlineControl } from "react-icons/ai";




const SuperStoresData = [
  {
    icon: <AiOutlineInsertRowLeft className="reactIcons" />,
    storeName: "Bajaj Mall"
  },
  {
    icon: <AiOutlineLineChart className="reactIcons" />,
    storeName: "Investments"
  },
  {
    icon: <AiOutlineFork className="reactIcons" />,
    storeName: "Insurance"
  },
  {
    icon: <AiOutlineControl className="reactIcons" />,
    storeName: "Securities"
  },
]


const images = [
  {
    img: 'https://qcs24.com/assets/gallery/1669478466176_112b1bdb-0e77-4137-aad8-6a54888f360a__UR3000,600_SX3000_FMwebp_.jpg'
  },

  {
    img: "https://qcs24.com/assets/gallery/1669478424415_31facd80-5bdc-4de8-9035-74836ecdb7f5__UR3000,600_SX3000_FMwebp__(1)_(1).jpg"
  },
  {
    img: 'https://qcs24.com/assets/gallery/1669478466176_112b1bdb-0e77-4137-aad8-6a54888f360a__UR3000,600_SX3000_FMwebp_.jpg'
  },

  {
    img: "https://qcs24.com/assets/gallery/1669478424415_31facd80-5bdc-4de8-9035-74836ecdb7f5__UR3000,600_SX3000_FMwebp__(1)_(1).jpg"
  },
]

const SuperStoreCard = () => {
  return (
    <div className="SuperStoreCard">
      <h4>Superstores</h4>
      <ul>
        {
          SuperStoresData.map((d, idx) => <li key={idx}>{d.icon}{d.storeName}</li>)
        }
      </ul>

    </div>
  )
}


const HomePageSection = () => {
  return (
    <div className='homePageSections' >
      <SuperStoreCard />

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
          images.map((data, idx) => <SwiperSlide key={idx} >
            <img src={data.img} alt="" className="sliderImage" />
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
      <HomePageSection />
    </div>
  )
}

export default HomePage