import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className='bg-[#495E57] p-2 text-neutral-content '>
			<div className='align-element text-[#F4CE14] flex gap-x-6justify-center sm:justify-end'>
				<Link to='/signin' className=' link link-hover text-xs sm:text-sm'>
					Sign In / Guest
				</Link>

				<Link to='/signup' className=' link link-hover text-xs sm:text-sm ml-1'>
					| Sign Up
				</Link>
			</div>
		</header>
	);
};

export default Header;
