import React from 'react'
import NavLinks from './navLinks';
import Link from '../../resuable/link';

const navbar = (props) => {
    const companyName = 'MMM';
    return (
        <nav className="navbar">
            <Link href="/" className="nav__title">{companyName}</Link>
            <NavLinks navLinksClass="nav__links" navLinkClass="nav__link" />
        </nav>
    )
}



export default navbar;
