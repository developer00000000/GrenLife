import PageSection from "../../components/PageSection";
import productionImage from "../../assets/bg-export.jpg";
import { useTranslation } from "react-i18next";

const Export = () => {
  const {t}=useTranslation()
    const path = [
        {
          name: "HOME",
          active: true,
          path: "/",
        },
        {
          name: t("Export.title"),
        },
      ];
  return (
    <div>
    <PageSection
      image={productionImage}
      title={t("Export.title")}
      subtitle={t("Export.subtitle")}
      text={
        <p>
          {t("Export.text_1")}
          <br />
          <br />
          {t("Export.text_2")}
          <br />
          <br />
          {t("Export.text_3")}
          <br />
          <br />
          {t("Export.text_4")}
        </p>
      }
      pagePath={path}
    />
  </div>
  )
}

export default Export