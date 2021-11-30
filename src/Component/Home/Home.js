import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Cards from '../Card/Cards';
import { ContactUs } from '../ContactUs/ContactUs';
import Hader from '../Hader/Hader';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Hader></Hader>
            <Projects></Projects>
      <AboutMe></AboutMe>
        <ContactUs></ContactUs>
        {/* <Cards></Cards> */}
        </div>
    );
};

export default Home;