import Head from 'next/head'
import { Link, animateScroll as scroll } from "react-scroll";
import LinkNext from 'next/link'
import Image from 'next/image'

export default function Home() {
  var year = new Date().getFullYear()

  return (
    <div>
      <Head>
        <meta name="google-site-verification" content="ulmw69VpszQCQ2EURISAtVUSQfQEgDxiLtcsheVsdyY" />
        <title>Bilal Hussain | Web Developer | Portfolio | Bilal Hussain Website | Bilal Hussain Full Stack Web Developer</title>
        <meta name="description" content="Bilal Hussain portfolio,full stack web developer experienced in react,node,mongodb. Part time freelancer . This is Bilal Hussain's Public Portfolio Website" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      </Head>
      <div className="container">
        <nav className="navbar">
          <div className="navlist">
            <div className="navlist--logo">
              <Image src="/B.jpeg" alt="Bilal Hussain Logo" layout={'fill'} objectFit={'contain'} />
            </div>
            <ul className="navlist--links">
              <li className="navlist--link"><a target="_blank" href="https://github.com/BilalHussain009">Github</a></li>
              <li className="navlist--link"><a target="_blank" href="https://stackoverflow.com/users/10436299/bilal">StackOverFlow</a></li>
              <li className="navlist--link"><a target="_blank" href="https://drive.google.com/file/d/15c79yZAYA4eRtIr9oUj-GWNO-_fc1FbU/view?usp=sharing">Resume</a></li>
            </ul>
          </div>
        </nav>

        <div className="header">
          <div className="header__box">
            <h1 className="header__main"><span className="header__main">Hi, my name is Bilal Hussain</span><br></br><br></br> <span className="header__sub ">I'm a Full Stack Web Developer with expertise in React & Node.js</span></h1>
            <div className="header__btnbox margin-top-medium">
              <Link href='#' className="header__btnbox__work" to="project1" spy={true}
                smooth={true}>My Work</Link>

              <Link to="contact1" spy={true} href='#'
                smooth={true} className="header__btnbox__talk margin-left-small">Let's Talk</Link>
            </div>

          </div>
          <div className="header__cont">

            <img className="header__img" src="/profile.png" alt="Bilal Hussain Portfoilo Image" />
          </div>
        </div>
        <section className="projects" id="project1">
          <p className="projects__header margin-bottom-large">Latest projects</p>
          <div className='project flex_row margin-botton-medium ' style={{ backgroundColor: '#ebf4f5' }}>
            <div className='project__description flex_col_center'>
              <div className='project__description__header'>
                <p className='project__description__header__name'>Maldini Fashion</p>
                <p className='project__description__header__tags margin-top-tiny'>React.js | SSR | Ecommerce</p>
                <p className='project__description__text margin-top-medium'> Single page web app made with react and redux from scratch. The
                  store has a login system, cart, review, sorting & search
                  functionality. There is a PayPal sandbox integration as well,
                  which can be converted to an actual PayPal gateway.</p>
              </div>
              <div className='project__description__links'>
                <LinkNext href='http://maldinifashion.herokuapp.com/'>
                  <a className='header__btnbox__work'> Demo</a>
                </LinkNext>
                <LinkNext href="https://github.com/BilalHussain009/React-Demo-Store-E-commerce" >
                  <a className='header__btnbox__talk margin-left-small'> Github</a>
                </LinkNext>
              </div>
            </div>

            <div className="project__image flex_row_end">
              <div className="project__image__cont">
                <Image
                  src="/project1.png"
                  alt="project 1"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
          <div className='project flex_row margin-botton-medium '>
            <div className='project__description flex_col_center'>
              <div className='project__description__header'>
                <p className='project__description__header__name'>Panion</p>
                <p className='project__description__header__tags margin-top-tiny'>Next.js | Chat | Sockets |Social App</p>
                <p className='project__description__text margin-top-medium'> I implemented a realtime chat application using web sockets and firebase to allow users in communities to talk to each other and plan activities. I also implemented features to create group communities and create posts for communities.</p>
              </div>
              <div className='project__description__links'>
                <LinkNext href='https://panion.com/'>
                  <a className='header__btnbox__work'> Demo</a>
                </LinkNext>
                
              </div>
            </div>

            <div className="project__image flex_row_end">
              <div className="project__image__cont">
                <Image
                  src="/project5.png"
                  alt="project 5"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
          <div className='project flex_row margin-botton-medium ' style={{ backgroundColor: '#f2f3e2' }}>
            <div className='project__description flex_col_center'>
              <div className='project__description__header'>
                <p className='project__description__header__name'>Expense Manager</p>
                <p className='project__description__header__tags margin-top-tiny'>React | SCSS | Firebase | Authentication</p>
                <p className='project__description__text margin-top-medium'>  A small expense app built to manage daily expenses and income,
                  this app calculates the total amount spent and the remaining
                  balance.</p>
              </div>
              <div className='project__description__links'>
                <LinkNext href='https://expensify-bilal-app.herokuapp.com/'>
                  <a className='header__btnbox__work'> Demo</a>
                </LinkNext>
                <LinkNext href="https://github.com/BilalHussain009/Expensify-app-bilal" >
                  <a className='header__btnbox__talk margin-left-small'> Github</a>
                </LinkNext>
              </div>
            </div>

            <div className="project__image flex_row_end">
              <div className="project__image__cont">
                <Image
                  src="/project2.png"
                  alt="project 2"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
          <div className='project flex_row margin-botton-medium ' style={{ backgroundColor: '#caf2ef' }}>
            <div className='project__description flex_col_center'>
              <div className='project__description__header'>
                <p className='project__description__header__name'>Omni Food</p>
                <p className='project__description__header__tags margin-top-tiny'>HTML | Responsive | Design</p>
                <p className='project__description__text margin-top-medium'> A landing page built for Omni Food Restaurant, the page is fully
                  responsive and has responsive images. It is built with pure
                  HTML, CSS, and bootstrap. The Page features some small
                  animations and transitions as well.</p>
              </div>
              <div className='project__description__links'>
                <LinkNext href='https://bilalhussain009.github.io/omnifood/'>
                  <a className='header__btnbox__work'> Demo</a>
                </LinkNext>
                <LinkNext href="https://github.com/BilalHussain009/omnifood" >
                  <a className='header__btnbox__talk margin-left-small'> Github</a>
                </LinkNext>
              </div>
            </div>

            <div className="project__image flex_row_end">
              <div className="project__image__cont">
                <Image
                  src="/project3.png"
                  alt="project 3"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>

        </section>
        <section className="skills" id="skills1">
          <p className="projects__header margin-bottom-large">What i do.</p>
          <div className="skills-cont">
            <div className="skill">
              <div className="skills--logo">
                <Image src="/SVG/genius.svg" alt="logo-react" width={'100%'} height='100%' />
              </div>
              <p className="projectHeading margin-top-small">Development of SPA</p>
              <p id="" className="projectDescription margin-top-small">Need a single-page app with responsive UI?. I can make beautiful web apps in React based on your design,or improve old designs to look modern and beautiful.</p>
            </div>
            <div className="skill">
              <div className="skills--logo">
                <Image src="/SVG/node-dot-js.svg" alt="logo-node" width={'100%'} height='100%' />
              </div>
              <p className="projectHeading margin-top-small">REST API </p>
              <p className="projectDescription margin-top-small">I can create REST APIs from scratch. I will provide login authentications, file management, database schema, database maintenance.</p>
            </div>
            <div className="skill">
              <div className="skills--logo">
                <Image src="/SVG/sphere.svg" alt="logo-web" width={'100%'} height='100%' />
              </div>
              <p className="projectHeading margin-top-small">Web design and development </p>
              <p className="projectDescription margin-top-small">Do you need a fully customized web with impressive UI and UX? look no more i create beautiful web sites and web apps that scale and are SEO friendly.</p>
            </div>
          </div>
        </section>
        <section className="tech margin-top-medium">
          <p className="projects__header margin-bottom-large">My Tech Stack</p>
          <div className="tech__items">
            <div className="tech__item">
              <div className='skills--logo margin-top-small'>
                <Image src='/SVG/react.svg' width={'100%'} height='100%' alt="Bilal Hussain logo React react-native" />
              </div>
              <p>React</p>
            </div>
            <div className="tech__item">
              <div className='skills--logo margin-top-small'>
                <Image src='/SVG/typescript.svg' width={'100%'} height='100%' alt="Bilal Hussain logo Typescript" />
              </div>
              <p>Typescript</p>
            </div>
            <div className="tech__item">
              <div className='skills--logo margin-top-small'>
                <Image src="/SVG/node-dot-js.svg" width={'100%'} height='100%' alt="Bilal Hussain logo Node.js" />
              </div>
              <p>Node.js</p>
            </div>
            <div className="tech__item">
              <div className='skills--logo margin-top-small'>
                <Image src="/SVG/mongodb.svg" width={'100%'} height='100%' alt="Bilal Hussain logo MongoDB" />
              </div>
              <p>MongoDB</p>
            </div>
            <div className="tech__item"><div className='skills--logo margin-top-small'>
              <Image src="/SVG/nextjs.svg" width={'100%'} height='100%' alt="Bilal Hussain logo nextjs" />
            </div>
              <p>Next.js</p>
            </div>
            <div className="tech__item"><div className='skills--logo margin-top-small'>
              <Image src="/SVG/linux.png" width={'100%'} height='100%' alt="Bilal Hussain logo linux" />
            </div>
              <p>Linux</p>
            </div>
            <div className="tech__item"><div className='skills--logo margin-top-small'>
              <Image src="/SVG/python.svg" width={'100%'} height='100%' alt="Bilal Hussain logo python" />
            </div>
              <p>Python</p>
            </div>
            <div className="tech__item"><div className='skills--logo margin-top-small'>
              <Image src="/SVG/firebase.svg" width={'100%'} height='100%' alt="Bilal Hussain logo Firebase" />
            </div>
              <p>Firebase</p>
            </div>
            <div className="tech__item"><div className='skills--logo margin-top-small'>
              <Image src="/SVG/android.svg" width={'100%'} height='100%' alt="Bilal Hussain logo android" />
            </div>
              <p>Android</p>
            </div>
            <div className="tech__item"><div className='skills--logo margin-top-small'>
              <Image src="/SVG/mysql.svg" width={'100%'} height='100%' alt="Bilal Hussain logo SQL" />
            </div>
              <p>SQL</p>
            </div>

          </div>
        </section>
    
        <section className="contact" id="contact1">
          <p className="projects__header margin-bottom-large">Just say hi.</p>
          <div className="contactCon">
            <div className="infoCon">
              <p className="infoCon__info margin-botton-medium">I am available to discuss your project details and help you with your web app design and development.</p>
              <div className="infoCon--emailDiv margin-botton-medium">
                <p className="infoCon__emailMe">Email me at</p>
                <p className="projectHeading project__link ">bhussain.bese17seecs@seecs.edu.pk</p>
              </div>
              <div className="infoCon--follow">
                <p className="infoCon__emailMe">Follow me </p>
                <div className="infoCon__socials margin-top-small">
                  <div className="followIcon">
                    <LinkNext target="_blank" href="https://github.com/BilalHussain009">
                      <Image alt="Bilal Hussain github link" src="/SVG/github.svg" width={'100%'} height={'100%'} />
                    </LinkNext>
                  </div>
                  <div className="followIcon">
                    <LinkNext target="_blank" href="https://stackoverflow.com/users/10436299/bilal">
                      <Image alt="Bilal Hussain github link" src="/SVG/stackoverflow.svg" width={'100%'} height={'100%'} />
                    </LinkNext>
                  </div>
                  <div className="followIcon">
                    <LinkNext target="_blank" href="https://www.linkedin.com/in/bilal-hussain-29178b1b6">
                      <Image alt="Bilal Hussain github link" src="/SVG/linkedin.svg" width={'100%'} height={'100%'} />
                    </LinkNext>
                  </div>
                </div>
              </div>
            </div>
            <div className="contactCon">
              <form className="contactForm" name="contact" data-netlify="true">
                <input className="contactForm__field margin-bottom-small" name="name" type="text" placeholder="Your name*" required />
                <input className="contactForm__field margin-bottom-small" name="email" type="email" placeholder="Your email*" required />
                <input className="contactForm__field margin-bottom-small" name="website" type="text" placeholder="Your Website (if exists)" />
                <textarea className="contactForm__field margin-bottom-small" name="message" placeholder="How can i Help?" rows="3"></textarea>
                <button className="header__btnbox__talk margin-left-small">Get in Touch</button>
              </form>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="about">
            <div className="navlist--logo">
              <Image src="/B.jpeg" alt="Bilal Hussain Logo" layout={'fill'} objectFit={'contain'} />
            </div>
            <div className="about--cont margin-left-medium">
              <h2>Bilal Hussain</h2>
              <p>Full Stack Web Developer & Designer</p>
            </div>

          </div>
          <div className="copyright">
            <p>&#169; {year} Bilal Hussain</p>
            <p>Custom Made</p>
          </div>
        </footer>

      </div>
    </div >
  )
}