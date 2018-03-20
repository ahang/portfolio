import React, { Component } from 'react';

class Header extends Component {
  render() {
    const menuItems = [
      {
        menu: 'Home',
        link: ''
      },
      {
        menu: 'Portfolio',
        link: ''
      },
      {
        menu: 'About',
        link: ''
      }
    ];
    const MenuMap = () => {
      const menus = menuItems.map((item, index) => {
        return(
        <li className="nav-item" key={index}>
          <a className="nav-link" href={item.link}>{item.menu}</a>
        </li>
        )
      });
      return (
        <ul className="d-flex nav justify-content-center">{menus}</ul>
      );
    }
    return(
      <div className="container">
        <MenuMap />
      </div>
    )
  }
}

export default Header;