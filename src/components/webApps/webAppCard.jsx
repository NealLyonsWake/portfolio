import WebAppTech from './webAppTech';

function WebAppCard(props) {

    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    function showSiteLink() {
        if (props.showSite) return <a href={props.siteURL} target='_blank'><button>Site</button></a>;
        else return;
    }

    function showDesignLink() {
        if (props.showDesign) return <a href={props.designURL} target='_blank'><button>Design</button></a>;
        else return;
    }

    const images = importAll(require.context('../../thumbnails/', false, /\.(png|jpe?g|svg)$/));

    return (
        <div className='project-card'>
            <img className='card-poster' src={images[props.fileName]} alt={props.imgAlt} />
            <div id={props.title}>
                <div className='card-overview'>
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
            </div>
        </div>
    )
}

export default WebAppCard;