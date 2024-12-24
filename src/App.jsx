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
import { ThemeProvider } from "./components/theme-provider";
import ProtectedRoute from "./components/ProtectedRoute";

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
				element: (
					<ProtectedRoute>
						<Onboarding />
					</ProtectedRoute>
				),
			},
			{
				path: "jobs",
				element: (
					<ProtectedRoute>
						<JobListing />
					</ProtectedRoute>
				),
			},
			{
				path: "job/:id",
				element: (
					<ProtectedRoute>
						<JobPage />
					</ProtectedRoute>
				),
			},
			{
				path: "post-job",
				element: (
					<ProtectedRoute>
						<PostJob />
					</ProtectedRoute>
				),
			},
			{
				path: "saved-jobs",
				element: (
					<ProtectedRoute>
						<SavedJobs />
					</ProtectedRoute>
				),
			},
			{
				path: "my-jobs",
				element: (
					<ProtectedRoute>
						<MyJobs />
					</ProtectedRoute>
				),
			},
		],
	},
]);

function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<RouterProvider router={router} />
		</ThemeProvider>
	);
}

export default App;
