import React from "react";
import { useRouteError, Link } from "react-router-dom";

const Error = () => {
	const error = useRouteError();

	return (
		<main className='grid min-h-[100vh] place-items-center px-7'>
			<div className='text-center'>
				<p className='text-9xl font-semibold text-primary'>{error.status}</p>
				<h1 className='text-4xl font-bold'>{error.statusText}</h1>
				<p className='text-lg font-bold py-3'>
					Sorry, the page you are looking for does not exist.
				</p>
				<div className='mt-5 '>
					<Link to='/' className='btn btn-neutral'>
						Back to homepage
					</Link>
				</div>
			</div>
		</main>
	);
};

export default Error;
