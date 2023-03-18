import React from "react";
import "./navbarLinks.scss";
import navLogo from "../../media/tz_head.png";
import CallLink from "../navbar/callLinks/callLinks";
import MailLang from "../navbar/mail-lang/mail-lang";
import { Link } from "react-router-dom";
import i18next from "i18next";
import { HiUsers } from "react-icons/hi";
import { useTranslation } from "react-i18next";
export default function NavbarLinks({ params }) {
	const { t } = useTranslation();
	const handleClick = (e) => {
		i18next.changeLanguage(e.target.value);
	};
	return (
		<div className="nav__links">
			<Link className="nav__logo" to="/">
				<img className="nav__logo-img" src={navLogo} alt="nav logo" />
				<h5>
					АКАДЕМИЯ ИСКУССТВА <br /> ПУБЛИЧНЫХ ВЫСТУПЛЕНИЙ <br />
					<span>ТИМУРА АРИПОВА</span>
				</h5>
			</Link>
			<ul className="nav__links-menu">
				<Link to="/">
					<i class="fa-solid fa-house"></i>
					{t("home")}
				</Link>

				<Link to="/company">
					<i className="fa-solid fa-building"></i>
					{t("company")}
				</Link>

				<Link to="/services">
					<i className="fa-solid fa-dragon"></i>
					{t("service")}
				</Link>

				<Link to="/news">
					<i className="fa-solid fa-newspaper"></i>
					{t("news")}
				</Link>

				<Link to="/mentors">
					<span>
						<HiUsers />
					</span>
					{t("mentors")}
				</Link>
				<Link to="/contact">
					<i className="fa-solid fa-address-book"></i>
					{t("contact")}
				</Link>
			</ul>
			<div className="nav__links-mobileElements">
				<CallLink />
				<ul className="nav__links-mobileElements-media">
					<a href="">
						<i class="fa-brands fa-telegram"></i>
					</a>

					<a href="">
						<i class="fa-brands fa-instagram"></i>
					</a>

					<a href="">
						<i class="fa-brands fa-facebook"></i>
					</a>
				</ul>
				<MailLang onClick={(e) => handleClick(e)} />
			</div>
		</div>
	);
}
