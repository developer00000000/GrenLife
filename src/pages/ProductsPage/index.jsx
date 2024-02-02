// import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import useGetData from "../../hooks/GET";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Loading from "../../components/Loading/Loading";
import i18next from "i18next";
import { Link } from "react-router-dom";

function Test() {
  const { data } = useGetData(["products"], "/products");
  const { t } = useTranslation();
  const [TabsData, setTabsData] = useState(null);
  const [Tabs, setTabs] = useState(null);

  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  // console.log(TabsData);

  useEffect(() => {
    // fetch("https://greenlifeuz.onrender.com/greenlife/main/get-partners").then(res => res.join()).then(data => console.log(data));

    // let allCategories;
    fetch(`${import.meta.env.VITE_BASE_URL}/category-list`)
      .then((res) => res.json())
      .then((data) => {
        setTabs(data);

        Promise.all(
          data.map((i) =>
            fetch(`${import.meta.env.VITE_BASE_URL}/products/${i.id}`).then(
              (res) => res.json()
            )
          )
        ).then((res) => setTabsData(res));
      });
  }, []);

  const currentTab = TabsData ? TabsData[currentTabIndex] : null;

  if (!currentTab) {
    return (
      <div className="gap-top">
        <Loading />
      </div>
    );
  }

  return (
    <div className="produkt container">
      <ul className='tabs'>
        {Tabs.map((item, index) => (
          <li
            className={currentTabIndex == index ? "active": "non-active"}
            key={item.id}
            onClick={() => setCurrentTabIndex(index)}
          >
            {item[`name_${i18next.language}`]}
          </li>
        ))}
      </ul>
      <div className="product_wrapper">
        {currentTab.map((i) => (
          <Link key={i.id} to={`/products/${i.id}`}>
            <div>
              <div data-aos="fade-up" className="products_blog">
                <img src={i.image} alt="w" />
                <div className="products_blog_text">
                  <h2>{i[`name_${i18next.language}`]}</h2>
                  <h5>{i.productivity}</h5>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Test;