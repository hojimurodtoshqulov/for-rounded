import React, { Suspense } from "react";
import "../../scss/main.scss";
import "./company.scss";
import { Nav } from "../../components/navbar/nav";
import NavbarLinks from "../../components/navbar2/NavbarLinks";
import Footer from "../../components/footer/footer";
import ShowBg from "../../components/showBg/showBg";
import bgImg from "../../media/tz_header.jpeg";
import OurCompany from "../../components/info/ourCompany/ourCompany";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import img1 from "../../media/tz_us.png";
import { Axios } from "axios";
import Categories from "../../components/categories/categories";
const Company = () => {
	const getData = () => {
		Axios.get("https://cargo-stream.herokuapp.com/v2/api-docs")
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	const { t } = useTranslation();
	const handleClick = (e) => {
		i18next.changeLanguage(e.target.value);
	};
	const OurCompanyData2 = [
		{
			image: img1,
			description: t("aboutCompanyDescription1"),
		},
	];

	return (
		<Suspense fallback="loading">
			<div className="main company">
				<Nav onClick={(e) => handleClick(e)} />
				<input type="checkbox" id="navLinks__menu" />
				<NavbarLinks />
				<label htmlFor="navLinks__menu" className="navLinks__menu"></label>
				<ShowBg bgImage={bgImg} title={"Our company"} />
				<h2 className="page__title">{t("company")}</h2>
				<div className="infoDiv">
					<OurCompany OurCompanyData={OurCompanyData2} />
					<div>
						<Categories />
					</div>
				</div>
				<Footer />
			</div>
		</Suspense>
	);
};
export { Company };
