import axios from "axios";
import { useEffect, useState } from "react";

const TopAnime = () => {
	const [bannerData, setBannerData] = useState([]);
	const fetchBannerData = async () => {
		try {
			const response = await axios.get("/top/anime");

			setBannerData(response.data.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchBannerData();
	}, []);

	return (
		<div className="py-6 px-6 rounded-[24px] bg-white/10 backdrop-blur-2xl w-full hidden lg:block h-full">
			<div className="flex justify-between items-center mb-6">
				<h2 className="text-white">🔥 Top Anime</h2>
				<div className="flex items-center gap-2">
					<p className="text-neutral-400 text-sm">Sort By: </p>
					<select className="bg-transparent border-none text-white focus:border-none">
						<option value="">Today</option>
					</select>
				</div>
			</div>
			<div className="overflow-y-auto h-[calc(100%-3rem)] scroll-bar">
				{bannerData.map((data, index) => {
					return (
						<div key={index} className="relative">
							<div className=" w-full h-[230px] flex flex-col mb-8">
								<img
									src={data?.images?.jpg.large_image_url}
									className="w-full rounded-xl h-full object-cover"
									alt=""
								/>
							</div>
							<div className="absolute p-2 bottom-0 w-full  bg-black/40 backdrop-blur-md">
								<h2 className="text-white">{data.title}</h2>
								<div className="flex justify-between ">
									<p className="text-neutral-400">Rank : {data.rank}</p>
									<p className="text-neutral-400">Year : {data.year}</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default TopAnime;
