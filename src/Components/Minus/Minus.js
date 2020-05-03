import React from 'react';
// import styles from './Minus.module.css';

// font awesome imports
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Minus() {
    let inter = undefined;
    
    // decrease on hold logic
    const setInter = () => inter = setInterval(decrease, 250);
    
    const unsetInter = () => clearInterval(inter);

    const decrease = () => {
        const number = document.getElementById('number');
        
        number.innerHTML = parseInt(number.innerHTML) - 1;
    }
    
    return (
        <button className='iconContainer minusIcon' onClick={decrease} onMouseUp={unsetInter} onMouseDown={setInter}>
            <FontAwesomeIcon icon={faMinus} className='icon' />
        </button>
    )
}

export default Minus;