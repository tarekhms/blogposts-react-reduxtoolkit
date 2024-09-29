import React from 'react'
import { NavLink } from 'react-router-dom';
import Icons from '/src/assets/images/icons.png';

const Footer = () => {
    const activeLinks = ({ isActive }) => isActive ? "underline" : "";

    return (
        <footer className="bg-[#e8edeb] pt-5 text-xs text-slate-800">

            <div className="table sm:block container m-auto px-2 sm:px-0 sm:mb-5">
                <div className='table-cell sm:inline sm:w-min relative pl-[22px] globe sm:mr-6'>English</div>
                <div className='col-count-3 sm:col-none sm:inline pl-4'>
                    <div className='sm:inline sm:mr-6'><NavLink to="/" className={activeLinks}>Home</NavLink></div>
                    <div className='sm:inline sm:mr-6'><NavLink to="news" className={activeLinks}>News</NavLink></div>
                    <div className='sm:inline sm:mr-6'><NavLink to="#" >Categories</NavLink></div>
                    <div className='sm:inline sm:mr-6'><NavLink to="#" >Requests</NavLink></div>
                    <div className='sm:inline sm:mr-6'><NavLink to="#" >License agreement</NavLink></div>
                    <div className='sm:inline sm:mr-6'><NavLink to="about" className={activeLinks}>About</NavLink></div>
                    <div className='sm:inline sm:mr-6'><NavLink to="contact" className={activeLinks}>Contact</NavLink></div>
                </div>
            </div>

            <div className="bg-black flex items-center justify-between py-4">
                <div className="container-xl lg:container m-auto text-[0.7rem] text-[#888]">
                    © 2017 Powered by <a href="" className="text-[#00df9a]">UlVision</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer