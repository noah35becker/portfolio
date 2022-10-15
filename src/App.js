
// IMPORTS
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/subpages/About';
import Portfolio from './components/subpages/Portfolio';
import Resume from './components/subpages/Resume';
import Contact from './components/subpages/Contact';



// COMPONENT
function App() {
    return (<>
        <Header />

        <main>
            {/* <About /> */}
            {/* <Portfolio /> */}
            {/* <Resume /> */}
            {/* <Contact /> */}
        </main> 

        <Footer />
    </>);
}


// EXPORT
export default App;