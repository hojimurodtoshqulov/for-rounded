import React, { Suspense } from "react";
import "../../scss/main.scss";
import "./services.scss";
import { Nav } from "../../components/navbar/nav";
import NavbarLinks from "../../components/navbar2/NavbarLinks";
import Footer from "../../components/footer/footer";
import ShowBg from "../../components/showBg/showBg";
import bgImg from "../../media/tz_kurs1.png";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import Carousel from "../../components/carousel/carousel";
import Categories from "../../components/categories/categories";
const Services = () => {
	const { t } = useTranslation();
	const handleClick = (e) => {
		i18next.changeLanguage(e.target.value);
	};
	return (
		<Suspense fallback="loading">
			<div className="main services">
				<Nav onClick={(e) => handleClick(e)} />
				<input type="checkbox" id="navLinks__menu" />
				<NavbarLinks />
				<label htmlFor="navLinks__menu" className="navLinks__menu"></label>
				<ShowBg bgImage={bgImg} />
				<h2 className="page__title">{t("service")}</h2>
				<div className="wrapper">
					<Carousel />
					<Categories />
				</div>
				<Footer />
			</div>
		</Suspense>
	);
};
export { Services };
