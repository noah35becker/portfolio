
// IMPORTS
import {useState} from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/subpages/About';
import Portfolio from './components/subpages/Portfolio';
import Resume from './components/subpages/Resume';
import Contact from './components/subpages/Contact';

import 'bootstrap';  // Bootstrap JS

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


// COMPONENT
function App() {
    const subpagesList = [
        {
            name: 'about',
            frag: <About />
        },
        {
            name: 'portfolio',
            frag: <Portfolio />
        },
        {
            name: 'resume',
            frag: <Resume />
        },
        {
            name: 'contact',
            frag: <Contact />
        }
    ];
    const [subpage, setSubpage] = useState(location.hash.substring(1) || subpagesList[0].name);

    return (<>
        <Header
            subpage={subpage}
            setSubpage={setSubpage}
            subpagesList={subpagesList}
        />

        <main className='mx-3 mx-md-4 mx-lg-5 text-center flex-grow-1'>
            {subpagesList.find(({name}) => name === subpage).frag}
        </main> 

        <Footer />
    </>);
}


// EXPORT
export default App;