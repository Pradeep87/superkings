import React from 'react'

const CategoryCard = ({ heading, text, icon }) => <div className='categoryCard' >
<img src={icon} alt="" />
<div>
  <p>{heading}</p>
  <span className='text' >{text}</span>
</div>
</div>

export default CategoryCard