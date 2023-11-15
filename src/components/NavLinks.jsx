import React from "react";
import { NavLink } from "react-router-dom";
const links = [
	{
		id: 1,
		url: "/",
		text: "Home",
	},
	{
		id: 2,
		url: "/services",
		text: "Services",
	},
	{
		id: 3,
		url: "/about",
		text: "About",
	},
	{
		id: 4,
		url: "/contact",
		text: "Contact Us",
	},
];

const NavLinks = () => {
	return (
		<>
			{links.map((link) => {
				const { id, url, text } = link;
				return (
					<li key={id} className='p-1'>
						<NavLink className='capitalize text-[#F5F7F8]' to={url}>
							{text}
						</NavLink>
					</li>
				);
			})}
		</>
	);
};

export default NavLinks;
