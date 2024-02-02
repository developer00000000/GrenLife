import PageSection from "../../components/PageSection";
import Image from "../../assets/about.jpg";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <div>
      <PageSection
        image={Image}
        title={t("About.title")}
        subtitle={t("About.subtitle")}
        text={
          <p>
            {t("About.text_1")}
            <br />
            <br />
            {t("About.text_2")}
            <br />
            <br />
            {t("About.text_3")}
            <br />
            {t("About.text_4")}
            <br />
            <br />
            {t("About.text_5")}
            <br />
            <br />
            {t("About.text_6")}
          </p>
        }
        pagePath={[
          {
            name: t("Pages.Home"),
            active: true,
            path: "/",
          },
          {
            name: t("About.title"),
          },
          
        ]}
      />
    </div>
  );
}

export default About;
