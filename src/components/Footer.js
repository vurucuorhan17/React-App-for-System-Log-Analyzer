import React from "react";

function Footer(props)
{
    return (
        <div className="footer-basic" style={{ background: "#1c1b1b" }}>
            <footer>
                <div>
                    <p className="text-center" style={{ color: "#aaaaaa" }}>Stack</p>
                    <ul className="list-inline">
                        <li className="list-inline-item">Nestjs</li>
                        <li className="list-inline-item">GraphQL</li>
                        <li className="list-inline-item">TypeORM</li>
                        <li className="list-inline-item">PostgreSQL</li>
                    </ul>
                    <hr />
                </div>
                <div className="social"><a href="https://github.com/vurucuorhan17/Nest-GraphQL-System-Log-Analyzer"><i className="fa fa-github"></i></a></div>
                <p className="copyright">Nest System Log Analyzer @ Orhan Furkan VURUCU - 2020</p>
            </footer>
        </div>
    );
}

export default Footer;