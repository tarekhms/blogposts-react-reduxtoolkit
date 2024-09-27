import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLoginMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';

const SigninMenu = ({ mobile = false, setIsSignupMenueOpen }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Login actions
    const [login, { isLoading, error }] = useLoginMutation();
    const loginHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await login({ email, password }).unwrap();
            dispatch(setCredentials({ ...res }));
            // setIsSigninMenueOpen && setIsSigninMenueOpen(false);
            mobile && navigate(-1);
        } catch (err) {
            toast.error(err?.data?.message || err.error);
            // console.log(err);
        }
    }

    return (
        <section
            id="login-menu"
            className="md:absolute md:p-10 pt-5 pb-10 box-content right-0 z-10 m-auto mt-2 w-11/12 md:w-96 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            tabIndex="0"
        >
            <form id="loginForm" name="loginForm" onSubmit={loginHandler}>
                <div className="flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
                    <div className="flex-1-0">
                        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                            <p className="mx-4 mb-0 text-center font-semibold text-slate-500 text-3xl">
                                Sign in
                            </p>
                        </div>
                        <input
                            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded text-black"
                            name="email"
                            id="email"
                            type="text"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4 text-black"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="mt-4 flex justify-between font-semibold text-sm">
                            <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                                <input className="mr-1" type="checkbox" />
                                <span>Remember Me</span>
                            </label>
                            <Link
                                className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
                                to="#"
                            >
                                Forgot Password?
                            </Link>
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
                            <Link
                                className="text-red-600 hover:underline hover:underline-offset-4"
                                to={mobile && '/register'}
                                onClick={() => !mobile && setIsSignupMenueOpen(true)}
                                data-group-menu="signup"
                            >
                                Register
                            </Link>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default SigninMenu;