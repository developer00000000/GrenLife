import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageSection from "../../components/PageSection/" 
import i18next from "i18next";

function NewsDetailed() {
  const { newsId } = useParams();
  const [currentNews, setCurrentNews] = useState();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/blog-detail/${newsId}`)
      .then((res) => res.json())
      .then((data) => setCurrentNews(data));
  }, []);

  console.log(currentNews);

  if (!currentNews) {
    return <h1>Loading..</h1>;
  }

  return <div>
    <PageSection title={currentNews[`title_${i18next.language}`]}  pagePath={[]} text={<div>
      <img src={currentNews.image} />
      <p>{currentNews[`description_${i18next.language}`]}</p>
      <a href={currentNews.youtube_link}>Watch it on Youtube!</a>
    </div>} />
  </div>;
}

export default NewsDetailed;
