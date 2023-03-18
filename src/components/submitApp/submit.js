import React, { useState } from "react";
import Button from "../button/button";
import "./submit.scss";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Submit = ({ onClose, success }) => {
	const { t } = useTranslation();
// t("submitSuccess"),
	success = () =>
		toast.success(t("submitSuccess"), {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});

	const [data, setData] = useState({
		phone: "",
		price: "",
		product: "",
		comment: "",
	});
	function handle(e) {
		const newData = { ...data };
		newData[e.target.id] = e.target.value;
		setData(newData);
		console.log(newData);
	}
	const submit = async (e) => {
		e.preventDefault();

		setData({
			phone: "",
			price: "",
			product: "",
			comment: "",
		});
	};
	return (
		<>
			<div className="submit">
				<h2>{t("submitTitle")}</h2>
				<form action="" className="form" onSubmit={(e) => submit(e)}>
					<input
						className="input-tell form-control"
						onChange={(e) => handle(e)}
						id="phone"
						value={data.phone}
						type="text"
						placeholder={t("submitPhone")}
						required
					/>
					{/* {console.log("data phone ----> ", data.phone)} */}
					<input
						className="input-price form-control"
						onChange={(e) => handle(e)}
						id="price"
						value={data.price}
						type="text"
						placeholder={t("submitPrice")}
						required
					/>
					<input
						className="input-name form-control"
						onChange={(e) => handle(e)}
						id="product"
						value={data.product}
						type="mail"
						placeholder={t("submitProduct")}
						required
					/>
					<span
						onClick={
							(data.phone && data.price && data.product) ||
							(data.phone && data.price && data.product && data.comment) !== ""
								? success
								: null
						}
					>
						<Button buttonTitle={t("submitTitle")} />
					</span>
				</form>
			</div>
		</>
	);
};
export default Submit;
