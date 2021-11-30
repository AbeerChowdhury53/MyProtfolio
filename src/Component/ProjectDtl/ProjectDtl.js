import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './ProjectDtl.css'

const ProjectDtl = () => {

    const [proj, setProj] = useState([]);
    const { id } = useParams();
    const url = `https://quiet-thicket-28474.herokuapp.com/project/${id}`


    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProj(data))
    }, [])
    return (
        <div className='contin-div container'>
            <div >
                <img className='img-div1' width='50%' src={proj.img1} alt="" />
            </div>
            <div>
                <h2>    {proj.name} </h2>
                <ul>
                    <li>{proj.li1}</li>
                    <li>{proj.li2}</li>
                    <li>{proj.li3}</li>                   
                </ul>
                <a href={proj.website} without rel="noopener noreferrer" target="_blank">
      <Button  className='mt-3' variant="primary" >See Website</Button>
   </a>
            </div>
        </div>
    );
};

export default ProjectDtl;