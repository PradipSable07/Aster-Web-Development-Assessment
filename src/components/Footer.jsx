import React from "react";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";
export function Footer({}) {
	return (
		<footer className='footer p-10  text-base-content bg-[#45474B]'>
			<nav>
				<header className='footer-title'>Services</header>
				<a className='link link-hover'>Branding</a>
				<a className='link link-hover'>Design</a>
				<a className='link link-hover'>Advertisement</a>
			</nav>
			<nav>
				<header className='footer-title'>Company</header>
				<a className='link link-hover'>About us</a>
				<a className='link link-hover'>Contact</a>
			</nav>
			<nav>
				<header className='footer-title'>Legal</header>
				<a className='link link-hover'>Terms of use</a>
				<a className='link link-hover'>Privacy policy</a>
				<a className='link link-hover'>Cookie policy</a>
			</nav>
			<form action='onsubmit'>
				<header className='footer-title'>Newsletter</header>
				<FormInput defaultValue='Email address' type='email' />
				<SubmitBtn text={"Subscribe"} />
			</form>
		</footer>
	);
}
