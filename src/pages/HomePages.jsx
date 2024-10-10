import BannerHome from "../components/BannerHome";
import HorizontalCard from "../components/HorizontalCard";
import SideHome from "../components/SideHome";

const HomePages = () => {
	return (
		<>
			<div className="lg:flex lg:pt-24 h-[90vh] lg:h-[100vh] ">
				<SideHome />
				<BannerHome />
			</div>
            <div className="lg:flex">
                <HorizontalCard/>
            </div>
		</>
	);
};

export default HomePages;
