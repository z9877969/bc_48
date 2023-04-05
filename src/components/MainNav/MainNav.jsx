import clsx from "clsx";
import { NavLink, useLocation } from "react-router-dom";
import s from "./MainNav.module.scss";

const getACtiveClass = ({ isActive }) => clsx(s.link, isActive && s.active);

const MainNav = () => {
  const location = useLocation();

  console.log("location :>> ", location);

  return (
    <nav>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink className={getACtiveClass} to="/" end>
            Home
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={getACtiveClass} to="/about" end>
            About
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink
            className={getACtiveClass}
            to="/news?color=red"
            state={location}
          >
            News
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={getACtiveClass} to="/search-news">
            SearchedNews
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
