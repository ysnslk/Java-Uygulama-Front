import "./App.css";
import Welcome from "./components/Welcome";
import Nav from "./components/Nav";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {
  const navBar = [
    {
      name: "Home",
      href: "#",
    },
    {
      name: "About",
      href: "#",
    },
    {
      name: "Skills",
      href: "#",
    },
    {
      name: "Project",
      href: "#",
    },
    {
      name: "Contact",
      href: "#",
    },
  ];
  const about = [
    {
      class: "backgrond",
      head: "Background",
      content:
        " I have been working in web development industry for over 5 years.During tihs time, I have gained extensive experience in front-end development and responsive web design.",
    },
    {
      class: "education",
      head: "Education",
      content:
        "I graduated with a degree in Computer Science from XYZ Univercity. My coursework included web development, software engineering and database management.",
    },
  ];
  const projects = [
    {
      name: "Project 1: E-commerce Website",
      content:
        "This projectinvoled creating a fully functional e-commerce website from scratch. I implemented features such as product listing, shopping cart, user authentication and payment integration. The website was built using React and Redux for state management.",
    },
    {
      name: "Project 2: Portfolio Website",
      content:
        "I designed and developeda personel portfolio website to showcase my skils and projects. The website features a clean and modern design and it is optimized for performance and SEO. I used HTML, CSS and JavaScript for the front-end.",
    },
  ];
  const skills = [
    {
      head: "HTML",
      text: "I am proficient in writing clean and semantinc HTML code. I have experience in using HTML5 features and understanding the impartance of accesibility.",
    },
    {
      head: "JavaScript",
      text: "I am experienced in JavaScript and have worked on several interactive we projects. I am familiar with modern frameworks like React and Angular",
    },
    {
      head: "CSS",
      text: "I have strong grasp of CSS and its various properties. I am skilled in creating responsive layouts, customizing styles, and using CSS frameworks like Bootstrap.",
    },
    {
      head: "Responsive Design",
      text: "I have a good understanding of responsive design principles and have developed mobile-friendly websites that provide a seamless user experience accross diffrent devices and screen sizes.",
    },
  ];
  const links = [
    {
      href: "#",
      class: "fa-brands fa-square-twitter",
    },
    {
      href: "#",
      class: "fa-brands fa-square-instagram",
    },
    {
      href: "#",
      class: "fa-brands fa-linkedin",
    },
    {
      href: "#",
      class: "fa-brands fa-square-github",
    },
    {
      href: "#",
      class: "fa-brands fa-square-facebook",
    },
  ];
  const welcome = {
    header: "Welcome To My Website",
    text: "Hello I'm Yasin Solak a web developer. Passionate about creating awesome websites.",
    img: "https://i.pravatar.cc/300",
  };

  const footer = "@2023 Yasin SOLAK All rights reserved.";
  return (
    <main>
      <Nav navBar={navBar} />
      <Welcome welcome={welcome} links={links} />
      <About about={about} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <ContactMe />
      <Footer footer={footer} />
    </main>
  );
}

export default App;
