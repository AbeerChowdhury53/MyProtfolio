import React from 'react';
import Fade from 'react-reveal/Fade';
import { Button } from 'react-bootstrap';
import Pdf from  '../Image/Md.Shahebul alam Reactjs&Nodejs.pdf'

class FadeExample extends React.Component {
  render() {
    return (
      <div>
        <Fade right>
        <h3>Hellow</h3>
        <h1> I'm <span className='dname'>Shahebl Alam</span>  <br />
React.js & Node.js Developer</h1>
{/* <Button className='mt-3' variant="primary">See Resume</Button>{' '} */}

<a href={Pdf} without rel="noopener noreferrer" target="_blank">
      <Button  className='mt-3' variant="primary" >See Resume</Button>
   </a>
        </Fade>
      </div>
    );
  }
}

export default FadeExample;