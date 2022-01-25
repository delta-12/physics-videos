import { Component } from "react"
import { Link } from "react-router-dom"

export default class Header extends Component {

    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary p-2">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <div className="navbar-brand">Physics Videos</div>
                </Link>
            </nav>
        )
    }

}