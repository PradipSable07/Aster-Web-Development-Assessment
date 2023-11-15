import React from "react";
import { Outlet } from "react-router";
import { Header, Navbar } from "../components";

const HomeLayout = () => {
	return (
		<>
			<Header />
			<Navbar />
			<section className=''>
				<Outlet />
			</section>
		</>
	);
};

export default HomeLayout;
