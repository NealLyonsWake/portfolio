function GameCard(props) {

    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    function showCodeLink() {
        if (props.codeURL) return <a href={props.codeURL} target='_blank'><button>Code</button></a>;
        else return;
    }

    function showDesignLink() {
        if (props.showDesign) return <a href={props.designURL} target='_blank'><button>Design</button></a>;
        else return;
    }

    const images = importAll(require.context('../../thumbnails/', false, /\.(png|jpe?g|svg)$/));

    return (
        <div className='game-card'>
            <div className='poster-container'>
                <img src={images[props.fileName]} alt={props.imgAlt} />
            </div>
            <div className='game-info'>
                <h2 className='highlight'><b>{props.title}</b></h2>
                <p>{props.overview}</p>
                <h4 >Main Technologies Used:</h4>
                <p>{props.tech.join(', ')}</p>
                <div className='visit-buttons'>
                    <a href={props.siteURL} target='_blank'><button>Game</button></a>
                    {showCodeLink()}
                    {showDesignLink()}
                </div>
            </div>
        </div>
    )
}

export default GameCard;