import React from 'react';
import './Card.css'

const Cards = (props) => {
    
    
    return (
        <div>
           
                <div className= 'container'>
                    <div className= 'card'>
                        <div className= 'image'>
                            <img href="#" src= "https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg" />
                                
                        </div>
                        <div className= 'content'>
                            {/* <img src="" alt="" /> */}
                            <h3>This is content</h3>
                            <p>DIn publishing and graphic design,           
                                Lorem ipsum is a placeholder text               
                                commonly used to demonstrate the visual         
                                form of a document or a typeface without         
                                relying on meaningful content.</p>
                        </div>
                    </div>
                </div>
            
        </div>
    );
};

export default Cards;