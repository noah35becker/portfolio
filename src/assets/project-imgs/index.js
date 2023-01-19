
import madLibs from './mad-libs.gif';
import pawShop from './paw-shop.png';
import astrosounds from './astrosounds.png';
import weatherDashboard from './weather-dashboard.png';
import randomPasswordGenerator from './random-password-generator.png';
import socialNetworkApi from './social-network-api.gif';

export default [
    {
        name: 'Mad Libs',
        src: madLibs,
        languages: 'SQL, Node (including Express), Handlebars',
        desc: 'A reimagining of the popular word game',
        bkgdPosY: '35%',
        githubLink: 'https://github.com/noah35becker/mad-libs',
        deployedLink: 'https://morning-caverns-82636.herokuapp.com/'
    },
    {
        name: 'Paw Shop',
        src: pawShop,
        languages: 'MongoDB / Mongoose, Apollo GraphQL, React',
        desc: 'A pet-products exchange for NYC residents',
        githubLink: 'https://github.com/mnwana/paw-shop',
        deployedLink: 'https://pawshop.herokuapp.com/posts'
    },
    {
        name: 'Astrosounds',
        src: astrosounds,
        languages: 'JavaScript, HTML, CSS, third-party APIs',
        desc: 'Spotify playlist recommendations based on daily horoscope',
        githubLink: 'https://github.com/noah35becker/astrosounds',
        deployedLink: 'https://noah35becker.github.io/astrosounds/'
    },
    {
        name: 'Social Network API',
        src: socialNetworkApi,
        languages: 'MongoDB (via Mongoose), Node (including Express)',
        desc: 'Back-end management of a mock social network database',
        githubLink: 'https://github.com/noah35becker/social-network-api'
    },
    {
        name: 'Weather Dashboard',
        src: weatherDashboard,
        languages: 'Bootstrap, JavaScript, third-party APIs',
        desc: "Current + upcoming weather in US / int'l cities",
        githubLink: 'https://github.com/noah35becker/weather-dashboard',
        deployedLink: 'https://noah35becker.github.io/weather-dashboard/'
    },
    {
        name: 'Random Password Generator',
        src: randomPasswordGenerator,
        languages: 'JavaScript, CSS, HTML',
        desc: "Copyable random passwords, generated w/ specified parameters",
        bkgdPosY: '63%',
        githubLink: 'https://github.com/noah35becker/random-password-generator',
        deployedLink: 'https://noah35becker.github.io/random-password-generator/'
    }
];