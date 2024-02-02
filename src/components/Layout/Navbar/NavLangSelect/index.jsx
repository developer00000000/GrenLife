import styles from "./style.module.scss";

import flagUZ from "../../../../assets/flag-uz.svg";
import flagRU from "../../../../assets/flag-ru.svg";
import flagUS from "../../../../assets/flag-us.svg";
import { changeLanguage } from "i18next";

function NavLangSelect({ className }) {
  return (
    <ul className={[styles.languages, className].join(" ")}>
      <li onClick={() => changeLanguage("uz")}>
        <img src={flagUZ} />
      </li>
      <li onClick={() => changeLanguage("ru")}>
        <img src={flagRU} />
      </li>
      <li onClick={() => changeLanguage("en")}>
        <img src={flagUS} />
      </li>
    </ul>
  );
}
export default NavLangSelect;
