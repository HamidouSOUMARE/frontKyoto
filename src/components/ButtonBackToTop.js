import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ButtonBackToTop = () => {
    const [buttonBackToTop, setButtonBackToTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setButtonBackToTop(true);
            } else {
                setButtonBackToTop(false);
            }
        })
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }


    return <div>
        {buttonBackToTop && (
            <button className='btn-top' onClick={scrollToTop}> <FontAwesomeIcon icon={faArrowUp} /></button>
        )}
    </div>
}
export default ButtonBackToTop;
