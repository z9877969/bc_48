import clsx from "clsx";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import s from "./Nav.module.scss";

const ActiveNavLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 16px 24px;
  background-color: green;
  font-size: 28px;
  text-decoration: none;
  border-radius: 4px;
  color: #fff;

  &.active {
    color: yellow;
    outline: 2px solid blue;
  }
`;

const Nav = () => {
  return (
    <nav>
      <ul className={s.list}>
        <li className={s.item}>
          {/* <NavLink
            className={({ isActive }) => clsx(s.link, isActive && s.active)}
            // style={({ isActive }) => (isActive ? { color: "red" } : null)}
            to="/"
          >
            Home
          </NavLink> */}
          <ActiveNavLink to="/">Home</ActiveNavLink>
        </li>
        <li className={s.item}>
          <NavLink
            className={({ isActive }) => clsx(s.link, isActive && s.active)}
            // className={s.link}
            to="/about"
            end
          >
            About
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink
            className={({ isActive }) => clsx(s.link, isActive && s.active)}
            to="/news"
          >
            News
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink
            className={({ isActive }) => clsx(s.link, isActive && s.active)}
            to="/products-list"
          >
            Products
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

// const Item = ({ title, className }) => {
//   return <li className={className}>{title}</li>;
// };

// <Item title={"qwe"} className="item-class" />;
