import { NavLink } from 'react-router-dom';
import headshot from '../assets/headshot.png';

// Replace these variables with your information
const firstName = 'Isana';
const jobTitle = 'Software Developer';


const jobLocation = 'New Jersey & NYC';

const careerObjective = 'To obtain a challenging and growth-oriented position as a Stack Developer where I can leverage my foundational knowledge in front-end and back-end technologies, enhance my coding skills, and contribute to the development of innovative software solutions. Eager to collaborate with experienced professionals and continuously learn new technologies to become a proficient full-stack developer';
const personalLife = 'I love being a mom, traveling, and learning new things.';

const About = () => {
  return (
    <main className="about-container">
      <section className='about-content-container'>
        <section className='image-container'>
          {/* Replace this placeholder image and alt tag with a professional headshot */}
          <img className='headshot' src={headshot} alt="mypersonalheadshot" />
        </section>
        <section className='description-container'>
          <h2 className='text-xl font-medium'>I&apos;m {firstName}, {jobLocation}</h2>
          
          <p>{careerObjective}</p>
          <p>{personalLife}</p>
          <p className='mb-4'>If you are interested in my work, reach out to me!</p>
          <NavLink to="/contact" className="contact-me-btn">Contact Me</NavLink>
        </section>
      </section>
    </main>
  )
}
 export default About;