import React from "react";
import { Link, Form } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";

const SignUp = () => {
	return (
		<section className='h-screen grid place-items-center'>
			<Form
				method='post'
				className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'>
				<h4 className='text-center text-4xl font-semibold'>Sign Up</h4>
				<FormInput
					type={"text"}
					name={"username"}
					label={"Username"}
					defaultValue={"test"}
				/>
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
					<SubmitBtn text={"Sign Up"} />
				</div>
				<p className='mt-4 text-center'>
					Already have an account? <Link to='/signin'>Sign In</Link>
				</p>
			</Form>
		</section>
	);
};

export default SignUp;
