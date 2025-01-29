import "./Header.css";
import { profile1, profile2 } from "../../assets";
import CodeBlock from "../../ui/CodeBlock";
import Facts from "../../ui/Facts";
import SocialHandles from "../../ui/SocialHandles";

const code = `const developer = {
  firstName: "Bavithragithan",
  lastName: "Kuganesan",
  aka: "Sk Bavi",
  hobby: repeat = () => {
    // eat();
    // sleep();
    // code();
    // repeat();
  }
}`;

const Header = () => {
  return (
    <header id='header'>
        <div className="section_wrapper">
          <div className="grid upper">
          <div className="column left">
              <img src={profile2} className="profile__photo" alt="" />
            </div>
            <div className="column right">
              <img src={profile1} className="profile__photo" alt="" />
            </div>
          </div>
          <div className="card grid lower">
            <CodeBlock language={'javascript'} code={code} />
            <div>
              <p className="text__muted description">
              I am an enthusiastic software engineering intern, dedicated to gaining hands-on experience and contributing to innovative projects while exploring emerging technologies.
              </p>
              <Facts />
              <SocialHandles />
            </div>
          </div>
        </div>
    </header>
  )
}

export default Header