
import React, { Fragment } from 'react';
import SpotifyLogo from '../HeaderComponent/LogoComponent/SpofityLogo';
import "./FooterComponent.css"

const FooterComponent = () => {
    return (
        <Fragment>
            <section id="footerBlock">
                <article>
                    <div className="logoBlock"><SpotifyLogo/></div>
                    <div>
                        <ul>
                            company
                           <li><a href="#">about</a></li>
                           <li><a href="#">job</a></li>
                           <li><a href="#">for the record</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            communities
                            <li><a href="#">for artists</a></li>
                            <li><a href="#">developers</a></li>
                            <li><a href="#">advertising</a></li>
                            <li><a href="#">investors</a></li>
                            <li><a href="#">vendors</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            useful links
                            <li><a href="#">support</a></li>
                            <li><a href="#">web player</a></li>
                            <li><a href="#">free mobile app</a></li>
                        </ul>
                    </div>
                    <div className="socialMediaBlock">
                        <div>
                            <i className="fab fa-instagram"></i>
                        </div>
                        <i className="fab fa-twitter"></i>
                        <div>
                        </div>
                        <i className="fab fa-facebook"></i>
                        <div>
                            
                        </div>
                    </div>
                </article>
                <main>
                    <ul>
                        <li><a href="#">Legal</a></li>
                        <li><a href="#">Privacy Center</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Cookies</a></li>
                        <li><a href="#">About Ads</a></li>
                    </ul>
                </main>
            </section>
        </Fragment>
    )
}

export default FooterComponent
