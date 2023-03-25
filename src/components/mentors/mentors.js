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
		<div className="mentorsImages" data-aos="fade-up">
			<h2>{t("mentors")}</h2>
			<div className="mentorsImages">
				<div className="mentorsImages__col1" data-aos="fade-right">
					<div className="mentorsImages__col1_imgDiv">
						<img src={img1} alt="" />
					</div>
					<h3>Alina</h3>
				</div>
				<div className="mentorsImages__col2" data-aos="fade-up">
					<div>
						<div className="mentorsImages__col2_imgDiv">
							<img className="mentorsImages__col2_img1" src={img2} alt="" />
						</div>
						<h3 className=" mentorsImages__col2_madina">Madina</h3>
					</div>
					<div>
						<div className="mentorsImages__col2_imgDiv">
							<img className="mentorsImages__col2_img2" src={img3} alt="" />
						</div>
						<h3>Arina</h3>
					</div>
				</div>
				<div className="mentorsImages__col3" data-aos="fade-left">
					<div className="mentorsImages__col3_imgDiv">
						<img src={img4} alt="" />
					</div>
					<h3>Andrey</h3>
				</div>
			</div>
			<div className="mentorsNumbers">
				<div className="mentorsNumbers__col " data-aos="fade-left">
					<div className="col">
						<h3>60 000</h3>
						<p>Lorem ipsum dolor sit amet.</p>
					</div>
				</div>
				<div className="mentorsNumbers__col " data-aos="fade-up">
					<div className="col">
						<h3>150+</h3>
						<p>Lorem ipsum dolor sit amet.</p>
					</div>
				</div>
				<div className="mentorsNumbers__col " data-aos="fade-right">
					<div className="col">
						<h3>183 000 </h3>
						<p>Lorem ipsum dolor sit amet.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Mentors;
