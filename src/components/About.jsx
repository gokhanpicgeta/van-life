import { Link } from "react-router-dom"
import about_image from "../assets/about_image.png"
import Footer from "./Footer"

export default function About(){
    return(
        <>
            <nav>
                <h1>#VANLIFE</h1>
                <Link className="aboutLink" to="/about"><span>About</span></Link>
                <Link className="vansLink" to="/vans"><span>Vans</span></Link>
            </nav>
            <img className="aboutImage" src={about_image} />
            <div className="aboutBody">
                <h3>Don’t squeeze in a sedan when you could relax in a van.</h3>
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                (Hitch costs extra 😉)
                <br />
                <br />
                Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                </p>
                <section>
                    <span>Your destination is waiting.</span>
                    <span>Your van is ready.</span>
                    <button>Explore our vans</button>
                </section>
            </div>
            <Footer/>
        </>
    )
}