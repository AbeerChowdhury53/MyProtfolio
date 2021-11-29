import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Project = (props) => {

    const { name, website, description } = props.project
    const url = website
    console.log(website)
    return (
       <div className='container mt-3'>
            <Card>
            {/* <Card.Header>Featured</Card.Header> */}
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
              
                <a href={website} without rel="noopener noreferrer" target="_blank">
                    <Button className='mt-3' variant="primary" >See Project</Button>
                </a>
            </Card.Body>
        </Card>
       </div>
    );
};

export default Project;