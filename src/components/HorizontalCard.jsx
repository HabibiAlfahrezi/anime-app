import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Card from "./Card";

const HorizontalCard = () => {
	const [seasonData, setSeasonData] = useState([]);
	const fetchDataNewRelease = async () => {
		try {
			const response = await axios.get("/seasons/now");

			setSeasonData(response.data.data);
			console.log(response.data.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchDataNewRelease();
	}, []);

	const containerRef = useRef();
	const handleNext = () => {
		containerRef.current.scrollLeft += 200;
	};

	const handlePrev = () => {
		containerRef.current.scrollLeft -= 200;
	};
	return (
		<section className="px-4 lg:px-16 lg:my-8 overflow-hidden relative">
			<div className="w-full h-full">
				<h4 className="text-white text-2xl font-medium mb-4">
					New Season Airing
				</h4>
				<div
					ref={containerRef}
					className="flex gap-7 overflow-x-scroll scroll-bar scroll-smooth"
				>
					{seasonData.map((data, index) => (
						<Card data={data} key={index} />
					))}
				</div>
				{/* Navigation buttons */}
				<div className="absolute inset-y-0 left-0 right-0 flex justify-between items-center pointer-events-none px-16">
					{/* Left button */}
					<button
						onClick={handlePrev}
						className="p-2 bg-white text-black rounded-full shadow-lg pointer-events-auto -ml-4"
					>
						<FaChevronLeft className="text-xl" />
					</button>
					{/* Right button */}
					<button
						onClick={handleNext}
						className="p-2 bg-white text-black rounded-full shadow-lg pointer-events-auto -mr-4"
					>
						<FaChevronRight className="text-xl" />
					</button>
				</div>
			</div>
		</section>
	);
};

export default HorizontalCard;
