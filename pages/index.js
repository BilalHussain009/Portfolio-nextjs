import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="description" content="Portfolo of Bilal Hussain , web developer experienced in react,node,mongodb. Part time freelancer" />
        <title>Web Developer | Bilal Hussain Portfolio</title>
        
      </Head>
      <div className="container">
        <nav className="navbar">
          <ul className="navlist">
            <img className="navlist--logo" src="/B.jpeg" alt="Bilal Logo"></img>
            <div className="navlist--links">
              <li className="navlist--link"><a href="#">About</a></li>
              <li className="navlist--link"><a href="#">Contact</a></li>
              <li className="navlist--link"><a href="#">Services</a></li>
              <li className="navlist--link"><a href="#">Pricing</a></li>
            </div>
          </ul>
        </nav>

        <div className="header">
          <div className="header__box">
            <h3 className="header__main">Hi, my name is Bilal Hussain</h3>
            <h1 className="header__sub margin-top-medium">I'm a Full Stack Web Developer with expertise in React & Node.js</h1>
            <div className="header__btnbox margin-top-medium">
              <button className="header__btnbox__work">My Work</button>
              <button className="header__btnbox__talk margin-left-small">Let's Talk</button>
            </div>

          </div>
          <img className="header__img" src="/kek.png" alt="Bilal Hussain Portfoilo Image" />
        </div>
        <section className="projects">
          <h3 className="projects__header margin-bottom-large">Latest projects</h3>
          <div className="project">
            <div className="project__info">
              <h4 className="projectHeading">Single Page React Ecommerce Store,open source </h4>
              <div className="project__tags margin-top-tiny">Ecommerce,SPA</div>
              <p className="projectDescription margin-top-small">Single Page web app made with react and redux from scratch. Store is integrated with login system and is using firebase for authentication. There is a paypal sand box integration as well, which can be converted to an actual paypal gateway easily</p>
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
        </section>
        <section className="skills">
          <h3 className="projects__header margin-bottom-large">What i do.</h3>
          <div className="skills-cont">
            <div className="skill">
              <img className="skills--logo" src="./SVG/genius.svg" />
              <h4 className="projectHeading margin-top-small">Development of SPA</h4>
              <p id="" className="projectDescription margin-top-small">Need a single page app with responsive UI?. I can make beautiful web apps in React based on your design ,or improve old designs to look modern and beautiful</p>
              <a target="_blank" className="projectHeading project__link " href="https://expensify-bilal-app.herokuapp.com/">Contact</a>
            </div>
            <div className="skill">
              <img className="skills--logo" src="./SVG/node-dot-js.svg" />
              <h4 className="projectHeading margin-top-small">REST API </h4>
              <p className="projectDescription margin-top-small">I can create REST api's from scratch. I will provide login authentications , file management, database schema , database maintenance </p>
              <a target="_blank" className="projectHeading project__link" href="https://expensify-bilal-app.herokuapp.com/">Contact</a>
            </div>
            <div className="skill">
              <img className="skills--logo" src="./SVG/sphere.svg" />
              <h4 className="projectHeading margin-top-small">Web design and development </h4>
              <p className="projectDescription margin-top-small">Do you need a fully customized web with impressive UI and UX? look no more i create beautiful web sites and web apps that scale and are SEO friendly.</p>
              <a target="_blank" className="projectHeading project__link" href="https://expensify-bilal-app.herokuapp.com/">Contact</a>
            </div>

          </div>
        </section>
        <section className="contact">
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
                  <img className="followIcon" alt="Bilal Hussain github link" src="./SVG/github.svg" />
                  <img className="followIcon" alt="Bilal Hussain stackoverflow link" src="./SVG/stackoverflow.svg" />
                  <img className="followIcon" alt="Bilal Hussain linkedin" src="./SVG/linkedin.svg" />
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
            <h4>&#169; 2020 Bilal Hussain</h4>
            <h5>Custom Made</h5>
          </div>
        </footer>
      </div>
    </div >
  )
}