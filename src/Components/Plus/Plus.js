import React from 'react';

// font awesome imports
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Plus() {
    let inter = undefined;
    
    // increase on hold logic
    const setInter = () => inter = setInterval(increase, 250);
    
    const unsetInter = () => clearInterval(inter);

    const increase = () => {
        const number = document.getElementById('number');
        
        number.innerHTML = parseInt(number.innerHTML) + 1;
    }

    return (
        <button className='iconContainer plusIcon' onClick={increase} onMouseUp={unsetInter} onMouseDown={setInter}>
            <FontAwesomeIcon icon={faPlus} className='icon'/>
        </button>
    )
}

export default Plus;