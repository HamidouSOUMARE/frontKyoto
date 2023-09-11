import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { mail, lockClosed, person } from 'ionicons/icons';
import Navigation from '../components/Navigation';


const Connexion = () => {

    // const wrapper = document.querySelector('.wrapper');
    // const loginLink = document.querySelector('.login-link');
    // const registerLink = document.querySelector('.register-link');

    // registerLink.addEventListener('click', () => {
    //     wrapper.classList.add('active');
    // });

    // loginLink.addEventListener('click', () => {
    //     wrapper.classList.remove('active');
    // });

    const [active, setActive] = useState(false);

    const handleRegisterClick = () => {
        setActive(false);
    };

    const handleLoginClick = () => {
        setActive(true);
    };

    return (
        <div className='connexion'>
            <Navigation />
            <div className={`wrapper ${active ? 'active' : ''}`}>
                <div className="form-box login">
                    <h2>Connexion</h2>
                    <form action="#">
                        <div className="input-box">
                            <span className="icon"><IonIcon icon={mail} /></span>
                            <input type="email" required />
                            <label>Email ou Pseudo</label>
                        </div>
                        <div className="input-box">
                            <span className="icon"><IonIcon icon={lockClosed} /></span>
                            <input type="password" required />
                            <label>Mot de passe</label>
                        </div>
                        <div className="remember-forgot">
                            <label><input type="checkbox" />Rester connecté(e)</label>
                            <a href="#">Mot de passe oublié</a>
                        </div>
                        <button id='btn-submit' type='submit'>Connexion</button>
                        <div className="login-register">
                            <p>Pas encore de compte ? <a href="#" className='register-link' onClick={handleLoginClick}>S'inscrire</a></p>
                        </div>
                    </form>
                </div>

                <div className="form-box register">
                    <h2>Inscription</h2>
                    <form action="#">
                        <div className="input-box">
                            <span className="icon"><IonIcon icon={person} /></span>
                            <input type="text" required />
                            <label>Pseudo</label>
                        </div>
                        <div className="input-box">
                            <span className="icon"><IonIcon icon={mail} /></span>
                            <input type="email" required />
                            <label>Email</label>
                        </div>
                        <div className="input-box">
                            <span className="icon"><IonIcon icon={lockClosed} /></span>
                            <input type="password" required />
                            <label>Mot de passe</label>
                        </div>
                        <div className="remember-forgot">
                            <label><input type="checkbox" />J'accepte les termes et conditions d'utilisations</label>
                        </div>
                        <button id='btn-submit' type='submit'>Inscription</button>
                        <div className="login-register">
                            <p>Vous avez déjà un compte ? <a href="#" className='register-link' onClick={handleRegisterClick}>Se connecter</a></p>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Connexion;