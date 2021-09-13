import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Footer.css"


const Footer = () => {
    return (
        <div className="footer-dark">
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-3 item">
                            <h3>Services</h3>
                            <ul>
                                <li><NavLink to="#">Web design</NavLink></li>
                                <li><NavLink to="#">Development</NavLink></li>
                                <li><NavLink to="#">Hosting</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 item">
                            <h3>About</h3>
                            <ul>
                                <li><NavLink to="#">Company</NavLink></li>
                                <li><NavLink to="#">Team</NavLink></li>
                                <li><NavLink to="#">Careers</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-md-6 item text">
                            <h3>Company Name</h3>
                            <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                        </div>
                        <div className="col item social"><a to="#"><i className="fa fa-facebook-square"></i></a><a to="#"><i className="fa fa-twitter"></i></a><a to="#"><i className="fa fa-twitter"></i></a><a to="#"><i className="fa fa-twitter"></i></a></div>
                    </div>
                    <p className="copyright">GoDigital Pvt.Ltd © 2018</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
