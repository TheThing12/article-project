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
import ActionAreaCard from "./Components/test-component";

export default function Home() {
  return (
    <>
      <section className="section-container">
        <div className={style.landingpage}>
          <ResponsiveAppBar />
          <div className={style.divContainer}>
            <div>
              <p className={style.paragraph}>Welcome To My Blog</p>
            </div>
            <div></div>
          </div>
        </div>
      </section>
      <main>
        <ActionAreaCard />
      </main>
      <footer className={style.footer}>
        <div className={style.footerContainer}>
          <div className={style.sociallinks}>
            <a href="#" class="linkedin">
              <FontAwesomeIcon icon={faXTwitter} size="2xs" width={16} />
            </a>
            <a href="#" class="facebook">
              <FontAwesomeIcon icon={faFacebook} size="2xs" width={16} />
            </a>
            <a href="#" class="instagram">
              <FontAwesomeIcon icon={faInstagram} size="2xs" width={16} />
            </a>
            <a href="#" class="github">
              <FontAwesomeIcon icon={faGithub} size="2xs" width={16} />
            </a>
            <a href="#" class="twitter">
              <FontAwesomeIcon icon={faTwitter} size="2xs" width={16} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
