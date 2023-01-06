import React,{useState} from 'react'
import { AiOutlineMenu, AiOutlineDown, AiOutlineShoppingCart, AiFillEnvironment, AiFillAndroid } from "react-icons/ai"

const SelectBox = ({ options }) => {
    const [selected, setselected] = useState(options[0])
    const [show, setshow] = useState(false)
  
    const handleSelect = (o) => {
      setselected(o)
      setshow(!show)
    }
    return (
      <div className="SelectBox">
        <p onClick={() => setshow(!show)} className='selected' >{selected} <AiOutlineDown /> </p>
        {show && <ul className="options">
          {
            options.map((o, idx) => <li onClick={() => handleSelect(o)} key={idx}>{o}</li>)
          }
        </ul>}
      </div>
    )
  }
  

export default SelectBox