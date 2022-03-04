import React from "react";
// import {Link} from "react-router-dom";

function Footer(){
  return(
    <div className="footer car1 mt-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-7 col-sm-5 mt-5">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road<br/>
              Clear Water Bay, Kowloon<br/>
              HONG KONG<br/>
              <i className="fa fa-phone fa-lg"/>: +852 1234 5678<br/>
              <i className="fa fa-fax fa-lg"/>: +852 8765 4321<br/>
              <i className="fa fa-envelope fa-lg"/>:
              <a href="mailto:confusion@food.net">
                confusion@food.net
              </a>
            </address>
          </div>
          <div className="col-12 col-sm-4 align-self-center">
            <div className="text-center">
              <a className="btn btn-social-icon btn-google" href="https://google.com/+">
                <i className="fa fa-google-plus"/>
              </a>
              <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/profile.php?id=">
                <i className="fa fa-facebook"/>
              </a>
              <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/">
                <i className="fa fa-linkedin"/>
              </a>
              <a className="btn btn-social-icon btn-twitter" href="https://twitter.com/">
                <i className="fa fa-twitter"/>
              </a>
              <a className="btn btn-social-icon btn-google" href="https://youtube.com/">
                <i className="fa fa-youtube"/>
              </a>
              <a className="btn btn-social-icon" href="mailto:">
                <i className="fa fa-envelope-o"/>
              </a>
            </div>
          </div>
          <div className="col-auto">
            <p>© Copyright 2018 Ristorante Con Fusion</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
