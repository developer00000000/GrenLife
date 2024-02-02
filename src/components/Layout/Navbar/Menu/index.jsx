import { NavLink, useLocation } from "react-router-dom";
import styles from "./style.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import NavLangSelect from "../NavLangSelect";
import { useTranslation } from "react-i18next";

function Menu({ pages, className }) {
  const [open, setOpen] = useState(false);

  const { t } = useTranslation();

  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  function OpenDropdown() {
    setOpen(!open);
  }

  let menuPages = pages.map((page, index) => {
    let icon = !(index == pages.length - 1) && (
      <FontAwesomeIcon className={styles.list_item_icon} icon={faCircle} />
    );

    let currentPage =
      page.name.charAt(0).toUpperCase() +
      page.name
        .split(" ")
        .map((i) => i.charAt(0).toUpperCase() + i.slice(1, i.name))
        .join(" ")
        .replaceAll(" ", "_")
        .slice(1, page.name.length);

    return (
      <NavLink
        key={page.path}
        to={page.path}
        className={[styles.list_item, !icon && styles.list_item_noIcon].join(
          " "
        )}
      >
        <li>
          {t(`Pages.${currentPage}`)}
          {icon}
        </li>
      </NavLink>
    );
  });

  return (
    <div className={[styles.menu, className].join(" ")}>
      <ul className={styles.list}>{menuPages}</ul>
      <button onClick={OpenDropdown}>
        {open ? (
          <FontAwesomeIcon icon={faXmark} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </button>
      <div
        className={[
          styles.menu_dropdown,
          open && styles.menu_dropdown_open,
        ].join(" ")}
      >
        <NavLangSelect className={styles.langSelect} />
        <ul>{menuPages}</ul>
      </div>
    </div>
  );
}

export default Menu;
