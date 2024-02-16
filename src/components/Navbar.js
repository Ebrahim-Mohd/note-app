import { Link } from "react-router-dom"

const Navbar=()=>{
    return (
        <header className="primary-header">
            <div className="container">
                <div className="nav-wrapper">
                    <Link to="/" className="link">
                        <h1 className="fs-primary-heading fw-bold nav-heading">note app</h1>
                    </Link>
                    <Link to="/create" className="link">
                        <button className="new-btn">+</button>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Navbar