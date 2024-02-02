import styles from "./style.module.scss";
import logo from "../../../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import NavLangSelect from "./NavLangSelect";
import Media from "../../Media";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Pages } from "../../../utils/routes";

function Navbar() {
  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 40) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  useEffect(() => {
    console.log(colorChange);
  }, [colorChange]);

  return (
    <header
      className={[styles.navbar].join(" ")}
      style={{
        backgroundColor: colorChange ? "#18191b" : "transparent",
      }}
    >
      <div className={[styles.navbar__top].join(" ")}>
        <div className="container">
          <ul className={styles.navbar__top__info}>
            <li>
              <FontAwesomeIcon scale={"30px"} icon={faPhone} />{" "}
              <span>+998 99 820 45 50</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
              <span>hamkoragrolux4554@gmail.com</span>
            </li>
          </ul>
          <div className={styles.navbar__top__right}>
            <NavLangSelect />
            <Media />
          </div>
        </div>
      </div>
      <div className={styles.navbar__main}>
        <div className="container">
          <Link to="/">
            <img className={styles.navbar__main__logo} src={logo} alt="" />
          </Link>
          <Media className={styles.navbar__main__contact} />
          <Menu pages={Pages} className={styles.navbar__main__menu} />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
