import React,{useState} from 'react'
import {ContentWrapper,CategoryCard} from '../../../components'
import { pageRoutes } from '../../../constants/Constants'
import { catIcon } from '../../../assets'
import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineDown, AiOutlineShoppingCart, AiFillEnvironment, AiFillAndroid } from "react-icons/ai"
import{ CategoryMenu,Slider} from '../../../components'
import { browseCategories } from '../../../constants/Constants'
import { images } from '../../../constants/Constants'

const BrowseCategories = () => {
  return (
    <ContentWrapper>
        <CategoryMenu CatCardData={browseCategories} />
        <Slider images={images} sliderClass={'categorySlider'} />
    </ContentWrapper>
  )
}

export default BrowseCategories