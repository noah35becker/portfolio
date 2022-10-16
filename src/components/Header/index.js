
// IMPORT
import Nav from "./Nav";


// COMPONENT
function Header({subpage, setSubpage, subpagesList}){
    function selectPage(e){
        setSubpage(e.target.getAttribute('subpage'));
    }

    return (
        <header>
            <h1 subpage='about' onClick={selectPage}>Noah Becker</h1>
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