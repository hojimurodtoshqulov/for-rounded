import scss from "./header.module.scss";
import { Link } from "react-router-dom";
import img2 from "../../media/tz_fingerprint.png";
import img3 from "../../media/tz_ellipse.png";
import img4 from "../../media/tz_arrow.png";
import Button from "../button/button";
const Header = () => {
	return (
		<div className={scss.header}>
			<div className={scss.header__col1} data-aos="fade-right"></div>
			<div className={scss.header__col2} data-aos="fade-up-left">
				<img
					src={img2}
					alt="bla"
					data-aos="flip-left"
					data-aos-easing="ease-out-cubic"
					data-aos-duration="2000"
				/>
			</div>
			<div
				className={scss.header__elements}
				data-aos="zoom-in"
				data-aos-duration="2000"
			>
				<div data-aos="fade-left" data-aos-delay="1000" className={scss.img3}>
					<img src={img3} alt="img3" />
				</div>
				<div data-aos="fade-down" data-aos-delay="1000" className={scss.img4}>
					<img src={img4} alt="img4" />
				</div>
				<h1>Lorem ipsum dolor sit amet</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur. Tincidunt aliquet dictum
					sodales bibendum etiam viverra mollis amet. Urna sed molestie auctor
					nisi.
				</p>
				<div className={scss.header__elements_buttons} data-aos="flip-up" data-aos-delay="1000">
					<Button buttonTitle={"Lorem, ipsum dolor"} />
					<Link to="/news">Lorem, ipsum dolor</Link>
				</div>
			</div>
		</div>
	);
};

export default Header;
