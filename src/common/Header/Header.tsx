import React from "react";
import styles from './header.module.scss';
import logo from '@assets/logo.png'
import menuIcon from '@assets/square.png';

const navItems = [
  {
    id: 1,
    name: 'Home',
    href: '#'
  },
  {
    id: 2,
    name: 'About',
    href: '#'
  },
  {
    id: 3,
    name: 'Store',
    href: '#'
  },
  {
    id: 4,
    name: 'Blog',
    href: '#'
  },
  {
    id: 5,
    name: 'News',
    href: '#'
  },
  {
    id: 6,
    name: 'Contact',
    href: '#'
  }
]

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <img src={logo} alt='yoyaba logo'/>
      </div>
      <nav>
        <ul>
          {navItems.map(({id, name, href}) => (
            <li key={id}><a href={href}>{name}</a></li>
          ))}
        </ul>
        <img  className={styles.mobileIcon} src={menuIcon} alt='menu icon'/>
      </nav>
    </header>
  )
}

export default Header;
