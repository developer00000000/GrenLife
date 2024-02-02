import PageSection from "../../components/PageSection";
import productionImage from "../../assets/bg-contact.jpg";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
const Contact = () => {
  const formRef =useRef()
  const { t } = useTranslation();
  const [isOpen,setIsOpen]=useState(true);
  const path = [
    {
      name: t("Pages.Home"),
      active: true,
      path: "/",
    },
    {
      name: t("Contact.title"),
    },
  ];

  const handleSubmit=(e)=>{
    e.preventDefault()
    const formData=new FormData(formRef.current)
    const data=Object.fromEntries(formData)
    console.log(data);
    const requestOptions={
       body: data,
        method:'Post',
        headers: '' ,
    }
    fetch('https://greenlifeuz.onrender.com/greenlife/main/order-product',requestOptions)
    .then(response=>response.json())
     console.log(requestOptions,'qqqqqqqqqqqq')
  }
  return (
    <>
      <PageSection
        image={productionImage}
        title={t("Contact.title")}
        text={
          <div className="contact_main">
            <div className="contact">
              <h3>{t("Contact.subtitle")}</h3>
              <h4>{t("Contact.place1")}</h4>
             
              <div className="contact_numbers">
                <span>{t("Contact..phone")}</span>
                <p>
                  +998 99 820 45 54 <br />
                  +998 90 370 86 16 <br />
                  +998 90 811 45 54
                </p>
              </div>
              <h4>{t("Contact.place8")}</h4>
              <div className="contact_numbers none">
                  <span>{t("Contact..phone")}</span>
                  <p>
                    +998 33 011 22 11 <br />
                    +90 530 317 75 39
                  </p>
                </div>
              <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? t("Contact.btn2"):t("Contact.btn1")} </button>
              <div className={`contact_others${isOpen ? "" : "show"}`}>
                <h4>{t("Contact.place2")}</h4>
                <div className="contact_numbers">
                  <span>{t("Contact..phone")}</span>
                  <p>
                    +998 97 839 97 91 <br />
                    +998 99 721 67 83 <br />
                    +998 90 322 34 47
                  </p>
                </div>
                <h4>{t("Contact.place3")}</h4>
                <div className="contact_numbers">
                  <span>{t("Contact..phone")}</span>
                  <p>
                    +998 91 498 15 75 <br />
                    +998 98 978 88 86
                  </p>
                </div>
                <h4>{t("Contact.place4")}</h4>
                <div className="contact_numbers">
                  <span>{t("Contact..phone")}</span>
                  <p>
                    +998 90 994 58 52
                  </p>
                </div>
                <h4>{t("Contact.place5")}</h4>
                <div className="contact_numbers">
                  <span>{t("Contact..phone")}</span>
                  <p>
                    +998 90 503 26 26 <br />
                    +998 90 454 91 91
                  </p>
                </div>
                <h4>{t("Contact.place6")}</h4>
                <div className="contact_numbers">
                  <span>{t("Contact..phone")}</span>
                  <p>
                    +998 90 925 22 74 
                  </p>
                </div>
                <h4>{t("Contact.place7")}</h4>
                <div className="contact_numbers">
                  <span>{t("Contact..phone")}</span>
                  <p>
                    +998 91 425 32 22 
                  </p>
                </div>
              </div>
            </div>
            <form action="" ref={formRef} onSubmit={(e)=>handleSubmit(e)}>
              <div className="form_input">
                 <label htmlFor="">
                 <input name="name" type="text" placeholder={t("Contact.input1")} required/>
                 </label>
                <label htmlFor="">
                <input name="email" type="text" placeholder={t("Contact.input2")} required/>
                </label>
                 <label htmlFor="">
                 <input name="phone" type="text" placeholder={t("Contact.input3")} required/>
                 </label>
              </div>
              <label htmlFor="">
              <input name="message" className="text_area" type="text" placeholder={t("Contact.input4")} required/>
              </label>
              <button type="submit">{t("Contact.btn3")}</button>
            </form>
          </div>
        }
        pagePath={path}
      />
    </>
  );
};

export default Contact;
