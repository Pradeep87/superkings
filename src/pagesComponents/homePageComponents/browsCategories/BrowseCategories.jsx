import React,{useState} from 'react'
import {ContentWrapper,CategoryCard} from '../../../components'
import { pageRoutes } from '../../../constants/Constants'
import { catIcon } from '../../../assets'
import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineDown, AiOutlineShoppingCart, AiFillEnvironment, AiFillAndroid } from "react-icons/ai"
import{ CategoryMenu} from '../../../components'

const CatCardData = [
  {
    heading: "Anniversary Decoration",
    text: "One-Shop-Stop for all your anniversary decoration ideas.",
    icon: catIcon,
    path: pageRoutes.home
  },
  {
    heading: "Anniversary Decoration",
    text: "One-Shop-Stop for all your anniversary decoration ideas.",
    icon: catIcon,
    path: pageRoutes.home
  },
  {
    heading: "Anniversary Decoration",
    text: "One-Shop-Stop for all your anniversary decoration ideas.",
    icon: catIcon,
    path: pageRoutes.home
  },
  {
    heading: "Anniversary Decoration",
    text: "One-Shop-Stop for all your anniversary decoration ideas.",
    icon: catIcon,
    path: pageRoutes.home
  },


]
const BrowseCategories = () => {
  return (
    <ContentWrapper>
        <CategoryMenu/>
    </ContentWrapper>
  )
}

export default BrowseCategories