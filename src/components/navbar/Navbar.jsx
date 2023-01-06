import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { logo, catIcon } from '../../assets'
import { pageRoutes } from '../../constants/Constants'
import { AiOutlineMenu, AiOutlineDown, AiOutlineShoppingCart, AiFillEnvironment, AiFillAndroid } from "react-icons/ai"
import { GiJusticeStar, } from "react-icons/gi"

const Button = ({ name }) => <button className='linkBtn'>{name}</button>

const CategoryCard = ({ heading, text, icon }) => <div className='categoryCard' >
  <img src={icon} alt="" />
  <div>
    <p>{heading}</p>
    <span className='text' >{text}</span>
  </div>
</div>


const Card = ({ icon, heading, text }) => <div className='offerCards' >
  <div>
    {icon}
  </div>
  <div className='content'>
    <p className='heading'>{heading}</p>
    <span className='text'>{text}</span>
  </div>
</div>


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
      <div className="menuSection">
        <div className='menuContainer'>
          <MainMenu />
          <MainMenu />
          <MainMenu />
          <MainMenu />
        </div>
      </div>
    </header>


  )
}

export default Navbar