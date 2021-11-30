import React, { useEffect, useState } from 'react';
import Cards from '../Card/Cards';
import Project from './Project';
import './Project.css'

const Projects = () => {

    const [projects, setProjects]= useState([]);
    console.log(projects)

    useEffect(()=>{
    fetch('https://quiet-thicket-28474.herokuapp.com/project/')
    .then(res => res.json())
    .then(data => setProjects(data))

    },[])

    return (
       <div id='project' className='mt-4'>
           <div className='mb-4'>
           <h1 className='text-center '> My <span className='dname'>Projects</span>  </h1>
           </div>
           <div className='grid-div container '>
           {
               projects.map(project => <Project
               key={project._id}
               project={project}               
               ></Project>)
           }
           {/* {
              projects.map(cards => <Cards
                key={cards.id}
                cards={cards}               
                ></Cards>)  
           } */}
        </div>
       </div>
    );
};

export default Projects;