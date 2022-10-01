import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
import './navbar.module.css';

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#ventures">Ventures</a></p>
    <p><a href="#science">Science</a></p>
    <p><a href="#design">Design</a></p>
    <p><a href="#news">News</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className="loro__navbar">
      <div className="loro__navbar-links">
        <div className="loro__navbar-links_logo">
            <img className="logo" src="https://www.google.com/url?sa=i&url=https%3A%2F%2F99designs.com%2Finspiration%2Flogos%2Fparrot&psig=AOvVaw3zqwrVjMAK8dz240ftOjRg&ust=1664727397624000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMj87vu2v_oCFQAAAAAdAAAAABAq" alt="logo"/>
        </div>
        <div className="loro__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="loro__navbar-sign">
        <a href="mailto: williampan@stanford.edu"> <motion.button whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} type="button">Contact</motion.button> </a>
      </div>
      <div className="loro__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="loro__navbar-menu_container scale-up-center">
            <div className="loro__navbar-menu_container-links">
              <Menu />
              <div className="loro__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>  
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar