import React from 'react' 

import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav>
            <section>
                <h1>DND React App</h1>
                <div className="navContent">
                    <div className="navLinks">
                        <Link to="/">Main Page</Link>
                    </div>
                </div>
            </section>
        </nav>
    )
}