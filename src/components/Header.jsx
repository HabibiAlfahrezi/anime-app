import NavbarData from "../data/Navbar";
import profile from "../assets/download (2).jpg";
import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
const Header = () => {
	return (
		<nav className="flex fixed top-0 px-16 py-6 z-10  bg-transparent  lg:justify-between w-full  ">
			<div className="hidden lg:flex  items-center gap-x-2 w-[310px] px-4 rounded-full backdrop-blur-md  text-white  bg-white/10 ">
				<CiSearch className="text-3xl" />
				<input
					type="text"
					placeholder="Search Anime..."
					className=" border border-none focus:border-none  bg-transparent  outline-none focus:outline-none  "
				/>
			</div>

			<ul className="hidden lg:flex items-center gap-4 ">
				{NavbarData.map((data, index) => {
					return (
						<NavLink
							key={index}
							to={data.href}
							className={({ isActive }) =>
								`text-white px-6 py-3 rounded-full ${isActive && "bg-white/30"}`
							}
						>
							{data.label}
						</NavLink>
					);
				})}
			</ul>
			<div className="absolute right-6 lg:relative">
				<div className="flex items-center gap-4 bg-white/10 lg:w-[250px] px-2 lg:px-4 rounded-full py-2">
					<img src={profile} alt="" className="w-11 h-11 rounded-full" />
					<div className="hidden lg:block">
						<p className="text-white text-base">Habibi Alfahrezi</p>
						<span className="text-neutral-400 text-xs">@7812habibi</span>
					</div>
					<div className="text-white hidden lg:block items-start">
						<FaChevronDown />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
