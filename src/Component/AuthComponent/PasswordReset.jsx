import React, { Component, Fragment } from 'react';
import "./Auth.css";
import firebase from "../../firebase";
import {toast} from "react-toastify";
import { withRouter,Link} from "react-router-dom"

class PasswordReset extends Component {
    state = { 
        email:"",
     };
     handleChange= e =>{
         this.setState({[e.target.name]:e.target.value});
     }
     handleSubmit = async e=>{
         try {
             e.preventDefault();
             await firebase.auth().sendPasswordResetEmail(this.state.email);
             toast.success(`verify your email and again login....`);
             this.props.history.push("/login");

         } catch (err) {
             toast.error(err.message);
             this.props.history.push("/password-reset")
         }
     }
    render() { 
       let {email  }=this.state;
        return (
            <Fragment>
            <section id="authSection" className="col-md-5 my-5 mx-auto ay-2 card">
            <article className="card-body">
                <h5>Password Reset</h5>
                <p>
                Enter your Spotify username, or the email address that you used to register.
                 We'll send you an email with your username and a link to reset your password.
                </p>
                <form autoComplete="off" onSubmit={this.handleSubmit}>
                    {/* div.form-group*2>label+input */}
                    
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" name="email" id="email" 
                        value={email} onChange={this.handleChange}
                        placeholder="Email" />
                    </div> 

                   
                    <div className="form-group">
                        <button className="btn btn-success form-control">Reset Password</button>
                        <Link to="/login">Log in</Link>
                    </div>
                </form>
            </article>
        </section>
            
            </Fragment>
          );
    }
}
 
export default withRouter(PasswordReset);