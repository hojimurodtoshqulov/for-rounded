import scss from "./categories.module.scss";
import img1 from "../../media/tz_categ1.jpg";
import img2 from "../../media/tz_categ2.jpg";
import img3 from "../../media/tz_categ3.jpg";
import img4 from "../../media/tz_categ4.jpg";
import { Link } from "react-router-dom";
const Categories = () => {
	const categData = [
		{
			img: img1,
			link: "/",
			description: "Lorem ipsum dolor sit amet",
			aos: "flip-left",
		},
		{
			img: img2,
			link: "/",
			description: "Lorem ipsum dolor sit amet",
			aos: "flip-right",
		},
		{
			img: img3,
			link: "/",
			description: "Lorem ipsum dolor sit amet",
			aos: "flip-left",
		},
		{
			img: img4,
			link: "/",
			description: "Lorem ipsum dolor sit amet",
			aos: "flip-right",
		},
	];
	return (
		<div className={scss.categories} data-aos="fade-up">
			{categData?.map((item, index) => (
				<Link to={item.link} key={index} data-aos={item.aos} data-aos-duration="3000">
					<img src={item.img} alt="img1" />
					<p>{item.description}</p>
				</Link>
			))}
		</div>
	);
};

export default Categories;
