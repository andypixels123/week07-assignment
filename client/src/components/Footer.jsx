// import { Link } from 'react-router';
import { HashLink } from 'react-router-hash-link';
// <HashLink to="/path#top">Link to Top of Page</HashLink>

function Footer() {
    return (
        <>
            <footer>
                <nav>
                    <HashLink to="#top" className="round" title="cool page">cOol</HashLink>
                    <HashLink to="#top" className="round" title="code page">coDe</HashLink>
                    <HashLink to="#top" className="round" title="group page">grOup</HashLink>
                    <HashLink to="#top" className="round" title="panic page">pAnic</HashLink>
                    <HashLink to="#top" className="round" title="pigs page">pigS</HashLink>
                </nav>
                <p className="foot-text">buiLt frOm eXperience. andRew birCh 2025</p>
            </footer>
            <HashLink to="#top" id="topBtn" title="return to top">Top</HashLink>
        </>
    )
}

export default Footer;