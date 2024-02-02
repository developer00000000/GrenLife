import corn from "../../assets/corns.jpg";
import beda from "../../assets/beda.jpg";
import growing from "../../assets/vegatables.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";

const Hero = () => {
  const { t } = useTranslation();
  const [data, setData] = useState();
  const array = [
    { image: corn, title: t("Home.subtitle1"), anim:"fade-right" },
    { image: beda, title: t("Home.subtitle2"),anim:"fade-up"},
    { image: growing, title: t("Home.subtitle3"), anim:"fade-left" },
  ];
  useEffect(() => {
    fetch(`http://206.189.150.181/greenlife/main/category-list`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

   if(!data){
       return<Loading/>
   }

  console.log(data);

  return (
    <div className="hero">
      <div className="hero_main">
        <h1>{t("Home.title1")}</h1>
        <div className="hero_blog">
          {data.map((deta,index)=>(
            <Link to={`/product-category/${deta.id}`} key={deta.id} data-aos={deta.anim}>
                 <img src={array[index].image} alt="img" />
                  <p className="crops">{array[index].title}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
