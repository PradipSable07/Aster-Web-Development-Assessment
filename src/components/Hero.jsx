import React from "react";
import { bgImg } from "../assets";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";

const Hero = () => {
	return (
		<main
			className='w-screen h-fit grid justify-center place-items-center bg-no-repeat bg-cover items-center'
			style={{ backgroundImage: `url(${bgImg})` }}>
			<div className='hero-overlay bg-opacity-20'>
				<div className='card  '>
					<div className='card-body grid  sm:grid-cols-2 lg:grid-cols-2'>
						<div className='text-white  z-10 '>
							<h1 className='text-5xl sm:text-7xl text-[#F5F7F8] font-sens font-bold'>
								Start your journey
							</h1>
							<p className='py-6 text-[#F5F7F8] sm:text-xl sm:px-5'>
								Welcome to{" "}
								<span className='text-rose-300 font-bolder '> Hotely</span>,
								where comfort meets luxury, and every stay is a journey of
								indulgence. Immerse yourself in the art of hospitality as we
								redefine your{" "}
								<span className='text-blue-800'>travel experience</span>. Our
								meticulously designed rooms and suites offer a blend of{" "}
								<span className=' font-semibold'>
									{" "}
									modern elegance and timeless
								</span>{" "}
								charm, providing the perfect sanctuary for relaxation. Whether
								you're here for business or leisure.
							</p>
						</div>
						<div className='card h-fit  z-10 p-4 bg-opacity-70 bg-transparent backdrop-blur-md border border-opacity-20 border-white rounded-lg shadow-lg'>
							<FormInput
								type={"Text"}
								label={"Destination"}
								defaultValue={`Mumbai, India`}
								className='w-52'
							/>
							<div className='card-actions justify-equal'>
								<FormInput type={"date"} label={"From Date"} className='' />
								<FormInput type={"date"} label={"To Date"} />
							</div>
							<div className='pt-2'>
								<SubmitBtn text={"Search"} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Hero;
