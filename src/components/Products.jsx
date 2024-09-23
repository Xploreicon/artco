import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const mockData = [
      {
        id: 1,
        title: "Oxygen Concentrator",
        description: "Double 5 litres omnifier oxygen concentrator",
        price: 450000,
        category: "Medical Equipment",
        image: "https://i.pinimg.com/564x/ba/e7/6d/bae76df3ad6f37a6702f13de02018465.jpg",
      },
      {
        id: 2,
        title: "30 by 30 Surgical Mesh",
        description: "Surgical mesh is a screen-like material that is used as a reinforcement for tissue or bone.",
        price: 33000,
        category: "Surgicals",
        image: "https://i.pinimg.com/564x/9d/03/8e/9d038e203a5d4e125b2b9bdad59bd052.jpg",
      },
      {
        id: 3,
        title: "Accu-chek Active Meter",
        description: "It is a small sample size. 7-, 14-, and 90-day average memory with capacity for 500 results and USB.",
        price: 19000,
        category: "Medical Equipment",
        image: "https://i.pinimg.com/564x/77/20/d6/7720d61dd8fc434b09e60508395f0766.jpg",
      },
      {
        id: 4,
        title: "Sanitary Counting Tray",
        description: "A pill counting tray is a quick and sanitary way to handle and count pills.",
        price: 3000,
        category: "Medical Equipment",
        image: "https://i.pinimg.com/564x/e1/87/23/e187238340b9a1c112ff05f01feb17e1.jpg",
      },
      {
        id: 5,
        title: "Oxygen Cylinder",
        description: "Oxygen tanks are large metal cylinders that store oxygen under pressure (compressed oxygen).",
        price: 68000,
        category: "Medical Equipment",
        image: "https://i.pinimg.com/564x/17/a4/f8/17a4f862c27992f263eb358e7db321b9.jpg",
      },
      {
        id: 6,
        title: "Top Oxygen Regulator",
        description: "The regulator reduces, controls, and measures the flow of oxygen to the patient.",
        price: 18000,
        category: "Medical Equipment",
        image: "https://i.pinimg.com/564x/c7/be/dd/c7bedd5bba77befd820a1d24b8d74703.jpg",
      },
      {
        id: 7,
        title: "2D Siemens Sonoline Prima Ultrasound Machine",
        description: "Ultrasound Machine available with two probes",
        price: 2000000,
        category: "Medical Equipment",
        image: "https://pictures-nigeria.jijistatic.net/150710205_NjIwLTEyNDAtZTI3NmYwYjQzMQ.webp",
      },
      {
        id: 8,
        title: "Quality major theater operating table with hydraulic ",
        description: "Theater Operating Table",
        price: 1200000,
        category: "Medical Equipment",
        image: "https://d36h8weby5prlb.cloudfront.net/wp-content/uploads/2021/05/OT-Table.jpg",
      },
      {
        id: 9,
        title: "EDAN IM50 Patient Monitor ",
        description: "EDAN IM50 is a new generation patient monitor providing solution for clinic of all types.",
        price: 650000,
        category: "Medical Equipment",
        image: "https://i.ytimg.com/vi/K_nG4BBOpoU/mqdefault.jpg",
      },
      {
        id: 10,
        title: "Dynamic ECG ",
        description: "FhDynamic ECG Systems adopt 3-lead, which can continuously record ECG waveform for 24-hour and analyze ECG waveform by the PC software. It is applicable for use in medical institution and community.",
        price: 350000,
        category: "Medical Equipment",
        image: "https://djmedquip.co.za/wp-content/uploads/2017/06/Holter-ECG-TLC5000-Dynamic-ECG-System_1.jpg",
      },
      {
        id: 11,
        title: "Foldable Stretcher",
        description: "The folding emergency stretcher is ideal for moving the patients to hospitals or ambulance. It can be used by the rescue team in case of fire, flood and other emergency crises. The stretcher bed includes one of the foldable support rails for collapsible storage of the stretcher bed.",
        price: 45000,
        category: "Medical Equipment",
        image: "https://m.media-amazon.com/images/I/51v59WpaAKL._AC_UF894,1000_QL80_.jpg",
      },
      {
        id: 12,
        title: "Biohazard Specimen Bag",
        description: "TThese biohazard bags are designed for the safe transportation of specimens and documentation. Each bag is printed with the biohazard symbol and offers checkmark boxes to indicate special handling instructions. 2 mil gauge polyethylene (PE)Zipper closure allows repeated access to specimenImprinted withbiohazardsymbolComplies with OSHA and NCCLS guidelines",
        price: 10000,
        category: "Medical Equipment",
        image: "https://globalscientific.co.uk/cdn/shop/products/drug-testing-kits-uk-biohazard-bag-with-large-document-pouch-28498463555635.jpg?v=1652975869",
      },
      {
        id: 13,
        title: "Digital Water Bath",
        description: "TWater baths is an instrument that is used in a laboratory to heat samples in constant temperature for a long period of time. It consists of a thermostatically controlled container filled with water. Water bath uses include melting the substrate, warming reagents or incubation of cell culture",
        price: 150000,
        category: "Medical Equipment",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAEWxYrDSA1Y2bAVWb1eXXEXcrf_Umj5jNvw&s",
      },
      {
        id: 14,
        title: "Elixcare UK Lab Thermostat Incubator 50 Litres DNP-9052 ",
        description: "Brand New Elixcare UK Lab Thermostat Incubator 50L.Model: DNP-9052A thermostat is used to set the desired temperature of the incubator. After the desired temperature is reached, the thermostat automatically maintains the incubator at that temperature until the temperature is changed again.",
        price: 400000,
        category: "Medical Equipment",
        image: "https://bsg-i.nbxc.com/product/93/a0/72/5ee6c1645e9d0312ba8dba1207.jpg@95Q.webp",
      },
      {
        id: 15,
        title: "DRUG CABINET",
        description: "This Is A Brand New Top Quality Drug Cabinet That Serves As A Cupboard for the storage of drugs in healthcare Premises.",
        price: 180000,
        category: "Medical Equipment",
        image: "https://www.ima-x.com/1929-large_default/lockable-drug-cabinet-mri.jpg",
      },
      {
        id: 16,
        title: "Brand New 18 Litres Stainless Autoclave",
        description: "The capacity of this stainless autoclave is 18 Litres, which allows it to hold many tools and packages in one sterilization process.Autoclaves operate at high temperature and pressure in order to kill microorganisms and spores. They are used to decontaminate certain biological waste and sterilize media, instruments and lab ware.",
        price: 230000,
        category: "Medical Equipment",
        image: "https://m.media-amazon.com/images/I/61o8Zqcy7TL.jpg",
      },
      {
        id: 17,
        title: "WHEEL CHAIR",
        description: "Quality self-propelled wheelchair",
        price: 105000,
        category: "Medical Equipment",
        image: "https://i5.walmartimages.com/seo/Medline-Comfortable-Folding-Wheelchair-with-Swing-Back-Desk-Length-Arms-and-Swing-Away-Footrests-18-W-x-16X-D-Seat_a8239eb2-060d-474e-845e-dddb2d1b6375.ceed2477f960710d2c94a7b10f68854b.jpeg",
      },
      {
        id: 18,
        title: "12 Channel Electrocardiograph (ECG) Machine ",
        description: "      An electrocardiogram (ECG ) is a quick test to check the heartbeat. It records the electrical signals in the heart. Test results can help diagnose heart attacks and irregular heartbeats, called arrhythmias.",
        price: 950000,
        category: "Medical Equipment",
        image: "https://m.media-amazon.com/images/I/41E1aBOIDPL._AC_UF1000,1000_QL80_.jpg",
      },
      {
        id: 19,
        title: "Spectrum Lab 23A Spectrophotometer",
        description: "Spectrophotometer provide precise color analysis for solid, powder, paste, grain & liquids",
        price: 600000,
        category: "Medical Equipment",
        image: "https://m.media-amazon.com/images/I/41E1aBOIDPL._AC_UF1000,1000_QL80_.jpg",
      },
      {
        id: 20,
        title: "Digital Baby Scale",
        description: "Quality digital baby scale for measuring baby's weight and height ",
        price: 45000,
        category: "Medical Equipment",
        image: "https://www.medline.com/media/catalog/sku/MDR/MDR155922_PRI01.JPG",
      },
      {
        id: 21,
        title: "Brand New 2 Steps Instrument Trolley",
        description: "Brand New 2 Steps Instrument Trolley.",
        price: 55000,
        category: "Medical Equipment",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/2/392441049/RH/EB/QF/1758212/two-steps-trolley.jpg",
      },
      {
        id: 22,
        title: "Diathermy Machine",
        description: "Diathermy is a treatment that provides deep heat to your tissues. It helps relax muscles and joints, reduce swelling and improve blood flow. Diathermy uses radio and sound waves to warm up the tissues beneath your skin",
        price: 1300000,
        category: "Medical Equipment",
        image: "https://www.bplmedicaltechnologies.com/distributor/upload/product/image/thumbnails/39/Surgix-VS1-2-1615207446.png",
      },
      {
        id: 23,
        title: "Blood Donor Chair",
        description: "Brand New Blood Donor Chair.The chair is very comfortable for blood donor. It provides support to the body at various crical points. The Chair can easily be folded and stack on trolleys when not in use.",
        price: 250000,
        category: "Medical Equipment",
        image: "https://www.medik-medical.com/data/watermark/20190612/5d00929a1aec9.jpg",
      },
      {
        id: 24,
        title: "3 Crank ABS Hospital Bed",
        description: "Three-Crank Abs Manual Hospital Bed This manual hospital bed has three crank handles—the crank system is located at the foot end of the bed. This allows the mattress to raise and lower the upper body, legs and bed height.",
        price: 1000000,
        category: "Medical Equipment",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ5cAWTmR_RXrwVB90HcEUtdywg9vqpJSmDQ&s",
      }
    ];

    setData(mockData);
    setFilter(mockData);
    setLoading(false);
  }, []);

  const Loading = () => (
    <>
      <div className="col-12 py-5 text-center">
        <Skeleton height={40} width={560} />
      </div>
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

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category.toLowerCase() === cat.toLowerCase());
    setFilter(updatedList);
  };

  const ShowProducts = () => (
    <>
      <div className="buttons text-center py-5">
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setFilter(data)}>All</button>
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("medical equipment")}>Medical Equipment</button>
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("surgicals")}>Surgicals</button>
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("pharmaceuticals")}>Pharmaceuticals</button>
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("radiology")}>Radiology</button>
      </div>

      {filter.map((product) => (
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
    </>
  );

  return (
    <div className="container my-3 py-3">
      <div className="row">
        <div className="col-12">
          <h2 className="display-5 text-center">Products</h2>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
};

export default Products;
