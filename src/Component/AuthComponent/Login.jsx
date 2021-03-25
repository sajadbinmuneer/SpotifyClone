import React, { Component, Fragment } from 'react';
import "./Auth.css";
import firebase from "../../firebase";
import {toast} from "react-toastify";
import { withRouter,Link} from "react-router-dom"

class Login extends Component {
    state = { 
        email:"",
        password:"",
     };
     handleChange= e =>{
         this.setState({[e.target.name]:e.target.value});
     }
     handleSubmit = async e=>{
         let {email,password}=this.state;
         let {history, match , location }=this.props;
         e.preventDefault();
         try {
             let userData=await firebase.auth().signInWithEmailAndPassword(email,password);
             if(userData.user.emailVerified===true){
                 toast.success(`successfully ${email} verified and logged in 🥰`);
                 history.push("/")
             }else{
                 toast.error(`${email} is not yet verified 😠`);
                 history.push("/login")
             }
         } catch (err) {
             toast.error(err.message)
         }
     }
    render() { 
       let {email , password }=this.state;
        return (
            <Fragment>
            <section id="authSection" className="col-md-5 my-5 mx-auto ay-2 card">
            <article className="card-body">
                <h5>To continue, log in to Spotify.</h5>
                <p style={{padding:"10px",width:"100%", border:"1px solid #111",borderRadius:"20px",textAlign:"center",margin:"10px auto"}}>
               
                <Link to="/phone-auth" style={{textDecoration:"none",color:"#555"}}> Continue with Phone Number</Link>
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
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" 
                        value={password} onChange={this.handleChange}
                        id="password" placeholder="Password" />
                    </div>

                    <p>
                        <Link to="/password-reset">Forgot your password?</Link>
                    </p>

                    <div className="form-group">
                        <input type="checkbox" />Remember me
                    </div>

                    <div className="form-group">
                        <button className="btn btn-success form-control">Log in</button>
                    </div>
                </form>
            </article>
        </section>
            
            </Fragment>
          );
    }
}
 
export default withRouter(Login);