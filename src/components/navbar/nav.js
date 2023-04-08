import React, { Suspense } from "react";
import { useState, useEffect } from "react";
import navLogo from "../../media/tz_head.png";
import "./nav.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { WiStars } from "react-icons/wi";
import { FiChevronDown } from "react-icons/fi";
import ruLogo from "../../media/russianFlag.png";
const Nav = ({ onClick }) => {
	const [navSize, setnavSize] = useState("100px");
	const [navColorBg, setnavColorBg] = useState("transparent");
	const [navColor, setnavColor] = useState("#fff");
	const [navLogoFSZ, setNavLogoFSZ] = useState("12px");
	const [navContainerBR, setNavContainerBR] = useState("2px solid #fff");
	const listenScrollEvent = () => {
		window.scrollY > 150
			? setnavColorBg("#0e0e12f0")
			: setnavColorBg("transparent");
		window.scrollY > 150 ? setnavSize("80px") : setnavSize("110px");
		window.scrollY > 150 ? setNavLogoFSZ("9px") : setNavLogoFSZ("12px");
		window.scrollY > 150 ? setnavColor("#fff") : setnavColor("#fff");
		window.scrollY > 150
			? setNavContainerBR("2px solid #ff00")
			: setNavContainerBR("2px solid #fff");
	};
	const { t } = useTranslation();
	useEffect(() => {
		window.addEventListener("scroll", listenScrollEvent);
		return () => {
			window.removeEventListener("scroll", listenScrollEvent);
		};
	}, []);
	const [langCheck, setLangCheck] = useState(1);
	const langBtn = [
		{ btntitle: "Rus", img: ruLogo, id: 1 },
		{
			btntitle: "Eng",
			img: "https://vectorflags.s3.amazonaws.com/flags/uk-circle-01.png",
			id: 2,
		},
	];
	// const ref = useRef();
	const checkLangImg = (e) => {
		if (e.target.value === "en") {
			setLangCheck(2);
		} else {
			setLangCheck(1);
		}
	};
	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};
	return (
		<Suspense fallback="loading">
			<nav
				className="nav"
				style={{
					backgroundColor: navColorBg,
					height: navSize,
					transition: "all 0.8s",
				}}
			>
				<div
					className=" navContainer"
					style={{
						// borderBottom: navContainerBR,
					}}
				>
					<Link className="nav__logo" to="/">
						<img className="nav__logo-img" src={navLogo} alt="nav logo" />
						<h5 style={{ fontSize: navLogoFSZ }}>
							АКАДЕМИЯ ИСКУССТВА <br /> ПУБЛИЧНЫХ ВЫСТУПЛЕНИЙ <br />
							<span>ТИМУРА АРИПОВА</span>
						</h5>
					</Link>
					<div className="nav__elements">
						<div
							className="nav__elements-linksDiv"
							style={{
								color: navColor,
							}}
						>
							<ul className="nav__elements-linksDiv-ul">
								<li onClick={scrollToTop} className="nav__elements-linksDiv-ul-company">
									<Link to="/company">
										{t("company")}{" "}
										<span>
											<WiStars />
										</span>
									</Link>
									<div className="line_bottom"></div>
								</li>
								<li onClick={scrollToTop} className="nav__elements-linksDiv-ul-services">
									<Link to="/services">
										{t("service")}{" "}
										<span>
											<WiStars />
										</span>
									</Link>
									<div className="line_bottom"></div>
								</li>
								<li onClick={scrollToTop} className="nav__elements-linksDiv-ul-news">
									<Link to="/news">
										{t("news")}{" "}
										<span>
											<WiStars />
										</span>
									</Link>
									<div className="line_bottom"></div>
								</li>
								<li onClick={scrollToTop} className="nav__elements-linksDiv-ul-mentors">
									<Link to="/mentors">
										{t("mentors")}
										<span>
											<WiStars />
										</span>
									</Link>
									<div className="line_bottom"></div>
								</li>
								{console.log(langBtn)}
								<div className="lang">
									{langBtn?.map((item, index) =>
										item.id === langCheck ? (
											<p>
												<img src={item.img} alt="" />
												{t("langCheck")} <FiChevronDown />
											</p>
										) : null
									)}
									<div className="lang__check">
										<span onClick={checkLangImg} value={"en"}>
											<button
												className="lang__check-img eng"
												value={"en"}
												onClick={onClick}
												type="btn"
											>
												Eng
											</button>
										</span>
										<span onClick={checkLangImg} value={"ru"}>
											<button
												className="lang__check-img rus"
												value={"ru"}
												onClick={onClick}
												type="btn"
											>
												Rus
											</button>
										</span>
									</div>
								</div>
								<li onClick={scrollToTop} className="nav__elements-linksDiv-ul-contact">
									<Link to="/contact">
										{t("contact")}{" "}
										<span>
											<WiStars />
										</span>
									</Link>
									<div className="line_bottom"></div>
								</li>
							</ul>
						</div>
					</div>
					<div className="nav__mobile">
						<div className="nav__mobile-elements">
							<p>
								<a
									href="tel:+998 93 543 38 11"
									style={{
										color: navColor,
									}}
								>
									<i className="fa-solid fa-phone"></i>
								</a>
							</p>
							<p>
								<a
									href="mail:cargostreamuz@gmail.com"
									style={{
										color: navColor,
									}}
								>
									<i className="fa-solid fa-envelope"></i>
								</a>
							</p>
							<p
								style={{
									color: navColor,
								}}
							>
								<label htmlFor="navLinks__menu">
									<i className="fa-solid fa-bars-staggered"></i>
								</label>
							</p>
						</div>
					</div>
				</div>
			</nav>
		</Suspense>
	);
};
export { Nav };
