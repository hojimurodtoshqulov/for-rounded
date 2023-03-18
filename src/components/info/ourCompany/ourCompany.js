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
								>
									<h2>{item.title}</h2>
									<p>{item.description}</p>
								</div>
								<div
									className="info-img-div"
									data-aos="fade-left"
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
