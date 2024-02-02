import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PageSection from "../../components/PageSection";
import { useTranslation } from "react-i18next";
import beda from "../../assets/beda.jpg";
import Loading from "../../components/Loading/Loading";

function ProductCategory() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const { i18n } = useTranslation();
  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BASE_URL}/products/${categoryId}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [categoryId]);

  console.log(products, "ppppppppppppppp");
  if(!products) {
    return <Loading />
  }
  return (
    <div>
      <PageSection
        title={"test"}
        subtitle={"nimadir"}
        pagePath={[]}
        text={
          <div>
            <div className="products_box">
              {products.map((i) => (
                <Link key={i.id} to={`/products/${i.id}`}>
                  <div>
                    <div data-aos="fade-up" className="products_blog">
                      <img src={beda} alt="w" />
                      <div className="products_blog_text">
                      <h2>{i[`name_${i18n.language}`]}</h2>
                      <h5>{i.productivity}</h5>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        }
      />
    </div>
  );
}

export default ProductCategory;
