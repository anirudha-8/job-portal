import { Link, useSearchParams } from "react-router-dom";
import {
	SignedIn,
	SignedOut,
	SignIn,
	UserButton,
	useUser,
} from "@clerk/clerk-react";
import { Button } from "./ui/button";
import { BriefcaseBusiness, Heart, PenBox } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
	const [showSignInModal, setShowSignInModal] = useState(false);

	const { user } = useUser();

	// if user is currently on another route, and NOT signed-in,
	// then we'll show "sign-in" modal
	const [search, setSearch] = useSearchParams();
	useEffect(() => {
		if (search.get("sign-in")) {
			setShowSignInModal(true);
		}
	}, [search]);

	// to remove the "showSignInModal", if clicked outside of the modal
	const handleOverlayClick = (e) => {
		if (e.target === e.currentTarget) {
			setShowSignInModal(false);
			setSearch({});
		}
	};
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
				<div className="flex gap-8">
					<SignedOut>
						{/* when click on "Login", show "sign-in" modal */}
						<Button
							variant="outline"
							onClick={() => setShowSignInModal(true)}
						>
							Login
						</Button>
					</SignedOut>
					<SignedIn>
						{/* logic to show 'post-job' option for 'recruiter' only */}
						{user?.unsafeMetadata?.role === "recruiter" && (
							<Link to={"/post-job"}>
								<Button
									variant="destructive"
									className="rounded-full"
								>
									<PenBox size={20} />
									Post a Job
								</Button>
							</Link>
						)}

						{/* user logo button */}
						<UserButton
							appearance={{
								elements: {
									avatarBox: "w-10 h-10",
								},
							}}
						>
							<UserButton.MenuItems>
								<UserButton.Link
									label="My Jobs"
									labelIcon={<BriefcaseBusiness size={15} />}
									href="/my-jobs"
								/>
								<UserButton.Link
									label="Saved Jobs"
									labelIcon={<Heart size={15} />}
									href="/saved-jobs"
								/>
							</UserButton.MenuItems>
						</UserButton>
					</SignedIn>
				</div>
			</nav>

			{/* code to show "sign-in" modal */}
			{showSignInModal && (
				<div
					className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
					onClick={handleOverlayClick}
				>
					<SignIn
						signUpForceRedirectUrl="/onboarding"
						signUpFallbackRedirectUrl="/onboarding"
					/>
				</div>
			)}
		</>
	);
};
export default Header;
