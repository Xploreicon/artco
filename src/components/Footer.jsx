import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center">
        <div className="d-flex align-items-center justify-content-center pb-5">
          <div className="col-md-6">
           
            <div className="social-icons">
              <a className="text-dark fs-4 m-2" href="https://www.instagram.com/p/C_Afs8VsHtn/?igsh=MTlubnc2cjIxbXJvYQ==" target="_blank" rel="noreferrer">
                <i className="fa fa-twitter"></i>
              </a>
              <a className="text-dark fs-4 m-2" href="https://www.instagram.com/invites/contact/?igsh=ppza4s9pau49&utm_content=vevmi35" target="_blank" rel="noreferrer">
                <i className="fa fa-instagram"></i>
              </a>
              <a className="text-dark fs-4 m-2" href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
                <i className="fa fa-linkedin"></i>
                <p className="mb-3 mb-md-0">Made with ❤️ by {" "}
              <a href="https://spur.ng" className="text-decoration-underline text-dark fs-5" target="_blank" rel="noreferrer">Spur</a>
            </p>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
