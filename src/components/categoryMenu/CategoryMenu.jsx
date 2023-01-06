import React,{useState} from 'react'
import { catIcon } from '../../assets'
import { pageRoutes } from '../../constants/Constants'
import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineDown, AiOutlineShoppingCart, AiFillEnvironment, AiFillAndroid } from "react-icons/ai"
import {CategoryCard} from '../'

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
  



const MainMenu = () => {
    const [show, setIsShown] = useState(false)
    return (
      <div className='menus'>
        <ul>
  
          <li
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            className={show ? "active" : ""}
            style={{ width: "150px" }}
          >
            Anniversary <AiOutlineDown className={show ? 'rotate' : ""} />
          </li>
        </ul>
  
        {<div className={show ? 'overlay show' : " overlay hide"}
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}>
          <div className='catContainer' >
            <ul className='categoryList' >
              <h4> Anniversary  decoration  </h4>
              {CatCardData.map((data, idx) => <Link key={idx} to={data.path}> <li ><CategoryCard {...data} /></li>
              </Link>)}
            </ul>
            <ul className='categoryList' >
              <h4> Anniversary  decoration  </h4>
              {CatCardData.map((data, idx) => <Link key={idx} to={data.path}> <li ><CategoryCard {...data} /></li>
              </Link>)}
            </ul>
          </div>
        </div>}
      </div>
    )
  }





const CategoryMenu = () => {
  return (
    <div className="menuSection">
    <div className='menuContainer'>
      <MainMenu />
      <MainMenu />
      <MainMenu />
      <MainMenu />
    </div>
  </div>
  )
}

export default CategoryMenu