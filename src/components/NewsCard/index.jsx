import { Link } from "react-router-dom";
import styles from "./style.module.scss";

function NewsCard({ title, image , id}) {
  return (
    <Link to={`/news/${id}`}>
      <div className={styles.newsCard}>
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <h3>{title}</h3>
        </div>
      </div>
    </Link>
  );
}

export default NewsCard;
