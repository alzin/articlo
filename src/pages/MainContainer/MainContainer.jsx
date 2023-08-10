import React from "react";
import { Link } from "react-router-dom";
import { useArticleData } from "../../useArticleData";
import QuestionInput from "../../components/QuestionInput/QuestionInput";
import Article from "../../components/Article/Article";
import Loader from "../../components/Loader/Loader";
import YouTubeCarousel from "../../components/YouTubeCarousel/YouTubeCarousel.jsx";
import { extractVideoIds } from "../../articleUtils";
import Logout from "../../components/Logout/Logout.jsx";
import "./MainContainer.css";
import { Button } from "reactstrap";

const App = () => {
  const {
    articleTitle,
    articleImageUrl,
    articleBody,
    articleYoutubeVideos,
    isLoading,
    handleSubmit,
    handleEdit,
  } = useArticleData();

  const goToArticles = () => {
    window.location.href = "/articles";
  };

  return (
    <div>
      {isLoading && <Loader />}
      {articleTitle ? (
        <>
          <Article
            title={articleTitle}
            image={articleImageUrl}
            body={articleBody}
            sections=""
            onEdit={handleEdit}
          />
          <YouTubeCarousel videoIds={extractVideoIds(articleYoutubeVideos)} />
        </>
      ) : (
        <>
          <nav className="nav-container">
            <div className="logo">
              <Link to="/">Articlo</Link>
            </div>
            <Button color="primary" size="lg" outline onClick={goToArticles}>
              My Articles
            </Button>
            <Logout />
          </nav>
          <QuestionInput onSubmit={handleSubmit} />
        </>
      )}
    </div>
  );
};

export default App;
