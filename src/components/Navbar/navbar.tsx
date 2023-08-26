import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import logo from '../../assets/logo-light.png'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navigate = useNavigate()
    return <>
        <div className='hidden sm:grid h-full w-80 text-white py-20 bg-waves-vertical bg-no-repeat bg-cover '>
            <img className=" row-span-1 h-[3.5rem] sm:h-[2.5rem] w-auto drop-shadow-lg m-auto" src={logo} alt="logo" />
            <nav className='row-span-4 flex flex-col items-center space-y-5'>
                <Link className='text-white flex justify-center w-48 py-2 hover:bg-custom-purple hover:text-white rounded-xl' to='/'>
                    <span className="material-symbols-outlined mx-4">
                        home
                    </span>
                    <span className='w-20'>Home</span>
                </Link>
                <Link className='text-white flex justify-center w-48 py-2 hover:bg-custom-purple hover:text-white rounded-xl' to='/login'>
                    <span className="material-symbols-outlined mx-4">
                        space_dashboard
                    </span>
                    <span className='w-20'>Dashboard</span>
                </Link>
                <Link className='text-white flex justify-center w-48 py-2 hover:bg-custom-purple hover:text-white rounded-xl' to='/register'>
                    <span className="material-symbols-outlined mx-4">
                        fact_check
                    </span>
                    <span className='w-20'>Task</span>
                    
                </Link>
            </nav>
            <div className='row-span-1'>
                <a href='#' onClick={() => navigate('/login')} className='text-white hover:text-custom-purple flex justify-center'>
                    <span className="material-symbols-outlined mx-4">
                        logout
                    </span>
                    Sign out
                </a>
            </div>
        </div>

        {/* Mobile Navbar */}
        <div className='w-full h-20 sm:hidden bg-custom-dark flex items-center justify-between drop-shadow-xl pl-4' >
            <img className=" h-8 w-auto drop-shadow-lg " src={logo} alt="logo" />
            <nav x-data="{ open: false }" className="relative py-3 sm:hidden sm:max-w-xl">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label='menu toggle' className=" text-c-lavender-1 w-10 h-10 relative focus:outline-none bg-transparent mx-3" >
                    <div className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
                        <span aria-hidden="true" className={'block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ' + (isMenuOpen ? 'rotate-45' : '-translate-y-1.5')} ></span>
                        <span aria-hidden="true" className={'block absolute  h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ' + (isMenuOpen ? 'opacity-0' : '')}></span>
                        <span aria-hidden="true" className={'block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out ' + (isMenuOpen ? '-rotate-45' : 'translate-y-1.5')} ></span>
                    </div>
                </button>
                <div className={'absolute right-0 top-[4.5rem] w-40 flex flex-col justify-center bg-white overflow-hidden  ' + (isMenuOpen ? 'menu-open' : 'menu-close')}>
                    <Link className='text-gray-700 flex justify-center py-2 hover:bg-custom-purple hover:text-white' to='/'>
                        <span className="material-symbols-outlined mr-4">
                            home
                        </span>
                        <span className='w-20'>Home</span>
                    </Link>
                    <Link className='text-gray-700 flex justify-center py-2 hover:bg-custom-purple hover:text-white' to='/login'>
                        <span className="material-symbols-outlined mr-4">
                            space_dashboard
                        </span>
                        <span className='w-20'>Dashboard</span>
                    </Link>
                    <Link className='text-gray-700 flex justify-center py-2 hover:bg-custom-purple hover:text-white' to='/register'>
                        <span className="material-symbols-outlined mr-4">
                            fact_check
                        </span>
                        <span className='w-20'>Task</span>
                        
                    </Link>
                    <a href='#' onClick={() => navigate('/login')} className='text-gray-700 flex justify-center py-2 border-t-2 border-gray-300 hover:bg-custom-purple hover:text-white'>
                        <span className="material-symbols-outlined mr-4">
                            logout
                        </span>
                        <span className='w-20'>Sign out</span>
                    </a>
                </div>
            </nav>
        </div>
    </>
}

export default Navbar