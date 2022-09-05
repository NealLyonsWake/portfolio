import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Collapse from 'react-bootstrap/Collapse';
import About from './about';
import Games from './games/games';
import WebApps from './webApps/webApps';
import '../styles/header.css';
import Waken from '../logos/waken_icon.png';
import LinkedIn from '../logos/in_linked_icon.png';
import Insta from '../logos/instagram_icon.png';
import Twitter from '../logos/twitter_icon.png';
import YouTube from '../logos/youtube_icon.png';
import MobileMenu from '../logos/mobile_menu_icon.png';

function Navigation() {
    const [header, setHeader] = useState('');
    const [open, setOpen] = useState(false);

    function myTab(tab) {
        setHeader(tab);
    }

    function activeNav(nav) {
        if (nav === 'Web Apps') {
            if (nav === header) {
                return <Link onClick={() => setOpen(false)} className='selected-nav' to='/webapps'>Web Apps</Link>;
            }
            else {
                return <Link onClick={() => setOpen(false)} className='top-nav' to='/webapps'>Web Apps</Link>;
            }
        }
        if (nav === 'Games') {
            if (nav === header) {
                return <Link onClick={() => setOpen(false)} className='selected-nav' to='/games'>Game Dev</Link>;
            }
            else {
                return <Link onClick={() => setOpen(false)} className='top-nav' to='/games'>Game Dev</Link>;
            }
        }
        if (nav === 'About') {
            if (nav === header) {
                return <Link onClick={() => setOpen(false)} className='selected-nav' to='/about'>About</Link>;
            }
            else {
                return <Link onClick={() => setOpen(false)} className='top-nav' to='/about'>About</Link>;
            }
        }
    }

    return (
        <div>
            <header>
                <nav className='header'>
                    <div>
                        <img id='logo' src={Waken} alt='Waken logo' width='200px' />
                    </div>
                    <div className='header-centre'>
                        {activeNav('About')}
                        {activeNav('Web Apps')}
                        {activeNav('Games')}
                    </div>
                    <div className='socials'>
                        <a onClick={() => setOpen(false)} href='https://www.linkedin.com/in/neal-lyons-wake-bab7481a1/' target='_blank'><img src={LinkedIn} alt='LinkedIn link' width="40px" /></a>
                        <a onClick={() => setOpen(false)} href='https://www.instagram.com/waken_games/?hl=en' target='_blank'><img src={Insta} alt='Insta link' width="40px" /></a>
                        <a onClick={() => setOpen(false)} href='https://twitter.com/sprnovaboy' target='_blank'><img src={Twitter} alt='Twitter link' width="40px" /></a>
                        <a onClick={() => setOpen(false)} href='https://www.youtube.com/channel/UC6YBV6kgK9VOkaVJS-76BGw' target='_blank'><img src={YouTube} alt='YouTube link' width="40px" /></a>
                    </div>
                    <div className='mobile-menu'>
                        <img onClick={() => setOpen(!open)}
                            aria-controls="collapse-menu"
                            aria-expanded={open} src={MobileMenu} alt='Mobile menu icon' width='40px' />
                    </div>
                </nav>
                <nav>
                    <Collapse in={open}>
                        <div id="collapse-menu">
                            <div className='mobile-nav-container'>
                                <div className='mobile-header-centre'>
                                    {activeNav('About')}
                                    {activeNav('Web Apps')}
                                    {activeNav('Games')}
                                </div>

                                <div>
                                    <a onClick={() => setOpen(false)} href='https://www.linkedin.com/in/neal-lyons-wake-bab7481a1/' target='_blank'><img src={LinkedIn} alt='LinkedIn link' width="40px" /></a>
                                    <a onClick={() => setOpen(false)} href='https://www.instagram.com/waken_games/?hl=en' target='_blank'><img src={Insta} alt='Insta link' width="40px" /></a>
                                    <a onClick={() => setOpen(false)} href='https://twitter.com/sprnovaboy' target='_blank'><img src={Twitter} alt='Twitter link' width="40px" /></a>
                                    <a onClick={() => setOpen(false)} href='https://www.youtube.com/channel/UC6YBV6kgK9VOkaVJS-76BGw' target='_blank'><img src={YouTube} alt='YouTube link' width="40px" /></a>
                                </div>
                            </div>
                        </div>
                    </Collapse>
                </nav>
            </header>


            <Routes>
                <Route
                    path='/'
                    element={<About myTab={myTab} />}
                />
                <Route
                    path='/webapps'
                    element={<WebApps myTab={myTab} />}
                />
                <Route
                    path='/games'
                    element={<Games myTab={myTab} />}
                />
                <Route
                    path='/about'
                    element={<About myTab={myTab} />}
                />
            </Routes>
        </div>
    );
}

export default Navigation;