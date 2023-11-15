import { Footer } from "./../components/Footer";
import { WBCard } from "./../components/WBCard";
import React from "react";
import { Hero, FeautredHotels } from "../components";
import { IoIosTimer } from "react-icons/io";

const Landing = () => {
	return (
		<div className='w-screen h-fit grid grid-cols-1 bg-[#45474B]'>
			<Hero />
			<WBCard />
			<FeautredHotels />

			<Footer />
		</div>
	);
};

export default Landing;
