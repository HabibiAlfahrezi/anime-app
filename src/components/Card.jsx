
import PropType from "prop-types"

const Card = ({data}) => {
	return (
		<div className="relative max-w-[250px] h-[360px]">
			<img
				src={data.images.jpg.large_image_url}
				alt=""
				className="max-w-[250px] h-[360px]"
			/>
			<div className="w-full h-full absolute top-0 bg-gradient-to-t from-neutral-900 to-transparent"></div>
			<div className="absolute bottom-0 z-10 p-4 w-full text-white">
				<h4 className="text-ellipsis line-clamp-1 text-lg mb-1">
					{data.title}
				</h4>
				<p className="text-ellipsis line-clamp-2 text-neutral-400">
					{data.synopsis}
				</p>
				<div className="flex justify-between items-center mt-2 text-sm">
					<p className="text-neutral-300">{data.status}</p>
					<p>{data.score}+</p>
				</div>
			</div>
		</div>
	);
};


Card.propTypes = {
    data: PropType.object,
}

export default Card;
