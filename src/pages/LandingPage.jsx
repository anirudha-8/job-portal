import { Button } from "@/components/ui/button";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import companies from "../data/companies.json";
import Autoplay from "embla-carousel-autoplay";

const LandingPage = () => {
	return (
		<main className="flex flex-col gap-10 py-10 sm:gap-20 sm:py-20">
			<section className="text-center">
				<h1 className="flex flex-col items-center justify-center gradient-title text-4xl font-extrabold sm:text-6xl lg:text-8xl tracking-tighter py-4">
					Find Your Dream Job <span>and get Hired</span>
				</h1>
				<p className="text-gray-300 text-xs sm:mt-4 sm:text-xl">
					Explore thousands of job listings or find the perfect
					candidate
				</p>
			</section>
			<div className="flex gap-6 justify-center">
				{/* buttons */}
				<Link to={"/jobs"}>
					<Button variant="blue" size="xl">
						Find Jobs
					</Button>
				</Link>
				<Link to={"post-job"}>
					<Button variant="destructive" size="xl">
						Post a Job
					</Button>
				</Link>
			</div>
			{/* carousel */}
			<Carousel
				plugins={[
					Autoplay({
						delay: 2000,
					}),
				]}
				className="w-full py-10"
			>
				<CarouselContent className="flex gap-5 sm:gap-20 items-center">
					{companies.map(({ id, name, path }) => {
						return (
							<CarouselItem
								key={id}
								className="basis-1/3 lg:basis-1/6"
							>
								<img
									src={path}
									alt={name}
									className="h-9 sm:h-14 object-contain"
								/>
							</CarouselItem>
						);
					})}
				</CarouselContent>
			</Carousel>
			{/* banner */}
			<section>{/* cares */}</section>
			{/* accordion */}
		</main>
	);
};
export default LandingPage;
