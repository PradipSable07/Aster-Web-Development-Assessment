import React from "react";
import { useNavigation } from "react-router";

const SubmitBtn = ({ text }) => {
	const navigation = useNavigation();
	const isSubmitting = navigation.state === "submitting";
	return (
		<button
			type='submit'
			className='btn btn-neutral btn-block '
			disabled={isSubmitting}>
			{isSubmitting ? (
				<>
					<span className='loading loading-spinner loading-md'>
						{" "}
						sending....
					</span>
				</>
			) : (
				text || "Submit"
			)}
		</button>
	);
};

export default SubmitBtn;
