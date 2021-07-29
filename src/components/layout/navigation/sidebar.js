import React, { useState } from 'react'
import NavLinks from './navLinks';
import { IoIosCloseCircle } from 'react-icons/io';
import { HiMenuAlt3 } from 'react-icons/hi';
import Link from '../../resuable/link';

const sideBar = (props) => {
    const [isSideBarVisible, setIsSideBarVisible] = useState(false);

    const showSideBar = () => setIsSideBarVisible(true);
    const hideSideBar = () => setIsSideBarVisible(false);
    const companyName = 'Company Name';
    const sideBarContainerStyle = isSideBarVisible && "sideBar__drop";
    return (
        <div>
            {!isSideBarVisible && <div className="sideBar__menu-btn" onClick={showSideBar}><HiMenuAlt3 /></div>}

            <div>
                <div className={`sideBar ${sideBarContainerStyle}`}>
                    <IoIosCloseCircle onClick={hideSideBar} className="sideBar__close" />
                    <Link href="/" className="sideBar-title" onClick={hideSideBar}>{companyName}</Link>
                    <NavLinks navLinksClass="sideBar__navLinks" navLinkClass="sideBar__navLink" click={hideSideBar} />
                </div>

            </div>

        </div>
    )
}


export default sideBar;
