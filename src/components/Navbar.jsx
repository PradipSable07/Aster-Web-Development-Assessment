import React from "react";
import { FaBars } from "react-icons/fa6";
import { FaHotel } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import { logo } from "../assets";

const Navbar = () => {
	return (
		<nav className=' bg-transparent text-[#F5F7F8] border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-[#45474B] justify-between'>
			<div className='navbar align-element'>
				<div className='navbar-start flex justify-between items-center'>
					<NavLink to='/' className=' text-xl item-center'>
						<img src={logo} className='w-20 h-10 object-cover' alt='' />
					</NavLink>
				</div>
				<div className='navbar-center hidden lg:flex'>
					<ul className='menu menu-horizontal'>
						{" "}
						<NavLinks />
					</ul>
				</div>
				<div className='navbar-end'>
					<div className='dropdown dropdown-left dropdown-bottom'>
						<label tabIndex={0} className='btn btn-ghost lg:hidden'>
							<FaBars />
						</label>
						<ul
							tabIndex={0}
							className='menu menu-sm dropdown-content shadow rounded-lg hover:text-[#F5F7F8] bg-base-100 w-48 z-20'>
							<NavLinks />
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
