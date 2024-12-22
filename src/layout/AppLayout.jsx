import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
	return (
		<div>
			<div className="grid-background"></div>
			<main className="min-h-screen container">
				<Header />
				<Outlet />
			</main>
			<div className="text-center bg-gray-800 text-[1.2rem] py-6 mt-10">
				&copy;JobSync Pvt. Ltd.
			</div>
		</div>
	);
};
export default AppLayout;
