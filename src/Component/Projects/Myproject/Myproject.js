import React from 'react';
import Fade from 'react-reveal/Fade';



class Myproject extends React.Component {
  render() {
    return (
      <div>
        <Fade right>        
        <h1> My <span className='dname'>Project</span>  </h1>
        </Fade>
      </div>
    );
  }
}

export default Myproject;