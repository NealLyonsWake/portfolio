import React, {useState} from 'react';
import WebAppTech from './webAppTech';


function WebAppPopUp(props) {
    const [screenSize, setScreenSize] = useState();

    function showSiteLink() {
        if (props.showSite) return <a href={props.siteURL} target='_blank'><button>Site</button></a>;
        else return;
    }

    function showDesignLink() {
        if (props.showDesign) return <a href={props.designURL} target='_blank'><button>Design</button></a>;
        else return;
    }

    window.addEventListener('resize', () =>{
        setScreenSize(window.innerWidth);
    })

    function checkScreenSize(){
        if (screenSize <= 620 || window.innerWidth <= 620) return 'mobile-card-overview';
        else return 'card-overview';
    }

    return (
        <div className={checkScreenSize()}>
            <div className='project-description'>
                <h5>{props.title}:</h5>
                <p>{props.overview}</p>
            </div>
            <div className='technologies'>
                <h5>Main Technologies Used:</h5>
                <ul>
                    {props.tech.map((t, index) => {
                        return (
                            <WebAppTech
                                key={index}
                                tech={t}
                            />
                        )
                    })}
                </ul>
            </div>
            <div className='visit-buttons'>
                {showSiteLink()}
                {showDesignLink()}
                <a href={props.codeURL} target='_blank'><button>Code</button></a>
            </div>
        </div>
    )
}

export default WebAppPopUp;