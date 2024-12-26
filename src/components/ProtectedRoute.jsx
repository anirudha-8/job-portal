import { useUser } from "@clerk/clerk-react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
	const { user, isLoaded, isSignedIn } = useUser();

	const { pathName } = useLocation();

	if (isLoaded && !isSignedIn && isSignedIn !== undefined) {
		return <Navigate to={"/?sign-in=true"} />;
	}

	// prevent from accessing other routes,
	// if user has NO role selected
	if (
		user !== undefined &&
		!user?.unsafeMetadata?.role &&
		pathName !== "/onboarding"
	) {
		<Navigate to={"/onboarding"} />;
	}

	return children;
};
export default ProtectedRoute;
