import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectorTheme } from "redux/theme/themeSelectors";
import { themeToggle } from "redux/theme/themeSlice";

const navStyle = {
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#b1ca8c",
};

const listStyle = {
  display: "flex",
  margin: "0 auto",
  padding: "16px 0",
  columnGap: "8px",
};

const itemStyle = { display: "flex" };

const linkStyle = {
  fontSize: "26px",
  padding: "12px 24px",
  backgroundColor: "green",
  border: "1px solid red",
  borderRadius: "4px",
  color: "white",
  textDecoration: "none",
  transition: "fontSize 1s linear",
};

const getLinkActiveStyle = ({ isActive }) =>
  isActive
    ? {
        ...linkStyle,
        color: "yellow",
        fontSize: "30px",
        fontWeight: "bold",
        border: "2.5px solid blue",
      }
    : linkStyle;

const MainNav = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectorTheme);

  return (
    <nav style={navStyle}>
      <button onClick={() => dispatch(themeToggle())}>
        ThemeToggle - {theme}
      </button>
      <ul style={listStyle}>
        <li style={itemStyle}>
          <NavLink style={getLinkActiveStyle} to="/todo">
            Todo
          </NavLink>
        </li>
        <li style={itemStyle}>
          <NavLink style={getLinkActiveStyle} to="/counter">
            Counter
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
