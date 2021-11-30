import React from 'react';
import myprofile from '../Image/Myprofile.jpg'
import background from '../Image/back.jpg'
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div id='aboutme' className='about-div' style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',

        }}>
            <div >
                <img className='img-div' src={myprofile} alt="" />
            </div>
            <div className='text-div'>
                <div className='aboutme'>
                    <div>
                    </div>
                </div>

                <div className='final-text'>
                    <h2 className='dname'>About Me</h2>
                    <br />
                    <h5 className='dname'>Education </h5>

                    <p>National University
                        <br />
                        BBA & MBA In Management
                        <br />
                        January 2013 - December 2021</p>
                    <h5 className='dname'>Certifications </h5>

                    <p>Oracle Certified  Associate (OCA)
                        <br />
                        Oracle Certified  Professional (OCP)</p>

                    <h5 className='dname'>Technical Skills </h5>
                    <p>HTML, CSS, Javascript, React.js, Node.js.
                        <br />
                        Sql, PL/SQL, Oracle Apex, Oracle Report Bilder.
                        <br />
                        Oracle 11g,12c, Mongodb Atlas, Sql Server.</p>
                </div>


            </div>

        </div>
    );
};

export default AboutMe;