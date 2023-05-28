import "./Footer.css";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="footer-section">
      <Link class="logo" to="home" smooth duration={500}>
        MIGUEL
      </Link>

      <div className="footer-icons-container">
        <a
          href="https://www.linkedin.com/in/miguel-sablan"
          target="_blank"
          className="icon-container"
        >
          <FaLinkedinIn size="30px" />
        </a>

        <a
          href="https://www.github.com/miguelSablan"
          target="_blank"
          className="icon-container"
        >
          <AiFillGithub size="30px" />
        </a>

        <a
          href="mailto:msabl005@fiu.edu"
          target="_blank"
          className="icon-container"
        >
          <IoMdMail size="30px" />
        </a>
      </div>

      <p>Miguel Sablan &copy; 2023</p>
    </footer>
  );
};

export default Footer;
