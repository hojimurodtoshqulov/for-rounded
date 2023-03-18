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
			<h2>{t("certificates")}</h2>
			<div className="certificatesImages">
				<div className="certificatesImages__col1">
					<img src={img1} alt="" />
					
				</div>
				<div className="certificatesImages__col2">
					<div>
						<img className="certificatesImages__col2_img1" src={img2} alt="" />
					</div>
				</div>
				<div className="certificatesImages__col3">
					<img src={img3} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Certificates;
