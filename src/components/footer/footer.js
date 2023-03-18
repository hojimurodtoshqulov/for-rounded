import React from "react";
import "./footer.scss";
import footerLogo from "../../media/tz_head.png";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import Button from "../button/button";
import img1 from "../../media/tz_fb.png";
import img2 from "../../media/tz_tw.png";
import img3 from "../../media/tz_ins.png";
import img4 from "../../media/tz_in.png";
const Footer = () => {
	const handleClick = (e) => {
		i18next.changeLanguage(e.target.value);
	};
	const { t } = useTranslation();

	return (
		<footer data-aos="fade-up">
			<div className="footer__col col1" data-aos="fade-left">
				<Link className="nav__logo" to="/">
					<img className="nav__logo-img" src={footerLogo} alt="nav logo" />
					<h5>
						АКАДЕМИЯ ИСКУССТВА <br /> ПУБЛИЧНЫХ ВЫСТУПЛЕНИЙ <br />
						<span>ТИМУРА АРИПОВА</span>
					</h5>
				</Link>
				<h3>{t("education")}</h3>
				<p>{t("stages1Description")}</p>
			</div>
			<div className="footer__col col2" data-aos="fade-right">
				<Link to="/" data-aos="flip-up">
					<span>
						<FaChevronRight />
					</span>
					About Us
				</Link>
				<Link to="/" data-aos="flip-up">
					<span>
						<FaChevronRight />
					</span>
					Graduation
				</Link>
				<Link to="/" data-aos="flip-up">
					<span>
						<FaChevronRight />
					</span>
					Scholarship
				</Link>
				<Link to="/" data-aos="flip-up">
					<span>
						<FaChevronRight />
					</span>
					Admissions
				</Link>
				<Link to="/" data-aos="flip-up">
					<span>
						<FaChevronRight />
					</span>
					International
				</Link>
				<Link to="/" data-aos="flip-up">
					<span>
						<FaChevronRight />
					</span>
					Events
				</Link>
			</div>
			<div className="footer__col col2" data-aos="fade-left">
				<Link to="/" data-aos="flip-up">
					<span>
						<FaChevronRight />
					</span>
					Language
				</Link>
				<Link to="/" data-aos="flip-up">
					<span>
						<FaChevronRight />
					</span>
					WordPress
				</Link>
				<Link to="/" data-aos="flip-up">
					<span>
						<FaChevronRight />
					</span>
					Privacy
				</Link>
				<Link to="/" data-aos="flip-up">
					<span>
						<FaChevronRight />
					</span>
					FAQs
				</Link>
				<Link to="/" data-aos="flip-up">
					<span>
						<FaChevronRight />
					</span>
					Support
				</Link>
			</div>
			<div className="footer__col col4" data-aos="fade-right">
				<p>Звонок по Узбекистану бесплатный</p>
				<a href="tel:+998 (99) 99-99-99">+998 (99) 99-99-99</a>
				<Button buttonTitle={"Перезвоните нам"} />
				<div className="col4_img">
					<img src={img1} alt="" />
					<img src={img2} alt="" />
					<img src={img3} alt="" />
					<img src={img4} alt="" />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
