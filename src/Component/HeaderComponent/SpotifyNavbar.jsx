import React, { Component, Fragment } from 'react';
import SpotifyLogo from "./LogoComponent/SpofityLogo";
import SpotifyMenuComponent from "./MenuComponent/SpotifyMenuComponent";
import "./SpotifyNavbar.css";
import {Link} from "react-router-dom"
import { toast } from 'react-toastify';
import firebase from "../../firebase";
import {withRouter } from "react-router-dom";


class SpotifyNavbar extends Component {
    signout=()=>{
        firebase.auth().signOut().then(
            ()=>{
                toast.success(`successfully logged out🥰`);
                this.props.history.push("/login");
            }
        ).catch(err=>toast.error(err.message));
    }
    render() { 
       let { displayName , email , photoURL }=this.props.user;
       let IsAnonymousUser=()=>(
           <Fragment>
           <li>
           <Link to="/signup">SignUp</Link>
           </li>
           <li>
           <Link to="/login">LogIn</Link>
           </li>
           </Fragment>
       );
       let IsAuthenticatedUser=()=>(
        <Fragment>
        <li>
            <a href="/">{displayName}</a>
        </li>
        <li>
            <a href="/">{email}</a>
        </li>
        <li>
            <img src={photoURL} id="imageTag" alt={displayName}></img>
        </li>
        <li>
        <a className="btn btn-success" id="angerTag" onClick={this.signout}>Logout</a>
        </li>
        </Fragment>
       );
       return (
        <Fragment>
            <section id="spotifyNavbarBlock">
            <article>
            <div className="logoBlock">
            <Link to="/">
                 <SpotifyLogo/>
                     </Link>
                     </div>
                     <div className="menuBlock">
                         
                <Fragment>
                    <nav>
                    <ul>
                        <li><Link to="/">Premium</Link></li>
                        <li><Link to="/">Support</Link></li>
                        <li><Link to="/">Download</Link></li>
                        {this.props.user.emailVerified === true || this.props.user.isAnonymous === false ? (<IsAuthenticatedUser/>):(<IsAnonymousUser/>
                            )}
                    </ul>
                    </nav>
                </Fragment>
            </div>
            </article>
            </section>
        </Fragment>
    
    
    
       )}
}
 
export default withRouter(SpotifyNavbar);


