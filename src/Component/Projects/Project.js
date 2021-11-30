import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './../Card/Card.css'
const Project = (props) => {

    const { name, website, description , image, _id} = props.project
    const url = website
    console.log(website)
    return (
       <div className='container mt-3'>
            {/* <Card> */}
            {/* <Card.Header>Featured</Card.Header> */}
            {/* <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
              
                <a href={website} without rel="noopener noreferrer" target="_blank">
                    <Button className='mt-3' variant="primary" >See Project</Button>
                </a>
            </Card.Body>
        </Card> */}
         <div className= 'container'>
                    <div className= 'card'>
                        <div className= 'image'>
                            <img href="#" src= {image} />
                                
                        </div>
                        <div className= 'content'>
                            {/* <img src="" alt="" /> */}
                            <h3>{name}</h3>
                            <p>{description.slice(0, 110)}</p>
                            {/* <Button className='mt-3' variant="primary" >See Project</Button> */}
                            <Link to={`/projectdtl/${_id}`}>
                                <Button  variant="primary">See Details</Button>
                                </Link> 
                        </div>
                    </div>
                </div>
       </div>
    );
};

export default Project;