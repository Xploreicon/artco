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
