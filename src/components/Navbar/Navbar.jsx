import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='w-full bg-blue-900 text-blue-100 py-3 border'>
            <div className='w-4/5 mx-auto lg:flex justify-between items-center'>
                <div className='text-2xl text-center'>ALL COUNTRIES</div>
                <nav className='hidden lg:block'>
                    <Link className='ml-5 hover:text-blue-500' to={"/home"}>Home</Link>
                    <Link className='ml-5 hover:text-blue-500' to={"/about"}>About</Link>
                    <Link className='ml-5 hover:text-blue-500' to={"/services"}>Services</Link>
                    <Link className='ml-5 hover:text-blue-500' to={"/contact"}>Contact</Link>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;