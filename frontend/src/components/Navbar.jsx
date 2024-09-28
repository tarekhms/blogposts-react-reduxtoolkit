import { useState, useEffect, useCallback, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import profileDefault from '../assets/images/profile.png';
import SigninMenu from './SigninMenu';
import { AiOutlineClose, AiOutlineMenu, AiOutlineBell } from 'react-icons/ai';
import SignupMenu from './SignupMenu';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { removeCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';

const Navbar = () => {
    const profileImage = false;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { userInfo } = useSelector((state) => state.auth);

    // Navigation items
    const navItems = [
        { id: 1, text: 'Home', to: '/' },
        { id: 2, text: 'Page one', to: '/page-1' },
        { id: 3, text: 'Page two', to: '/page-2' },
        { id: 4, text: 'About', to: '/about' },
        { id: 5, text: 'Contact', to: '/contact' },
    ];

    // Dynamic menus
    const documentRef = useRef(document);
    const [isProfileMenueOpen, setIsProfileMenueOpen] = useState(false);
    const [isSigninMenueOpen, setIsSigninMenueOpen] = useState(false);
    const [isSignupMenueOpen, setIsSignupMenueOpen] = useState(false);

    // Hide menus on blur
    const handleClick = useCallback((e) => {
        const el = e.target.closest('[data-group-menu]');
        (!el || el.dataset.groupMenu != 'profile') && setIsProfileMenueOpen(false);
        (!el || el.dataset.groupMenu != 'signin') && setIsSigninMenueOpen(false);
        (!el || el.dataset.groupMenu != 'signup') && setIsSignupMenueOpen(false);
        (!el || el.dataset.groupMenu != 'nav') && setNav(false);
    }, [isProfileMenueOpen, isSigninMenueOpen, isSignupMenueOpen]);

    useEffect(() => {
        documentRef.current.addEventListener("click", handleClick);
        return () => {
            documentRef.current.removeEventListener("click", handleClick);
        };
    }, [isProfileMenueOpen, isSigninMenueOpen, isSignupMenueOpen]);

    // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);

    // Logout
    const [logout] = useLogoutMutation();
    const signOut = async () => {
        try {
            await logout().unwrap();
            dispatch(removeCredentials());
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    }

    // Highlight active links
    const linkClass = ({ isActive }) =>
        isActive
            ? 'p-1 lg:p-2 m-1 lg:p-3 lg:m2 hover:bg-[#00df9a] rounded-md cursor-pointer duration-300 text-black bg-[#00df9a]'
            : 'p-1 lg:p-2 m-1 lg:p-3 lg:m2 hover:bg-[#00df9a] rounded-md cursor-pointer duration-300 hover:text-black';

    const linkClassMobile = ({ isActive }) =>
        isActive
            ? 'p-4 block border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600 bg-[#00df9a]'
            : 'p-4 block border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600';

    return (
        <nav className="bg-black border-b border-[#00df9a]">

            <div className='container-xl lg:container md:max-w-7xl m-auto px-2 bg-black flex justify-between items-center h-20 text-white'>
                {/* Logo */}
                <h1 className='mr-5 lg:mr-10 text-3xl flex-0-0 font-bold text-[#00df9a]'><NavLink to="/">React website</NavLink></h1>

                {/* Desktop Navigation */}
                <ul className='hidden md:flex md:flex-1-0'>
                    {navItems.map(item => (
                        <li key={item.id} >
                            <NavLink to={item.to} className={linkClass}>{item.text}</NavLink>
                        </li>
                    ))}
                </ul>


                {/* Menu Section */}
                {!userInfo &&
                    /* Desktop Login buttons */
                    <section className='hidden absolute inset-y-0 right-0 md:flex items-center pr-2 md:static md:inset-auto ml-3 lg:ml-6 md:pr-0'>
                        <div className="gap-2 flex flex-0-0">
                            <div className='relative' data-group-menu='signin'>
                                <button onClick={() => { setIsSigninMenueOpen((prev) => !prev) }} className="rounded-xl bg-black px-3 py-1 text-sm text-white transition duration-200 hover:bg-red-200 active:bg-red-400 ">
                                    Sign in
                                </button>
                                <div className='md:absolute right-0 mt-2 z-10'>
                                    {/* Sign in menu */}
                                    {isSigninMenueOpen && <SigninMenu setIsSignupMenueOpen={setIsSignupMenueOpen} />}
                                </div>
                            </div>

                            <div className='relative' data-group-menu='signup'>
                                <button onClick={() => { setIsSignupMenueOpen((prev) => !prev) }} className="rounded-xl bg-red-500 px-3 py-1 text-sm text-white transition duration-200 hover:bg-red-600 active:bg-red-700 ">
                                    Sign up
                                </button>
                                <div className='md:absolute right-0 mt-2 z-10'>
                                    {/* Sign up menu */}
                                    {isSignupMenueOpen && <SignupMenu setIsSigninMenueOpen={setIsSigninMenueOpen} />}
                                </div>
                            </div>
                        </div>
                    </section>
                }
                {userInfo &&
                    < div className="absolute md:inset-y-0 right-14 md:right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">

                        {/* Notification button */}
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
                                    data-group-menu="profile"
                                    onClick={() => { setIsProfileMenueOpen((prev) => !prev) }}
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
                                        data-group-menu="profile"
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
                <div onClick={() => setNav(!nav)} className='block md:hidden' data-group-menu='nav'>
                    {nav ? <AiOutlineClose size={20} data-group-menu='nav' /> : <AiOutlineMenu size={20} data-group-menu='nav' />}
                </div>

                {/* Mobile Navigation Menu */}
                <ul
                    className={
                        nav
                            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-20'
                            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] z-20'
                    }
                >
                    {/* Mobile Logo */}
                    <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>React website</h1>

                    {/* Mobile Navigation Items */}
                    {navItems.map(item => (
                        <li key={item.id}>
                            <NavLink to={item.to} className={linkClassMobile} onClick={() => setNav(false)}>{item.text}</NavLink>
                        </li>
                    ))}

                    {!userInfo &&
                        <div className='flex mt-10'>
                            <div className='relative ml-2' data-group-menu='signin'>
                                <button className="rounded-xl bg-gray-200 px-3 py-1 text-sm text-black transition duration-200 hover:bg-red-200 active:bg-red-400 ">
                                    <NavLink to='login' onClick={() => setNav(false)}>Sign in</NavLink>
                                </button>
                            </div>

                            <div className='relative ml-2' data-group-menu='signup'>
                                <button className="rounded-xl bg-red-500 px-3 py-1 text-sm text-white transition duration-200 hover:bg-red-600 active:bg-red-700 ">
                                    <NavLink to='register' onClick={() => setNav(false)}>Sign up</NavLink>
                                </button>
                            </div>
                        </div>
                    }
                </ul>
            </div>
        </nav >
    );
}

export default Navbar;