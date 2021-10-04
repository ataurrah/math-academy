import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <div className="footer-clean">
        <footer>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-4 col-md-3 item">
                        <h3>Skill Development</h3>
                        <ul>
                            <li><a href="/">Web design</a></li>
                            <li><a href="/node_modules">Web Development</a></li>
                            <li><a href="/">Grapic design</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="/">Academy</a></li>
                            <li><a href="/">Team</a></li>
                            <li><a href="/">Legacy</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 item">
                        <h3>courses</h3>
                        <ul>
                            <li><a href="/node_modules">MATHEMATICS</a></li>
                            <li><a href="/">SKILL DEVELOPMENT</a></li>
                            <li><a href="/">Benefits</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 item social"><a href="https://www.facebook.com/profile.php?id=100006844984015"><i className="icon ion-social-facebook"></i></a><a href="https://twitter.com/amirataur"><i className="icon ion-social-twitter"></i></a><a href="/"><i className="icon ion-social-snapchat"></i></a><a href="https://www.instagram.com/amirataur/"><i className="icon ion-social-instagram"></i></a>
                        <p className="copyright">Math Academy © 2021</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    );
};

export default Footer;