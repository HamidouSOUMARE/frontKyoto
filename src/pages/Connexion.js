import React, { useState, useEffect } from 'react';
import { IonIcon } from '@ionic/react';
import { mail, lockClosed, person } from 'ionicons/icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';


const Connexion = () => {
    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            let cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                let cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    axios.defaults.withCredentials = true;
    const [csrfToken, setCsrfToken] = useState(getCookie('csrftoken'));
    const termsRef = React.useRef(null);
    const navigate = useNavigate();
    const initialRegisterData = {
        lastName: "",
        firstName: "",
        email: "",
        password: "",
    };
    const [registerData, setRegisterData] = useState(initialRegisterData);
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        axios.defaults.headers.common['X-CSRF-TOKEN'] = getCookie('csrftoken');
    }, []);

    // const wrapper = document.querySelector('.wrapper');
    // const loginLink = document.querySelector('.login-link');
    // const registerLink = document.querySelector('.register-link');

    // registerLink.addEventListener('click', () => {
    //     wrapper.classList.add('active');
    // });

    // loginLink.addEventListener('click', () => {
    //     wrapper.classList.remove('active');
    // });

    const handleInputChange = (e, setState) => {
        const { name, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleRegisterClick = (e) => {
        e.preventDefault();
        setActive(false);
        toggleActive();
    };

    const handleLoginClick = (e) => {
        e.preventDefault();
        setActive(true);
    };

    const toggleActive = () => {
        setActive(false);
    };

    const handleSubmitRegister = async (e) => {
        e.preventDefault();

        // Validation simple pour les termes et conditions
        if (!termsRef.current.checked) {
            setErrorMessage("Veuillez accepter les termes et conditions.");
            return;
        }

        const { lastName, firstName, email, password } = registerData;

        try {
            const response = await axios.post('http://localhost:8000/api/register/', {
                lastName, firstName, email, password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response);
            if (response.status === 201) {
                toggleActive();
                setRegisterData(initialRegisterData);
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage("Erreur lors de l'inscription. Veuillez réessayer.");
            }
            console.error("Erreur lors de l'inscription", error);
        }
    };

    const handleSubmitLogin = async (e) => {
        e.preventDefault();

        const { email, password } = loginData;

        // Faites une requête à votre API de connexion ici.
        try {
            const response = await axios.post('http://localhost:8000/dj-rest-auth/login/', {
                email, password
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrfToken
                }
            });
            console.log(response);
            if (response.status === 200) {
                localStorage.setItem('email', email);
                navigate('/profil');
            }
        } catch (error) {
            console.error("Erreur lors de l'inscription", error);
            setErrorMessage("Erreur lors de l'inscription. Veuillez réessayer.");
        }

        // Simulé pour le moment :
        console.log('Tentative de connexion avec', email, password);
    }

    const [active, setActive] = useState(false);

    return (
        <div className='connexion'>
            <Navigation/>
            <div className={`wrapper ${active ? 'active' : ''}`}>
                <div className="form-box login">
                    <h2>Connexion</h2>
                    <form onSubmit={handleSubmitLogin}>
                        <div className="input-box">
                            <span className="icon"><IonIcon icon={mail} /></span>
                            <input
                                type="email"
                                name="email"
                                value={loginData.email}
                                onChange={(e) => handleInputChange(e, setLoginData)}
                                required
                            />
                            <label>Email</label>
                        </div>
                        <div className="input-box">
                            <span className="icon"><IonIcon icon={lockClosed} /></span>
                            <input
                                type="password"
                                name="password"
                                value={loginData.password}
                                onChange={(e) => handleInputChange(e, setLoginData)}
                                required
                            />
                            <label>Mot de passe</label>
                        </div>
                        <div className="remember-forgot">
                            <label><input type="checkbox" />Rester connecté(e)</label>
                            <a href="#">Mot de passe oublié</a>
                        </div>
                        <button className='btn-submit' type='submit' onClick={handleSubmitLogin}>Connexion</button>
                        <div className="login-register">
                            <p>Pas encore de compte ? <a href="#" className='register-link' onClick={handleLoginClick}>S'inscrire</a></p>
                        </div>
                    </form>
                </div>

                <div className="form-box register">
                    <h2>Inscription</h2>
                    <form onSubmit={handleSubmitRegister}>
                        <div className="input-box">
                            <span className="icon"><IonIcon icon={person} /></span>
                            <input
                                type="text"
                                name="lastName"
                                value={registerData.lastName}
                                onChange={(e) => handleInputChange(e, setRegisterData)}
                                required
                            />
                            <label>Nom</label>
                        </div>
                        <div className="input-box">
                            <span className="icon"><IonIcon icon={person} /></span>
                            <input
                                type="text"
                                name="firstName"
                                value={registerData.firstName}
                                onChange={(e) => handleInputChange(e, setRegisterData)}
                                required
                            />
                            <label>Prénom</label>
                        </div>
                        <div className="input-box">
                            <span className="icon"><IonIcon icon={mail} /></span>
                            <input
                                type="email"
                                name="email"
                                value={registerData.email}
                                onChange={(e) => handleInputChange(e, setRegisterData)}
                                required
                            />
                            <label>Email</label>
                        </div>
                        <div className="input-box">
                            <span className="icon"><IonIcon icon={lockClosed} /></span>
                            <input
                                type="password"
                                name="password"
                                value={registerData.password}
                                onChange={(e) => handleInputChange(e, setRegisterData)}
                                required
                            />
                            <label>Mot de passe</label>
                        </div>
                        <div className="remember-forgot">
                            <label><input ref={termsRef} type="checkbox" />J'accepte les termes et conditions d'utilisations</label>
                        </div>
                        <button className='btn-submit' type='submit' onClick={handleSubmitRegister}>Inscription</button>
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