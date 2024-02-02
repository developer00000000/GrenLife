import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import PageSection from "../../components/PageSection";
import { useTranslation } from "react-i18next";
import beda from "../../assets/beda.jpg";
import { FaRegCircleCheck } from "react-icons/fa6";
import Loading from "../../components/Loading/Loading";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProducts] = useState();
  const { i18n, t } = useTranslation();
  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BASE_URL}/product-detail/${productId}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [productId]);

  console.log(product, "cccccccccccccccccc");

  if(!product) {
    return <Loading />
  }

  return (
    <div>
      <PageSection
        title={"test"}
        subtitle={"nimadir"}
        pagePath={[]}
        text={
          <div className="prodDetail">
            <img src={beda} alt="rasm" />
             <div className="prodDetail_main">
                <h3>{product[`category_${i18n.language}`]}</h3>
                <p><FaRegCircleCheck className="yellow"/>{product[`description_${i18n.language}`]}</p>
                <p><FaRegCircleCheck className="yellow"/>{product.organization}</p>
                <p><FaRegCircleCheck className="yellow"/>{product.productivity}</p>
                <p><FaRegCircleCheck className="yellow"/>{product[`category_${i18n.language}`]}</p>
                <p><FaRegCircleCheck className="yellow"/>{product.price} {t("Product.sum")}</p>
             </div>
          
          </div>
        }
      />
    </div>
  );
}

export default ProductDetail;


// {product.image}