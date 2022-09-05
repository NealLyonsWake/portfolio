import React, { useState, useEffect } from 'react';
import WebAppCard from './webAppCard';
import fetchProjects from '../../projects/webAppProjects';

function WebApps(props) {

    const [webAppCards, setWebAppCards] = useState([]);
    const projects = fetchProjects();

    useEffect(() => {
        setWebAppCards(projects);
        props.myTab('Web Apps');
    }, []);

    return (
        <div>
            <p className='welcome'>Welcome to my <b className='highlight'>web application</b> projects. All project designs and programming undertaken by me.</p>
            <div className='project-container'>
                {webAppCards.map((project, index) => {
                    return (
                        <WebAppCard
                            key={index}
                            title={project.title}
                            overview={project.overview}
                            fileName={project.fileName}
                            imgAlt={project.imgAlt}
                            showSite={project.showSite}
                            siteURL={project.siteURL}
                            codeURL={project.codeURL}
                            showDesign={project.showDesign}
                            designURL={project.designURL}
                            tech={project.tech}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default WebApps;