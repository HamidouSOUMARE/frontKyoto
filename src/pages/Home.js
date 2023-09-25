import React from 'react';
import Guide from '../components/Guide';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import ButtonGoTop from '../components/ButtonBackToTop';

const Home = () => {
    return (
        <>
            <div className="accueil" id="home">
                <div>
                    <Navigation />
                    <img src="./img/logo-porte-japon.jpg" alt="logo porte japon" className="logo-kyoto" />
                    <h1>Découvrez Kyoto</h1>
                    <p className="sous-titre">La ville impériale du Japon</p>
                    <a href="#asym" className="btn-accueil">En savoir plus</a>
                </div>
            </div>
            <section className="section-asymetrique" id="asym">

                <h2>Que faire à Kyoto ?</h2>

                <div className="bloc bloc-left bloc-1">
                    <div className="bloc-txt-left">
                        <h3>Visitez des temples</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, dolorum officiis necessitatibus dignissimos excepturi, atque sed eaque blanditiis repellat quidem nihil quis, reiciendis corrupti esse quo ipsum aspernatur nam qui ullam molestiae perferendis rem? Repudiandae velit eos aperiam harum, sapiente blanditiis eaque officiis reiciendis, sed qui odio ipsa ullam animi!</p>
                        <button className="btn-bloc-left">
                            En savoir plus
                        </button>
                    </div>
                </div>
                <img src="./img/kyoto-temple.jpg" alt="couloir d'un temple de kyoto" className="img-grid img-grid-1" />

                <div className="ligne-gauche"></div>
                <div className="ligne-droite"></div>
            </section>

            <section class="section-asymetrique" id="asym">

                <h2>Que faire à Kyoto ?</h2>

                <div class="bloc bloc-right bloc-2">
                    <div class="bloc-txt-right">
                        <h3>Visitez des châteaux</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, dolorum officiis necessitatibus dignissimos excepturi, atque sed eaque blanditiis repellat quidem nihil quis, reiciendis corrupti esse quo ipsum aspernatur nam qui ullam molestiae perferendis rem? Repudiandae velit eos aperiam harum, sapiente blanditiis eaque officiis reiciendis, sed qui odio ipsa ullam animi!</p>
                        <button>
                            En savoir plus
                        </button>
                    </div>
                </div>
                <img src="./img/chateau-kyoto.jpg" alt="château de kyoto" class="img-grid img-grid-2" />

                <div class="ligne-gauche"></div>
                <div class="ligne-droite"></div>
            </section>

            <section class="section-asymetrique" id="asym">

                <h2>Que faire à Kyoto ?</h2>

                <div class="bloc bloc-left bloc-3">
                    <div class="bloc-txt-left">
                        <h3>Visitez la ville</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, dolorum officiis necessitatibus dignissimos excepturi, atque sed eaque blanditiis repellat quidem nihil quis, reiciendis corrupti esse quo ipsum aspernatur nam qui ullam molestiae perferendis rem? Repudiandae velit eos aperiam harum, sapiente blanditiis eaque officiis reiciendis, sed qui odio ipsa ullam animi!</p>
                        <button class="btn-bloc-left">
                            En savoir plus
                        </button>
                    </div>
                </div>
                <img src="./img/geisha.jpg" alt="couloir d'un temple de kyoto" class="img-grid img-grid-3" />

                <div class="ligne-gauche"></div>
                <div class="ligne-droite"></div>
            </section>

            {/* Section parallax */}

            <Guide />

            {/* Section Contact */}

            <Contact />


            <Footer />

            <ButtonGoTop />

        </>
    );
};

export default Home;