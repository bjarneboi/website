import { IoLogoGithub } from "react-icons/io5"
import { MdMailOutline } from "react-icons/md";
import './App.css'

function App() {
  return (
    <>
      <div>
        <h1>bjarneboi</h1>
        <p className="about-me">
          Test
        </p>
      </div>

      <div className="linksContainer">
        <a href="https://github.com/bjarneboi">
          <IoLogoGithub className="logo" alt="GitHub logo" size={96} />
        </a>
        <a href="mailto:arneks@hotmail.com">
          <MdMailOutline className="logo" alt="Email icon" size={96} />
        </a>
      </div>
    </>
  )
}

export default App
