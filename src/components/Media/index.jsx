import {  faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

function Media({className}) {
  return (
    <ul className={className}>
      {/* <li>
        <FontAwesomeIcon icon={faFacebookF} />
      </li> */}
      <li>
        <a href="https://www.instagram.com/hamkor_agro_lux_agronom?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"> <FontAwesomeIcon  icon={faInstagram} /></a>
      </li>
      <li>
        <a href="https://t.me/semena_uz"><FaTelegramPlane /></a>
      </li>
      <li>
        <a href="https://youtube.com/@xushnudbeknomonov891?si=Gpj3e7Gmn9XC2imt"><IoLogoYoutube /></a>
      </li>
    </ul>
  );
}

export default Media;
