
// IMPORTS
import {useEffect} from 'react';
import {capitalizeFirstLetter} from '../../../utils/helpers';
import './index.css';


// COMPONENT
function Nav({subpage, subpagesList, selectPage}){
    useEffect(  // An event listener of sorts: Update HTML `title` when any of the elements inside the second argument's array change (in this case, just `subpage`)
        () => {document.title = 'Noah Becker | ' + capitalizeFirstLetter(subpage);},
        [subpage]
    );

    return (
        <nav className="navbar navbar-expand-sm">
            <div className="container-fluid justify-content-end justify-content-sm-center">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse rounded" id="navbarNav">
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