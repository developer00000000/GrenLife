import { Link } from "react-router-dom";
// import { RiFacebookFill } from "react-icons/ri";
// import { FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <footer>
        <div className="footer container">
          <ul>
            <h3>{t("Footer.title2")}</h3>
            <Link>
              <li>{t("Footer.link1")}</li>
            </Link>
            <Link>
              <li>{t("Footer.link5")}</li>
            </Link>
            <Link>
              <li>{t("Footer.link2")}</li>
            </Link>
           
          </ul>
          
          <div className="footer_contact">
            <h3>{t("Footer.title4")}</h3>
            <p>
              <span>{t("Footer.phone")} </span> +998 99 820 45 54
            </p>
            <Link to="/contact" className="contact_link">
              {t("Footer.showNum")}
            </Link>
            <p>
              <span>{t("Footer.email")}</span>hamkoragrolux4554@gmail.com
            </p>
            <span className="adress">{t("Footer.place")}</span>
            <div className="nav_icons">
              {/* <li>
                <FontAwesomeIcon icon={faFacebookF} />
             </li> */}
              <li>
                <a href="https://www.instagram.com/hamkor_agro_lux_agronom?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href="https://t.me/semena_uz">
                  <FaTelegramPlane />
                </a>
              </li>
              <li>
                <a href="https://youtube.com/@xushnudbeknomonov891?si=Gpj3e7Gmn9XC2imt">
                  <IoLogoYoutube />
                </a>
              </li>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
