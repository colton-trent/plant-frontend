import {Link} from 'react-router-dom';
import './Header.css'

const Header = (props) => {
    return (
        <header className="Header">
            <h1>Plant Share</h1>
            <nav><Link className="homeLink" to='/'>Home</Link></nav>
        </header>
    )
}

export default Header;