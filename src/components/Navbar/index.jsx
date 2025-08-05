import Logo from "../../assets/Logo";
import "./Navbar.css";
import { FaTimesCircle } from "react-icons/fa";
import { FaArrowUpRightFromSquare, FaBarsStaggered } from "react-icons/fa6";
import { menu } from "../../data";
import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from "react";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/bavithragithan-cv.pdf';
    link.download = 'bavithragithan-cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="card flex__center navbar">
      {showSidebar && (
        <div
          className="aside__overlay"
          onClick={() => setShowSidebar(false)}
        ></div>
      )}

      <div className="flex_center logo"
        onClick={() => scroll.scrollToTop({ duration: 500 })}>
        <Logo />
      </div>

      <aside className={`flex__center sidebar ${showSidebar && "visible"}`}>
        <div className="flex sidebar__top">
          <span
            className="icon__container close__btn"
            onClick={() => setShowSidebar(false)}
          >
            <FaTimesCircle />
          </span>
        </div>
        <div className="flex sidebar__middle">
          {menu.map((list, index) => (
            <Link
              to={list.name.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="tab"
              activeClass="btn-shine"
              key={index}
              onClick={() => setShowSidebar(false)}
            >
              {list.name}
            </Link>
          ))}

          <button
            className="btn flex__center hire__btn"
            onClick={() => {
              handleResumeDownload();
              setShowSidebar(false);
            }}
          >
            My Resume
            <div className="flex__center icon">
              <FaArrowUpRightFromSquare />
            </div>
          </button>
        </div>
      </aside>

      <div className="flex__container buttons__wrapper">
        <button
          className="btn flex__center hire__btn desktop-resume"
          onClick={handleResumeDownload}
        >
          My Resume
          <div className="flex__center icon">
            <FaArrowUpRightFromSquare />
          </div>
        </button>
        <FaBarsStaggered
          className="menu"
          onClick={() => setShowSidebar(!showSidebar)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
