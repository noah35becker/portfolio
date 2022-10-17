
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
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {subpagesList.map(({name}) =>
                            <li
                                subpage={name}
                                className={`nav-link fs-4 text-dark ${name === subpage ? 'fw-bold active' : 'hover-opacity'}`}
                                onClick={selectPage}
                                aria-current={name === subpage ? 'page' : ''}
                                key={name}
                            >
                                {capitalizeFirstLetter(name)}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}


// EXPORT
export default Nav;