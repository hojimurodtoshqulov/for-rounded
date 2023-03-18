import React from "react";
import "./mentors.scss";
import { useTranslation } from "react-i18next";
import img1 from "../../media/tz_alina.png";
import img2 from "../../media/tz_madina.png";
import img3 from "../../media/tz_arina.png";
import img4 from "../../media/tz_andrey.png";
const Mentors = () => {
	const { t } = useTranslation();
	return (
		<div className="mentorsImages">
			<h2>{t("mentors")}</h2>
			<div className="mentorsImages">
				<div className="mentorsImages__col1">
					<img src={img1} alt="" />
					<h3>Alina</h3>
				</div>
				<div className="mentorsImages__col2">
					<div>
						<img className="mentorsImages__col2_img1" src={img2} alt="" />
						<h3 className=" mentorsImages__col2_madina">Madina</h3>
					</div>
					<div >
						<img className="mentorsImages__col2_img2" src={img3} alt="" />
						<h3 >Arina</h3>
					</div>
				</div>
				<div className="mentorsImages__col3">
					<img src={img4} alt="" />
					<h3>Andrey</h3>
				</div>
			</div>
			<div className="mentorsNumbers">
				<div className="mentorsNumbers__col">
					<h3>60 000</h3>
					<p>Lorem ipsum dolor sit amet.</p>
				</div>
				<div className="mentorsNumbers__col">
					<h3>150+</h3>
					<p>Lorem ipsum dolor sit amet.</p>
				</div>
				<div className="mentorsNumbers__col">
					<h3>183 000 </h3>
					<p>Lorem ipsum dolor sit amet.</p>
				</div>
			</div>
		</div>
	);
};

export default Mentors;
