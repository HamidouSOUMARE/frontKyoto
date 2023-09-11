import React from 'react';

const Contact = () => {
    return (
        <div>
            <section class="section-contact" id="contact">
                <h2><strong>Rentrons</strong> en contact</h2>

                <div class="container-form">

                    <form class="form-bloc">

                        <div class="form-groupe">
                            <label for="prenom">Entrez votre prénom</label>
                            <input type="text" placeholder="Prénom" required id="prenom" />
                        </div>

                        <div class="form-groupe">
                            <label for="nom">Entrez votre nom</label>
                            <input type="text" placeholder="nom" required id="nom" />
                        </div>

                        <div class="form-groupe">
                            <textarea id="text" placeholder="Votre message" required></textarea>
                        </div>

                        <div class="form-groupe">
                            <button type="submit" value="ENVOYER" class="btn-sub">Envoyer</button>
                        </div>

                    </form>

                </div>



            </section>
        </div>
    );
};

export default Contact;