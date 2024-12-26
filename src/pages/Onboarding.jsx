import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BarLoader } from "react-spinners";

const Onboarding = () => {
	const { user, isLoaded } = useUser();
	console.log(user);

	// logic for role selection and secure router upon role selected
	const navigate = useNavigate();
	const handleRoleSelection = async (role) => {
		await user
			.update({
				unsafeMetadata: { role },
			})
			.then(() => {
				navigate(role === "recruiter" ? "/post-job" : "/jobs");
			});
	};
	useEffect(() => {
		if (user?.unsafeMetadata?.role) {
			navigate(
				user?.unsafeMetadata?.role === "recruiter"
					? "/post-job"
					: "/jobs"
			);
		}
	}, [user]);

	// to show loader, if any case of delay
	if (!isLoaded) {
		return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
	}

	return (
		<div className="flex flex-col items-center justify-center mt-36">
			<h1 className="gradient-title font-extrabold text-7xl sm:text-8xl tracking-tighter">
				I am a...
			</h1>
			<div className="w-full grid grid-cols-2 gap-4 md:px-40 mt-10">
				<Button
					variant="blue"
					className="h-36 text-2xl"
					onClick={() => handleRoleSelection("candidate")}
				>
					Candidate
				</Button>
				<Button
					variant="destructive"
					className="h-36 text-2xl"
					onClick={() => handleRoleSelection("recruiter")}
				>
					Recruiter
				</Button>
			</div>
		</div>
	);
};
export default Onboarding;
