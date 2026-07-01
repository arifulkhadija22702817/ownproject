import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../navbar/logo.png';

class Navbar extends Component {
    render() {

        const Links = [
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
            { name: "Project", path: "/project" },
            { name: "Contact", path: "/contact" }
        ];

        return (
            <div className="navbar bg-gradient-to-r from-purple-400 to-pink-400 shadow-sm sticky top-0 z-50">
                <div className="navbar-start p-2">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="m-3 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-11 rounded-md" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 shadow">
                            {Links.map((Link) => (
                                <li key={Link.path}>
                                    <NavLink
                                        to={Link.path}
                                        className={({ isActive }) =>
                                            `px-3 py-1 rounded-md transition-all duration-300 ${isActive
                                                ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                                                : "hover:bg-white/30"
                                            }`
                                        }
                                    >
                                        {Link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <img
                        src={Logo}
                        alt="Logo"
                        className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full border-2 border-purple-900 object-cover"
                    />
                    <a className="text-2xl md:text-4xl font-bold bg-clip-text bg-pink-700 text-transparent ml-2">A.K.ARIFUL</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl">
                        {Links.map((Link) => (
                            <li key={Link.path}>
                                <NavLink
                                    to={Link.path}
                                    className={({ isActive }) =>
                                        `px-3 py-1 rounded-md transition-all duration-300
     ${isActive
                                            ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                                            : "hover:bg-white/30"
                                        }`
                                    }
                                >
                                    {Link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="navbar-end mr-3">
                    <a className="btn bg-green-600 text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-2 hover:scale-110">Login</a>
                </div>
            </div>
        );
    }
}

export default Navbar;
