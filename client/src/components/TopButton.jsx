import { HashLink } from 'react-router-hash-link';
// import { Link } from 'react-router';
// <HashLink to="/path#top">Link to Top of Page</HashLink>

function TopButton() {
    // todo: conditionally render top button?
    return (
        <>
            <HashLink to="#top" id="topBtn" title="return to top">Top</HashLink>
        </>
    )
}

export default TopButton;