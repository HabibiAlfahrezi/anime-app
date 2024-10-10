import hero from "../assets/hero2.png";
import { FaChevronLeft, FaPlay, FaChevronRight, FaDownload } from "react-icons/fa";


const BannerHome = () => {
	return (
		<div className=" lg:px-0 lg:mt-10 lg:pr-16 lg:ml-12 order-2  lg:order-1 ">
			<div className="text-white w-full h-[580px] lg:h-full lg:rounded-[46px] lg:w-[1020px] relative flex flex-col justify-between">
				<div className="w-full h-full absolute">
					<img src={hero} alt="" className="lg:rounded-[56px] w-full h-full object-cover " />
				</div>

                <div className="w-full h-full absolute top-0 bg-gradient-to-t from-neutral-900 to-transparent lg:rounded-[56px]  "></div>
				<div className="px-4 lg:px-10 py-4 mt-4">
					<div className="bg-white/10 backdrop-blur-md px-4 py-2 max-w-[175px] rounded-full">
						<h4 className="text-xl">
							🔥<span className="text-base">New Trending</span>
						</h4>
					</div>
				</div>
				<div className="px-4 lg:px-10 py-4 z-10">
					<div className="flex items-center gap-4">
						<p className="px-4 lg:px-5 py-1 lg:py-2 bg-black/30 rounded-full">Action</p>
						<p className="px-4 lg:px-5 py-1 lg:py-2 bg-black/30 rounded-full">Fantasy</p>
					</div>
					<div>
						<h2 className="text-3xl lg:text-4xl font-medium text-white">
							Sousou no Frieren
						</h2>
						<p className="lg:text-lg text-ellipsis line-clamp-3 max-w-2xl">
							During their decade-long quest to defeat the Demon King, the
							members of the hero party—Himmel himself, the priest Heiter, the
							dwarf warrior Eisen, and the elven mage Frieren—forge bonds
							through adventures and battles, creating unforgettable precious
							memories for most of them.However, the time that Frieren spends
							with her comrades is equivalent to merely a fraction of her life,
							which has lasted over a thousand years. When the party disbands
							after their victory, Frieren casually returns to her usual routine
							of collecting spells across the continent. Due to her different
							sense of time, she seemingly holds no strong feelings toward the
							experiences she went through.As the years pass, Frieren gradually
							realizes how her days in the heros party truly impacted her.
							Witnessing the deaths of two of her former companions, Frieren
							begins to regret having taken their presence for granted; she vows
							to better understand humans and create real personal connections.
							Although the story of that once memorable journey has long ended,
							a new tale is about to begin.
						</p>
					</div>
					<div className="w-full flex justify-between">
						<div className="mt-4 flex items-center gap-2">
							<button className=" px-5 py-3 bg-black/50 text-white rounded-full flex items-center gap-4">
								<span>
									<FaPlay />
								</span>
								Watch
							</button>
							<button className=" px-5 py-3 bg-black/50 text-white rounded-full flex items-center gap-4">
								<span>
									<FaDownload />
								</span>
								Download
							</button>
							<button className="px-5 py-3 bg-black/50 text-white rounded-full flex items-center gap-4">
								...
							</button>
						</div>
						<div className="hidden lg:flex items-center gap-4">
							<button className="p-4 bg-black/50 text-white rounded-full flex items-center gap-4">
								<FaChevronLeft />
							</button>
							<button className="p-4 bg-black/50 text-white rounded-full flex items-center gap-4">
								<FaChevronRight />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BannerHome;
