import giphy from '../styles/giphy.gif'
function About(){
    return(
        <div className="container text-center">
            <section className="about-us row">
                <div className="first col">
                    <h1 className="f-1" data-aos="fade-right">Livraison instantanée</h1>
                    <h1 className="f-1" data-aos="fade-right">Meilleur qualité-prix</h1>
                    <h1 className="f-2"
                    data-aos="fade-right">Support 24h/7j</h1>
                </div>
                <div className="tel col">
                    <img src={giphy} data-aos="fade-up" width="280" height="480" alt='Exemple' />
                </div>  
                <div className="second col">
                    <h1 className="f-3" data-aos="fade-left">Aucun accès au compte requis</h1>
                    <h1 className="f-4" data-aos="fade-left">Jusqu'à 1M d'abonnées</h1>
                </div>
            </section>
            <div><h1>test</h1><h1>test</h1></div>
       </div>

    )
}



export default About;