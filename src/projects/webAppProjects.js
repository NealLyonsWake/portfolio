function fetchProjects() {
    const webAppProjects = [
        {
            title: 'Tasty TV',
            overview: 'A film review website for movie fans.',
            fileName: 'tasty_tv.png',
            imgAlt: 'Tasty TV thumbnail',
            showSite: true,
            siteURL: 'https://tasty-tv-app.herokuapp.com/',
            codeURL: 'https://github.com/NealLyonsWake/tasty_tv_full_stack',
            showDesign: true,
            designURL: 'https://miro.com/app/board/o9J_lxclt7o=/?share_link_id=129371663331',
            tech: ['JavaScript', 'React', 'NodeJS', 'HTML', 'CSS', 'Mongoose', 'MongoDB']
        },
        {
            title: "Pic 'n Read",
            overview: 'Reading assist app for reading aloud copies of physical documents.',
            fileName: 'pic_n_read.png',
            imgAlt: 'Pic N Read thumbnail',
            showSite: true,
            siteURL: 'https://pic-n-read.netlify.app/',
            codeURL: 'https://github.com/NealLyonsWake/pic-n-read-client',
            showDesign: true,
            designURL: 'https://miro.com/app/board/uXjVOqCuhIo=/?share_link_id=954548349026',
            tech: ['JavaScript', 'NodeJS', 'ImageToText', 'Web Speech', 'HTML', 'CSS']
        },
        {
            title: 'Consumer Behaviour',
            overview: 'Data cleaning and visualisation for retail marketing managers.',
            fileName: 'consumer_behave.png',
            imgAlt: 'Consumer Behaviour thumbnail',
            showSite: true,
            siteURL: 'https://consumer-behaviour-dashboard.herokuapp.com/',
            codeURL: ' https://github.com/NealLyonsWake/final-project_customer-dashboard',
            showDesign: true,
            designURL: 'https://miro.com/app/board/uXjVOdPBydg=/?share_link_id=439692851038',
            tech: ['Python', 'Jupyter Notebook', 'Dash', 'HTML', 'CSS']
        },
        {
            title: 'My Portfolio',
            overview: 'Code overview of my portfolio.',
            fileName: 'waken_portfolio.png',
            imgAlt: 'My Portfolio thumbnail',
            showSite: false,
            siteURL: null,
            codeURL: ' https://github.com/NealLyonsWake/final-project_customer-dashboard',
            showDesign: false,
            designURL: null,
            tech: ['JavaScript', 'React', 'HTML', 'CSS']
        }
    ]
    return webAppProjects;
}

export default fetchProjects;