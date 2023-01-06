import React, { useRef, useState } from "react";
// Import Swiper React components
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {SliderSections,BrowseCategories} from "../../pagesComponents";






const HomePage = () => {
  return (
    <div className='homePage' >
      <SliderSections/>
      <BrowseCategories/>
    </div>
  )
}

export default HomePage