import React, {useState} from "react";

// Estilo do Site //
import "../global.css";

// Imagens do Site //
import IconFacebook from "../../src/img/face-white.svg";
import IconTwitter from "../../src/img/tt-white.svg";
import IconInstagram from "../../src/img/insta-white.svg";
import IconLinkedin from "../../src/img/linkedin-white.svg";
import IconEndereco from "../../src/img/end-white.svg";
import IconEmail from "../../src/img/email-white.svg";

export default function Footer() {
  
  // Formulário de cadastro do e-mail do Site //
  const [email, setEmail] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    alert("Cadastro concluido");
  }
  return (
    <footer className="mt-5 background-color-primary background-color-primary-border-top">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-uppercase text-white my-5 fw-bold text-center">
              Você pode SalvAR O mUNDO!
            </h1>
          </div>
        </div>
        <div className="row p-5 row-cols-1 row-cols-md-2">
          <div className="col">
            <h3 className="text-white my-5 fw-bold text-uppercase">
              Informações
            </h3>
            <p className="text-white my-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <img src={IconFacebook} alt="facebook" className="img-fluid m-2" />
            <img src={IconTwitter} alt="twitter" className="img-fluid m-2" />
            <img
              src={IconInstagram}
              alt="instagram"
              className="img-fluid m-2"
            />
            <img src={IconLinkedin} alt="linkedin" className="img-fluid m-2" />
          </div>
          <div className="col p-3 d-flex justify-content-md-end">
            <div className="row-cols-md-1">
              <h3 className="text-white my-5 fw-bold text-uppercase">
                Contato
              </h3>
              <div className="text-white py-2 mt-5 mt-lg-4">
                <img
                  src={IconEndereco}
                  alt="Icone endereço"
                  className="img-fluid p-1"
                />
                endereço
              </div>
              <div className="text-white py-2 mt-2 mt-lg-2">
                <img
                  src={IconEmail}
                  alt="Icone e-mail"
                  className="img-fluid p-1"
                />
                Unaeco@unaeco.com
              </div>
              <form onSubmit={handleInputChange}>
                <input
                  type="e-mail"
                  className="p-3 flex-grow-1 my-3"
                  placeholder="Digite seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="row">
                  <div className="col">
                    <button className="btn btn-success px-4" type="submit">
                      Inscrever
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col mx-3 mt-5 d-flex justify-content-between">
            <div>
              <p className="text-white text-uppercase">
                Todos os direitos reservados ©
              </p>
            </div>
            <div className="">
              <p className="text-white text-uppercase">
                politíca de privacidade
                <span className="px-0 px-md-3">termos de uso</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
