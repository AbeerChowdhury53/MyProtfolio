
import './App.css';
import Hader from './Component/Hader/Hader';
import Projects from './Component/Projects/Projects';
import { ContactUs } from './Component/ContactUs/ContactUs';
import AboutMe from './Component/AboutMe/AboutMe';
import Cards from './Component/Card/Cards';
import Home from './Component/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProjectDtl from './Component/ProjectDtl/ProjectDtl';

import NavegationBar from './Component/Navbar/NavegationBar';



// import background from './Component/Image/back.jpg'

function App() {
  return (
    <div className='app-back' >
      <BrowserRouter>
   <NavegationBar></NavegationBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/projectdtl">
           <ProjectDtl></ProjectDtl>
          </Route>
          <Route exact path="/projectdtl/:id">
           <ProjectDtl></ProjectDtl>
          </Route>
          <Route exact path="/project">
          <Projects></Projects>
          </Route>

        </Switch>




      </BrowserRouter>




    </div>
  );
}

export default App;
