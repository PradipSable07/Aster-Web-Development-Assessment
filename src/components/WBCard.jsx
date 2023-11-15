import React from "react";
import { IoIosTimer } from "react-icons/io";
import { whyWe } from "../data";
export function WBCard({}) {
	return (
		<div className='w-screen h-fit flext justify-center  items-center  bg-[#F4CE14] py-10 mx-auto'>
			<h3 className='text-center text-4xl'>
				Why book <span className='text-bolder text-black'>with us ?</span>
			</h3>
			<div className='w-screen grid place-items-center gap-2 md:grid-cols-3 lg:grid-cols-3 mt-10 '>
				{whyWe.map(({ id, title, description }) => (
					<div
						key={id}
						className='card w-[250px] h-[300px] bg-base-100 bg-transparent shadow-xl border border-black hover:bg-slate-800 hover:text-white hover:scale-105 hover:shadow-xl hover:shadow-cyan-900 rounded-none grid place-content-center text-center p-5 pb-0'>
						<div className='text-5xl text-center m-auto'>
							<IoIosTimer />
						</div>
						<h4 className='text-2xl text-center m-2'>{title}</h4>
						<p className='text-zinc-500 text-center m-2'>{description}</p>
					</div>
				))}
			</div>
		</div>
	);
}
