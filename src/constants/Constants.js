import { catIcon } from "../assets"
import { AiFillAppstore,AiOutlineGold,AiOutlineSlack } from "react-icons/ai";


export const pageRoutes = {
    home: "/",
}

const subCategory=[
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
export const CatCardData = [
    {
      heading: "Anniversary",
      subCategory,
      icon:<AiOutlineSlack style={{ fontSize: 20 }} />
    },
    {
      heading: "Birthdays",
      subCategory,
      icon:<AiOutlineSlack style={{ fontSize: 20 }}/>
    },
    {
      heading: "Cakes",
      subCategory,
      icon:<AiOutlineSlack style={{ fontSize: 20 }}/>
    },
    {
      heading: "Candlelights",
      subCategory,
      icon:<AiOutlineSlack style={{ fontSize: 20 }}/>
    },
    {
      heading: "Gifts",
      subCategory,
      icon:<AiOutlineSlack style={{ fontSize: 20 }}/>
    },
  ]