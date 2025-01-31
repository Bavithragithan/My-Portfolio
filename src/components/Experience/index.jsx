import "./Experience.css";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../../data";

function Experience() {
  return (
    <section id="experience" className="section__wrapper">
      <h3 className="section__title shine">Experience</h3>
      <VerticalTimeline lineColor="var(--color-primary)" animate={true}>
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${exp.type}`}
            contentStyle={{ background: "var(--color-dark)", color: "#fff" }}
            iconStyle={{ background: "var(--color-primary)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid var(--color-dark)" }}
            icon={
              <div className="icon-container">
                <img src={exp.icon} alt={`${exp.title} Icon`} className="icon-img" />
              </div>
            }
          >
            <div className="timeline-header">
              <h3 className="vertical-timeline-element-title">{exp.title}</h3>
              <span className="timeline-date">{exp.date}</span>
            </div>
            <h4 className="vertical-timeline-element-subtitle">{exp.company}</h4>
            <p>{exp.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}

export default Experience;
