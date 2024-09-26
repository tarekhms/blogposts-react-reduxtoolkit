import { NavLink } from 'react-router-dom'
import React from 'react'

const temp3 = () => {
    return (
        <>
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

                    data-field="menu"
                >Your Profile</NavLink>
                <NavLink
                    to="/saved"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-2"

                    data-field="menu"
                >Saved Items</NavLink>
                <button
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-2"
                    data-field="menu"

                >
                    Sign Out
                </button>
            </div>

            <section
                id="login-menu" style={{ right: '20rem' }}
                className="absolute p-10 right-21 z-10 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"

            >
                <div className="flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
                    <div className="flex-1-0">
                        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                            <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
                                Sign in
                            </p>
                        </div>
                        <input
                            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
                            type="text"
                            placeholder="Email Address"
                        />
                        <input
                            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                            type="password"
                            placeholder="Password"
                        />
                        <div className="mt-4 flex justify-between font-semibold text-sm">
                            <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                                <input className="mr-1" type="checkbox" />
                                <span>Remember Me</span>
                            </label>
                            <a
                                className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
                                href="#"
                            >
                                Forgot Password?
                            </a>
                        </div>
                        <div className="text-center md:text-left">
                            <button
                                className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                                type="submit"
                            >
                                Login
                            </button>
                        </div>
                        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
                            Don&apos;t have an account?{" "}
                            <a
                                className="text-red-600 hover:underline hover:underline-offset-4"
                                href="#"
                            >
                                Register
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default temp3