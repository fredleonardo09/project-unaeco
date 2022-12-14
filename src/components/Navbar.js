import React from "react";
import { NavLink } from "react-router-dom";

// Estilo do Site //
import "../global.css";

// Imagens do Site //
import Logo from "../img/logo-principal.svg";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark background-color-primary">
      <div className="container">
        <NavLink to="/">
          <img
            src={Logo}
            alt="logo-principal"
            className="img-fluid px-5 my-5"
          />
        </NavLink>
        <button
          className="navbar-toggler me-3 "
          style={{ marginLeft: "35px" }}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div
          className="collapse navbar-collapse align-items-center "
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex mx-auto mt-3 ">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link active text-center text-uppercase text-white me-2 link-warning "
                aria-current="page"
                activeClassName="active-link"
              >
                Início
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/Project"
                className="nav-link text-center text-uppercase text-white me-2 link-warning"
                activeClassName="active-link"
              >
                Saiba mais <br />
                sobre o <br />
                projeto
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/Collaboration"
                className="nav-link text-center text-uppercase text-white me-2 link-warning"
              >
                Parceiros
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/Form"
                className="nav-link text-center text-uppercase text-white me-4 link-warning"
              >
                Formulário
                <br />
                para
                <br />
                inscrição
              </NavLink>
            </li>
          </ul>
          <div className="nav-item d-flex justify-content-center ">
            <NavLink to="/Donation">
              <button className="btn btn-success text-center text-uppercase mt-md-3 px-3 px-md-2">
                doe agora
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
