import Head from 'next/head'
import { Link, animateScroll as scroll } from "react-scroll";

export default function Home() {
  var year = new Date().getFullYear()
  
  return (
    <div>
      <h2 className="seoTags">Bilal Hussain Web Developer</h2>
      <h3 className="seoTags">Bilal Hussain Web Developer</h3>
      <Head>
        <meta name="google-site-verification" content="ulmw69VpszQCQ2EURISAtVUSQfQEgDxiLtcsheVsdyY" />
        <title>Bilal Hussain | Web Developer | Portfolio | Bilal Hussain Website | Bilal Hussain Full Stack Web Developer</title>
        <meta name="description" content="Bilal Hussain portfolio,full stack web developer experienced in react,node,mongodb. Part time freelancer . This is Bilal Hussain's Public Portfolio Website" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      </Head>
      <div className="container">
        <nav className="navbar">
          <ul className="navlist">
            <img className="navlist--logo" src="/B.jpeg" alt="Bilal Logo"></img>
            <div className="navlist--links">
              <li className="navlist--link"><a target="_blank" href="https://github.com/BilalHussain009">Github</a></li>
              <li className="navlist--link"><a target="_blank" href="https://stackoverflow.com/users/10436299/bilal">StackOverFlow</a></li>


              <li className="navlist--link"><a target="_blank" href="https://drive.google.com/file/d/1573srlgRzAfv4k7rV0tcNLYLA7qYFah7/view?usp=sharing">Resume</a></li>
            </div>
          </ul>
        </nav>

        <div className="header">
          <div className="header__box">
            <h1 className="header__main"><span className="header__main">Hi, my name is Bilal Hussain</span><br></br><br></br> <span className="header__sub ">I'm a Full Stack Web Developer with expertise in React & Node.js</span></h1>
            <div className="header__btnbox margin-top-medium">
              <Link className="header__btnbox__work" to="project1" spy={true}
                smooth={true}>My Work</Link>

              <Link to="contact1" spy={true}
                smooth={true} className="header__btnbox__talk margin-left-small">Let's Talk</Link>
            </div>

          </div>
          <img className="header__img" src="/kek.png" alt="Bilal Hussain Portfoilo Image" />
        </div>
        <section className="projects" id="project1">
          <h3 className="projects__header margin-bottom-large">Latest projects</h3>
          <div className="project">
            <div className="project__info">
              <h4 className="projectHeading">Single Page React Ecommerce Store,open source </h4>
              <div className="project__tags margin-top-tiny">Ecommerce,SPA</div>
              <p className="projectDescription margin-top-small">Single Page web app made with react and redux from scratch. Store has login system , cart, review, sorting & search functionality. There is a paypal sand box integration as well, which can be converted to an actual paypal gateway</p>
              <div className="project__links margin-top-medium">
                <a target="_blank" className="projectHeading project__link" href="http://maldinifashion.herokuapp.com/">Visit maldinifashion.com</a>
                <a target="_blank" className="projectHeading margin-left-small project__link" href="https://github.com/BilalHussain009/React-Demo-Store-E-commerce">View github repository</a>
              </div>
            </div>
            <img className="project__img" src="/project1.png" alt="Maldini Fashion Landing Page Image" />
          </div>
          <div className="project">
            <div className="project__info">
              <h4 className="projectHeading">Expense Manager SPA </h4>
              <div className="project__tags margin-top-tiny">React,Firebase,Node</div>
              <p className="projectDescription margin-top-small">A small expense app built to manage daily expenses, it records income and expenses and calculate the total amount spent and the remaining balance.</p>
              <div className="project__links margin-top-medium">
                <a target="_blank" className="projectHeading project__link" href="https://expensify-bilal-app.herokuapp.com/">Visit App</a>
                <a target="_blank" className="projectHeading margin-left-small project__link" href="https://github.com/BilalHussain009/Expensify-app-bilal">View github repository</a>
              </div>
            </div>
            <img className="project__img" src="/project2.png" alt="Maldini Fashion Landing Page Image" />
          </div>

          <div className="project">
            <div className="project__info">
              <h4 className="projectHeading">Food Resturant Landing Page</h4>
              <div className="project__tags margin-top-tiny">HTML,CSS,BootStrap,Jquery</div>
              <p className="projectDescription margin-top-small">A landing page built for Omni Food Resturant , the page is fully responsive and have responsive images. It is built with Pure HTML, CSS and bootstrap. The Page features some small animations and trasnitions as well.</p>
              <div className="project__links margin-top-medium">
                <a target="_blank" className="projectHeading project__link" href="https://bilalhussain009.github.io/omnifood/">Visit website</a>
                <a target="_blank" className="projectHeading margin-left-small project__link" href="https://github.com/BilalHussain009/omnifood">View github repository</a>
              </div>
            </div>
            <img className="project__img" src="/project3.png" alt="Bilal Hussain Resturant App" />
          </div>
          <div className="project">
            <div className="project__info">
              <h4 className="projectHeading">WinWin Labs</h4>
              <div className="project__tags margin-top-tiny">PHP,CSS,Javascript</div>
              <p className="projectDescription margin-top-small">Custmized this PHP template to add new Features such as Email Sender Form, exit intent popup , image customization , Google LightHouse score optimzation, SEO optimzations, some bug fixes related to Images etc</p>
              <div className="project__links margin-top-medium">

              </div>
            </div>
            <img className="project__img" src="/project4.png" alt="Bilal Hussain WinWin Labs Project" />
          </div>
        </section>
        <section className="skills" id="skills1">
          <h3 className="projects__header margin-bottom-large">What i do.</h3>
          <div className="skills-cont">
            <div className="skill">
              <img className="skills--logo" src="./SVG/genius.svg" alt="logo-react" />
              <h4 className="projectHeading margin-top-small">Development of SPA</h4>
              <p id="" className="projectDescription margin-top-small">Need a single page app with responsive UI?. I can make beautiful web apps in React based on your design ,or improve old designs to look modern and beautiful</p>
            </div>
            <div className="skill">
              <img className="skills--logo" src="./SVG/node-dot-js.svg" alt="logo-node" />
              <h4 className="projectHeading margin-top-small">REST API </h4>
              <p className="projectDescription margin-top-small">I can create REST api's from scratch. I will provide login authentications , file management, database schema , database maintenance </p>
            </div>
            <div className="skill">
              <img className="skills--logo" src="./SVG/sphere.svg" alt="logo-web" />
              <h4 className="projectHeading margin-top-small">Web design and development </h4>
              <p className="projectDescription margin-top-small">Do you need a fully customized web with impressive UI and UX? look no more i create beautiful web sites and web apps that scale and are SEO friendly.</p>
            </div>
          </div>
        </section>
        <section className="tech margin-top-medium">
          <h3 className="projects__header margin-bottom-large">My Tech Stack</h3>
          <div className="tech__items">
            <div className="tech__item">
              <img className="skills--logo margin-top-small " src="./SVG/react.svg" alt="Bilal Hussain logo React" />
              <p>React.js</p>
            </div>
            <div className="tech__item">
              <img className="skills--logo margin-top-small " src="./SVG/typescript.svg" alt="Bilal Hussain logo Typescript" />
              <p>Typescript</p>
            </div>
            <div className="tech__item">
              <img className="skills--logo margin-top-small " src="./SVG/node-dot-js.svg" alt="Bilal Hussain logo Node.js" />
              <p>Node.js</p>
            </div>
            <div className="tech__item">
              <img className="skills--logo margin-top-small " src="./SVG/mongodb.svg" alt="Bilal Hussain logo MongoDB" />
              <p>MongoDB</p>
            </div>
            <div className="tech__item">
              <img className="skills--logo margin-top-small " src="./SVG/bootstrap.svg" alt="Bilal Hussain logo BootStrap" />
              <p>BootStrap</p>
            </div>
            <div className="tech__item">
              <img className="skills--logo margin-top-small " src="./SVG/html5.svg" alt="Bilal Hussain logo HTML" />
              <p>HTML</p>
            </div>
            <div className="tech__item">
              <img className="skills--logo margin-top-small " src="./SVG/sass.svg" alt="Bilal Hussain logo SASS/CSS" />
              <p>SASS/CSS</p>
            </div>
            <div className="tech__item">
              <img className="skills--logo margin-top-small " src="./SVG/firebase.svg" alt="Bilal Hussain logo Firebase" />
              <p>Firebase</p>
            </div>
            <div className="tech__item">
              <img className="skills--logo margin-top-small " src="./SVG/jquery.svg" alt="Bilal Hussain logo Jquery" />
              <p>Jquery</p>
            </div>
            <div className="tech__item">
              <img className="skills--logo margin-top-small " src="./SVG/mysql.svg" alt="Bilal Hussain logo SQL" />
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
              <h4 className="infoCon__info margin-botton-medium">I am available to discuss your project details, and help you with your web app design and development.</h4>
              <div className="infoCon--emailDiv margin-botton-medium">
                <h5 className="infoCon__emailMe">Email me at</h5>
                <h5 className="projectHeading project__link ">bhussain.bese17seecs@seecs.edu.pk</h5>
              </div>
              <div className="infoCon--follow">
                <h5 className="infoCon__emailMe">Follow me </h5>
                <div className="infoCon__socials margin-top-small">
                  <a target="_blank" href="https://github.com/BilalHussain009"> <img className="followIcon" alt="Bilal Hussain github link" src="./SVG/github.svg" /></a>
                  <a target="_blank" href="https://stackoverflow.com/users/10436299/bilal"><img className="followIcon" alt="Bilal Hussain stackoverflow link" src="./SVG/stackoverflow.svg" /></a>
                  <a target="_blank" href="https://www.linkedin.com/in/bilal-hussain-29178b1b6/"><img className="followIcon" alt="Bilal Hussain linkedin" src="./SVG/linkedin.svg" /></a>
                </div>
              </div>
            </div>
            <div className="contactCon">
              <form className="contactForm">
                <input className="contactForm__field margin-bottom-small" type="text" placeholder="Your name*" required />
                <input className="contactForm__field margin-bottom-small" type="email" placeholder="Your email*" required />
                <input className="contactForm__field margin-bottom-small" type="text" placeholder="Your Website (if exists)" />
                <textarea className="contactForm__field margin-bottom-small" placeholder="How can i Help?" rows="3"></textarea>
                <button className="header__btnbox__talk margin-left-small">Get in Touch</button>
              </form>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="about">
            <img className="navlist--logo" src="/B.jpeg" alt="Bilal Logo"></img>
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
    </div >
  )
}