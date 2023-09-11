import React from 'react';

const Guide = () => {

    const chateaux = [
        'Fukuchiyama',
        'Nijo',
        'Ruine de Kameyama',
        'Ruine de Sonobe',
        'Fushimi Momoyama',
        'Kogabana',
        'Izaki'
    ];

    const temples = [
        'Temple Kinkakuji',
        'Temple Kiyomizudera',
        'Temple Toji',
        'Temple Heian',
        'Temple Ginkakuji',
        'Temple Nazenji',
        'Temple Fushimi Inari'
    ];

    const activites = [
        'Marché de Nishiki',
        'Balade à Gion',
        'Visite Sagano Bamboo',
        'Porter des kimonos',
        'Visite de Nara',
        'Restaurant gastronomique',
        'Spectacle de geisha',
    ];

    const renderItems = (items) => {
        return items.map((item, index) => {
            return <p key={index}>{item}</p>;
        });
    };

    return (
        <div>
            <section class="parallax">
                <p>冒険に出よう</p>
                <span>Partez à l'aventure</span>
            </section>

            <section className="section-guide" id="guide">
                <h3>Laissez-vous guider...</h3>
                <hr />

                <div className="container-guide">
                    <div className="carte-guide">
                        <h4>Les Châteaux</h4>
                        {renderItems(chateaux)}
                        <a href="/activites#chateaux">Découvrir</a>
                    </div>

                    <div className="carte-guide">
                        <h4>Les temples</h4>
                        {renderItems(temples)}
                        <a href="/activites#temples">Découvrir</a>
                    </div>
                    <div className="carte-guide">
                        <h4>Activitées en ville</h4>
                        {renderItems(activites)}
                        <a href="/activites#activites-en-ville">Découvrir</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Guide;