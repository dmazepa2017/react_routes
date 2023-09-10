import { Outlet, Link } from "react-router-dom";

const Layoyt = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
            </nav>
            <hr />
            <Outlet />
        </div>
        
    );
}

export default Layoyt;