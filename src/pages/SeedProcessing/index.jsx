import PageSection from "../../components/PageSection";
import productionImage from "../../assets/bg-img2.jpg";
import { useTranslation } from "react-i18next";

const SeedProcessing = () => {
  const { t } = useTranslation();

    const path = [
        {
          name: "HOME",
          active: true,
          path: "/",
        },
        {
          name: t("SeedProc.title"),
        },
      ];
    
  return (
    <>
      <div>
      <PageSection
        image={productionImage}
        title={t("SeedProc.title")}
        subtitle={t("SeedProc.subtitle")}
        text={
          <p>
            {t("SeedProc.text_1")}
            <br />
            <br />
            {t("SeedProc.text_2")}
            <br />
            <br />
            {t("SeedProc.text_3")}
          </p>
        }
        pagePath={path}
      />
    </div>
    
    </>
  )
}

export default SeedProcessing