import { useDispatch, useSelector } from "react-redux";

import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { logout } from "redux/auth/authSlice";
import s from "./MainNav.module.scss";
import { selectorIsAuth } from "redux/auth/authSelectors";
import { selectorTheme } from "redux/theme/themeSelectors";
import { themeToggle } from "redux/theme/themeSlice";

const getLinkActiveClass = ({ isActive }) => clsx(s.link, isActive && s.active);

const MainNav = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectorTheme);
  const isAuth = useSelector(selectorIsAuth);

  return (
    <nav className={s.nav}>
      <button
        className={clsx(s.btnToggle, theme === "dark" && s.dark)}
        onClick={() => dispatch(themeToggle())}
      >
        ThemeToggle <br />
        <span>{theme}</span>
      </button>
      <ul className={s.list}>
        {isAuth ? (
          <>
            <li className={s.item}>
              <NavLink className={getLinkActiveClass} to="/todo">
                Todo
              </NavLink>
            </li>
            <li className={s.item}>
              <NavLink className={getLinkActiveClass} to="/counter">
                Counter
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li className={s.item}>
              <NavLink className={getLinkActiveClass} to="/login">
                Login
              </NavLink>
            </li>
            <li className={s.item}>
              <NavLink className={getLinkActiveClass} to="/register">
                Register
              </NavLink>
            </li>
          </>
        )}
      </ul>
      {isAuth && (
        <button
          className={clsx(s.btnToggle, theme === "dark" && s.dark)}
          onClick={() => dispatch(logout())}
        >
          Logout
        </button>
      )}
    </nav>
  );
};

export default MainNav;
