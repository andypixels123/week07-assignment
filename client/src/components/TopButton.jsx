import { HashLink } from 'react-router-hash-link';
// <HashLink to="/path#top">Link to Top of Page</HashLink>

function TopButton() {
    return (
        <HashLink to="#top" id="topBtn" title="return to top">Top</HashLink>
    )
}

export default TopButton;