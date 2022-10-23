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
                    <h2 className="presentation">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quasi aut, neque vitae quidem perspiciatis libero maiores ipsam, autem corporis similique cumque? Sit suscipit eveniet ipsam dolore similique maiores placeat?
                    </h2>
           </div>
           <span className="scroll">
           <i class="fa-solid fa-angle-down arrow"></i>
           </span>
            <About />
        </main>
    )
}



export default Home;