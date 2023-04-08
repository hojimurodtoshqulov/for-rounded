import React from "react";
import "./carousel.scss";
import img1 from "../../media/tz_kurs1.png";
import img2 from "../../media/tz_kurs2.png";
import img3 from "../../media/tz_kurs3.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HiArrowLongRight } from "react-icons/hi2";
import Button from "../button/button";
const Carousel = () => {
	const { t } = useTranslation();
	const dataCards = [
		{
			img: img1,
			title: " Lorem ipsum dolor sit amet",
			description:
				"Lorem ipsum dolor sit amet consectetur. Amet donec rutrum habitasse eu interdum dignissim arcu. ",
			arrowR: <HiArrowLongRight />,
		},
		{
			img: img2,
			title: " Lorem ipsum dolor sit amet",
			description:
				"Lorem ipsum dolor sit amet consectetur. Amet donec rutrum habitasse eu interdum dignissim arcu. ",
			arrowR: <HiArrowLongRight />,
		},
		{
			img: img3,
			title: " Lorem ipsum dolor sit amet",
			description:
				"Lorem ipsum dolor sit amet consectetur. Amet donec rutrum habitasse eu interdum dignissim arcu. ",
			arrowR: <HiArrowLongRight />,
		},
		{
			img: img1,
			title: " Lorem ipsum dolor sit amet",
			description:
				"Lorem ipsum dolor sit amet consectetur. Amet donec rutrum habitasse eu interdum dignissim arcu. ",
			arrowR: <HiArrowLongRight />,
		},
		{
			img: img2,
			title: " Lorem ipsum dolor sit amet",
			description:
				"Lorem ipsum dolor sit amet consectetur. Amet donec rutrum habitasse eu interdum dignissim arcu. ",
			arrowR: <HiArrowLongRight />,
		},
		{
			img: img3,
			title: " Lorem ipsum dolor sit amet",
			description:
				"Lorem ipsum dolor sit amet consectetur. Amet donec rutrum habitasse eu interdum dignissim arcu. ",
			arrowR: <HiArrowLongRight />,
		},
		{
			img: img1,
			title: " Lorem ipsum dolor sit amet",
			description:
				"Lorem ipsum dolor sit amet consectetur. Amet donec rutrum habitasse eu interdum dignissim arcu. ",
			arrowR: <HiArrowLongRight />,
		},
		{
			img: img2,
			title: " Lorem ipsum dolor sit amet",
			description:
				"Lorem ipsum dolor sit amet consectetur. Amet donec rutrum habitasse eu interdum dignissim arcu. ",
			arrowR: <HiArrowLongRight />,
		},
		{
			img: img3,
			title: " Lorem ipsum dolor sit amet",
			description:
				"Lorem ipsum dolor sit amet consectetur. Amet donec rutrum habitasse eu interdum dignissim arcu. ",
			arrowR: <HiArrowLongRight />,
		},
		{
			img: img1,
			title: " Lorem ipsum dolor sit amet",
			description:
				"Lorem ipsum dolor sit amet consectetur. Amet donec rutrum habitasse eu interdum dignissim arcu. ",
			arrowR: <HiArrowLongRight />,
		},
		{
			img: img2,
			title: " Lorem ipsum dolor sit amet",
			description:
				"Lorem ipsum dolor sit amet consectetur. Amet donec rutrum habitasse eu interdum dignissim arcu. ",
			arrowR: <HiArrowLongRight />,
		},
		{
			img: img3,
			title: " Lorem ipsum dolor sit amet",
			description:
				"Lorem ipsum dolor sit amet consectetur. Amet donec rutrum habitasse eu interdum dignissim arcu. ",
			arrowR: <HiArrowLongRight />,
		},
		{
			img: img1,
			title: " Lorem ipsum dolor sit amet",
			description:
				"Lorem ipsum dolor sit amet consectetur. Amet donec rutrum habitasse eu interdum dignissim arcu. ",
			arrowR: <HiArrowLongRight />,
		},
		{
			img: img2,
			title: " Lorem ipsum dolor sit amet",
			description:
				"Lorem ipsum dolor sit amet consectetur. Amet donec rutrum habitasse eu interdum dignissim arcu. ",
			arrowR: <HiArrowLongRight />,
		},
		{
			img: img3,
			title: " Lorem ipsum dolor sit amet",
			description:
				"Lorem ipsum dolor sit amet consectetur. Amet donec rutrum habitasse eu interdum dignissim arcu. ",
			arrowR: <HiArrowLongRight />,
		},
		{
			img: img1,
			title: " Lorem ipsum dolor sit amet",
			description:
				"Lorem ipsum dolor sit amet consectetur. Amet donec rutrum habitasse eu interdum dignissim arcu. ",
			arrowR: <HiArrowLongRight />,
		},
		{
			img: img2,
			title: " Lorem ipsum dolor sit amet",
			description:
				"Lorem ipsum dolor sit amet consectetur. Amet donec rutrum habitasse eu interdum dignissim arcu. ",
			arrowR: <HiArrowLongRight />,
		},
		{
			img: img3,
			title: " Lorem ipsum dolor sit amet",
			description:
				"Lorem ipsum dolor sit amet consectetur. Amet donec rutrum habitasse eu interdum dignissim arcu. ",
			arrowR: <HiArrowLongRight />,
		},
	];
	return (
		<div className="sectionSlides" data-aos="fade-up">
			<div className="slider">
				<h2 data-aos="flip-up" data-aos-duration="500">
					{t("service")}
				</h2>
				<div className="slide_track">
					{dataCards?.map((item, index) => (
						<Link to="/services" className="slide" key={index}>
							<img src={item.img} alt="" />
							<div className="titlesDiv">
								<h5>{item.title}</h5>
								<p>
									20 <br /> марта
								</p>
							</div>
							<p>{item.description}</p>
							<div className="arrowDiv">
								<Link to="/services">
									<span>{item.arrowR}</span>
								</Link>
							</div>
						</Link>
					))}
				</div>
				<Link to="/services"><Button buttonTitle={"ВСЕ КУРСЫ"} /></Link>
			</div>
		</div>
	);
};

export default Carousel;
