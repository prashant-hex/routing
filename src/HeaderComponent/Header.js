import React from 'react'
import {Link} from 'react-router-dom'


export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
 
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page"  to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page"  to="/about">About us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page"  to="/contact">Contact us</Link>
        </li>

        {/* <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="#" to="/Contact">Contact us</Link>
        </li> */}
      </ul>
       </div>
  </div>
</nav>
    </div>
  )
}
