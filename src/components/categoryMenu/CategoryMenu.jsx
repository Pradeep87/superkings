import React, { useState } from 'react'
import { catIcon } from '../../assets'
import { pageRoutes } from '../../constants/Constants'
import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineDown, AiOutlineShoppingCart, AiFillEnvironment, AiFillAndroid } from "react-icons/ai"
import { CategoryCard } from '../'

const CategoryTabs = ({ data }) => {
  const [show, setIsShown] = useState(false)

  return (
    <li
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      className={show ? "active" : ""}
      style={{ marginRight:"30px" }}
    >
      {data.heading}<AiOutlineDown className={show ? 'rotate' : ""} style={{marginLeft:"10px"}} />
      {<div className={show ? 'overlay show' : " overlay hide"}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
        <div className='catContainer' >
          <ul className='categoryList' >
            <h4> Anniversary  decoration  </h4>
            {data?.subCategory?.map((data, idx) => <Link key={idx} to={data.path}> <li ><CategoryCard {...data} /></li>
            </Link>)}
          </ul>
          <ul className='categoryList' >
            <h4> Anniversary  decoration  </h4>
            {data?.subCategory?.map((data, idx) => <Link key={idx} to={data.path}> <li ><CategoryCard {...data} /></li>
            </Link>)}
          </ul>
        </div>
      </div>}
    </li>
  )
}



const MainMenu = ({ CatCardData }) => {
  return (
    <div className='menus'>
      <ul className='mainCatHeading' >
        {
          CatCardData.map((data, idx) => <CategoryTabs key={idx} data={data} />)
        }
      </ul>
    </div>
  )
}





const CategoryMenu = ({ CatCardData }) => {
  return (
    <div className="menuSection">
      <div className='menuContainer'>
        <MainMenu CatCardData={CatCardData} />
      </div>
    </div>
  )
}

export default CategoryMenu