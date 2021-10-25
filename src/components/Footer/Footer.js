import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="container-fluide bg-dark p-4 mt-4">
            
        <div className="textfield"  id="footer">
                <h1>This is the best course ever</h1>
                <h3>Most of the ratings and comment are positive.</h3>
                <h4>If you feel good to comment, Please comment in below.</h4>
        </div>
               


               <div className="container login-form">

               <form>
                    <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-primary mt-4">Submit</button>
                </form>

                
               </div>

            <h5 className='copyright'  id="footer">© All Copyrights reserved by Abdur Rahman 2021.</h5>
            
        </div>


















    );
};

export default Footer;