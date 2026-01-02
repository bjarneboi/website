import { IoLogoGithub } from "react-icons/io5"
import { MdMailOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import './App.scss'
import { LinkBox } from "./components/LinkBox";

function App() {
  return (
    <div className="main-container">
      <h1>bjarneboi</h1>
      <section className="about-me">
        <p className="am-p">Hi! My name is Arne and I'm a 27 year old Computer Science student from Norway.</p>
        <p className="am-p">I love software development, with my main passion being mobile applications.</p>
      </section>
      <section className="links">
        <p className="am-p">For business inquiries and other contact, you can reach me through the links below. :)</p>
        <div className="linkbox-container">
          <LinkBox 
            icon={<IoLogoGithub className="logo" aria-label="Github logo" />}
            text="Github"
            url="https://github.com/bjarneboi"
          />
          <LinkBox 
            icon={<MdMailOutline className="logo" aria-label="Email icon" />}
            text="Email"
            url="mailto:arneks@hotmail.com" 
          />
          <LinkBox 
            icon={<FaLinkedin className="logo" aria-label="LinkedIn logo" />}
            text="LinkedIn"
            url="https://www.linkedin.com/in/arne-krogdahl-stramme/"
          />
        </div>
      </section>
    </div>
  )
}

export default App
