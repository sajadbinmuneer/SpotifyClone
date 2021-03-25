import React, {Component, Fragment } from 'react' //rafce
import "./Auth.css";
import firebase from "../../firebase";
import { toast } from "react-toastify";
import md5 from "md5";

class Signup extends Component {
    state = { 
        email:"",
        conformEmail:"",
        password:"",
        profile:"",
        dob:"",
        gender:"",
     };
     handleChange = e =>{
        this.setState({[e.target.name]:e.target.value});
    };
     handleSubmit =async e =>{
         e.preventDefault();
         try {
            let{email,conformEmail,password,profile,dob,gender}=  this.state;
            console.log([email,conformEmail,password,profile,dob,gender]);
            //auth
            let userData=await firebase.auth().createUserWithEmailAndPassword(email, password);
            userData.user.sendEmailVerification();
            let message=`Verification mail has been sent to ${email} please conform it and login`;
            toast.success(message);
            console.log(userData);
            //gavathar
            await userData.user.updateProfile({
                displayName:profile,
                photoURL:`https://www.gravatar.com/avatar/${md5(email)}?d=identicon`
            });
            console.log(userData);
            //store information into firebase real time database
            await firebase.database().ref().child("users/" +userData.user.uid).set({
                username:userData.user.displayName,
                email:userData.user.email,
                photoURL:userData.user.photoURL,
                profile:userData.user.profile,
                registationDate:new Date().toLocaleDateString()
            } )
         } catch (err) {
             console.log(err);
             toast.error(err.message);
         }
     }
     
    render() { 
        let {email,conformEmail,password,profile,dob,gender}=this.state;
        return (
            <Fragment>
            <section id="authsection" className="col-md-4 mx-auto card my-2">
            <article className="card-body">
            <h4>Sign up with your E-mail Address</h4>
            <form onSubmit={this.handleSubmit}>

            <div className="form-group">
            <label>what's your email?</label>
            <input className="form-control" type="email" 
            name="email" value={email}
            onChange={this.handleChange}
            placeholder="Enter your email."/>
            </div>

            <div className="form-group">
            <label>Conform your email</label>
            <input className="form-control" type="email" 
            name="conformEmail" value={conformEmail}
            onChange={this.handleChange}
            placeholder="Enter your email again."/>
            </div>
            
            <div className="form-group">
            <label>Create a password</label>
            <input className="form-control" type="password"
            name="password" value={password} 
            onChange={this.handleChange}
            placeholder="Create a password."/>
            </div>
            
            <div className="form-group">
            <label>What should we call you?</label>
            <input className="form-control" type="text" 
            name="profile" value={profile}
            onChange={this.handleChange}
            placeholder="Enter a profile name."/>
            </div>
            
            <div>
            <h6>This appears on your profile.</h6>
            </div>

            <div className="form-group">
            <label>What's your date of birth?</label>
            <input className="form-control" type="date" 
            onChange={this.handleChange}
            name="dob" value={dob}/>
            </div>

            <div className="form-group">
            <label>What's your gender?</label>
            <input type="radio" name="gender"
            onChange={this.handleChange}
            value="male" />
            Male
            <input type="radio" name="gender"
            onChange={this.handleChange}
            value="female" />
            Female
            <input type="radio" name="gender"
            onChange={this.handleChange}
            name="gender" value={gender}/>
            Non-binary
            </div>

            <div className="form-group">
            <input type="checkbox" name="checkdata"/>
            Share my registration data with Spotify's content providers for marketing purposes.
            </div>

            <p>By clicking on Sign up, you agree to Spotify's  
            <a href="/"> Terms and Conditions of Use.</a></p>
            <br/>
            <p>To learn more about how Spotify collects, uses, shares and protects your personal data please read Spotify's 
            <a href="/"> Privacy Policy.</a></p>   

            <div className="form-group">
            <button className="btn btn-success btn-block">
            Sign Up</button>
            </div>
            </form>
            </article>
            </section>
            </Fragment>
          );
    }
}
 
export default Signup;