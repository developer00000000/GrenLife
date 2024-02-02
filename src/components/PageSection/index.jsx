import { Link } from "react-router-dom";
import styles from "./style.module.scss";

function PageSection({
  title,
  subtitle,
  pagePath,
  text,
  image,
  customContent,
}) {
  let Path = pagePath.map((page, index) => (
    <>
      <Link key={page.path} to={page.path}>
        <li className={page.active ? styles.activePage : ""}>{page.name}</li>
      </Link>
      {!(index == pagePath.length - 1) && "/"}
    </>
  ));

  let content = customContent ? (
    <div className={styles.section_text}>{customContent}</div>
  ) : (
    <>
      <div className={styles.section_text}>
        <div className="container">
          {text?.length ? <p>{text}</p> : text}
        </div>
      </div>
      <div
        className={styles.section_image}
        style={{
          backgroundImage: `url('${image}')`,
        }}
      ></div>
    </>
  );

  return (
    <section className={styles.section}>
      <div className={styles.section_heading}>
        <div className="container">
          <div>
            <h1>{title}</h1>
            <h4>{subtitle}</h4>
          </div>
          <ul className={styles.path}>{Path}</ul>
        </div>
      </div>
      {content}
    </section>
  );
}

export default PageSection;
