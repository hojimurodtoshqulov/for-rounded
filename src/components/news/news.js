import React from "react";
import "./news.scss";
import { useTranslation } from "react-i18next";
import img1 from "../../media/tz_news1.png";
import img2 from "../../media/tz_news2.png";

const News1 = () => {
	const { t } = useTranslation();
	return (
		<div className="newsDiv" data-aos="fade-up">
			<h2 data-aos="flip-up">{t("news")}</h2>
			<div className="newsDiv__cols">
				<div className="newsDiv__cols__col" data-aos="fade-right">
					<img className="newsDiv__cols__col-img1" src={img1} alt="" />
					<img className="newsDiv__cols__col-img2" src={img2} alt="" />
				</div>
				<div className="newsDiv__cols__col" data-aos="fade-left">
					<p className="newsDiv__cols__col-p">
						Lorem ipsum dolor sit amet consectetur. Urna semper urna viverra
						pellentesque volutpat et vitae. Consequat felis ut in pellentesque
						feugiat malesuada varius. Aliquam egestas orci dui est eu. Commodo
						lobortis dolor volutpat enim. Tempor interdum aliquet at lorem nisi.
						Amet nec vel donec aliquet rhoncus faucibus. Bibendum dictumst
						ullamcorper nulla.
					</p>
				</div>
			</div>
		</div>
	);
};

export default News1;
