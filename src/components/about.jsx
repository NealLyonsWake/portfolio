import React, { useEffect } from 'react';
import '../styles/about.css';
import Download from '../logos/download_icon.png';

function About(props) {

    useEffect(() => {
        props.myTab('About');
    }, [])

    return (
        <div className='about-container'>
            <div className='left-content'>
                <h1>Hi, I'm <b className='highlight'>Neal</b>.</h1>
                <p className='intro'>I am a full stack software developer and games programmer.</p>
                <p className='blurb'>I am passionate about technology and I enjoy creating useful and interesting applications,
                 as well as fun and entertaining games under my developer alias: Waken.</p>
                <p className='call-to-action'>Thank you for taking the time to look at my portfolio.</p>
            </div>
            <div className='right-content'>
                <h3>Download <b className='highlight'>My CV</b></h3>
                <p>My latest CV is available via the download button below.</p>
                <a href='https://drive.google.com/file/d/1G4Ri_VRSS7Zfs4shxcnN_P_CsW3EIIMo/view?usp=sharing' target='_blank'><img src={Download} alt='Download icon' width='60px'/></a>
            </div>
        </div>
    )
}

export default About;
