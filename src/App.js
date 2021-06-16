import './App.css';
import {SocialIcon} from 'react-social-icons';
import pdf from "./Curriculo.pdf";

function App() {
  return (
    <div className="App">

<img src= "https://media-exp1.licdn.com/dms/image/D4E35AQFPq8kFAcKyEA/profile-framedphoto-shrink_200_200/0/1623275060171?e=1623906000&v=beta&t=Zx4hTXo8cPY0cYDe0vGvcshAfwOXH5B8jCyNXerVDkg" className="photo-circle" alt="mncampos"/>
      <div className="info-box">
        <h1 className="myName">Mateus Nunes Campos</h1>
        <h2 className="subtitle">Computer Science Student</h2>
        <h3 className="email">mncampos@inf.ufrgs.br</h3>
        <SocialIcon url="https://www.linkedin.com/in/mateus-nunes-campos-8a1748214/"/>
        <SocialIcon url="https://github.com/mncampos"/>
        <SocialIcon url="https://api.whatsapp.com/send?phone=5551995925737"/>
        <SocialIcon url={pdf} label="Curriculo" bgColor="#ff5a01"/>

       
      </div>
    </div>
    
  );
}

export default App;
