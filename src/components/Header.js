import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-secondary pt-2 pb-3 fw-bold">
        <nav class="text-style navbar navbar-expand-lg">
          <Link to="/" class="navbar-brand fs-3 text-white" href="#Anchor">
            E-COMMERCE
          </Link>
          <button
            class="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapsFe navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">ProductList </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
