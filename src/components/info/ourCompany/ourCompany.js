import React, { Suspense } from "react";
import "../info.scss";
import Button from "../../button/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const OurCompany = ({ OurCompanyData }) => {
	const { t } = useTranslation();
	return (
		<Suspense fallback="loading">
			<div className="info">
				<div className="wrapper">
					{OurCompanyData.map((item, index) => {
						return (
							<div className="info-elements" key={index} data-aos="fade-up">
								<h2 className="info-elements-mb-title">{item.title}</h2>
								<div
									className="info-titles-div"
									data-aos="fade-right"
									data-aos-duration="1000"
								>
									<h2>{item.title}</h2>
									<p>
										Lorem ipsum dolor sit amet consectetur. Urna semper urna
										viverra pellentesque volutpat et vitae. Consequat felis ut
										in pellentesque feugiat malesuada varius. Aliquam egestas
										orci dui est eu. Commodo lobortis dolor volutpat enim.
										Tempor interdum aliquet at lorem nisi. Amet nec vel donec
										aliquet rhoncus faucibus. Bibendum dictumst ullamcorper
										nulla.
									</p>
								</div>
								<div
									className="info-img-div"
									data-aos="fade-left"
									data-aos-duration="1000"
								>
									<img src={item.image} alt="company" />
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</Suspense>
	);
};

export default OurCompany;
