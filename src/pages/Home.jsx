import { NavLink } from "react-router-dom";
import PlaceholderHero from '../assets/abstract.png';

const fullName = 'Isana Pearson';
const personalQuote = 'Faith Not Fear';
const professionalSummary = 'Enthusiastic and detail-oriented beginner Stack Developer with a solid understanding of front-end and back-end development principles. Proficient in HTML, CSS, JavaScript, and foundational knowledge of server-side technologies like Node.js and databases such as MongoDB and SQL. Adept at problem-solving, learning new technologies quickly, and passionate about building user-friendly, responsive web applications. Eager to contribute to dynamic development teams and grow within the field through continuous learning and hands-on experience.';

const Home = () => {
  return (
    <main className="home-container">
      <section className="home-hero home-subsection">
        <h2 className="text-4xl mb-2">Hi, I am {fullName}</h2>
        <p className="subsection-paragraph">{personalQuote}</p>
        <NavLink to="/contact">
        Contact Me
        </NavLink>
        {/* Replace the src with your own placeholder and change the alt to match the description */}
        <img className="hero-background" src={PlaceholderHero} alt="placeholder hero image" />
      </section>
      <section className="overview home-subsection">
        <h3 className="subsection-intro-header">Introduction</h3>
        <h2 className="subsection-big-header">Overview.</h2>
        <p className="subsection-paragraph">{professionalSummary}</p>
        <NavLink to="/about">
        Learn More About Me
        </NavLink>
      </section>
      <section className="projects home-subsection">
        <h3 className="subsection-intro-header">My Works</h3>
        <h2 className="subsection-big-header">Projects.</h2>
        <p className="subsection-paragraph">I have worked on multiple project, the projects I have worked on demonstrate my skills and experience through real-life examples of my work. Each project is briefly deescribed and includes links to code repositories that showcase my ability to tackle challenging problems. If you are interested in my work click on the link below to go to the project page.</p>
        <NavLink to="/projects">
        View Projects
        </NavLink>
      </section>
    </main>
  )
}

export default Home