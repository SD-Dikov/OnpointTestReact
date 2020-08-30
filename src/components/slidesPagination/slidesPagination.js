import React from 'react'
import './slidesPagination.css'
import {Link} from 'react-scroll'

export default props => {
  return (
    <ul className="slides-pagination">
    {props.slidesCount.map( (item,index) => (
      <li key={index} className="slides-pagination__item">
        <Link
          activeClass="slides-current"
          to={"slide-" + item}
          spy={true}
          smooth={true}
          duration= {500}
        />
      </li>
    ))
    }
    </ul>
  )
}
