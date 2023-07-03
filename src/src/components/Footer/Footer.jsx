import "./Footer.scss";
import { PiTwitterLogo, PiYoutubeLogoLight } from "react-icons/pi";
import { FiLinkedin } from "react-icons/fi";

function Footer() {
  return (
    <div className="Footer">
      <div className="reg-section">
        <div>
        <p>Interested? Let’s get you started</p>
        <button>Register</button>
        </div>
      </div>
      <div className="footer_pic">
        <img src="/images/Rectangle 6.jpg" alt="grad-image" />
      </div>
      <footer>
        <img src="" alt="Logo" />
        <ul className="list_1">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Programs</a>
            </li>
            <li>
              <a href="#">Education</a>
            </li>
            <li>
              <a href="#">Alumini</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
          <br />
          <ul className="list_2">
            <li>
              <a href="#">Resources</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
          </ul>
        </ul>

        <div>
          <ul>
            <li>
              <PiTwitterLogo size={30} />
            </li>
            <li>
              <PiYoutubeLogoLight size={30} />
            </li>
            <li>
              <FiLinkedin size={30} />
            </li>
          </ul>
          <div className="design_autor">
            <p>
              Designed with{" "}
              <span role="img" aria-label="love emoji">
                &#x2764;️
              </span>
              by
              <span>Patrick Duru</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
