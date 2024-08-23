import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { Link } from "react-router-dom";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const productData = [
    {
      id: 1,
      title: "Oxygen Concentrator",
      price: 450000,
    },
    {
      id: 2,
      title: "30 by 30 Surgical Mesh",
      price: 33000,
    },
    {
      id: 3,
      title: "Accu-chek Active Meter",
      price: 19000,
    },
    {
      id: 4,
      title: "Sanitary Counting Tray",
      price: 3000,
    },
    {
      id: 5,
      title: "Oxygen Cylinder",
      price: 68000,
    },
    {
      id: 6,
      title: "Top Oxygen Regulator",
      price: 18000,
    },
  ];

  const getProductPrice = (id) => {
    const product = productData.find((product) => product.id === id);
    return product ? product.price : 0;
  };

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">Your Cart is Empty</h4>
            <Link to="/" className="btn  btn-outline-dark mx-4">
              <i className="fa fa-arrow-left"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const addItem = (product) => {
    dispatch(addCart(product));
  };

  const removeItem = (product) => {
    dispatch(delCart(product));
  };

  const ShowCart = () => {
    let subtotal = 0;
    let shipping = 1000; // Shipping cost in Naira
    let totalItems = 0;

    state.map((item) => {
      const itemPrice = getProductPrice(item.id);
      subtotal += itemPrice * item.qty;
      totalItems += item.qty;
      return null;
    });

    return (
      <>
        <section className="h-100 gradient-custom">
          <div className="container py-5">
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-8">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Item List</h5>
                  </div>
                  <div className="card-body">
                    {state.map((item) => (
                      <div key={item.id}>
                        <div className="row d-flex align-items-center">
                          <div className="col-lg-3 col-md-12">
                            <div className="bg-image rounded" data-mdb-ripple-color="light">
                              <img src={item.image} alt={item.title} width={100} height={75} />
                            </div>
                          </div>
                          <div className="col-lg-5 col-md-6">
                            <p><strong>{item.title}</strong></p>
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                              <button className="btn px-3" onClick={() => removeItem(item)}>
                                <i className="fas fa-minus"></i>
                              </button>
                              <p className="mx-5">{item.qty}</p>
                              <button className="btn px-3" onClick={() => addItem(item)}>
                                <i className="fas fa-plus"></i>
                              </button>
                            </div>
                            <p className="text-start text-md-center">
                              <strong>
                                <span className="text-muted">{item.qty}</span> x ₦{getProductPrice(item.id).toLocaleString()}
                              </strong>
                            </p>
                          </div>
                        </div>
                        <hr className="my-4" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-header py-3 bg-light">
                    <h5 className="mb-0">Order Summary</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Products ({totalItems})<span>₦{Math.round(subtotal).toLocaleString()}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        Shipping<span>₦{shipping.toLocaleString()}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div><strong>Total amount</strong></div>
                        <span><strong>₦{Math.round(subtotal + shipping).toLocaleString()}</strong></span>
                      </li>
                    </ul>
                    <Link to="/checkout" className="btn btn-dark btn-lg btn-block">
                      Go to checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Cart</h1>
        <hr />
        {state.length > 0 ? <ShowCart /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
