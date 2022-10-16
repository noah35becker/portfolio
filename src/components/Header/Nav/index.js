
// IMPORTS
import {useEffect} from 'react';
import {capitalizeFirstLetter} from '../../../utils/helpers';


// COMPONENT
function Nav({subpage, subpagesList, selectPage}){
    useEffect(  // An event listener of sorts: Update HTML `title` when any of the elements inside the second argument's array change (in this case, just `currentCategory`)
        () => {document.title = 'Noah Becker | ' + capitalizeFirstLetter(subpage);},
        [subpage]
    );
    
    return (
        <nav>
            <ul>
                {subpagesList.map(({name}) =>
                    <li
                        subpage={name}
                        onClick={selectPage}
                        className={`${name === subpage && 'nav-active'}`}
                        key={name}
                    >
                        {capitalizeFirstLetter(name)}
                    </li>
                )}
            </ul>
        </nav>
    )
}


// EXPORT
export default Nav;