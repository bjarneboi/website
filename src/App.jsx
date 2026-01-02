import { IoLogoGithub } from "react-icons/io5"
import { MdMailOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import './App.css'
import { LinkBox } from "./components/LinkBox";

function App() {
  return (
    <>
      <div>
        <h1>bjarneboi</h1>
        <div className="about-me">
          <span>Hi! My name is Arne, I am a 27 year old Computer Science student from Norway.</span>
          <span>I enjoy developing software, in particular mobile applications.</span>
          <span>For business inquiries and other contact, you can reach me through the links below. :)</span>
        </div>
      </div>

      <div className="linksContainer">
        <LinkBox 
          icon={<IoLogoGithub className="logo" alt="Github logo" size={96} />}
          text="Github"
          url="https://github.com/bjarneboi"
        />
        <LinkBox 
          icon={<MdMailOutline className="logo" alt="Email icon" size={96} />}
          text="Email"
          url="mailto:arneks@hotmail.com" 
        />
        <LinkBox 
          icon={<FaLinkedin className="logo" alt="LinkedIn logo" size={96} />}
          text="LinkedIn"
          url="https://www.linkedin.com/in/arne-krogdahl-stramme/"
        />
      </div>
    </>
  )
}

export default App
