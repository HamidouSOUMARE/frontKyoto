import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Navigation from '../components/Navigation';

const KyotoAttractions = () => {
    const [openSections, setOpenSections] = useState({
        chateaux: true,
        temples: true,
        activites: true,
    });

    const toggleSection = (section) => {
        setOpenSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const el = document.getElementById(hash.substring(1));
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    const chateaux = [
        {
            nom: 'Fukuchiyama',
            description: `Situé sur une colline, le château de Fukuchiyama fait partie des 100 plus beaux châteaux du Japon et est étroitement associé à un seigneur de guerre nommé Akechi Mitsuhide, qui a régné sur Fukuchiyama pendant la seconde moitié de la période Sengoku (États en guerre).`,
            imagePath: 'img/Fukuchiyama.jpeg'
        },
        {
            nom: 'Nijo',
            description: `Le château de Nijo est un site du patrimoine mondial de l'UNESCO situé à Kyoto, Japon, qui était l'ancienne résidence du Shogun Tokugawa Ieyasu. Le château de Nijo se compose de trois zones : le Honmaru (premier cercle de défense), le Ninomaru (deuxième défense) et les jardins qui entourent les cercles de défense.`,
            imagePath: 'img/Nijo.jpg'
        },
        {
            nom: 'Ruine de Kameyama',
            description: `Le château original de Kameyama a été fondé par Seki Sanetada en 1264 à l'ouest de l'actuel château de Kameyama. Lorsque Seki Kazumasa a été déplacé à Shirakawa en 1590, Okamoto Munenori a pris le contrôle du château.`,
            imagePath: 'img/Ruine de Kameyama.jpg'
        },
        {
            nom: 'Ruine de Sonobe',
            description: `Le "château" a été construit par Koide Yoshichika, seigneur du clan Sonobe, mais sans l'autorisation du shogunat, il a été traité comme un camp sans tour de château.
            Ce n'est que 250 ans après sa construction initiale que le gouvernement Meiji a accordé l'autorisation du château ce qui en fait le dernier château de l'histoire de l'architecture japonaise.`,
            imagePath: 'img/Ruine de Sonobe.jpg'
        },
        // 'Fushimi Momoyama',
        // 'Kogabana',
        // 'Izaki'
    ];

    const temples = [
        {
            nom: 'Temple Kinkakuji',
            description: `Kinkakuji (Pavillon d'Or) est un temple zen situé dans le nord de Kyoto dont les deux étages supérieurs sont entièrement recouverts de feuilles d'or. Officiellement connu sous le nom de Rokuonji, le temple était la villa de retraite du shogun Ashikaga Yoshimitsu.`,
            imagePath: 'img/Temple Kinkakuji.jpg'
        },
        {
            nom: 'Temple Kiyomizudera',
            description: `Kiyomizudera (Temple de l'Eau Pure) est l'un des temples les plus célébrés du Japon. Il a été fondé en 780 sur le site de la cascade d'Otowa, dans les collines boisées à l'est de Kyoto, et tire son nom des eaux pures de la cascade. Le temple était à l'origine associé à la secte Hosso, l'une des plus anciennes écoles du bouddhisme japonais.`,
            imagePath: 'img/Temple Kiyomizudera.jpg'
        },
        {
            nom: 'Temple Toji',
            description: `Le temple Toji (Tōji), littéralement "Temple de l'Est", a été fondé au début de la période Heian juste après que la capitale a été déplacée à Kyoto à la fin des années 700. Ce grand temple, avec son temple jumeau Saiji ("Temple de l'Ouest") aujourd'hui disparu, bordait l'entrée sud de la ville et servait de temples gardiens pour la capitale..`,
            imagePath: 'img/Temple Toji.jpg'
        },
        {
            nom: 'Temple Heian',
            description: `Le sanctuaire Heian (Heian Jingū) a une histoire relativement courte, remontant à un peu plus d'une centaine d'années, en 1895. Le sanctuaire a été construit à l'occasion du 1100ème anniversaire de la fondation de la capitale à Kyoto et est dédié aux esprits du premier et du dernier empereurs ayant régné depuis la ville. Heian est l'ancien nom de Kyoto.`,
            imagePath: 'img/Temple Heian.jpg'
        },
        // 'Temple Ginkakuji',
        // 'Temple Nazenji',
        // 'Temple Fushimi Inari'
    ];

    const activites = [
        {
            nom: 'Marché de Nishiki',
            description: `Le marché Nishiki (Nishiki Ichiba) est une rue commerçante étroite bordée de plus de cent boutiques et restaurants. Connu comme "La Cuisine de Kyoto", ce marché de détail animé est spécialisé dans tout ce qui est lié à la nourriture, comme les fruits de mer frais, les produits agricoles, les couteaux et les ustensiles de cuisine.`,
            imagePath: 'img/Marché de Nishiki.jpeg'
        },
        {
            nom: 'Balade à Gion',
            description: `Gion est le quartier de geishas le plus célèbre de Kyoto, situé autour de l'avenue Shijo entre le sanctuaire Yasaka à l'est et la rivière Kamo à l'ouest. Il est rempli de boutiques, restaurants et ochaya (maisons de thé), où les geiko (dialecte de Kyoto pour geisha) et maiko (apprenties geiko) divertissent.`,
            imagePath: 'img/Balade à Gion.jpg'
        },
        {
            nom: 'Visite Sagano Bamboo',
            description: `
            Les sentiers qui traversent les bosquets de bambous offrent une agréable promenade. Les bosquets sont particulièrement attrayants lorsqu'il y a un léger vent et que les grands chaumes de bambou oscillent doucement d'avant en arrière. Le bambou a été utilisé pour fabriquer divers produits, tels que des paniers, des tasses, des boîtes et des nattes dans des ateliers locaux depuis des siècles.`,
            imagePath: 'img/Visite Sagano Bamboo.jpg'
        },
        {
            nom: 'Visite de Nara',
            description: `
            La porte Nandaimon est une grande porte en bois surveillée par deux statues à l'aspect féroce. Représentant les rois gardiens Nio, les statues sont désignées trésors nationaux conjointement avec la porte elle-même. Il est également quelques cerfs du parc Nara adjacent, quémandant des shika senbei, des crackers spéciaux pour cerfs qui sont vendus pour environ 200 yens.`,
            imagePath: 'img/Visite de Nara.jpg'
        },
        // 'Porter des kimonos',
        // 'Restaurant gastronomique',
        // 'Spectacle de geisha',
    ];

    return (


        <div className="kyoto-attractions bgi">
            <Navigation/>
            <h1>Découvertes à Kyoto</h1>

            <div className="section-wrapper" id="chateaux">
                <h2 style={{ color: "#FFF" }} onClick={() => toggleSection('chateaux')} className={openSections.chateaux ? 'open' : ''}>
                    Châteaux <span className="toggle-indicator"></span>
                </h2>
                <div className="attractions-list" style={{ display: openSections.chateaux ? 'flex' : 'none' }}>
                    {chateaux.map(chateau => (
                        <div className="attraction-card" key={chateau.nom}>
                            <div className="image-wrapper">
                                <img src={chateau.imagePath} alt={chateau.nom} />
                                <div className="overlay">Voir sur la carte</div>
                                <Link to={`/itineraire?location=${chateau.nom}`} className="overlay-link"></Link>
                            </div>
                            <h2>{chateau.nom}</h2>
                            <p className='description'>{chateau.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="section-wrapper" id="temples">
                <h2 style={{ color: "#FFF" }} onClick={() => toggleSection('temples')} className={openSections.temples ? 'open' : ''}>
                    Temples <span className="toggle-indicator"></span>
                </h2>
                <div className="attractions-list" style={{ display: openSections.temples ? 'flex' : 'none' }}>
                    {temples.map(temple => (
                        <div className="attraction-card" key={temple.nom}>
                            <div className="image-wrapper">
                                <img src={temple.imagePath} alt={temple.nom} />
                                <div className="overlay">Voir sur la carte</div>
                                <Link to={`/itineraire?location=${temple.nom}`} className="overlay-link"></Link>
                            </div>
                            <h2>{temple.nom}</h2>
                            <p className='description'>{temple.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="section-wrapper" id="activites-en-ville">
                <h2 style={{ color: "#FFF" }} onClick={() => toggleSection('activites')} className={openSections.activites ? 'open' : ''}>
                    Activitées en ville <span className="toggle-indicator"></span>
                </h2>
                <div className="attractions-list" style={{ display: openSections.activites ? 'flex' : 'none' }}>
                    {activites.map(activite => (
                        <div className="attraction-card" key={activite.nom}>
                            <div className="image-wrapper">
                                <img src={activite.imagePath} alt={activite.nom} />
                                <div className="overlay">Voir sur la carte</div>
                                <Link to={`/itineraire?location=${activite.nom}`} className="overlay-link"></Link>
                            </div>
                            <h2>{activite.nom}</h2>
                            <p className='description'>{activite.description}</p>
                        </div>
                    ))}
                </div>


                
            </div>
        </div>
    );
}

export default KyotoAttractions;
