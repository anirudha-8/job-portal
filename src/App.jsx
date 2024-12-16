import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./layout/AppLayout";

import {
	LandingPage,
	Onboarding,
	JobListing,
	JobPage,
	PostJob,
	SavedJobs,
	MyJobs,
} from "./pages/index";

// defining routing
const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <LandingPage />,
			},
			{
				path: "onboarding",
				element: <Onboarding />,
			},
			{
				path: "jobs",
				element: <JobListing />,
			},
			{
				path: "job/:id",
				element: <JobPage />,
			},
			{
				path: "post-job",
				element: <PostJob />,
			},
			{
				path: "saved-jobs",
				element: <SavedJobs />,
			},
			{
				path: "my-jobs",
				element: <MyJobs />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
