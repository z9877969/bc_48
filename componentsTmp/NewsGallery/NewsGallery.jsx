import Button from "../Button/Button";
import NewsList from "../NewsList/NewsList";
import news from "../../data/news.json";

const NewsGallery = () => {
  return (
    <div style={{paddingBottom: "30px"}}>
      <NewsList news={news} />

      {news.length > 0 && <Button title={"Load More"} />}
    </div>
  );
};

export default NewsGallery;
