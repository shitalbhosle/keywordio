import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const history = useNavigate();
  return (
    <div>
      <nav>
        <section className="navbar">
          <article className="logo">
            <h1>APP LOGO</h1>
          </article>
          <article className="nav-right">
            <h1
              className="dashboard"
              onClick={(e) => {
                history("/");
              }}>
              DASHBOARD
            </h1>

            <h1
              className="create-ads"
              onClick={(e) => {
                history("/cards");
              }}>
              CREATE ADS
            </h1>
          </article>
        </section>
      </nav>
    </div>
  );
};

export default Navbar;
