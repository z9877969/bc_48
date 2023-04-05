import { NavLink, useLocation } from "react-router-dom";

const listStyles = {
  display: "flex",
  justifyContent: "center",
  columnGap: "8px",
};

const linkStyles = {
  fontSize: "26px",
  padding: "10px 16px",
  textDecoration: "none",
  border: "1px solid red",
  borderRadius: "4px",
  backgroundColor: "lightblue",
  color: "white",
};

const getLinkStyles = ({ isActive }) =>
  isActive
    ? {
        ...linkStyles,
        backgroundColor: "yellow",
        color: "blue",
        borderColor: "green",
      }
    : linkStyles;

const CountryNewsNav = () => {
  const location = useLocation();

  console.log("location_NewsNaw :>> ", location.state);

  return (
    <>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Choosed country news:
      </h2>
      <nav style={{ marginBottom: "24px" }}>
        <ul style={listStyles}>
          <li>
            <NavLink style={getLinkStyles} to="ua" state={location.state}>
              UA
            </NavLink>
          </li>
          <li>
            <NavLink style={getLinkStyles} to="us" state={location.state}>
              US
            </NavLink>
          </li>
          <li>
            <NavLink style={getLinkStyles} to="pl" state={location.state}>
              PL
            </NavLink>
          </li>
          <li>
            <NavLink style={getLinkStyles} to="fr" state={location.state}>
              FR
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default CountryNewsNav;
