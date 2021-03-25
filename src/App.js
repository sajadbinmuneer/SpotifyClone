import React, { Component, Fragment } from 'react';
import Signup from './Component/AuthComponent/Signup';
import SpotifyNavbar from "./Component/HeaderComponent/SpotifyNavbar";
import {BrowserRouter as Router , Switch , Route } from "react-router-dom";
import Home from './Component/HomeComponent/Home';
import Login from './Component/AuthComponent/Login';
import PageNoteFound from './Component/PageNotFount/PageNotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PasswordReset from "./Component/AuthComponent/PasswordReset"
import firebase from "./firebase"
import PhoneAuth from './Component/AuthComponent/PhoneAuth';

class App extends Component {
    state = { 
        userInfo:"",
     };
     async componentDidMount(){
         await firebase.auth().onAuthStateChanged(user =>{
             if(user){
                 this.setState({ userInfo:user });
             }else{
                 this.setState({ userInfo:"" });
             }
         });
     }
    render() { 
        console.log(this.state.userInfo);
        return (
            <Fragment>
            <Router>
            <header>
            <SpotifyNavbar user={this.state.userInfo}/>
            </header>
                <ToastContainer/>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/signup" exact component={Signup} />
                    <Route path="/phone-auth" exact component={PhoneAuth}/>
                    <Route path="/password-reset" exact component={PasswordReset} />
                    <Route path="*" component={PageNoteFound} />
                </Switch>
                </Router>
            </Fragment>
        );
    }
}
 
export default App;