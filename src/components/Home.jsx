import { Link } from "react-router-dom"
import Footer from "./Footer"

export default function Home(){
    return(
            <>
                <nav>
                    <h1>#VANLIFE</h1>
                    <Link className="aboutLink" to="/about"><span>About</span></Link>
                    <Link className="vansLink" to="/vans"><span>Vans</span></Link>
                </nav>
                <div className="homeBody">
                    <h1>You got the travel plans, we got the travel vans</h1>
                    <p>Add adventure to your life by joining the #vanlife movement. <br/> Rent the perfect van to make your perfect road trip.</p>
                    <button>Find your van</button>
                </div>
                <Footer />
            </>
    )
}