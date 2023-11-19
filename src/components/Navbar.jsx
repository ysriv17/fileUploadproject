import { useState } from 'react'
import React from 'react';
import { navigationLinks } from "../constants/index.js";
import { Link } from "react-router-dom";
import { logo, menu, close } from "../assets"
const Navbar = () => {
  const [Activity, setActivity] = useState("");
  const [toggle, setToggle] = useState(false)
  return (
    <nav
      className="sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-primary">
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/" className="flex items-center gap-2" onClick={() => { setActivity(""); window.scrollTo(0, 0); }}>
          <img src={logo} alt="logo" className='w -9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer'>YASH AMAN SRIVASTAVA</p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {
            navigationLinks.map((l) => {

              console.log(l.id, l.title);
              return (<li
                key={l.id}
                className={`${Activity === l.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] 
                font-medium cursor-pointer`} onClick={() => { setActivity(l.title) }}>
                <Link to={`#${l.id}`}>
                  {l.title}</Link>
              </li>)

            })}

        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt='menu' className='w-[28px] h-28px object-contain cursor-pointer'
            onClick={() => { setToggle(!toggle) }} />
          <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient top-20  right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {
                navigationLinks.map((link) => {

                 return(
                   <li
                     key={link.id}
                     className={`${Activity === link.title ? "text-white" : "text-secondary"} font-poppins text-[16 px] font-medium cursor-pointer`} onClick={() => { setToggle(!toggle); setActivity(link.title) }}>
                     <a href={`#${link.id}`}>{link.title}</a>
                   </li>
                 )
                })}

            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar; 