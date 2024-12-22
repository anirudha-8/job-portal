import { Outlet } from "react-router-dom";

const AppLayout = () => {
	return (
		<div>
			<div className="grid-background"></div>
			<main className="min-h-screen container mx-auto px-8 max-w-screen-2xl">
				<Outlet />
			</main>
		</div>
	);
};
export default AppLayout;
