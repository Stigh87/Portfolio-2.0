//model
const model = {
    app: {
        currentPage: 'About', //mainPage, aboutPage?, projectsPage, 
        subHeader: 'HTML JAVASCRIPT CSS AND MORE TO COME',
    },

    //data
    menu: [
        {
            name: 'Home',
            link: '',
        },
        {
            name: 'About',
            link: '',
        },
        {
            name: 'Github',
            link: '',
        },
        {
            name: 'Contact',
            link: '',
        },
    ],

    school: [
        {
        name: 'Godeset Skole',
        level: 'Elementary school',
        year: '94/00',
        },
        {
        name: 'Gautesete Skole',
        level: 'Junior high school',
        year: '00/03',
        },
        {
        name: 'Godalen & Randaberg VGS',
        level: 'High school',
        year: '04/05',
        },
    ],
   
    projects: [
        {
            name: 'NETTBUTIKK',
            date: '08.12.21',
            languages: ['HTML', 'JAVASCRIPT', 'CSS', 'MVC',],
            img: 'bilder/halvpakka.png',
            imgSize: 'web',
            link: 'https://github.com/Stigh87/Halvpakka',
            app: 'https://stigh87.github.io/Halvpakka/',
            description: 'Webshop project. Norwegian language. Admin can add new products, categories etc. Functional storage and shoppingcart',
        },
        {
            name: 'MINESWEEPER',
            date: '25.09.21',
            languages: ['HTML', 'JAVASCRIPT', 'CSS', 'MVC',],
            img: 'bilder/minesweeper.jpg',
            imgSize: 'web',
            link: 'https://github.com/Stigh87/MinesveiperFinal',
            app: 'https://stigh87.github.io/MinesveiperFinal/',
            description: 'Minesweeper game. Adjustable difficulity and size. Object oriented koding in Model View Controller',
        },
        {
            name: 'FOUR IN A ROW',
            date: '14.09.21',
            languages: ['HTML', 'JAVASCRIPT', 'CSS',],
            img: 'bilder/firepårad.jpg',
            imgSize: 'web',
            link: 'https://github.com/Stigh87/FireP-Rad',
            app: 'https://stigh87.github.io/FireP-Rad/', 
            description: 'Four in a row game, 2 player',
        },
        {
            name: 'MOBIL GAMES APP',
            date: '15.10.21',
            languages: ['HTML', 'JAVASCRIPT', 'CSS', 'MCV',],
            img: 'bilder/mobilapp.png',
            imgSize: 'mobile',
            link: 'https://github.com/Stigh87/mobilApp',
            app: 'https://stigh87.github.io/mobilApp/',
            description: 'Mobil app for games and friends, loggin, colortheme etc. (Not completed)',
        },
        {
            name: 'PORTFOLIO 1.0',
            date: '29.11.21',
            languages: ['HTML', 'JAVASCRIPT', 'CSS', 'MVC',],
            img: 'bilder/portfolio1.png',
            imgSize: 'mobile',
            link: 'https://github.com/Stigh87/portfolio1.0',
            app: 'https://stigh87.github.io/portfolio1.0/',
            description: 'Test portfolio, 1st attempt / idea',
        },  
        {
            name: 'INNSIKT I EGNE FØLELSER',
            date: '07.12.21',
            languages: ['HTML', 'JAVASCRIPT', 'CSS', 'MVC',],
            img: 'bilder/innsiktfeels.png',
            imgSize: 'mobile',
            link: 'https://github.com/Stigh87/innsikt-i-egne-folelser',
            app: 'https://stigh87.github.io/innsikt-i-egne-folelser/',
            description: 'Team/School project. App to register feelings throughout the days, contact with supervisor. Login, themechooser, and more',
        }, 
        {
            name: 'BOSS FIGHT',
            date: '07.02.22',
            languages: ['C#',],
            img: 'bilder/BossFight.png',
            imgSize: 'web',
            link: 'https://https://github.com/Stigh87/BossFight2',
            app: '',
            description: 'Console APP - Simulator: Extended school project. Simulates a boss fight with random outcomes',
        }, 
        {
            name: 'BUILDING MANAGEMENT SYSTEM',
            date: '24.02.22',
            languages: ['C#',],
            img: 'bilder/BMS.png',
            imgSize: 'web',
            link: 'https://github.com/Stigh87/BMSutkast1',
            app: '',
            description: 'Console APP - Simulator: Simulates behaviour of an officebuilding through a week. Temperature changes, workhours, and lights. ',
        },
    ],
};