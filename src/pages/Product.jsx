import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { Footer, Navbar } from "../components";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    setLoading(true);
    setLoading2(true);

    const allProducts = [
      {
        id: 1,
        title: "Oxygen Concentrator",
        category: "Medical Equipment",
        rating: { rate: 4.5 },
        price: 450000,
        description: "Double 5 litres omnifier oxygen concentrator.",
        image: "https://i.pinimg.com/564x/ba/e7/6d/bae76df3ad6f37a6702f13de02018465.jpg",
      },
      {
        id: 2,
        title: "30 by 30 Surgical Mesh",
        category: "Surgicals",
        rating: { rate: 4.3 },
        price: 33000,
        description: "Surgical mesh is a screen-like material that is used as a reinforcement for tissue or bone.",
        image: "https://i.pinimg.com/564x/9d/03/8e/9d038e203a5d4e125b2b9bdad59bd052.jpg",
      },
      {
        id: 3,
        title: "Accu-chek Active Meter",
        category: "Medical Equipment",
        rating: { rate: 4.4 },
        price: 19000,
        description: "It is a small sample size. 7-, 14-, and 90-day average memory with capacity for 500 results and USB.",
        image: "https://i.pinimg.com/564x/77/20/d6/7720d61dd8fc434b09e60508395f0766.jpg",
      },
      {
        id: 4,
        title: "Sanitary Counting Tray",
        category: "Medical Equipment",
        rating: { rate: 4.1 },
        price: 3000,
        description: "A pill counting tray is a quick and sanitary way to handle and count pills.",
        image: "https://i.pinimg.com/564x/e1/87/23/e187238340b9a1c112ff05f01feb17e1.jpg",
      },
      {
        id: 5,
        title: "Oxygen Cylinder",
        category: "Medical Equipment",
        rating: { rate: 4.5 },
        price: 68000,
        description: "Oxygen tanks are large metal cylinders that store oxygen under pressure (compressed oxygen).",
        image: "https://i.pinimg.com/564x/17/a4/f8/17a4f862c27992f263eb358e7db321b9.jpg",
      },
      {
        id: 6,
        title: "Top Oxygen Regulator",
        category: "Medical Equipment",
        rating: { rate: 4.6 },
        price: 18000,
        description: "The regulator reduces, controls, and measures the flow of oxygen to the patient.",
        image: "https://i.pinimg.com/564x/c7/be/dd/c7bedd5bba77befd820a1d24b8d74703.jpg",
      },
      {
        id: 7,
        title: "2D Siemens Sonoline Prima Ultrasound Machine",
        category: "Medical Equipment",
        rating: { rate: 4.5 },
        price: 2000000,
        description: "Ultrasound Machine available with two probes",
        image: "https://pictures-nigeria.jijistatic.net/150710205_NjIwLTEyNDAtZTI3NmYwYjQzMQ.webp",
      },
      {
        id: 8,
        title: "Quality major theater operating table with hydraulic",
        category: "Medical Equipment",
        rating: { rate: 4.5 },
        price: 1200000,
        description: "Theater Operating Table",
        image: "https://d36h8weby5prlb.cloudfront.net/wp-content/uploads/2021/05/OT-Table.jpg",
      },
      {
        id: 9,
        title: "EDAN IM50 Patient Monitor",
        category: "Medical Equipment",
        rating: { rate: 4.5 },
        price: 650000,
        description: "EDAN IM50 is a new generation patient monitor providing solution for clinic of all types.",
        image: "https://i.ytimg.com/vi/K_nG4BBOpoU/mqdefault.jpg",
      },
      {
        id: 10,
        title: "Dynamic ECG",
        category: "Medical Equipment",
        rating: { rate: 4.5 },
        price: 350000,
        description: "FhDynamic ECG Systems adopt 3-lead, which can continuously record ECG waveform for 24-hour and analyze ECG waveform by the PC software.",
        image: "https://djmedquip.co.za/wp-content/uploads/2017/06/Holter-ECG-TLC5000-Dynamic-ECG-System_1.jpg",
      },
      {
        id: 11,
        title: "Foldable Stretcher",
        category: "Medical Equipment",
        rating: { rate: 4.5 },
        price: 45000,
        description: "The folding emergency stretcher is ideal for moving the patients to hospitals or ambulance.",
        image: "https://m.media-amazon.com/images/I/51v59WpaAKL._AC_UF894,1000_QL80_.jpg",
      },
      {
        id: 12,
        title: "Biohazard Specimen Bag",
        category: "Medical Equipment",
        rating: { rate: 4.5 },
        price: 10000,
        description: "These biohazard bags are designed for the safe transportation of specimens and documentation.",
        image: "https://globalscientific.co.uk/cdn/shop/products/drug-testing-kits-uk-biohazard-bag-with-large-document-pouch-28498463555635.jpg?v=1652975869",
      },
      {
        id: 13,
        title: "Digital Water Bath",
        category: "Medical Equipment",
        rating: { rate: 4.5 },
        price: 150000,
        description: "Water baths are used in laboratories to heat samples in constant temperature for a long period of time.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAEWxYrDSA1Y2bAVWb1eXXEXcrf_Umj5jNvw&s",
      },
      {
        id: 14,
        title: "Elixcare UK Lab Thermostat Incubator 50 Litres DNP-9052",
        category: "Medical Equipment",
        rating: { rate: 4.5 },
        price: 400000,
        description: "Brand New Elixcare UK Lab Thermostat Incubator 50L.",
        image: "https://bsg-i.nbxc.com/product/93/a0/72/5ee6c1645e9d0312ba8dba1207.jpg@95Q.webp",
      },
      {
        id: 15,
        title: "DRUG CABINET",
        category: "Medical Equipment",
        rating: { rate: 4.5 },
        price: 180000,
        description: "This is a brand new top quality drug cabinet for the storage of drugs in healthcare premises.",
        image: "https://www.ima-x.com/1929-large_default/lockable-drug-cabinet-mri.jpg",
      },
      {
        id: 16,
        title: "Brand New 18 Litres Stainless Autoclave",
        category: "Medical Equipment",
        rating: { rate: 4.5 },
        price: 230000,
        description: "The capacity of this stainless autoclave is 18 Litres for sterilizing instruments and lab ware.",
        image: "https://m.media-amazon.com/images/I/61o8Zqcy7TL.jpg",
      },
      {
        id: 17,
        title: "WHEEL CHAIR",
        category: "Medical Equipment",
        rating: { rate: 4.5 },
        price: 105000,
        description: "Quality self-propelled wheelchair.",
        image: "https://i5.walmartimages.com/seo/Medline-Comfortable-Folding-Wheelchair-with-Swing-Back-Desk-Length-Arms-and-Swing-Away-Footrests-18-W-x-16X-D-Seat_a8239eb2-060d-474e-845e-dddb2d1b6375.ceed2477f960710d2c94a7b10f68854b.jpeg",
      },
      {
        id: 18,
        title: "12 Channel Electrocardiograph (ECG) Machine",
        category: "Medical Equipment",
        rating: { rate: 4.5 },
        price: 950000,
        description: "An electrocardiogram (ECG) records electrical signals in the heart for diagnosis of heart issues.",
        image: "https://m.media-amazon.com/images/I/41E1aBOIDPL._AC_UF1000,1000_QL80_.jpg",
      },
      {
        id: 19,
        title: "Spectrum Lab 23A Spectrophotometer",
        category: "Medical Equipment",
        rating: { rate: 4.5 },
        price: 600000,
        description: "Spectrophotometer provides precise color analysis for solid, powder, paste, grain & liquids.",
        image: "https://www.microlit.us/wp-content/uploads/2019/12/Spectrophotometers_Microlit-1536x1024.jpg",
      },
      {
        id: 20,
        title: "Digital Baby Scale",
        category: "Medical Equipment",
        rating: { rate: 4.5 },
        price: 45000,
        description: "Quality digital baby scale for measuring baby's weight and height.",
        image: "https://www.medline.com/media/catalog/sku/MDR/MDR155922_PRI01.JPG",
      },
      {
        id: 21,
        title: "Brand New 2 Steps Instrument Trolley",
        category: "Medical Equipment",
        rating: { rate: 4.5 },
        price: 55000,
        description: "Brand New 2 Steps Instrument Trolley.",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/2/392441049/RH/EB/QF/1758212/two-steps-trolley.jpg",
      },
      {
        id: 22,
        title: "Diathermy Machine",
        category: "Medical Equipment",
        rating: { rate: 4.5 },
        price: 1300000,
        description: "Diathermy is a treatment that provides deep heat to your tissues. It helps relax muscles and joints, reduce swelling and improve blood flow. Diathermy uses radio and sound waves to warm up the tissues beneath your skin.",
        image: "https://www.bplmedicaltechnologies.com/distributor/upload/product/image/thumbnails/39/Surgix-VS1-2-1615207446.png",
      },
      {
        id: 23,
        title: "Blood Donor Chair",
        category: "Medical Equipment",
        rating: { rate: 4.5 },
        price: 250000,
        description: "Brand New Blood Donor Chair. The chair is very comfortable for blood donors. It provides support to the body at various critical points. The chair can easily be folded and stacked on trolleys when not in use.",
        image: "https://www.medik-medical.com/data/watermark/20190612/5d00929a1aec9.jpg",
      },
      {
        id: 24,
        title: "3 Crank ABS Hospital Bed",
        category: "Medical Equipment",
        rating: { rate: 4.5 },
        price: 1000000,
        description: "Three-Crank ABS Manual Hospital Bed. This manual hospital bed has three crank handles—the crank system is located at the foot end of the bed. This allows the mattress to raise and lower the upper body, legs, and bed height.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ5cAWTmR_RXrwVB90HcEUtdywg9vqpJSmDQ&s",
      },
    ];

    const foundProduct = allProducts.find((p) => p.id === parseInt(id));
    setProduct(foundProduct);
    setLoading(false);

    if (foundProduct) {
      const relatedProducts = allProducts.filter(
        (p) =>
          p.category === foundProduct.category && p.id !== foundProduct.id
      );
      setSimilarProducts(relatedProducts);
    }
    setLoading2(false);
  }, [id]);

  const Loading = () => (
    <>
      <div className="col-md-6">
        <Skeleton height={600} />
      </div>
      <div className="col-md-6">
        <Skeleton height={50} width={300} />
        <Skeleton height={75} />
        <Skeleton height={25} width={150} />
        <Skeleton height={50} />
        <Skeleton height={150} />
        <Skeleton height={50} width={100} />
        <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
      </div>
    </>
  );

  const Loading2 = () => (
    <>
      <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
        <Skeleton height={592} />
      </div>
      <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
        <Skeleton height={592} />
      </div>
      <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
        <Skeleton height={592} />
      </div>
    </>
  );

  const ShowProduct = () => (
    <>
      <div className="col-md-6">
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <img
            src={product.image}
            alt={product.title}
            height="600px"
            width="600px"
            className="card-img-top"
          />
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'rgba(255, 255, 255, 0.5)',
            fontSize: '2rem',
            fontWeight: 'bold',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
            pointerEvents: 'none',
          }}>
            artcosciences
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4 className="text-uppercase text-black-50">{product.category}</h4>
        <h1 className="display-5">{product.title}</h1>
        <p className="lead">
          Rating {product.rating?.rate}{" "}
          <i className="fa fa-star"></i>
        </p>
        <h3 className="display-6 fw-bold my-4">
          ₦{product.price?.toLocaleString()}
        </h3>
        <p className="lead">{product.description}</p>
        <button
          className="btn btn-dark m-1"
          onClick={() => addProduct(product)}
        >
          Add to Cart
        </button>
        <Link to="/cart" className="btn btn-dark m-1">
          Go to Cart
        </Link>
      </div>
    </>
  );

  const ShowSimilarProducts = () => (
    <>
      <div className="buttons text-center pt-5">
        <h4 className="fw-bold text-center">Similar Products</h4>
        <div className="row">
          <Marquee pauseOnHover speed={30} gradient={false}>
            {similarProducts.map((product) => (
              <div key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
                <div className="card text-center h-100">
                  <div style={{ position: 'relative', display: 'inline-block' }}>
                    <img
                      className="card-img-top p-3"
                      src={product.image}
                      alt={product.title}
                      height={300}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      color: 'rgba(255, 255, 255, 0.5)',
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
                      pointerEvents: 'none',
                    }}>
                      artcosciences
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{product.title.substring(0, 12)}...</h5>
                    <p className="card-text">{product.description.substring(0, 90)}...</p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item lead">₦{product.price.toLocaleString()}</li>
                  </ul>
                  <div className="card-body">
                    <Link to={`/product/${product.id}`} className="btn btn-dark m-1">
                      Buy Now
                    </Link>
                    <button className="btn btn-dark m-1" onClick={() => addProduct(product)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </>
  );

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <div className="row">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
      {loading2 ? <Loading2 /> : <ShowSimilarProducts />}
      <Footer />
    </>
  );
};

export default Product;
