import React from "react";
import { Link } from "react-router-dom";
import "../../assets/style/common/footer.scss";
import { BsDiscord } from "react-icons/bs";
import { AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaTelegram, FaTelegramPlane } from "react-icons/fa";
import { Image } from "react-bootstrap";
const Footer = () => {
  return (
    <>
      <Image src="./gifs/city-lapse.gif" className="welcome-img" />
      <footer className="app_footer">
        {/* <Container fluid> */}
        <div className="footer_text_wrap">
          <ul>
            <li>
              <Link to="https://t.me/wojakprison">Help center</Link>
            </li>
          </ul>
        </div>
        <div className="footer_icn_wrap">
          <ul>
            <li>
              <Link to="https://t.me/wojakprison">
                <FaTelegramPlane />
              </Link>
            </li>
            {/*<li>
              <Link to="/">
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link to="/">
                <AiFillTwitterCircle />
              </Link>
            </li>
            <li>
              <Link to="/">
                <AiFillLinkedin />
              </Link>
            </li>
            <li>
              <Link to="/">
                <BsDiscord />
              </Link>
            </li>*/}
          </ul>
        </div>
        {/* </Container> */}
      </footer>
    </>
  );
};

export default Footer;
