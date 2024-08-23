import React from 'react';
import { Footer, Navbar } from "../components";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-justify">
          At Artco, we are dedicated to advancing the healthcare industry through cutting-edge pharmaceutical, surgical, and radiological medical laboratory equipment and technology. Our mission is to provide exceptional products and services that enhance the efficiency and effectiveness of medical diagnostics and treatments.
        </p>

        <h2 className="text-center py-4">Who We Are</h2>
        <p className="text-justify">
          Founded with a vision to revolutionize the medical equipment landscape, Artco has grown to become a leading provider of high-quality medical technology. Our team consists of industry experts and professionals who are passionate about delivering innovative solutions that meet the highest standards of excellence.
        </p>

        <h2 className="text-center py-4">Our Expertise</h2>
        <div className="row">
          <div className="col-md-4 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://i.pinimg.com/564x/96/b2/10/96b210a82bf2f8cd4a73f355b22da622.jpg" alt="Pharmaceuticals" height={160} />
              <div className="card-body">
                <h5 className="card-title text-justify">Pharmaceuticals</h5>
                <p className="card-text">We offer a comprehensive range of pharmaceutical products, including advanced medications and therapeutic solutions.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://i.pinimg.com/564x/be/8e/91/be8e911a303deafc41e886cf78078209.jpg" alt="Surgical Equipment" height={160} />
              <div className="card-body">
                <h5 className="card-title text-justify">Surgical Equipment</h5>
                <p className="card-text">Our selection of surgical tools and equipment supports a wide variety of procedures with precision, durability, and reliability.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://i.pinimg.com/564x/50/b1/e4/50b1e4a0028fe09f742e079f13495960.jpg" alt="Radiological Equipment" height={20} />
              <div className="card-body">
                <h5 className="card-title text-justify">Radiological Equipment</h5>
                <p className="card-text">We provide state-of-the-art radiological equipment that enhances diagnostic accuracy and patient care.</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-center py-4">Why Choose Artco?</h2>
        <ul>
          <li><strong>Innovation:</strong> We are committed to integrating the latest technological advancements into our product offerings.</li>
          <li><strong>Quality:</strong> Our products are sourced from reputable manufacturers and undergo rigorous quality control.</li>
          <li><strong>Customer Focus:</strong> We prioritize our customers’ needs and provide tailored solutions.</li>
          <li><strong>Support:</strong> Our dedicated support team is available to assist with inquiries and technical support.</li>
        </ul>

        <h2 className="text-center py-4">Our Commitment</h2>
        <p className="text-justify">
          At Artco, we believe in the power of technology to transform healthcare. We are committed to contributing to the well-being of patients and the success of medical professionals through our products and services.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
