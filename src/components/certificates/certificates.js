import React from "react";
import "./certificates.scss";
import { useTranslation } from "react-i18next";
import img1 from "../../media/tz_crtf1.png";
import img2 from "../../media/tz_crtf2.png";
import img3 from "../../media/tz_alina.png";
const Certificates = () => {
	const { t } = useTranslation();
	return (
		<div className="certificatesImages">
			<h2 data-aos="flip-up">{t("certificates")}</h2>
			<div className="certificatesImages" data-aos="fade-up">
				<div className="certificatesImages__col1" data-aos="flip-right">
					<img src={img1} alt="" />
				</div>
				<div className="certificatesImages__col2" data-aos="flip-up">
					<div>
						<img className="certificatesImages__col2_img1" src={img2} alt="" />
					</div>
				</div>
				<div className="certificatesImages__col3" data-aos="flip-left">
					<img src={img3} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Certificates;
