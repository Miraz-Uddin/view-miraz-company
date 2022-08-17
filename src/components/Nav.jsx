import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <h1 className="logo mr-auto">
            <Link to="/">
              <span>Com</span>pany
            </Link>
          </h1>
          {/* <!-- Uncomment below if you prefer to use an image logo --> */}
          {/* <a href="index.html" className="logo mr-auto"><img src={`${import.meta.env.VITE_PUBLIC_URL}/assets/img/logo.png`} alt="" className="img-fluid"/></a> */}

          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>

              <li className="drop-down">
                <NavLink to="about">About</NavLink>
                <ul>
                  <li>
                    <NavLink to="about">About Us</NavLink>
                  </li>
                  <li>
                    <NavLink to="team">Team</NavLink>
                  </li>
                  <li>
                    <NavLink to="create/team">Member Add</NavLink>
                  </li>
                  <li>
                    <NavLink to="testimonials">Testimonials</NavLink>
                  </li>
                  {/* If You want a deeper level drop down, uncomment below */}
                  {/* <li className="drop-down">
                    <a href="#">Deep Drop Down</a>
                    <ul>
                      <li>
                        <a href="#">Deep Drop Down 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 5</a>
                      </li>
                    </ul>
                  </li> */}
                </ul>
              </li>
              <li>
                <NavLink to="services">Services</NavLink>
              </li>
              <li>
                <NavLink to="portfolio">Portfolio</NavLink>
              </li>
              <li>
                <NavLink to="pricing">Pricing</NavLink>
              </li>
              <li>
                <NavLink to="blogs">Blogs</NavLink>
              </li>
              <li>
                <NavLink to="contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
          {/* <!-- .nav-menu --> */}

          <div className="header-social-links">
            <a href="#" className="twitter">
              <i className="icofont-twitter"></i>
            </a>
            <a href="#" className="facebook">
              <i className="icofont-facebook"></i>
            </a>
            <a href="#" className="instagram">
              <i className="icofont-instagram"></i>
            </a>
            <a href="#" className="linkedin">
              <i className="icofont-linkedin"></i>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
