import React from 'react';
import Navigation from './navigation';
import '../styles/topScreen.css';
import '../styles/projectCard.css';
import '../styles/gameCard.css';

function TopScreen(){

    return (
        <div id='page-container'>          
            <div id='content-container'>
            <Navigation />
            </div>
        </div>
    );
}

export default TopScreen;