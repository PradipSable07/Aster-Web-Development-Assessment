import React from "react";

const Cards = ({ img, title, discription, star }) => {
	return (
		<div className='card w-[300px] h-[300px] bg-[#45474B] shadow-xl hover:shadow-cyan-900 hover:shadow-md my-4 mx-auto'>
			<figure>
				<img src={img} alt={title} className='w-full ' />
			</figure>
			<div className='card-body relative'>
				<h2 className='card-title text-[#F5F7F8]'>{title}</h2>
				<p className='text-[#F5F7F8]'>{discription}</p>
				<div className='flex absolute top-0 right-0  items-center mt-2.5 mb-5'>
					<span className='flex text-xs text-[#F5F7F8] font-semibold px-2.5 py-0.5 rounded  ms-3'>
						{star}{" "}
						<svg
							key={star}
							className='w-4 h-4  mx-1  text-[#F5F7F8]'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='currentColor'
							viewBox='0 0 22 20'>
							<path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
						</svg>
					</span>
				</div>
				<button className='btn btn-neutral hover:bg-transparent  shadow-xl hover:shadow-cyan-200 hover:shadow-sm '>
					Book Now
				</button>
			</div>
		</div>
	);
};

export default Cards;
