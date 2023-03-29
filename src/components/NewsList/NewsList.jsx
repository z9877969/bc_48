import PropTypes from "prop-types";
import s from "./NewsList.module.scss";

// 10 + 10 ->

const NewsList = ({ news, openModal }) => {
  return (
    <ul className={s.news}>
      {news.map((item, idx, arr) => (
        <li
          key={idx}
          className={s.item}
          onClick={() => openModal({ title: item.title, url: item.url })}
        >
          <img className={s.img} src={item.urlToImage} alt="" />
          <div className={s.textWrapper}>
            <h3 className={s.title}>{item.title}</h3>
            <p className={s.author}>{item.author}</p>
            <p className={s.date}>{item.publishedAt}</p>
            <p className={s.descr}>{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

NewsList.propTypes = {
  news: PropTypes.array.isRequired,
};

export default NewsList;
