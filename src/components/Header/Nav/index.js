
// IMPORTS
import {useEffect, useState} from 'react';
import {capitalizeFirstLetter} from '../../../utils/helpers';
import './index.css';


// COMPONENT
function Nav({subpage, subpagesList, selectPage}){
    useEffect(  // An event listener of sorts: Update HTML `title` when any of the elements inside the second argument's array change (in this case, just `subpage`)
        () => {document.title = 'Noah Becker | ' + capitalizeFirstLetter(subpage);},
        [subpage]
    );

    let [mobileNavOpen] = useState(false);

    function clickOutsideMobileNavListener(e){
        if (document.querySelector('.navbar-nav').contains(e.target)){
            mobileNavOpen = false;
            window.removeEventListener('click', clickOutsideMobileNavListener);
        }
        else if (!document.querySelector('.navbar-toggler').contains(e.target))
            document.querySelector('.navbar-toggler').click();
    }

    function handleShowMobileNav(){
        document.querySelector('.navbar-toggler').blur();
        mobileNavOpen = !mobileNavOpen;
        if (mobileNavOpen)
            window.addEventListener('click', clickOutsideMobileNavListener);
        else
            window.removeEventListener('click', clickOutsideMobileNavListener);
    }

    return (
        <nav className="navbar navbar-expand-sm">
            <div className="container-fluid justify-content-end justify-content-sm-center">
                <button className="navbar-toggler" type="button" tabIndex={-1} onClick={handleShowMobileNav} data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse collapse rounded" id="navbarNav" >
                    <ul className="navbar-nav">
                        {subpagesList.map(({name}) =>
                            <a className="no-link-style" href={`#${name}`} key={`${name}`}>
                                <li
                                    subpage={name}
                                    className={`nav-link fs-4 text-dark text-end text-sm-center ${name === subpage ? 'fw-bold active' : 'hover-opacity'}`}
                                    onClick={selectPage}
                                    data-bs-toggle="collapse"
                                    data-bs-target=".navbar-collapse.show"
                                    aria-current={name === subpage ? 'page' : ''}
                                >
                                    {capitalizeFirstLetter(name)}
                                </li>
                            </a>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}


// EXPORT
export default Nav;