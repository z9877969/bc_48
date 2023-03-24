import PropTypes from "prop-types";
import logo from "../../assets/img/logo.png";
import sprite from "../../assets/icons/sprite.svg";
import s from "./Header.module.css";

const Header = ({ handleCartOpen }) => {
  return (
    <header className={s.container}>
      <a href="/" className={s.logo}>
        <img src={logo} alt="" />
      </a>
      <div className={s["user-info"]}>
        <span className={s.userName}>B</span>
        <span className={s.userEmail}>user@mail.com</span>
      </div>
      <div className={s.cartInfo}>
        <button onClick={handleCartOpen} type="button" className={s.btnCart}>
          <svg>
            <use href={sprite + "#icon-cart"}></use>
          </svg>
        </button>
      </div>
    </header>
  );
};

Header.propTypes = {
  handleCartOpen: PropTypes.func.isRequired,
};

export default Header;
