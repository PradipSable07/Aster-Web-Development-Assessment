import React from "react";
import Cards from "./Cards";
import { hotels } from "../data";

const FeautredHotels = () => {
	return (
		<div className='w-screen py-10 bg-[#495E57]'>
			<h2 className='text-center my-5 text-[#F5F7F8] text-4xl font-semibold'>
				Our top 8 Hotels
			</h2>
			<div className='w-screen grid place-items-center md:grid-cols-3 lg:grid-cols-4'>
				{hotels.map((hotel) => (
					<Cards
						key={hotel.id}
						img={hotel.img}
						title={hotel.HotelName}
						discription={hotel.description}
						star={hotel.star}
					/>
				))}
			</div>
		</div>
	);
};

export default FeautredHotels;
