import React from 'react';

const Home = () => {
  return (
    <>
      {/* Main Carousel */}
      <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./assets/main.png.jpg" className="d-block w-100" alt="Slide 1" style={{ objectFit: 'cover', height: '100vh' }} />
            <div className="carousel-caption d-none d-md-block">
              <h5>New Season Arrivals</h5>
              <p>This is a wider card with supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./assets/CityWindowMockup-Artco.jpg" className="d-block w-100" alt="Slide 2" style={{ objectFit: 'cover', height: '100vh' }} />
            <div className="carousel-caption d-none d-md-block" style={{ backgroundColor:'', color:'black'}}>
              <h5>Exclusive Collection</h5>
              <p>Explore our exclusive collection of the season's best products.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./assets/Artco-Office-Reception-Mock.jpg" className="d-block w-100" alt="Slide 3" style={{ objectFit: 'cover', height: '100vh' }} />
            <div className="carousel-caption d-none d-md-block">
              <h5>Special Discounts</h5>
              <p>Don't miss out on our special discounts available now.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Partner Companies Slider */}
      <div className="container my-5">
        <h2 className="text-center">Our Partners</h2>
        <div id="partnerCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="d-flex justify-content-around align-items-center">
                <img src="./assets/jumia.png" alt="Jumia Pharmacy" style={{ height: '80px', margin: '0 10px', objectFit: 'contain' }} />
                <img src="./assets/cornerstone.png" alt="Cornerstone Hospital" style={{ height: '40px', margin: '0 10px', objectFit: 'contain' }} />
                <img src="./assets/qualihealth.png" alt="Qualihealth" style={{ height: '80px', margin: '0 10px', objectFit: 'contain' }} />
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex justify-content-around align-items-center">
                <img src="./assets/drugstoc.png" alt="Drugstoc" style={{ height: '50px', margin: '0 10px', objectFit: 'contain' }} />
                <img src="./assets/mofmed.png" alt="Mofmed Medical Solutions Limited" style={{ height: '80px', margin: '0 10px', objectFit: 'contain' }} />
                <img src="./assets/jumia.png" alt="Jumia Pharmacy" style={{ height: '80px', margin: '0 10px', objectFit: 'contain' }} />
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex justify-content-around align-items-center">
                <img src="./assets/cornerstone.png" alt="Cornerstone Hospital" style={{ height: '40px', margin: '0 10px', objectFit: 'contain' }} />
                <img src="./assets/qualihealth.png" alt="Qualihealth" style={{ height: '80px', margin: '0 10px', objectFit: 'contain' }} />
                <img src="./assets/drugstoc.png" alt="Drugstoc" style={{ height: '50px', margin: '0 10px', objectFit: 'contain' }} />
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#partnerCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#partnerCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Buy Now, Pay Later Section */}
      <div className="container my-5">
        <h2 className="text-center">Artco is Faster, Easier, Less Evasive and Risk-Free</h2>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="card h-100" style={{ backgroundColor:'', color:''}}>
              <div className="card-body">
                <img className="card-img-top img-fluid" src="https://img.freepik.com/premium-vector/fast-delivery-truck-with-motion-lines-online-delivery-express-delivery-quick-move-fast-shipping-truck-apps-websites-cargo-van-moving-fast-chronometer-fast-distribution-service-24-7_435184-218.jpg" alt="Pharmaceuticals" height={160} />
                <i className="bi bi-credit-card-fill display-4 mb-3"></i>
                <h5 className="card-title">Free Shipping</h5>
                <p className="card-text">Enjoy shipping-free purchase without the n.</p>
                <button className="btn btn-primary mt-3">Shop Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100" style={{ backgroundColor:''}}>
              <div className="card-body">
                <img className="card-img-top img-fluid" src="https://nrsplus.com/wp-content/uploads/2019/02/integrate-cc-procvessing-1024x536.jpg" alt="Pharmaceuticals" height={160} />
                <i className="bi bi-shield-fill-check display-4 mb-5"></i>
                <h5 className="card-title">Secure Payments</h5>
                <p className="card-text">Our platform ensures secure and reliable payments with industry-leading encryption.</p>
                <button className="btn btn-primary mt-3">Shop Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100" style={{ backgroundColor:'', color:''}}>
              <div className="card-body">
                <img className="card-img-top img-fluid" src="https://www.paymentscardsandmobile.com/wp-content/uploads/2024/02/bnpl-or-buy-now-pay-later-message-on-computer-keyboard.jpg" alt="Pharmaceuticals" height={160} />
                <i className="bi bi-clock-fill display-4 mb-3"></i>
                <h5 className="card-title">Buy Now Pay Later (coming soon)</h5>
                <p className="card-text">Spread your payments over time with our flexible payment options.</p>
                <button className="btn btn-primary mt-3">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
