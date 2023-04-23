import React, { useState, useEffect } from 'react';
import GameCard from './gameCard';
import fetchProjects from '../../projects/gameDevProjects';

function Games(props) {
    const [gameCards, setGameCards] = useState([]);
    const projects = fetchProjects();

    useEffect(() => {
        setGameCards(projects);
        props.myTab('Games');
    }, []);

    return (
        <div>
            <p className='welcome'>Welcome to my <b className='highlight'>game development</b> projects. All project designs and programming were undertaken by myself.</p>
            <div className='games-container'>
                {gameCards.map((project, index) => {
                    return (
                        <GameCard
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

export default Games;