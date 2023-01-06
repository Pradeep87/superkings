import React, { useRef, useState } from "react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { SearchInput } from '../'
import { AiOutlineMenu, AiOutlineDown, AiOutlineShoppingCart, AiFillEnvironment, AiFillAndroid } from "react-icons/ai"
import {SelectBox} from "../";


const tabs = ["BUY", "RENT", "COMMERCIAL", "PG/CO-LIVING", "PLOTS"]
const options = ["Bhopal", "Nepal", "India", "US"]




const SearchInputBox = () => {
  const [selected, setselected] = useState(tabs[0])
  const [blur, setblur] = useState(false)
  return (
    <div className="SearchInputBox"
  
style={{backgroundColor:blur? 'rgba(0, 0,0,0.5)':""}}
    >
      <div   onMouseEnter={()=>setblur(true)}
    onMouseLeave={()=>setblur(false)} >
        <ul className="tabs">
          {tabs.map((t, idx) => <li key={idx} onClick={() => setselected(t)} className={selected === t ? "active" : ""} >{t}</li>)}
        </ul>
        <div className="searchBox" >
          <SelectBox options={options} />
          <input type="text" placeholder="Search for Locality Landmark, Project, Builder" />
        </div>
      </div>

    </div>
  )
}




const Slider = ({ images, sliderClass, searchInput }) => {
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

      {searchInput && <SwiperSlide>
        <SearchInputBox />
        <img src="https://qcs24.com/assets/gallery/1669478424415_31facd80-5bdc-4de8-9035-74836ecdb7f5__UR3000,600_SX3000_FMwebp__(1)_(1).jpg" alt="" className="sliderImage" />
      </SwiperSlide>
      }
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