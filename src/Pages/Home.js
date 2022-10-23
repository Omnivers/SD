import About from "../Assets/About";

// import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
function Home(){
    return(
        <main>
           <div className="head">
                <h1 className="title">
                    <span className="Social">S</span>
                    <span className="ocialdev">ocial</span>
                    <span className="Dev">D</span>
                    <span className="ocialdev">ev</span></h1>
                    <h2 className="presentation"
                    data-aos="zoom-in-down">
                        Chez SocialDev vous pouvez promouvoir le réseau que vous voulez et avoir un maximum d'abonnées.
                        SocialDev vous accompagne dans la création et la mise en place d'outils digitaux en créant votre application web et web mobile.
                    </h2>
                    <h2 className="presentation">Vous avez créé une page Instagram, Youtube, TikTok mais vous ne possèdez pas assez d'abonnées ?</h2>
                    <h2 className="presentation">Vous souhaitez créé votre propre site internet mais vous n'avez aucune notion du code?</h2>
           </div>
                    <span className="scroll">
                    <i class="fa-solid fa-angle-down arrow"></i>
                    </span>
            <About />
        </main>
    )
}



export default Home;