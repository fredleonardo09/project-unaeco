import { Link } from 'react-router-dom'
import '../global.css'
import Logo from '../img/logo-principal.svg'


export default function Navbar(){
    return (
      <nav className="navbar navbar-expand-lg navbar-dark background-color-primary">
        <div className="container">
          <Link to="/">
            <img
              src={Logo}
              alt="logo-principal"
              className="img-fluid px-5 my-5"
            />
          </Link>
          <button
            className="navbar-toggler me-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex mx-auto mt-3">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active text-center text-uppercase text-white me-2"
                  aria-current="page"
                  
                >
                  Início
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/Project"
                  className="nav-link text-center text-uppercase text-white me-2"
                  
                >
                  Saiba mais <br />
                  sobre o <br />
                  projeto
                </Link>
              </li>

              
                <li className="nav-item">
                    
                  <Link to="/Collaboration"
                    className="nav-link text-center text-uppercase text-white me-2"
                    
                  >
                    Parceiros
                  </Link>
                </li>
              
              
                <li className="nav-item">
                  <Link to="/Form"
                    className="nav-link text-center text-uppercase text-white me-4"
                    
                  >
                    Formulário<br />
                    para<br />
                    inscrição
                  </Link>
                </li>
              
            </ul>
            <div className="nav-item d-flex justify-content-center ">
              <button className="btn btn-success text-center text-uppercase mt-md-2 px-4">
                doe agora
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
}