import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  profile3,
  profile4,
  profile5,
  profile6,
  figma,
  css,
  html,
  javascript,
  bootstrap,
  react,
  emailicon,
  messengericon,
  whatsappicon,
  java,
  csharp,
  dbms,
  arduino,
  python,
} from "./assets";

export const menu = [
  { name: "About" },
  { name: "Skill" },
  { name: "Projects" },
  { name: "Testimonial" },
  { name: "Contact" },
];

export const projects = [
  {
    title: "Billing System for Royal Book Shop",
    image: project1,
    category: "Backend Development",
    description: `A digital solution for automating billing processes, including book inventory management, customer purchases, 
                  and receipt generation for streamlined operations.`,
    demoLink: "https://github.com/Bavithragithan/Royal-Book-Shop-Billing-System",
    stacks: [
      {
        name: "Java",
        logo: java,
      },
    ],
  },
  {
    title: "Student Management System with DB in C#",
    image: project2,
    category: "Backend Development",
    description: `A C# application with a database backend to manage student records, including registration, 
    attendance, grades, and personal details.`,
    demoLink: "https://drive.google.com/file/d/1KO-IqzJpEprTP8nOryAbbkX9s1xUXooK/view?usp=sharing",
    stacks: [
      {
        name: "C#",
        logo: csharp,
      },
      {
        name: "DBMS",
        logo: dbms,
      },
    ],
  },
  {
    title: "IOT based Smart Water Tank System",
    image: project3,
    category: "Internet Of Things",
    description: `An automated system using IoT to monitor water levels, detect quality, and control pumps efficiently while providing real-time updates via connected devices.`,
    demoLink: "https://github.com/Bavithragithan/Smart-Water-Tank-System",
    stacks: [
      {
        name: "Arduino",
        logo: arduino,
      },
    ],
  },
  {
    title: "Around Lanka Tourism Website",
    image: project4,
    category: "Frontend Development",
    description: `A user-friendly platform showcasing tourist attractions, travel packages, and booking options, promoting seamless exploration of Sri Lanka.`,
    demoLink: "https://around-lanka-tourism.netlify.app/",
    stacks: [
      {
        name: "Html",
        logo: html,
      },
      {
        name: "Css",
        logo: css,
      },
      {
        name: "Javascript",
        logo: javascript,
      },
    ],
  },
  {
    title: "Coffee Shop - Mobile App Design",
    image: project5,
    category: "UI/UX",
    description: `A mobile app interface for ordering coffee, browsing menus, and tracking loyalty rewards, enhancing customer convenience and engagement.`,
    demoLink: "https://www.figma.com/design/U9d86eNf08xFLSzP4d7ars/Coffee-Shop-Design-Prototype-Bavi?node-id=0-1&t=9ZYcxN1Uf7eCnKLo-1",
    stacks: [
      {
        name: "Figma",
        logo: figma,
      },
    ],
  },
  {
    title: "Clinic Appointment Console System",
    image: project6,
    category: "Backend development",
    description: `A desktop-based system for managing clinic schedules, patient appointments, and doctor availability for smoother healthcare operations.`,
    demoLink: "https://github.com/Bavithragithan/Clinic-Booking-system",
    stacks: [
      {
        name: "Java",
        logo: java,
      },
    ],
  },
];

export const skills = [
  {
    title: "UI/UX",
    data: [
      {
        skill: "Figma",
        level: "Intermediate",
        logo: figma,
      },
    ],
  },
  {
    title: "Frontend Development",
    data: [
      {
        skill: "HTML",
        level: "Intermediate",
        logo: html,
      },
      {
        skill: "CSS",
        level: "Intermediate",
        logo: css,
      },
      {
        skill: "JavaScript",
        level: "Intermediate",
        logo: javascript,
      },
      {
        skill: "React",
        level: "Beginner",
        logo: react,
      },
      {
        skill: "Bootstrap",
        level: "Beginner",
        logo: bootstrap,
      },
    ],
  },
  {
    title: "Backend Development",
    data: [
      {
        skill: "Java",
        level: "Advanced",
        logo: java,
      },
      {
        skill: "C#",
        level: "Advanced",
        logo: csharp,
      },
      {
        skill: "Python",
        level: "Advanced",
        logo: python,
      },
    ],
  },
];

export const contactInfo = [
  {
    name: "Email",
    value: "skbavi61@gmail.com",
    link: "mailto:skbavi61@gmail.com",
    icon: emailicon,
    btnIcon: <MdOutlineEmail />,
    color: "rgb(56,115,205)",
  },
  {
    name: "Messenger",
    value: "Sk Bavi",
    link: "https://m.me/sk.bavi.79?hash=AbbkNtjdEP7F12JE&source=qr_link_share",
    icon: messengericon,
    btnIcon: <RiMessengerLine />,
    color: "rgb(139,74,251)",
  },
  {
    name: "WhatsApp",
    value: "+94756089312",
    link: "https://wa.me/qr/Q5EN2UYO7DBBH1 ",
    icon: whatsappicon,
    btnIcon: <BsWhatsapp />,
    color: "rgb(38,234,112)",
  },
];
export const socialHandles = [
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "https://github.com/Bavithragithan",
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/kuganesan-bavithragithan-931917269/",
  },
  {
    name: "Youtube",
    icon: <AiFillYoutube />,
    link: "https://www.youtube.com/@skbavi18",
  },
];

export const testimonials = [
  {
    avatar: profile3,
    name: "Thuvaragan Sritharan",
    review: ` Bavi is a highly skilled and dedicated developer. Their expertise in front-end technologies like HTML, CSS, and React helped us create a user-friendly and responsive platform. They were professional and detail-oriented throughout the project.`,
  },
  {
    avatar: profile4,
    name: "Nivethanan Sivagnanasuntharam",
    review: ` Working with Bavi was a fantastic experience. They have an excellent eye for design and functionality, which made our website not only look great but perform seamlessly. Their ability to quickly adapt and solve complex issues was impressive.`,
  },
  {
    avatar: profile5,
    name: "Rajeeskumar Segar",
    review: ` Bavi consistently delivers exceptional work with a deep understanding of modern web technologies. Their problem-solving skills and dedication to meeting deadlines made a huge difference to our project’s success.`,
  },
  {
    avatar: profile6,
    name: "Prusothaman MR",
    review: ` I was impressed by Bavi’s ability to turn ideas into reality. They created a clean and dynamic interface for our application, ensuring it was scalable and efficient. Their professionalism and communication made collaboration effortless.`,
  },
];
