import React, { Component, Fragment } from 'react';
import firebase from "../../firebase";
import {Link ,withRouter} from "react-router-dom";
import {toast} from "react-toastify";
class PhoneAuth extends Component {
    state = { 
        phone:"",
     }
     handleChange = e=> {
         this.setState({[e.target.name]:e.target.value});
     }
     handleSubmit =async e=>{
         try {
             e.preventDefault();
             let captchaVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container");
             firebase.auth().signInWithPhoneNumber(this.state.phone,captchaVerifier).then(ConformationResult=>{
                 let otp=window.prompt("Please enter a valid OTP");
                 ConformationResult.confirm(otp).then(result=>{
                     toast.success(`successfully ${this.state.phone} is verified `);
                     this.props.history.push("/");
                     console.log(result.user);
                 }).catch(err=>toast.error(err.message));
             });
         } catch(err)
          {
          }
     }

    render() { 
        return ( 
            <Fragment>
            <section id="authSection" className="col-md-5 my-5 mx-auto ay-2 card">
            <article className="card-body"></article>
            <h1>enter Phone number</h1>
            <form onSubmit={this.handleSubmit}>
            <div className="form-group">
            <input type="text" className="text" name="phone" value={this.state.phone} onChange={this.handleChange} placeholder="enter valid phone number" />
            </div>
            <div id="recaptcha-container"></div>
            <div className="form-group">
            <button>next</button>
            </div>
            </form>
            </section>
            </Fragment>
         );
    }
}
 
export default withRouter(PhoneAuth);