import { useParams } from "react-router-dom";
import PageSection from "../../components/PageSection";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
// import httpsAgent from "../../utils/httpsAgent";
import i18next from "i18next";
import Loading from "../../components/Loading/Loading";

function Partner() {
  const [data, setData] = useState();
  const { id } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    // fetch(`https://greenlifeseed.onrender.com/greenlife/main/get-partners`, {})
    //   .then((res) => res.json())
    //   .then((data) => setData(data));

    fetch(`${import.meta.env.VITE_BASE_URL}/partnerproduct/${id}`, {})
      .then((res) => res.json())
      .then((data) => setData(data));

    // axios
    //   .get(`${import.meta.env.VITE_BASE_URL}/main/get-partners`, {
    //     httpsAgent: httpsAgent,
    //   })
    //   .then((data) => console.log(data, "JJJJJJJJJJJJJJJJ"));
  }, [id]);

  console.log(data);
  if (!data) {
    return <Loading />;
  }
  return (
    <div className="page-wrapper ">
      <PageSection
        customContent={
          <div className="container">
            {data.map((product) => (
              <div key={product.id}>
                <h2>{product[`name_${i18next.language}`]}</h2>
                <p>{product[`description_${i18next.language}`]}</p>
                <p>{product[`category_${i18next.language}`]}</p>
                <p>{product[`productivity`]}</p>
                <p>{product[`organization`]}</p>
                <p>Price: {product[`organization`]}</p>
              </div>
            ))}
          </div>
        }
        title={"Hello"}
        subtitle={"asas"}
        pagePath={[
          {
            name: t("Pages.Home"),
            active: true,
            path: "/",
          },
          {
            name: t("Contact.title"),
          },
        ]}
      />
    </div>
  );
}
export default Partner;
