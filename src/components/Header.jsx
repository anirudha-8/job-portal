import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Header = () => {
	return (
		<>
			<nav className="py-5 flex justify-between items-center">
				<Link>
					<img
						src="../../public/logo3.png"
						alt="logo image"
						className="h-14"
					/>
				</Link>
				<Button variant="outline">Login</Button>
			</nav>
		</>
	);
};
export default Header;
