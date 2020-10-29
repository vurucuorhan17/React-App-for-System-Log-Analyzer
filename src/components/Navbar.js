import React from "react";

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-light navbar-expand-md navigation-clean" style={{ background: "#91603c", }}>
            <div className="container"><a className="navbar-brand" href="/" style={{ color: "#ffffff" }}>System Log Analyzer</a><button data-toggle="collapse" data-target="#navcol-1" className="navbar-toggler"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                <div
                    className="collapse navbar-collapse" id="navcol-1">
                    <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item"><a className="nav-link active" href="/" style={{ color: "#ffffff" }}>Home</a></li>
                        <li className="nav-item"><a className="nav-link active" href="/" style={{ color: "#ffffff" }}>Auth Log Analyzer</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;