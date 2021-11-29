import React, { useEffect, useState } from 'react';
import Project from './Project';
import './Project.css'

const Projects = () => {

    const [projects, setProjects]= useState([]);
    console.log(projects)

    useEffect(()=>{
    fetch('./project.json')
    .then(res => res.json())
    .then(data => setProjects(data))

    },[])

    return (
       <div className='mt-4'>
           <div>
           <h1 className='text-center'> My <span className='dname'>Projects</span>  </h1>
           </div>
           <div className='grid-div container '>
           {
               projects.map(project => <Project
               key={project.id}
               project={project}               
               ></Project>)
           }
        </div>
       </div>
    );
};

export default Projects;