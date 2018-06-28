const CATEGORIES = {
    versonControl: 'Version Control',
    projectManagementTool: 'Project Management Tool',
    webTech: 'Web',
    scripting: 'Scripting',
    gameDev: 'Game Development',
    desktopApps: 'Desktop Applications',
    operatingSystems: 'OS'
};

const USAGES = {
    personal: 'Personal Projects',
    coreAVI: 'CoreAVI',
    espial: 'Espial',
    dnd: 'Department of National Defence',
    carleton: 'Carleton University',
    algonquin: 'Algonquin College'
};

const checkUsageAccessor = function (header, data) {
    if (data.where.indexOf(header) > -1) {
        return '✔';
    }
    return '';
};

let usageColumns = ((usages) => {
    let uses = [];
    for (let key in usages) {
        let header = usages[key];
        uses.push({
            id: key,
            Header: header,
            accessor: checkUsageAccessor.bind(null, header),
            width: Math.min(11 * header.replace(/\s/g, '').length, 240)
        })
    }
    return uses;
})(USAGES);


export const columns = [
    {
        Header: 'Skill / Tool',
        accessor: 'skill',
        width: 150
    },
    {
        Header: 'Experience (years)',
        accessor: 'years',
        width: 150
    },
    {
        Header: 'Usage Category',
        accessor: 'category',
        width: 150
    },
    ...usageColumns
];

export const data = [
    {
        skill: 'Git',
        years: 8,
        category: CATEGORIES.versonControl,
        where: [
            USAGES.personal,
            USAGES.coreAVI,
            USAGES.espial,
            USAGES.carleton
        ]
    },
    {
        skill: 'SVN',
        years: 4,
        category: CATEGORIES.versonControl,
        where: [
            USAGES.espial,
            USAGES.algonquin
        ]
    },
    {
        skill: 'JavaScript',
        years: 4,
        category: CATEGORIES.webTech,
        where: [
            USAGES.personal,
            USAGES.espial,
            USAGES.carleton
        ]
    },
    {
        skill: 'OpenGL / WebGL',
        years: 5,
        category: [
            CATEGORIES.webTech,
            CATEGORIES.gameDev,
            CATEGORIES.desktopApps
        ],
        where: [
            USAGES.personal,
            USAGES.coreAVI,
            USAGES.espial,
            USAGES.algonquin
        ]
    },
    {
        skill: 'Python',
        years: 4,
        category: CATEGORIES.scripting,
        where: [
            USAGES.coreAVI,
            USAGES.espial,
            USAGES.carleton
        ]
    },
    {
        skill: 'HTML',
        years: 5,
        category: CATEGORIES.webTech,
        where: [
            USAGES.personal,
            USAGES.espial,
            USAGES.dnd,
            USAGES.carleton
        ]
    },
    {
        skill: 'CSS',
        years: 5,
        category: CATEGORIES.webTech,
        where: [
            USAGES.personal,
            USAGES.espial,
            USAGES.dnd,
            USAGES.carleton
        ]
    },
    {
        skill: 'NodeJS',
        years: 2,
        category: CATEGORIES.webTech,
        where: [
            USAGES.personal,
            USAGES.espial
        ]
    },
    {
        skill: 'Atlassian Products',
        years: 2,
        category: CATEGORIES.projectManagementTool,
        where: [
            USAGES.espial
        ]
    },
    {
        skill: 'Grunt',
        years: 1,
        category: CATEGORIES.scripting,
        where: [
            USAGES.espial
        ]
    },
    {
        skill: 'Jenkins',
        years: 2,
        category: CATEGORIES.scripting,
        where: [
            USAGES.espial
        ]
    },
    {
        skill: 'Linux',
        years: 7,
        category: CATEGORIES.operatingSystems,
        where: [
            USAGES.personal,
            USAGES.coreAVI,
            USAGES.espial,
            USAGES.carleton
        ]
    },
    {
        skill: 'Monogame',
        years: 2,
        category: CATEGORIES.gameDev,
        where: [
            USAGES.personal,
            USAGES.algonquin
        ]
    },
    {
        skill: 'Unity',
        years: 1,
        category: CATEGORIES.gameDev,
        where: [
            USAGES.personal
        ]
    },
    {
        skill: 'Java',
        years: 4,
        category: CATEGORIES.desktopApps,
        where: [
            USAGES.carleton,
            USAGES.algonquin
        ]
    }
];
