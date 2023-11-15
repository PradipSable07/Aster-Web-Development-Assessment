import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
	HomeLayout,
	Error,
	SignIn,
	Landing,
	SignUp,
	About,
	Services,
	ContactUs,
} from "./pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{ path: "/", element: <Landing /> },
			{
				path: "services",
				element: <Services />,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "contact",
				element: <ContactUs />,
			},
		],
	},
	{
		index: true,
		path: "/signin",
		element: <SignIn />,
		errorElement: <Error />,
	},
	{
		path: "/signup",
		element: <SignUp />,
		errorElement: <Error />,
	},
]);
const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
