import { Link } from "react-router-dom"

const Navbar=()=>{
    return (
        <div>
            <Link to="/">
                <h1>note app</h1>
            </Link>
            <Link to="/create">
                <button>New</button>
            </Link>
        </div>
    )
}

export default Navbar