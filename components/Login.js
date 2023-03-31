import React from "react";
import {FaTwitter,FaFacebookF,FaLinkedinIn} from "react-icons/fa"
import "./login.css"

export default function Login() {


    const [formStatus, setFormStatus] = React.useState('Submit Now')
    const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { email, password } = e.target.elements
    let conFom = {

      email: email.value,
      password: password.value,
    }
    console.log(conFom)
  }
  return (
    <div className="container mt-5">
      <h2 className="head1"><b>Log In Form</b></h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Email
          </label>
          <input className="form-control" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Password
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        
        <button className="btn" type="submit">
          {formStatus}
        </button><br></br>
        <p className="para1">Don't have an acount? Please login by your Facebook ID or Twitter ID or Google ID.</p>
        <div className="col-lg-4">
          <div className="team-member">
            
            <a className="btn btn-dark btn-social mx-2" id="btn1" href="#!" aria-label="Parveen Anand Twitter Profile"><i className="fab fa-twitter"><FaTwitter/></i></a>
            <a className="btn btn-dark btn-social mx-2" id="btn1" href="#!" aria-label="Parveen Anand Facebook Profile"><i className="fab fa-facebook-f"><FaFacebookF/></i></a>
            <a className="btn btn-dark btn-social mx-2" id="btn1" href="#!" aria-label="Parveen Anand LinkedIn Profile"><i className="fab fa-linkedin-in"><FaLinkedinIn/></i></a>
          </div>
        </div>
      </form>
    </div>
  )

}