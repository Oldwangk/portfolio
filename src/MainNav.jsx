// Imports
import { Link } from 'react-router-dom';

const MainNav = () => {
    return (
        <nav>
            <Link to="/home">Home</Link>
            <Link to="/about">About Me</Link>
        </nav>
    );
};

export default MainNav;
