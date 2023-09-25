import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    const [isActive, setIsActive] = useState(false);

    const handleToggle = () => {
        setIsActive(!isActive);
    }
    return (
        <div className='navigation '>
            <ul className={`liste-nav ${isActive ? 'active' : ''}`}>
                <NavLink to="/" onClick={handleToggle}>
                    <li className='item-nav'> Accueil </li>
                </NavLink>

                <NavLink to="/activites" onClick={handleToggle}>
                    <li className='item-nav'> Activités </li>
                </NavLink>

                <NavLink to="/logements" onClick={handleToggle}>
                    <li className='item-nav'> Logements </li>
                </NavLink>

                <NavLink to="/restaurants" onClick={handleToggle}>
                    <li className='item-nav'> Restaurants </li>
                </NavLink>

                <NavLink to="/itineraire" onClick={handleToggle}>
                    <li className='item-nav'> Itinéraire </li>
                </NavLink>
                <NavLink to="/connexion" onClick={handleToggle}>
                    <li className='item-nav'> Connexion </li>
                </NavLink>
                <NavLink to="/contact" onClick={handleToggle}>
                    <li className='item-nav'> Contact </li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;