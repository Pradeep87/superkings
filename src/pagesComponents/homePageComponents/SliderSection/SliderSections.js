import React, { useRef, useState } from "react";
import { Pagination, Navigation } from "swiper";
import { AiOutlineInsertRowLeft, AiOutlineLineChart, AiOutlineFork, AiOutlineControl } from "react-icons/ai";
import { Slider } from "../../../components";
import { images } from "../../../constants/Constants";



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



const SliderSections = () => {
    return (
      <div className='homePageSections' >
        <SuperStoreCard />
  <Slider images={images} sliderClass={'mySwiper'} />
      </div>
    )
  }
  

  export default SliderSections