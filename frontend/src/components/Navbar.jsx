import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaGoogle, FaBars } from 'react-icons/fa';
import logo from '../assets/images/logo.png';
import profileDefault from '../assets/images/profile.png';

import { AiOutlineClose, AiOutlineMenu, AiOutlineBell } from 'react-icons/ai';

const Navbar = () => {
    // Navigation items
    const navItems = [
        { id: 1, text: 'Home', to: '/' },
        { id: 2, text: 'Page one', to: '/page-1' },
        { id: 3, text: 'Page two', to: '/page-2' },
        { id: 4, text: 'About', to: '/about' },
        { id: 5, text: 'Contact', to: '/contact' },
    ];

    // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);

    // Toggle function to handle the navbar's display
    const handleNav = () => {
        setNav(!nav);
    };

    // Hide user menu when focus out 
    const HideUserMenu = () => {
        setTimeout(() => {
            if (document.activeElement.id != "user-menu" && document.activeElement.dataset.field != "menu") setIsProfileMenueOpen(false);
        }, 1);
    }
    const [isProfileMenueOpen, setIsProfileMenueOpen] = useState(false);

    const [session, setSession] = useState(false);
    const signOut = () => setSession(false);
    const profileImage = false;

    // Highlight ctive links
    const linkClass = ({ isActive }) =>
        isActive
            ? 'p-2 m-1 lg:p-3 lg:m2 hover:bg-[#00df9a] rounded-md cursor-pointer duration-300 text-black bg-[#00df9a]'
            : 'p-2 m-1 lg:p-3 lg:m2 hover:bg-[#00df9a] rounded-md cursor-pointer duration-300 hover:text-black';

    const linkClassMobile = ({ isActive }) =>
        isActive
            ? 'p-4 block border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600 bg-[#00df9a]'
            : 'p-4 block border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600';

    return (
        <nav className="bg-black border-b border-[#00df9a]">

            <div className='container-xl lg:container m-auto px-2 bg-black flex justify-between items-center h-20 text-white'>
                {/* Logo */}
                <h1 className='mr-10 text-3xl font-bold text-[#00df9a]'><NavLink to="/">React website</NavLink></h1>

                {/* Desktop Navigation */}
                <ul className='hidden md:flex md:flex-1-0'>
                    {navItems.map(item => (
                        <li key={item.id} >
                            <NavLink to={item.to} className={linkClass}>{item.text}</NavLink>
                        </li>
                    ))}
                </ul>


                {!session ?
                    /* Desktop Login buttons */
                    < div className="hidden gap-2 md:flex md:flex-0-0 ml-10">
                        <button className="rounded-xl bg-black px-3 py-1 text-sm text-white transition duration-200 hover:bg-red-200 active:bg-red-400 ">
                            <span onClick={() => setSession(true)}>Sign in</span>
                        </button>
                        <button className="rounded-xl bg-red-500 px-3 py-1 text-sm text-white transition duration-200 hover:bg-red-600 active:bg-red-700 ">
                            <span onClick={() => setSession(true)}>Sign up</span>
                        </button>
                    </div>
                    :
                    /* <!-- notification button --> */
                    < div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                        <NavLink to="/messages" className="relative group">
                            <button type="button" className="relative rounded-full bg-gray-800 mt-1 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <AiOutlineBell className='text-2xl' />
                            </button>
                            <span className="absolute top-1 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                                2
                            </span>
                        </NavLink>
                        {/* <!-- Profile dropdown button --> */}
                        <div className="relative ml-3">
                            <div>
                                <button
                                    type="button"
                                    className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    id="user-menu-button"
                                    aria-expanded="false"
                                    aria-haspopup="true"
                                    onClick={() => { setIsProfileMenueOpen(true); }}
                                    onBlur={() => HideUserMenu()}
                                >
                                    <span className="absolute -inset-1.5"></span>
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        className="h-8 w-8 rounded-full"
                                        src={profileImage || profileDefault}
                                        width={40}
                                        height={40}
                                        alt=""
                                    />
                                </button>
                            </div>

                            {/* <!-- Profile dropdown --> */}
                            {
                                isProfileMenueOpen && (
                                    <div
                                        id="user-menu"
                                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                        role="menu"
                                        aria-orientation="vertical"
                                        aria-labelledby="user-menu-button"
                                        tabIndex="-1"
                                    >
                                        <NavLink
                                            to="/profile"
                                            className="block px-4 py-2 text-sm text-gray-700"
                                            role="menuitem"
                                            tabIndex="-1"
                                            id="user-menu-item-0"
                                            onClick={() => { setIsProfileMenueOpen(false); }}
                                            data-field="menu"
                                        >Your Profile</NavLink>
                                        <NavLink
                                            to="/saved"
                                            className="block px-4 py-2 text-sm text-gray-700"
                                            role="menuitem"
                                            tabIndex="-1"
                                            id="user-menu-item-2"
                                            onClick={() => { setIsProfileMenueOpen(false); }}
                                            data-field="menu"
                                        >Saved Items</NavLink>
                                        <button
                                            className="block px-4 py-2 text-sm text-gray-700"
                                            role="menuitem"
                                            tabIndex="-1"
                                            id="user-menu-item-2"
                                            data-field="menu"
                                            onClick={() => {
                                                setIsProfileMenueOpen(false);
                                                signOut();
                                            }}
                                        >
                                            Sign Out
                                        </button>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                }

                {/* Mobile Navigation Icon */}
                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>

                {/* Mobile Navigation Menu */}
                <ul
                    className={
                        nav
                            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
                            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                    }
                >
                    {/* Mobile Logo */}
                    <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>React website</h1>

                    {/* Mobile Navigation Items */}
                    {navItems.map(item => (
                        <li key={item.id}>
                            <NavLink to={item.to} className={linkClassMobile}>{item.text}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav >
    );
}

export default Navbar;