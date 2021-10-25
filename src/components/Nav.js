import React from "react"
import "./Nav.css"
import { Link } from "react-router-dom"
import CstmWeddingCake from "./HeaderDropdown/CstmWeddingCake"
import CstmCelebrationCake from "./HeaderDropdown/CstmCelebrationCake"
import DessertCatering from "./HeaderDropdown/DessertCatering"
import Contact from "./HeaderDropdown/Contact"
import More from "./HeaderDropdown/More"


export default function Nav() {
    return (
        <div className="nav-container">
            <Link to="/">
                <img style={{ width: "200px" }} src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/b20b609d-5d34-4537-896c-156c8258a142/Square+space+Logo.png?format=1500w" alt="logo" />
            </Link>
            <nav>
                <CstmWeddingCake />
                <CstmCelebrationCake />
                <DessertCatering />
                <Contact />
                <More />
                <a className="instaLogo" href="https://www.instagram.com/thedessertstudioutah/?hl=en"><i class="fab fa-instagram"></i></a>
            </nav>
        </div>
    )
}
