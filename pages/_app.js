import '../styles/globals.scss';
import "../styles/navbar.scss";
import "../styles/header.scss";
import "../styles/typography.scss";
import "../styles/projects.scss";
import "../styles/skills.scss";
import "../styles/contact.scss";
import "../styles/footer.scss";
import "../styles/tech.scss";
import "../styles/about.scss"
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return <>
  <DefaultSeo
          openGraph={{
            type: "website",
            locale: "en_IE",
            url: "http://bilalhussain.online/",
            site_name: "Bilal Hussain",
          }}
          twitter={{
            handle: "@DangerBilu",
            site: "http://bilalhussain.online/",
            cardType: "summary_large_image",
          }}
        />
    <Component {...pageProps} />
  </>

}
export default MyApp