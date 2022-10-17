
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
            <h1 className="hover-opacity" subpage='about' onClick={selectPage}>Noah Becker</h1>
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