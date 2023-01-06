import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { logo, catIcon } from '../../assets'
import { pageRoutes } from '../../constants/Constants'
import { AiOutlineMenu, AiOutlineDown, AiOutlineShoppingCart, AiFillEnvironment, AiFillAndroid } from "react-icons/ai"
import { GiJusticeStar, } from "react-icons/gi"
import { CatCardData } from '../../constants/Constants'
import {CategoryMenu} from '../'

const Button = ({ name }) => <button className='linkBtn'>{name}</button>




const Card = ({ icon, heading, text }) => <div className='offerCards' >
  <div>
    {icon}
  </div>
  <div className='content'>
    <p className='heading'>{heading}</p>
    <span className='text'>{text}</span>
  </div>
</div>





const CardsData = [
  {
    heading: "Super Offer",
    text: "Explore Greate Deals and offers",
    icon: <GiJusticeStar style={{ fontSize: 20 }} />
  },
  {
    heading: "Introducing MyBiz",
    text: "Business Travel Solution",
    icon: <GiJusticeStar style={{ fontSize: 20 }} />
  },
  {
    heading: "My Trip",
    text: "Manage your Bookings",
    icon: <GiJusticeStar style={{ fontSize: 20 }} />
  }
]



const linksData = [
  {
    name: "",
    Icon: <AiFillAndroid style={{ fontSize: 20 }} />,
  },
  {
    name: "Delhi",
    Icon: <AiFillEnvironment style={{ fontSize: 20 }} />,

  },
  {
    name: "",
    Icon: <AiOutlineShoppingCart style={{ fontSize: 20 }} />,

  },
  {
    name: "",
    Icon: <Button name="Sign In" />,


  },
  {
    name: "",
    Icon: <Button name="Sign Up" />,

  },

  {
    name: "",
    Icon: <AiOutlineMenu style={{ fontSize: 20 }} />,

  },

]




const Navbar = () => {

  return (
    <header>
      <div className='navbar'>

        <div className='content' >
          <Link to={pageRoutes.home}>
            <img src={logo} alt="" />
          </Link>
          {
            CardsData.map((data, idx) => <Card key={idx} {...data} />)

          }
          <ul>
            {
              linksData.map((l, idx) => <li key={idx} ><Link to={pageRoutes.home}>{l.Icon}{l.name}</Link>
              </li>)
            }
          </ul>

        </div>
      </div>
      <div className='categoriesData' >
      <CategoryMenu CatCardData={CatCardData} />
      </div>
    </header>


  )
}

export default Navbar