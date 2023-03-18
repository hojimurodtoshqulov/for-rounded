import "../nav.scss";
const CallLink = () => {
	return (
		<div className="nav__elements-callsDiv-calls">
			<a href="tel:+998 93 543 38 11">
				<i className="fa-solid fa-phone"></i>
			</a>
			<div className="nav__elements-callsDiv-calls-numbers">
				<a href="tel:+998 93 543 38 11">+998 99 999 99 99</a>
				<a href="tel:+998 97 758 25 00">+998 99 999 99 99</a>
			</div>
		</div>
	);
};

export default CallLink;
