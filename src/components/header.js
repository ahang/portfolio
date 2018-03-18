import React from 'react';

const Header = () => {
  return (
    <div className="container">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/portfolio">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
          </li>
        </ul>
    </div>
  )
}

export default Header;