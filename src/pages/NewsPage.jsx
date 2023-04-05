import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import CountryNewsNav from "../components/CountryNewsNav/CountryNewsNav";

const NewsPage = () => {
  // /news  + /ua -> /news/ua
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoBack = () => {
    console.log("go back");
    // navigate("/about");
    // navigate({ pathname: "/about", search: "color=red" });
    const prevPageLoacation = location.state;
    navigate(prevPageLoacation);
  };

  return (
    <>
      <Button title={"GoBack"} onClick={handleGoBack} />
      <CountryNewsNav />
      <Outlet />
    </>
  );
};

export default NewsPage;

// console.log('window.history :>> ', window.history);
