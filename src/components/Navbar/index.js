import style from "./style.module.css";
import Logo from "../../assets/images/Logo.png";

const Navbar = () => {
	return (
		<div className={style.navbar}>
			<img className={style.logo} src={Logo} alt="" />
		</div>
	);
};

export default Navbar;
