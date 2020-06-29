import React from "react"
import { Link } from 'gatsby'

const Menu = () => {
  return (
    <div style={{ paddingTop: "10px" }}>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
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
