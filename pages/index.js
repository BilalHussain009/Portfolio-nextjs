import Head from "next/head";
import { Link, animateScroll as scroll } from "react-scroll";
import Image from "next/image";
import B from "../public/B.jpeg";
import logo_transparent from "../public/logo_transparent.png";
import logo from "../public/logo.jpg";
import profile from "../public/profile.png";
import project1 from "../public/project1.png";
import project2 from "../public/project2.png";
import project3 from "../public/project3.png";
import project4 from "../public/project4.png";
import linux from "../public/linux.png";
import android from "../public/SVG/android.svg";
import bootstrap from "../public/SVG/bootstrap.svg";
import firebase from "../public/SVG/firebase.svg";
import genius from "../public/SVG/genius.svg";
import github from "../public/SVG/github.svg";
import linkedin from "../public/SVG/linkedin.svg";
import MongoDB from "../public/SVG/mongodb.svg";
import mysql from "../public/SVG/mysql.svg";
import nextjs from "../public/SVG/nextjs.svg";
import nodejs from "../public/SVG/nodejs.svg";
import python from "../public/SVG/python.svg";
import react from "../public/SVG/react.svg";
import server from "../public/SVG/server.svg";
import social_linkedin from "../public/SVG/social-linkedin.svg";
import sphere from "../public/SVG/sphere.svg";
import stackoverflow from "../public/SVG/stackoverflow.svg";
import typescript from "../public/SVG/typescript.svg";

export default function Home() {
  var year = new Date().getFullYear();

  return (
    <div>
      <h2 className="seoTags">Bilal Hussain Web Developer</h2>
      <h3 className="seoTags">Bilal Hussain Web Developer</h3>
      <Head>
        <meta
          name="google-site-verification"
          content="ulmw69VpszQCQ2EURISAtVUSQfQEgDxiLtcsheVsdyY"
        />
        <title>
          Bilal Hussain | Web Developer | Portfolio | Bilal Hussain Website |
          Bilal Hussain Full Stack Web Developer
        </title>
        <meta
          name="description"
          content="Bilal Hussain portfolio,full stack web developer experienced in react,node,mongodb. Part time freelancer . This is Bilal Hussain's Public Portfolio Website"
        />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      </Head>
      <div className="container">
        <nav className="navbar">
          <ul className="navlist">
            <Image className="navlist--logo" src={B} alt="Bilal Logo"></Image>
            <div className="navlist--links">
              <li className="navlist--link">
                <a target="_blank" href="https://github.com/BilalHussain009">
                  Github
                </a>
              </li>
              <li className="navlist--link">
                <a
                  target="_blank"
                  href="https://stackoverflow.com/users/10436299/bilal"
                >
                  StackOverFlow
                </a>
              </li>

              <li className="navlist--link">
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/15c79yZAYA4eRtIr9oUj-GWNO-_fc1FbU/view?usp=sharing"
                >
                  Resume
                </a>
              </li>
            </div>
          </ul>
        </nav>

        <div className="header">
          <div className="header__box">
            <h1 className="header__main">
              <span className="header__main">Hi, my name is Bilal Hussain</span>
              <br></br>
              <br></br>{" "}
              <span className="header__sub ">
                I'm a Full Stack Web Developer with expertise in React & Node.js
              </span>
            </h1>
            <div className="header__btnbox margin-top-medium">
              <Link
                className="header__btnbox__work"
                to="project1"
                spy={true}
                smooth={true}
              >
                My Work
              </Link>

              <Link
                to="contact1"
                spy={true}
                smooth={true}
                className="header__btnbox__talk margin-left-small"
              >
                Let's Talk
              </Link>
            </div>
          </div>
          <Image
            className="header__Image"
            src={profile}
            alt="Bilal Hussain Portfoilo Image"
          />
        </div>
        <section className="projects" id="project1">
          <h3 className="projects__header margin-bottom-large">
            Latest projects
          </h3>
          <div className="project">
            <div className="project__info">
              <h4 className="projectHeading">Maldini Fashion</h4>
              <div className="project__tags margin-top-tiny">
                Ecommerce, React, Firebase, Paypal, User authentication
              </div>
              <p className="projectDescription margin-top-small">
                Single page web app made with react and redux from scratch. The
                store has a login system, cart, review, sorting & search
                functionality. There is a PayPal sandbox integration as well,
                which can be converted to an actual PayPal gateway.
              </p>
              <div className="project__links margin-top-medium">
                <a
                  target="_blank"
                  className="projectHeading project__link"
                  href="http://maldinifashion.herokuapp.com/"
                >
                  View Demo
                </a>
                <a
                  target="_blank"
                  className="projectHeading margin-left-small project__link"
                  href="https://github.com/BilalHussain009/React-Demo-Store-E-commerce"
                >
                  View Repository
                </a>
              </div>
            </div>
            <Image
              className="project__Image"
              src={project1}
              alt="Maldini Fashion Landing Page Image"
            />
          </div>
          <div className="project">
            <div className="project__info">
              <h4 className="projectHeading">Expense Manager SPA </h4>
              <div className="project__tags margin-top-tiny">
                React, Firebase, Node
              </div>
              <p className="projectDescription margin-top-small">
                A small expense app built to manage daily expenses and income,
                this app calculates the total amount spent and the remaining
                balance.
              </p>
              <div className="project__links margin-top-medium">
                <a
                  target="_blank"
                  className="projectHeading project__link"
                  href="https://expensify-bilal-app.herokuapp.com/"
                >
                  View Demo
                </a>
                <a
                  target="_blank"
                  className="projectHeading margin-left-small project__link"
                  href="https://github.com/BilalHussain009/Expensify-app-bilal"
                >
                  View Repository
                </a>
              </div>
            </div>
            <Image
              className="project__Image"
              src={project2}
              alt="Maldini Fashion Landing Page Image"
            />
          </div>

          <div className="project">
            <div className="project__info">
              <h4 className="projectHeading">Food Resturant Landing Page</h4>
              <div className="project__tags margin-top-tiny">
                HTML, CSS, BootStrap, Jquery
              </div>
              <p className="projectDescription margin-top-small">
                A landing page built for Omni Food Restaurant, the page is fully
                responsive and has responsive images. It is built with pure
                HTML, CSS, and bootstrap. The Page features some small
                animations and transitions as well.
              </p>
              <div className="project__links margin-top-medium">
                <a
                  target="_blank"
                  className="projectHeading project__link"
                  href="https://bilalhussain009.github.io/omnifood/"
                >
                  Visit website
                </a>
                <a
                  target="_blank"
                  className="projectHeading margin-left-small project__link"
                  href="https://github.com/BilalHussain009/omnifood"
                >
                  View github repository
                </a>
              </div>
            </div>
            <Image
              className="project__Image"
              src={project3}
              alt="Bilal Hussain Resturant App"
            />
          </div>
          <div className="project">
            <div className="project__info">
              <h4 className="projectHeading">WinWin Labs</h4>
              <div className="project__tags margin-top-tiny">
                PHP, CSS, Javascript
              </div>
              <p className="projectDescription margin-top-small">
                I customized this PHP template to add new features such as email
                sender form, exit-intent popup, image customization, Google
                lighthouse score optimization, SEO optimizations, some bug fixes
                related to Images, etc.
              </p>
              <div className="project__links margin-top-medium"></div>
            </div>
            <Image
              className="project__Image"
              src={project4}
              alt="Bilal Hussain WinWin Labs Project"
            />
          </div>
        </section>
        <section className="skills" id="skills1">
          <h3 className="projects__header margin-bottom-large">What i do.</h3>
          <div className="skills-cont">
            <div className="skill">
              <Image className="skills--logo" src={genius} alt="logo-react" />
              <h4 className="projectHeading margin-top-small">
                Development of SPA
              </h4>
              <p id="" className="projectDescription margin-top-small">
                Need a single-page app with responsive UI?. I can make beautiful
                web apps in React based on your design,or improve old designs to
                look modern and beautiful.
              </p>
            </div>
            <div className="skill">
              <Image className="skills--logo" src={nodejs} alt="logo-node" />
              <h4 className="projectHeading margin-top-small">REST API </h4>
              <p className="projectDescription margin-top-small">
                I can create REST APIs from scratch. I will provide login
                authentications, file management, database schema, database
                maintenance.
              </p>
            </div>
            <div className="skill">
              <Image className="skills--logo" src={sphere} alt="logo-web" />
              <h4 className="projectHeading margin-top-small">
                Web design and development{" "}
              </h4>
              <p className="projectDescription margin-top-small">
                Do you need a fully customized web with impressive UI and UX?
                look no more i create beautiful web sites and web apps that
                scale and are SEO friendly.
              </p>
            </div>
          </div>
        </section>
        <section className="tech margin-top-medium">
          <h3 className="projects__header margin-bottom-large">
            My Tech Stack
          </h3>
          <div className="tech__items">
            <div className="tech__item">
              <Image
                className="skills--logo margin-top-small "
                src={react}
                alt="Bilal Hussain logo React react-native"
              />
              <p>React</p>
            </div>
            <div className="tech__item">
              <Image
                className="skills--logo margin-top-small "
                src={typescript}
                alt="Bilal Hussain logo Typescript"
              />
              <p>Typescript</p>
            </div>
            <div className="tech__item">
              <Image
                className="skills--logo margin-top-small "
                src={nodejs}
                alt="Bilal Hussain logo Node.js"
              />
              <p>Node.js</p>
            </div>
            <div className="tech__item">
              <Image
                className="skills--logo margin-top-small "
                src={MongoDB}
                alt="Bilal Hussain logo MongoDB"
              />
              <p>MongoDB</p>
            </div>
            <div className="tech__item">
              <Image
                className="skills--logo margin-top-small "
                src={nextjs}
                alt="Bilal Hussain logo nextjs"
              />
              <p>Next.js</p>
            </div>
            <div className="tech__item">
              <Image
                className="skills--logo margin-top-small "
                src={linux}
                alt="Bilal Hussain logo linux"
              />
              <p>Linux</p>
            </div>
            <div className="tech__item">
              <Image
                className="skills--logo margin-top-small "
                src={python}
                alt="Bilal Hussain logo python"
              />
              <p>Python</p>
            </div>
            <div className="tech__item">
              <Image
                className="skills--logo margin-top-small "
                src={firebase}
                alt="Bilal Hussain logo Firebase"
              />
              <p>Firebase</p>
            </div>
            <div className="tech__item">
              <Image
                className="skills--logo margin-top-small "
                src={android}
                alt="Bilal Hussain logo android"
              />
              <p>Android</p>
            </div>
            <div className="tech__item">
              <Image
                className="skills--logo margin-top-small "
                src={mysql}
                alt="Bilal Hussain logo SQL"
              />
              <p>SQL</p>
            </div>
          </div>
        </section>
        {/* <section className="aboutme">
          <h2 className="projects__header margin-bottom-large">About me</h2>
          

        </section> */}
        <section className="contact" id="contact1">
          <h3 className="projects__header margin-bottom-large">Just say hi.</h3>
          <div className="contactCon">
            <div className="infoCon">
              <h4 className="infoCon__info margin-botton-medium">
                I am available to discuss your project details and help you with
                your web app design and development.
              </h4>
              <div className="infoCon--emailDiv margin-botton-medium">
                <h5 className="infoCon__emailMe">Email me at</h5>
                <h5 className="projectHeading project__link ">
                  bhussain.bese17seecs@seecs.edu.pk
                </h5>
              </div>
              <div className="infoCon--follow">
                <h5 className="infoCon__emailMe">Follow me </h5>
                <div className="infoCon__socials margin-top-small">
                  <a target="_blank" href="https://github.com/BilalHussain009">
                    {" "}
                    <Image
                      className="followIcon"
                      alt="Bilal Hussain github link"
                      src={github}
                    />
                  </a>
                  <a
                    target="_blank"
                    href="https://stackoverflow.com/users/10436299/bilal"
                  >
                    <Image
                      className="followIcon"
                      alt="Bilal Hussain stackoverflow link"
                      src={stackoverflow}
                    />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/bilal-hussain-29178b1b6/"
                  >
                    <Image
                      className="followIcon"
                      alt="Bilal Hussain linkedin"
                      src={linkedin}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="contactCon">
              <form className="contactForm" name="contact" data-netlify="true">
                <input
                  className="contactForm__field margin-bottom-small"
                  name="name"
                  type="text"
                  placeholder="Your name*"
                  required
                />
                <input
                  className="contactForm__field margin-bottom-small"
                  name="email"
                  type="email"
                  placeholder="Your email*"
                  required
                />
                <input
                  className="contactForm__field margin-bottom-small"
                  name="website"
                  type="text"
                  placeholder="Your Website (if exists)"
                />
                <textarea
                  className="contactForm__field margin-bottom-small"
                  name="message"
                  placeholder="How can i Help?"
                  rows="3"
                ></textarea>
                <button className="header__btnbox__talk margin-left-small">
                  Get in Touch
                </button>
              </form>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="about">
            <Image
              className="navlist--logo"
              src={B}
              alt="Bilal Logo"
            ></Image>
            <div className="about--cont margin-left-medium">
              <h2>Bilal Hussain</h2>
              <h3>Full Stack Web Developer & Designer</h3>
            </div>
          </div>
          <div className="copyright">
            <h4>&#169; {year} Bilal Hussain</h4>
            <h5>Custom Made</h5>
          </div>
        </footer>
      </div>
    </div>
  );
}
