import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg sticky-top d-flex flex-row  flex-wrap justify-content-center">
            <Link className="navbar-brand" to="/">🦦</Link>
            <ul className="navbar-nav d-flex flex-row">
                <li className="nav-item active">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/gallery">Gallery</Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/skills">Skills</Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/contact">Contact Me</Link>
                </li>
            </ul>
        </nav>
    )
}