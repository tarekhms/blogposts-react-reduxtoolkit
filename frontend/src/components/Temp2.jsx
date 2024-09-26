
const temp2 = () => {
    const session = true;
    const var1 = true;
    const var2 = false;
    return (
        <>
            {!session &&
                /* Desktop Login buttons */
                < div className="hidden gap-2 md:flex md:flex-0-0 ml-10">
                    <button className="rounded-xl bg-black px-3 py-1 text-sm text-white transition duration-200 hover:bg-red-200 active:bg-red-400 ">
                        <span onClick={() => { setIsSigninMenueOpen((prev) => !prev) }}>Sign in</span>
                    </button>
                    <button className="rounded-xl bg-red-500 px-3 py-1 text-sm text-white transition duration-200 hover:bg-red-600 active:bg-red-700 ">
                        <span onClick={() => { setIsSignupMenueOpen((prev) => !prev) }}>Sign up</span>
                    </button>


                    {/* Sign in menu */}
                    {var1 && <div >var 1</div>}

                    {/* Sign up menu */}
                    {var2 && <div >var 1</div>}
                </div>
            }
        </>
    )
}

export default temp2