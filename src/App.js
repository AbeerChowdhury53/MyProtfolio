
import './App.css';
import Hader from './Component/Hader/Hader';
import Projects from './Component/Projects/Projects';
import { ContactUs } from './Component/ContactUs/ContactUs';
import AboutMe from './Component/AboutMe/AboutMe';
// import background from './Component/Image/back.jpg'

function App() {
  return (
    <div className='app-back' >
      <Hader></Hader>
      <Projects></Projects>
      <AboutMe></AboutMe>
        <ContactUs></ContactUs>
       



    </div>
  );
}

export default App;
