import ResponsiveAppBar from "./Components/navbar";
import style from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faTwitter,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import ClientComponentExample from "./Components/lazyload";
import Link from "next/link";

export default function Home() {
  return (
    <div className={style.firstContainer}>
      <section className="section-container">
        <ResponsiveAppBar />
      </section>
      <main>
        <div className={style.divContainer}>
          <div>
            <p className={style.paragraph}>Welcome To My Blog</p>
          </div>
          <div className={style.divMain}>
            {/* Fix: Use `href` instead of `to` */}
            <Link href="/blog">
              <button className={style.button}>TEST</button>
            </Link>
          </div>
        </div>
      </main>
      <footer className={style.footer}>
        <div className={style.footerContainer}>
          <div className={style.sociallinks}>
            <a href="#" className="linkedin">
              {/* Remove `width` prop */}
              <FontAwesomeIcon icon={faXTwitter} size="2x" width={16} />
            </a>
            <a href="#" className="facebook">
              <FontAwesomeIcon icon={faFacebook} size="2x" width={16} />
            </a>
            <a href="#" className="instagram">
              <FontAwesomeIcon icon={faInstagram} size="2x" width={16} />
            </a>
            <a href="#" className="github">
              <FontAwesomeIcon icon={faGithub} size="2x" width={16} />
            </a>
            <a href="#" className="twitter">
              <FontAwesomeIcon icon={faTwitter} size="2x" width={16} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
