import React from 'react';
import Zoom from 'react-reveal/Zoom';
import p1 from '../Image/p1 (1).png'

class ZoomExample extends React.Component {
  render() {
    return (
      <div>
        <Zoom right>
        <img className='dimg' src={p1} alt="" />
        </Zoom>
      </div>
    );
  }
}

export default ZoomExample;