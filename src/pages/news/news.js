import React, { Suspense } from "react";
import "../../scss/main.scss";
import "./news.scss";
import { Nav } from "../../components/navbar/nav";
import NavbarLinks from "../../components/navbar2/NavbarLinks";
import Footer from "../../components/footer/footer";
import ShowBg from "../../components/showBg/showBg";
import bgImg from "../../media/tz_news1.png";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import News1 from "../../components/news/news";
import Categories from "../../components/categories/categories";
const News = () => {
	const { t } = useTranslation();
	const handleClick = (e) => {
		i18next.changeLanguage(e.target.value);
	};


	return (
		<Suspense fallback="loading...">
			<div className="main news">
				<Nav onClick={(e) => handleClick(e)} />
				<input type="checkbox" id="navLinks__menu" />
				<NavbarLinks />
				<label htmlFor="navLinks__menu" className="navLinks__menu"></label>
				<ShowBg bgImage={bgImg} title={"News"} />
				<h2 className="page__title">{t("news")}</h2>
				<div
					className="newses wrapper"
					data-aos="zoom-in-up"
					data-aos-duration="1000"
				>
					<News1 />
					<div>
						<Categories />
					</div>
				</div>
				<Footer />
			</div>
		</Suspense>
	);
};
export { News };
