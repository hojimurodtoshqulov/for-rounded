import React, { Suspense } from "react";
import { Nav } from "../../components/navbar/nav";
import NavbarLinks from "../../components/navbar2/NavbarLinks";
import "../../scss/main.scss";
import "./home.scss";
import OurCompany from "../../components/info/ourCompany/ourCompany";
import "aos/dist/aos.css";
import Footer from "../../components/footer/footer";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import us from "../../media/tz_us.png";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/header/header";
import Light from "../../components/light/light";
import Categories from "../../components/categories/categories";
import fingerprintR from "../../media/tz_fingerprint_right.png";
import fingerprintL from "../../media/tz_fingerprint_left.png";
import Carousel from "../../components/carousel/carousel";
import Mentors from "../../components/mentors/mentors";
import News1 from "../../components/news/news";
import Certificates from "../../components/certificates/certificates";
import Submit from "../../components/submitApp/submit";

const Home = () => {
	const handleClick = (e) => {
		i18next.changeLanguage(e.target.value);
	};
	const { t } = useTranslation();
	const OurCompanyData = [
		{
			image: us,
			title: t("infoCompany"),
			description: t("infoCompanyDescription"),
			buttonTitle: t("infoBtn"),
		},
	];
	const StagesData = [
		{
			aos: "fade-left",
			orderNumber: "01",
			title: t("stages1Title"),
			description: t("stages1Description"),
			key: 0,
		},
		{
			aos: "fade-right",
			orderNumber: "02",
			title: t("stages2Title"),
			description: t("stages2Description"),
			key: 1,
		},
		{
			aos: "fade-left",
			orderNumber: "03",
			title: t("stages3Title"),
			description: t("stages3Description"),
			key: 2,
		},
	];
	const successSubmit = (success) => success;
	return (
		<Suspense fallback="loading">
			<div className="main home">
				<Nav onClick={(e) => handleClick(e)} />
				<input type="checkbox" id="navLinks__menu" />
				<NavbarLinks />
				<label htmlFor="navLinks__menu" className="navLinks__menu"></label>
				<Header />
				<div className="infoDiv">
					<OurCompany OurCompanyData={OurCompanyData} />
					<Light />
				</div>
				<div className="categories">
					<Categories />
					<img
						className="categories__fingerprintR"
						src={fingerprintR}
						alt="fingerprintL"
					/>
					<Light />
				</div>
				{/* <div id="submitDesctop" className="stages-elements">
					<div className="wrapper">
						<div
							className="stages-elements-col1"
							data-aos="fade-left"
							data-aos-duration="1000"
						>
							<Stages stagesData={StagesData} />
						</div>
						<div
							className="stages-elements-col2"
							data-aos="fade-left"
							data-aos-duration="1000"
						>
							<Submit success={successSubmit} />
						</div>
					</div>
				</div> */}
				<div className="courses">
					<Carousel />
					<Light />
					<img className="courses_fingerprintL" src={fingerprintL} alt="" />
				</div>
				<div className="mentorsDiv">
					<Mentors />
					<img
						className="mentorsDiv__fingerprintR"
						src={fingerprintR}
						alt="fingerprintL"
					/>
					<Light />
				</div>
				<div className="newsDiv">
					<News1 />
				</div>
				<div className="Certificates">
					<Certificates />
					<Light />
					<img className="courses_fingerprintL" src={fingerprintL} alt="" />
				</div>

				<div className="Submit">
					<Submit />
				</div>
				<Footer />
			</div>
			<div className="success">
				<ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="light"
				/>
			</div>
		</Suspense>
	);
};
export { Home };
