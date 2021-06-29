import React from 'react';

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <a className="navbar-brand" href="#home">Dog vs Cat</a>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#link">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#disable">Disabled</a>
                        </li>
                    </ul>
                    <button id="connectButton" className="btn btn-outline-success my-2 my-sm-0">Search</button>
                </div>
            </nav>
        </header>
    );
}

export default Header;
