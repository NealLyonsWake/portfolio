function fetchProjects() {
    const gameDevProjects = [
        {
            title: 'Lost In Time',
            overview: 'A 2D puzzle platformer with time travel, made for Lame Jam April 2023.',
            fileName: 'lost_in_time.png',
            imgAlt: 'Lost In Time thumbnail',
            showSite: true,
            siteURL: 'https://waken-games.itch.io/lost-in-time',
            codeURL: 'https://github.com/NealLyonsWake/Lost-In-Time',
            showDesign: true,
            designURL: 'https://miro.com/app/board/uXjVMQb673Q=/?share_link_id=324651244425',
            tech: ['C#', 'Unity', 'Inkscape',]
        },
        {
            title: 'Inferno Flume',
            overview: 'A virtual reality ride through hell for the Google Cardboard.',
            fileName: 'inferno_flume.png',
            imgAlt: 'Inferno Flume thumbnail',
            showSite: true,
            siteURL: 'https://waken-games.itch.io/inferno-flume',
            codeURL: 'https://github.com/NealLyonsWake/Inferno-Flume',
            showDesign: false,
            designURL: null,
            tech: ['C#', 'Unity', 'Google Cardboard', 'Inkscape',]
        },
        {
            title: 'Rad Boots MacGee',
            overview: 'A first-person shooter with a multi-gravity mechanic.',
            fileName: 'rad_boots.png',
            imgAlt: 'Rad Boots MacGee thumbnail',
            showSite: true,
            siteURL: 'https://waken-games.itch.io/radbootsmacgee',
            codeURL: 'https://github.com/NealLyonsWake/rad-boots-macgee',
            showDesign: false,
            designURL: null,
            tech: ['C#', 'Unity', 'Blender', 'Inkscape',]
        },
        {
            title: 'Muscipula',
            overview: 'A HTML5 horror game about a mutant plant.',
            fileName: 'muscipula.png',
            imgAlt: 'Muscipula thumbnail',
            showSite: true,
            siteURL: 'https://waken-games.itch.io/muscipula',
            codeURL: null,
            showDesign: false,
            designURL: null,
            tech: ['Clickteam Fusion', 'HTML', 'Inkscape']
        },
        {
            title: "Game 'Oover",
            overview: 'A HTML5 game about cleaning up the environment.',
            fileName: 'game_oover.png',
            imgAlt: 'Game Oover thumbnail',
            showSite: true,
            siteURL: 'https://waken-games.itch.io/game-oover',
            codeURL: null,
            showDesign: false,
            designURL: null,
            tech: ['Clickteam Fusion', 'HTML', 'Inkscape']
        },
        {
            title: 'Super Nova Boy',
            overview: 'A fast-action maze-runner, in production for IOS and Android.',
            fileName: 'super_nova_boy.png',
            imgAlt: 'Super Nova Boy thumbnail',
            showSite: true,
            siteURL: 'https://wakengames.com/',
            codeURL: null,
            showDesign: false,
            designURL: null,
            tech: ['Clickteam Fusion', 'Inkscape']
        }
    ]
    return gameDevProjects;
}

export default fetchProjects;