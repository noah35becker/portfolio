
// IMPORT
import Nav from "./Nav";
import './index.css';

// COMPONENT
function Header({subpage, setSubpage, subpagesList}){
    function selectPage(e){
        setSubpage(e.target.getAttribute('subpage'));
    }

    return (
        <header className="site-header d-flex mt-3 mb-3 pb-1 mx-4 justify-content-between align-items-center">
            <a className="no-link-style" href={`#${subpagesList[0].name}`}>
                <h1 className="hover-opacity" subpage={subpagesList[0].name} onClick={selectPage}>Noah Becker</h1>
            </a>
            <Nav
                subpage={subpage}
                subpagesList={subpagesList}
                selectPage={selectPage}
            />
        </header>
    );
}


// EXPORT
export default Header;