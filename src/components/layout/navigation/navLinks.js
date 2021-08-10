import React from 'react';
import Link from 'next/link';

const data = [

    {
        label: 'App Features',
        link: '/app-features'
    },
    {
        label: 'Contact',
        link: '/'
    },

]
const navLinks = (props) => {
    return (
        <div className={props.navLinksClass}>
            {data.map((item, index) => {
                return <Link key={`navLink-${index}`} href={item.link}>
                    <a className={props.navLinkClass} onClick={props.click}>{item.label}</a>
                </Link>
            })}
        </div>
    )
}

export default navLinks
