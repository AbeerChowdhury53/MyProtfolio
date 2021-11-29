import React from 'react';
import './Hader.css'
import p1 from '../Image/p1 (1).png'
import FadeExample from './FadeExample';
import ZoomExample from './ZoomExample';



const Hader = () => {
    return (
        <div className='fulldiv' >
        <div className='ftext'>
            <FadeExample> </FadeExample>
            
       
        </div>
        <div>
            <ZoomExample>  </ZoomExample>
        
        </div>
        </div>
    );
};

export default Hader;