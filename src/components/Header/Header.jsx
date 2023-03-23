import s from "./Header.module.css";
import logo from "../../assets/img/logo.png";
import sprite from "../../assets/icons/sprite.svg";

// console.log("sprite :>> ", sprite);

// console.log("style :>> ", s);

const Header = () => {
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
        <button type="button" className={s.btnCart}>
          <svg>
            <use href={sprite + "#icon-cart"}></use>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
