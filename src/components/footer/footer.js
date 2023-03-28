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
				<div className="col2__div">
					<Link to="/" >
						<span>
							<FaChevronRight />
						</span>
						About Us
					</Link>
				</div>
				<div className="col2__div">
					<Link to="/" >
						<span>
							<FaChevronRight />
						</span>
						Graduation
					</Link>
				</div>
				<div className="col2__div">
					<Link to="/" >
						<span>
							<FaChevronRight />
						</span>
						Scholarship
					</Link>
				</div>
				<div className="col2__div">
					<Link to="/" >
						<span>
							<FaChevronRight />
						</span>
						Admissions
					</Link>
				</div>
				<div className="col2__div">
					<Link to="/" >
						<span>
							<FaChevronRight />
						</span>
						International
					</Link>
				</div>
				<div className="col2__div">
					<Link to="/" >
						<span>
							<FaChevronRight />
						</span>
						Events
					</Link>
				</div>
			</div>
			<div className="footer__col col2" data-aos="fade-left">
				<div className="col2__div">
					<Link to="/" >
						<span>
							<FaChevronRight />
						</span>
						Language
					</Link>
				</div>
				<div className="col2__div">
					<Link to="/" >
						<span>
							<FaChevronRight />
						</span>
						WordPress
					</Link>
				</div>
				<div className="col2__div">
					<Link to="/" >
						<span>
							<FaChevronRight />
						</span>
						Privacy
					</Link>
				</div>
				<div className="col2__div">
					<Link to="/" >
						<span>
							<FaChevronRight />
						</span>
						FAQs
					</Link>
				</div>
				<div className="col2__div">
					<Link to="/" >
						<span>
							<FaChevronRight />
						</span>
						Support
					</Link>
				</div>
			</div>
			<div className="footer__col col4" data-aos="fade-right">
				<p>Звонок по Узбекистану бесплатный</p>
				<a href="tel:+998 (99) 99-99-99">+998 (99) 99-99-99</a>
				<Button buttonTitle={"Перезвоните нам"} />
				<div className="col4_img">
					<Link to="/">
						<img src={img1} alt="" />
					</Link>
					<Link to="/">
						<img src={img2} alt="" />
					</Link>
					<Link to="/">
						<img src={img3} alt="" />
					</Link>
					<Link to="/">
						<img src={img4} alt="" />
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
