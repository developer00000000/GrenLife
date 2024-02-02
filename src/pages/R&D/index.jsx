import PageSection from "../../components/PageSection";
import productionImage from "../../assets/bg-ar-ge.jpg";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import NewsCard from "../../components/NewsCard";
import i18next from "i18next";
import styles from "./style.module.scss";

const RandD = () => {
  const { t } = useTranslation();
  const [news, setNews] = useState();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/blog-list`, {})
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  console.log(news);

  const path = [
    {
      name: t("Pages.Home"),
      active: true,
      path: "/",
    },
    {
      name: t("R&D.title"),
    },
  ];

  let previousText = (
    <p>
      {t("R&D.text_1")}
      <br />
      <br />
      {t("R&D.text_2")}
      <br />
      <br />
      {t("R&D.text_3")}
    </p>
  );

  if (!news) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      <PageSection
        image={productionImage}
        title={t("R&D.title")}
        subtitle={t("R&D.subtitle")}
        text={
          <div className={styles.news}>
            {news.map((item) => (
              <NewsCard
                key={item.id}
                image={item.image}
                title={item[`title_${i18next.language}`]}
                id={item.id}
              />
            ))}
          </div>
        }
        pagePath={path}
      />
    </div>
  );
};

export default RandD;
