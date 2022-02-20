import React, { useRef, useEffect } from 'react';
import Link from 'next/link'


export default function Accomodations() {
    return (
        <div className="accomodation">
            <div className="landing-wrap">
                <p>COMING SOON</p>
            </div>
            <div className="nav-wrap">
                <Link href="/details">
                    <a className="nav-link">Details</a>
                </Link>
                <Link href="/accomodations">
                    <a className="nav-link">Accomodations</a>
                </Link>
                <Link href="/rsvp">
                    <a className="nav-link">RSVP</a>
                </Link>
            </div>
        </div>

    )
}