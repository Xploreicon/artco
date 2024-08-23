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
      }
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
