import { NavLink, Outlet } from "react-router-dom";

const NewsPage = () => {
  return (
    <>
      <h1>NewsPage</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="ua">UA</NavLink>
          </li>
          <li>
            <NavLink to="us">US</NavLink>
          </li>
          <li>
            <NavLink to="pl">PL</NavLink>
          </li>
          <li>
            <NavLink to="fr">FR</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default NewsPage;
