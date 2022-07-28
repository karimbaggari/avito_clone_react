import React from 'react';
import Banner from '../components/Banner';
import Logo from '../assets/logo.png';

const Header = () => {
    return (
        <React.Fragment>
            <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
                <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                    <header className="flex justify-between items-center py-4 md:py-8 mb-8 md:mb-12 xl:mb-16">
                        <a href="/" className="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5" aria-label="logo">
                            <img src={Logo} alt="logo" className="mt-2" style={{ width: "100px", height: "25px" }} />
                        </a>
                        <a href="#" className="hidden lg:inline-block focus-visible:ring ring-indigo-300 text-white active:text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3" style={{ backgroundColor: "#29A160" }}>Contact Sales</a>

                        <button type="button" className="inline-flex items-center lg:hidden focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                            </svg>

                            Menu
                        </button>
                    </header>
                    <Banner />
                </div>
            </div>
            {/* <div className='flex' style={{justifyContent:'space-around',width:"84"+"vw",marginLeft:"9"+"em",alignItems:"center"}}>
                <SearchInput />
            </div> */}
        </React.Fragment >
    );
}
export default Header;