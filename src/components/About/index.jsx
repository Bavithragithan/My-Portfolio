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
          Passionate and detail-oriented software engineer with experience in building POS systems, RESTful APIs, microservices, and responsive web applications. Skilled in Java, C#, Python, JavaScript, and Node.js, with a strong emphasis on writing clean, maintainable code and creating user-friendly solutions. Solid understanding of algorithms, data structures, object-oriented programming, and design patterns.          </p>
        </div>
      </div>
    </section>
  );
};

export default About;