import React from "react";
import { Link, Form } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";

const SignIn = () => {
	return (
		<section className='h-screen grid place-items-center'>
			<Form
				method='post'
				className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'>
				<h4 className='text-center text-2xl font-semibold'>Sign In</h4>
				<FormInput
					type={"email"}
					name={"email"}
					label={"Email"}
					defaultValue={"test@gmail.com"}
				/>
				<FormInput
					type={"password"}
					name={"password"}
					label={"Password"}
					defaultValue={"test123"}
				/>
				<div className='mt-4'>
					<SubmitBtn text={"Sign In"} />
				</div>
				<button type=' button' className='btn btn-neutral  btn-block'>
					<Link to='/'>Guest User</Link>
				</button>
				<p className='mt-4 text-center'>
					Don't have an account? <Link to='/signup'>Sign Up</Link>
				</p>
			</Form>
		</section>
	);
};

export default SignIn;
