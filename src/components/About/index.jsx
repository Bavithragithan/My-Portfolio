import "./About.css";
import Hole from "../../ui/Hole";
import { skills } from "../../data";
import CardUi from "../../assets/CardUi";

const About = () => {
  return (
    <section id="about">
      <div className="card section__wrapper">
        <Hole />
        <div className="column left-column">
          <h3 className="skill__title shine">My Skills</h3>
          <div className="skills__container">
            {skills.map((skill, index) => (
              <div className="flex skill__group" key={skill.id || index}> 
                {skill.data.map((list) => (
                  <div className="blur__overlay flex__center skill" key={list.id || list.logo}> 
                    <div className="skill__logo">
                      <img src={list.logo} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <CardUi className="card__ui-item" color={"var(--color-primary)"} />
        </div>
        <div className="column right-column">
          <h2 className="shine">About Me</h2>
          <h1 className="title">
            I am <span className="color__primary">Bavithragithan Kuganesan</span>
          </h1>
          <p className="text__muted description">
            I am a full-stack intern with a strong passion for software development and a deep interest in building impactful web applications. Currently, I am gaining hands-on experience in both front-end and back-end technologies, while working on various IoT and software projects. I enjoy learning new tools and frameworks, and I'm excited about the opportunity to apply my skills to solve real-world challenges. I am always eager to grow as a developer and contribute to meaningful projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;