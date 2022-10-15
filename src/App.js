
// IMPORTS
import './App.css';
import Header from './components/Header';
import About from './components/subpages/About';
import Portfolio from './components/subpages/Portfolio';
import Resume from './components/subpages/Resume';


// COMPONENT
function App() {
    return (<>
        <Header />

        <main>
            {/* <About /> */}
            {/* <Portfolio /> */}
            <Resume />
        </main> 
    </>);
}


// EXPORT
export default App;