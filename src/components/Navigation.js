import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    const menu = document.querySelector('.liste-nav');


    const allLinks = document.querySelectorAll('.item-nav');

    allLinks.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.toggle('active')
        })
    })
    return (
        <div className='navigation '>
            <ul className='liste-nav'>
                <NavLink to="/">
                    <li className='item-nav'> Accueil </li>
                </NavLink>

                <NavLink to="/activites">
                    <li className='item-nav'> Activités </li>
                </NavLink>

                <NavLink to="/logements">
                    <li className='item-nav'> Logements </li>
                </NavLink>

                <NavLink to="/restaurants">
                    <li className='item-nav'> Restaurants </li>
                </NavLink>

                <NavLink to="/itineraire">
                    <li className='item-nav'> Itinéraire </li>
                </NavLink>
                <NavLink to="/connexion">
                    <li className='item-nav'> Connexion </li>
                </NavLink>
                <NavLink to="/contact">
                    <li className='item-nav'> Contact </li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;