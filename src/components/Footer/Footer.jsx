import Button from "../Button/Button";
import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={`${style.footer_container} container`}>
        <a className={style.footer_logo} href="#">
          ITV
        </a>
        <Button>Contact</Button>
      </div>
    </footer>
  );
};

export default Footer;
