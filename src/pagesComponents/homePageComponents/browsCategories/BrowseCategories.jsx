import React,{useState} from 'react'
import {ContentWrapper,CategoryCard} from '../../../components'
import { pageRoutes } from '../../../constants/Constants'
import { catIcon } from '../../../assets'
import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineDown, AiOutlineShoppingCart, AiFillEnvironment, AiFillAndroid } from "react-icons/ai"
import{ CategoryMenu} from '../../../components'
import { CatCardData } from '../../../constants/Constants'



const BrowseCategories = () => {
  return (
    <ContentWrapper>
        <CategoryMenu CatCardData={CatCardData} />
    </ContentWrapper>
  )
}

export default BrowseCategories