
// ! Link is not defined - error in DevTools
// todo: use correct syntax for Link and style links?
import { Link } from 'react-router';
import { HashLink } from 'react-router-hash-link';

function Header() {

    return (
        <>
            <header id="top">
                <h1>WHEN PIGS FLY</h1>
                <nav>
                    <Link to="/" className="round" title="home page">home</Link>
                    <Link to="/posts" className="round" title="guestbook comments">guestbook</Link>
                    <HashLink to="#top" className="round" title="about us info">about</HashLink>
                </nav>
            </header>
            <div className="tagline">
                <p className="quote">let theImpossible = "posSible";</p>
            </div>
        </>
    )
}

export default Header