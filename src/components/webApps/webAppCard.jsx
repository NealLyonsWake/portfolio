import WebAppPopUp from './webAppPopUp';

function WebAppCard(props) {

    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    const images = importAll(require.context('../../thumbnails/', false, /\.(png|jpe?g|svg)$/));

    return (
        <div className='project-card'>
            <img className='card-poster' src={images[props.fileName]} alt={props.imgAlt} />
            <WebAppPopUp
                title={props.title}
                overview={props.overview}
                tech={props.tech}
                showSite={props.showSite}
                siteURL={props.siteURL}
                showDesign={props.showDesign}
                designURL={props.designURL}
                codeURL={props.codeURL}
            />
        </div>
    )
}

export default WebAppCard;