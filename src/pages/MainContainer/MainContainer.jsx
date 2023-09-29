import React from "react";
import { useArticleData } from "../../useArticleData";
import QuestionInput from "../../components/QuestionInput/QuestionInput";
import Article from "../../components/Article/Article";
import Loader from "../../components/Loader/Loader";
import YouTubeCarousel from "../../components/YouTubeCarousel/YouTubeCarousel.jsx";
import { extractVideoIds } from "../../articleUtils";
import MainBar from "../../components/MainBar/MainBar";

const MainContainer = () => {
  const {
    articleTitle,
    articleImageUrl,
    articleBody,
    articleYoutubeVideos,
    isLoading,
    handleSubmit,
    handleEdit,
  } = useArticleData();

  return (
    <div>
      {isLoading && <Loader />}
      {articleTitle ? (
        <div>
          <button
            className="show-all-blogs-btn"
            onClick={() => window.location.reload()}
          >
            Create New Article
          </button>
          <Article
            title={articleTitle}
            image={articleImageUrl}
            body={articleBody}
            sections=""
            onEdit={handleEdit}
          />
          <YouTubeCarousel videoIds={extractVideoIds(articleYoutubeVideos)} />
        </div>
      ) : (
        <>
          <MainBar />
          <QuestionInput onSubmit={handleSubmit} />
        </>
      )}
    </div>
  );
};

export default MainContainer;
