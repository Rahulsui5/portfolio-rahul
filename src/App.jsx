import { useEffect, useState } from "react";
import "./App.css";
import Cursor from "./component/Cursor";
import logo from "./assets/logo.png";
import img from "../public/iconImg.jpg";
import imgRahul from "./assets/img.jpg";
import boy from "./assets/boy.jpeg";
import word from "./assets/chatGPT.png";
import currencyConverter from "./assets/currencyConverter.png";
import todoList from "./assets/todoList.png";
import textEditor from "./assets/textEditor.png";
import newsGenerator from "./assets/newsGenerator.png";
import passwordGenerator from "./assets/passwordGenerator.png";
import dictionary from "./assets/dictionary.png";
import clothstore from "./assets/clothstore.png";
import RahulResume from "../public/RahulResume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faWhatsapp,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [navBg, setNavBg] = useState(false);

  const projects = [
    {
      img: currencyConverter,
      name: "Currency Converter",
      discription: "A project to convert currencies in real-time.",
      liveLink: "https://currency-converter-one-gray-22.vercel.app/",
      githubLink: "https://github.com/Rahulsui5/CurrencyConverter.git",
    },
    {
      img: todoList,
      name: "Todo List",
      discription: "A project to manage and organize your tasks efficiently.",
      liveLink: "https://todo-list-plum-six-71.vercel.app/",
      githubLink: "https://github.com/Rahulsui5/TodoList.git",
    },
    {
      img: textEditor,
      name: "Text Editor",
      discription:
        "A simple text editor with features like uppercase, lowercase, and word count.",
      liveLink: "https://text-functions.vercel.app/",
      githubLink: "https://github.com/Rahulsui5/TextFunctions.git",
    },
    {
      img: newsGenerator,
      name: "News Generator",
      discription:
        "A project to fetch and display latest news articles from different categories.",
      liveLink: "https://news-generator-chi.vercel.app/",
      githubLink: "https://github.com/Rahulsui5/newsGenerator.git",
    },
    {
      img: passwordGenerator,
      name: "Password Generator",
      discription:
        "A tool to generate strong passwords with customizable options.",
      liveLink: "https://password-generator-omega-wine.vercel.app/",
      githubLink: "https://github.com/Rahulsui5/PasswordGenerator.git",
    },
    {
      img: dictionary,
      name: "Dictionary",
      discription:
        "A project to look up word meanings and definitions in real-time.",
      liveLink: "https://your-dictionary-live-link.vercel.app/",
      githubLink: "https://github.com/Rahulsui5/Dictionary.git",
    },
    {
      img: clothstore,
      name: "Cloth Store",
      discription:
        "A responsive Cloth Store front-end built with React, Tailwind CSS, React Router for navigation, and REST API integration for dynamic product data.",
      liveLink: "",
      githubLink: "https://github.com/Rahulsui5/Cloth-store.git",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior:"auto" });
    setIsOpen(false);
  };

  return (
    <div className="w-screen font-serif bg-gradient-to-br from-red-50 via-blue-50 to-purple-50 overflow-hidden">
      {/* <Cursor /> */}

      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-screen ${
          navBg
            ? "backdrop-blur-md shadow-lg h-[70px] z-50"
            : "bg-transparent"
        }`}
      >
        <nav className="flex items-start lg:items-center justify-between lg:justify-around">
          <img src={logo} height={60} width={70} alt="logo" />

          {/* Desktop Navbar */}
          <div
            className={`hidden h-12 ${
              !navBg ? "rounded-full shadow-lg bg-white opacity-70" : ""
            } max-w-2xl w-full lg:flex justify-around items-center`}
          >
            {["home", "about", "projects", "contact"].map((section) => (
              <span
                key={section}
                onClick={() => scrollToSection(section)}
                className="relative group cursor-pointer text-gr block py-2 sm:py-0"
              >
                <span>
                  {section.charAt(0).toUpperCase() +
                    section.slice(1).replace(/([A-Z])/g, " ")}
                </span>
                <span className="absolute left-1/2 bottom-0 w-0 h-[2.5px] bg-black transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
              </span>
            ))}
          </div>

          <div>
            <span
              onClick={() => scrollToSection("contact")}
              className="hidden py-2 px-3 bg-gradient-to-t rounded-full text-white gap-2 text-md from-slate-800 to-slate-400 lg:flex justify-center items-center hover:scale-95 duration-300 cursor-pointer"
            >
              Contact
              <img
                height={25}
                width={30}
                src="https://img.icons8.com/?size=100&id=2817&format=png&color=FFFFFF"
                alt=""
              />
            </span>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`rotate-90 ${
                !isOpen ? "" : "hidden"
              } lg:hidden text-xl pt-10 font-bold`}
            >
              |||
            </button>
          </div>

          {/* Mobile Navbar */}
          <div
            className={`absolute top-0 right-0 bg-gradient-to-t from-white via-purple-50 to-red-50 shadow-lg ${
              isOpen ? "" : "hidden"
            }`}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-end text-3xl px-5 py-5 w-full lg:hidden"
            >
              🔙
            </button>
            <div className="lg:hidden h-screen w-[200px] shadow-lg flex flex-col px-5 gap-5">
              {["home", "about", "projects", "contact"].map((section) => (
                <span
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="relative group cursor-pointer text-gr block py-2 sm:py-0"
                >
                  <span>
                    {section.charAt(0).toUpperCase() +
                      section.slice(1).replace(/([A-Z])/g, " ")}
                  </span>
                  <span className="absolute left-1/2 bottom-0 w-0 h-[2.5px] bg-black transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
                </span>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Home Section */}
      <section id="home" className="h-screen w-screen flex flex-col justify-center items-center">
        <div className="flex flex-col gap-5 justify-start items-center">
          <img src={img} className="rounded-full" height={130} width={130} alt="" />
          <h2 className="text-lg md:text-xl lg:text-2xl">Hi! I'm Rahul 👋🏻</h2>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
            Full Stack Developer
          </h1>
          <p className="max-w-3xl text-center leading-loose px-10">
            I build web applications that are fast, functional, and built to last.
            I work primarily with the MERN stack to bring ideas to life.
          </p>
        </div>

        <div className="flex flex-col gap-5 items-center sm:flex-row">
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:scale-105 duration-300 text-white text-lg py-4 shadow-lg flex gap-3 w-52 rounded-full justify-center bg-gradient-to-tl from-red-600 to-blue-300"
          >
            Let's Connect
            <img
              height={15}
              width={25}
              src="https://img.icons8.com/?size=100&id=39777&format=png&color=FFFFFF"
              alt=""
            />
          </button>

          <a
            href={RahulResume}
            download
            className="hover:scale-105 duration-300 text-white text-lg py-4 shadow-lg flex gap-3 w-64 rounded-full justify-center bg-gradient-to-t from-slate-800 to-slate-400"
          >
            Download CV/Resume
            <img
              height={10}
              width={18}
              src="https://img.icons8.com/?size=100&id=83988&format=png&color=FFFFFF"
              alt=""
            />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="pt-24 w-screen h-full lg:h-screen">
        <div className="text-center leading-loose">
          <h2 className="text-lg">Introduction</h2>
          <h1 className="text-5xl">About me</h1>

          <div className="flex flex-col items-center lg:flex-row justify-center mt-5">
            <div className="lg:w-[80%] h-fit flex flex-col items-center">
              <img src={imgRahul} className="h-[350px] w-[270px] rounded-2xl" alt="" />
              <div className="h-[150px] w-[150px] rounded-full bg-white shadow-2xl flex justify-center items-center -translate-y-1/2 translate-x-3/4">
                <img src={boy} alt="" className="rounded-full h-14 w-14 absolute" />
                <img src={word} alt="" />
              </div>
            </div>

            <div className="leading-loose flex flex-col items-center lg:items-start">
              <p className="w-[85%] text-start">
                I’m a developer who thrives on building accessible, pixel-perfect user interfaces
                that blend thoughtful design with solid engineering.
              </p>

              <div className="flex flex-col items-center gap-5 mt-5 sm:flex-row sm:m-5">
                <div className="hover:border-r-4 hover:border-b-4 hover:shadow-xl hover:bg-slate-100 duration-300 flex flex-col items-start p-3 justify-around rounded-lg border border-black h-[200px] md:h-[220px] w-[90%] md:w-[200px]">
                  <img src="https://img.icons8.com/?size=100&id=25628&format=png&color=000000" alt="" height={30} width={30} />
                  <h1 className="text-start font-bold">Languages & Technologies</h1>
                  <p className="text-start text-gray-600 text-sm">
                    JavaScript (ES6+), HTML5, CSS3, MongoDB, RESTful APIs
                  </p>
                </div>

                <div className="hover:border-r-4 hover:border-b-4 hover:bg-slate-100 hover:shadow-xl duration-300 flex flex-col items-start p-3 justify-around rounded-lg border border-black h-[200px] md:h-[220px] w-[90%] md:w-[200px]">
                  <img src="https://img.icons8.com/?size=100&id=1RNKkGO3VxHR&format=png&color=000000" height={30} width={30} alt="" />
                  <h1 className="text-start font-bold">Education</h1>
                  <p className="text-start text-gray-600 text-sm">
                    Bachelor of Computer Applications (BCA) Patel Memorial
                    National College, Rajpura, Punjab India 2022 – 2025
                  </p>
                </div>

                <div className="hover:border-r-4 hover:border-b-4 hover:shadow-xl hover:bg-slate-100 duration-300 flex flex-col items-start p-3 justify-around rounded-lg border border-black h-[200px] md:h-[220px] w-[90%] md:w-[200px]">
                  <img src="https://img.icons8.com/?size=100&id=48953&format=png&color=000000" alt="" height={30} width={30} />
                  <h1 className="text-start font-bold">Frameworks & Libraries</h1>
                  <p className="text-start text-gray-600 text-sm">
                    React.js, Next.js, Node.js, Express.js, Tailwind CSS, Bootstrap
                  </p>
                </div>
              </div>

              <h1 className="text-start my-5">Tools I work on</h1>
              <div>
                {[
                  "9OGIyU8hrxW5",
                  "bosfpvRzNOG8",
                  "zfHRZ6i1Wg0U",
                  "20906",
                  "12599",
                ].map((id, i) => (
                  <button
                    key={i}
                    className="hover:-translate-y-2 duration-500 rounded-lg mx-1 border"
                  >
                    <img
                      src={`https://img.icons8.com/?size=100&id=${id}&format=png&color=000000`}
                      className="h-14 p-3 w-14"
                      alt=""
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="h-full w-screen pt-20">
        <div className="flex flex-col items-center leading-loose">
          <h3 className="text-xl">What I’ve Built</h3>
          <h1 className="text-4xl sm:text-5xl">My Latest Work</h1>
          <p className="text-md text-center p-5">
            Explore my full stack development projects.
          </p>

          <div className="grid grid-cols-1 justify-items-center sm:items-end sm:justify-items-end space-y-7 sm:grid-cols-2 sm:space-x-7 lg:grid-cols-3 xl:grid-cols-4">
            {projects.map((project, i) => (
              <div
                key={i}
                className="relative w-[80vw] sm:w-[40vw] lg:w-[25vw] lg:h-[35vh] xl:w-[20vw] h-[300px] border shadow-xl rounded-xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={project.img}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:blur-sm"
                  alt={project.name}
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white text-center p-4">
                  <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                  <p className="text-sm mb-4">{project.discription}</p>
                  <div className="flex gap-4">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white text-sm transition"
                      >
                        Live Project
                      </a>
                    )}
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-800 hover:bg-gray-900 rounded text-white text-sm transition"
                    >
                      Github Link
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollToSection("home")}
            className="hover:scale-105 my-10 duration-300 hover:text-white text-lg py-4 shadow-lg flex gap-3 w-52 rounded-full justify-center hover:bg-gradient-to-tl border border-gray-700 hover:border-none text-gray-700 from-red-600 to-blue-300"
          >
            Scroll To Top
            <img
              height={15}
              width={25}
              className="drop-shadow"
              src="https://img.icons8.com/?size=100&id=39777&format=png&color=FFFFFF"
              alt=""
            />
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="h-full w-screen pt-20">
        <div className="flex flex-col items-center leading-loose">
          <h3 className="text-xl leading-[50px]">Have an Idea? Let’s Talk</h3>
          <h1 className="text-4xl sm:text-5xl">Get in Touch</h1>
          <p className="text-md text-center px-5">
            Reach out — I’d love to hear from you.
          </p>
        </div>

        <div className="flex flex-col items-center pt-5">
          <form
            action="https://formspree.io/f/mdkljegv"
            method="POST"
            className="bg-white p-8 rounded-lg sm:w-[55vw] space-y-6"
          >
            <div className="flex flex-col md:flex-row gap-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-4 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-4 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Enter your message"
              className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              rows={5}
              required
            />
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 bg-black text-white py-4 rounded-full hover:bg-gray-800 transition"
              >
                Connect →
              </button>
            </div>
          </form>

          <div className="mt-10 text-center text-gray-600 hover:text-black">
            <div className="flex justify-center items-center">
              <img src={logo} className="h-10 translate-x-1.5" alt="" />
              <h1 className="text-3xl font-bold">ahul.</h1>
            </div>
            <p className="flex items-center gap-2 justify-center mt-1">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/new-post.png"
                alt="email icon"
                className="w-5 h-5"
              />
              rahulkumarsui554@gmail.com
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex justify-center items-center mt-5 flex-col">
        <div className="border-t w-[80vw] lg:max-w-7xl lg:text-lg text-sm text-gray-600 hover:text-black text-center py-7 flex justify-center">
          &reg;ahul. <p className="px-7">All rights reserved</p>&copy; 2025 &hearts;
        </div>
        <div className="w-full flex justify-evenly mb-7">
          <a href="https://github.com/Rahulsui5">
            <FontAwesomeIcon
              className="h-7 w-7 hover:text-gray-600"
              icon={faGithub}
            />
          </a>
          <a href="https://www.instagram.com/rana_sui_5?igsh=MTcwNDJyamRyOGF3ag==">
            <FontAwesomeIcon
              className="h-7 w-7 hover:text-red-500"
              icon={faInstagram}
            />
          </a>
          <a href="https://www.linkedin.com/in/rahul-kumar-sui-348b69310">
            <FontAwesomeIcon
              className="h-7 w-7 hover:text-blue-700"
              icon={faLinkedin}
            />
          </a>
          <a href="https://wa.me/916300637998">
            <FontAwesomeIcon
              className="h-7 w-7 hover:text-green-500"
              icon={faWhatsapp}
            />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
