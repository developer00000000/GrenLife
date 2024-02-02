import PageSection from "../../components/PageSection";
import productionImage from "../../assets/production.jpg";
import { useTranslation } from "react-i18next";

function SeedProduction() {
  const { t } = useTranslation();

  const path = [
    {
      name: "Home",
      active: true,
      path: "/",
    },
    {
      name: t("SeedProd.title"),
    },
  ];

  return (
    <div>
      <PageSection
        image={productionImage}
        title={t("SeedProd.title")}
        subtitle={t("SeedProd.subtitle")}
        text={
          <p>
             {t("SeedProd.text_1")}
            <br />
            <br />
             {t("SeedProd.text_2")}
            <br />
            <br />
            {t("SeedProd.text_3")}
          </p>
        }
        pagePath={path}
      />
    </div>
  );
}

export default SeedProduction;
