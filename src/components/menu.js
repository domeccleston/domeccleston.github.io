import React from "react"
import { Link } from 'gatsby'

const Menu = () => {
  return (
    <div className="menu-container">
      <ul>
        <h4>Dom Eccleston</h4>
        <li>
          <Link to="/">Blog</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/books">Books</Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu
