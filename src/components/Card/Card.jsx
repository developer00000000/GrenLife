import { useNavigate } from "react-router-dom"
import { MdNavigateNext } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const Card = () => {
  const [partners, setPartners] = useState([]);
  const { i18n, t } = useTranslation();
  useEffect(() => {
    fetch(
      `http://206.189.150.181/greenlife/main/get-partners`
    )
      .then((res) => res.json())
      .then((data) => setPartners(data));
  }, []);
   // const {t}=useTranslation()
   const nav=useNavigate()
    console.log(partners,'11111111111');
  return (
    <>
    <h2 className="greenLife_card">{t("Home.partners")}</h2>
    <div className="liners container">
        <div className="line"></div>
        <div className="liner"></div>
        <div className="line"></div>
    </div>
    <div className="container card">
       {partners.map((partners,id)=>(
          <Link key={id} to={`partner/${partners.id}`}>
             <div data-aos="fade-right" className="card_blog" >
              <img src={partners.image} alt="" />
              <div className="partner_main">
                 <h4>{partners.name}</h4>
                 <h5>{partners.country}</h5>
              </div>
          </div>
          </Link>
       ))}




      {/* <div data-aos="fade-right" className="card_blog">
       <img src={image} alt="img" />
       <div>
          <h3><span>{titleSpan}</span>{title}</h3>
          <p>{text}</p>
          <button onClick={()=>nav(link)}>Read More <MdNavigateNext className="icon"/> </button>
       </div>
    </div>
    <div data-aos="fade-up" className="card_blog">
       <img src={image} alt="img" />
       <div>
          <h3><span>{titleSpan}</span>{title}</h3>
          <p>{text}</p>
          <button onClick={()=>nav(link)}>Read More <MdNavigateNext className="icon"/></button>
       </div>
    </div>
    <div data-aos="fade-left" className="card_blog">
       <img src={image} alt="img" />
       <div>
          <h3><span>{titleSpan}</span>{title}</h3>
          <p>{text}</p>
          <button onClick={()=>nav(link)}>Read More <MdNavigateNext className="icon"/></button>
       </div>
    </div> */}
    </div>
    <div className="line_bottom "></div>
    </>
  )
}

export default Card