import { Component, createRef } from "react";
import Button from "../Button/Button";
import NewsList from "../NewsList/NewsList";
import Modal from "../Modal/Modal";
// import news from "../../data/news.json";
import { getSearchedNewsApi } from "../../services/newsApi";

// = ({ query }) =>
class NewsPage extends Component {
  state = {
    news: [],
    page: 1,
    query: "",
    error: null,
    isLoading: false,
    // isModalOpen: false,
    modalData: null,
  };

  newsItemRef = createRef(null);

  componentDidMount() {
    console.log("newsItemRef   :>> ", this.newsItemRef);
  }

  static getDerivedStateFromProps(props, state) {
    if (state.query !== props.query) {
      return { page: 1, query: props.query };
    }
    return null;
  }

  async componentDidUpdate(prevProps, prevState) {
    const { page, query, news } = this.state;
    if (
      (prevProps.query !== query && query !== "") ||
      (prevState.page !== page && page !== 1)
    ) {
      // fetch(query) -> news
      this.setNews();
    }

    if (prevState.news !== news) {
      // window.scrollBy(0, window.innerHeight - 54);
      this.newsItemRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      console.log("ref :>> ", this.newsItemRef);
    }
  }

  setNews = async () => {
    const { page, query } = this.state;
    this.setState({ isLoading: true, error: null });

    try {
      const data = await getSearchedNewsApi(query, page);
      if (data.articles.length === 0) {
        throw new Error("No news data");
      }
      this.setState((prev) => ({
        // news: page === 1 ? data.newsList : [...prev.news, ...data.articles], // для тесту ErrorBoundary
        news: page === 1 ? data.articles : [...prev.news, ...data.articles],
      }));
    } catch (error) {
      // console.log(error.message);
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  changePage = () => {
    this.setState((prev) => ({ page: prev.page + 1 }));
  };

  openModal = (modalData) => {
    // console.log("modalData :>> ", modalData);
    this.setState({ modalData });
  };

  closeModal = () => {
    this.setState({ modalData: null });
  };

  render() {
    const { news, error, modalData } = this.state;
    return (
      <>
        {this.state.isLoading && <h1>Loading...</h1>}
        {error ? (
          <h2>{error}</h2>
        ) : (
          <>
            <NewsList
              news={news}
              newsItemRef={this.newsItemRef}
              openModal={this.openModal}
            />

            {news.length > 0 && <Button onClick={this.changePage} />}
          </>
        )}

        {modalData && <Modal {...modalData} closeModal={this.closeModal} />}
      </>
    );
  }
}

export default NewsPage;
