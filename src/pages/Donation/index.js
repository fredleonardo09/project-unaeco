
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { DonationContainer } from "./style";

import BannerAjudaroMundo from "../../img/banner-ajudar-o-mundo.svg"
import IconeDoar from "../../img/icone-brotar.svg"

export default function Donation() {
  return (
    <>
      <DonationContainer>
        <Navbar />
        <section className="my-5">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="text-center">
                  <img
                    src={BannerAjudaroMundo}
                    alt="noticia1"
                    className="img-fluid my-3 "
                  />
                </div>
              </div>
            </div>
            <div className="row my-5 justify-content-center">
              <div className="col-3 text-center me-5">
                <div className="card border-card ">
                  <div className="card-body">
                    <img
                      src={IconeDoar}
                      alt="iconedoar"
                      className="img-fluid my-3 "
                    />
                    <h3 className="text-black"> R$ 39,00</h3>
                    <p>
                      Com apenas R$ 1,30 por dia você nos ajuda a combater o
                      Desmatamento na Amazônia através de denuncias de crimes
                      ambientais..
                    </p>
                    <button className="btn btn-success text-center text-uppercase mt-md-2 px-4 ">
                      Doar
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-3 text-center me-5">
                <div className="card border-card">
                  <div className="card-body">
                    <img
                      src={IconeDoar}
                      alt="iconedoar"
                      className="img-fluid my-3 "
                    />
                    <h3 className="text-black"> R$ 55,00</h3>
                    <p>
                      Com apenas R$ 1,83 por dia você nos ajuda a combater o
                      Desmatamento na Amazônia através de denuncias de crimes
                      ambientais..
                    </p>
                    <button className="btn btn-success text-center text-uppercase mt-md-2 px-4 ">
                      Doar
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-3 text-center me-5">
                <div className="card border-card">
                  <div className="card-body">
                    <img
                      src={IconeDoar}
                      alt="iconedoar"
                      className="img-fluid my-3 "
                    />
                    <h3 className="text-black"> R$ 100,00</h3>
                    <p>
                      Com apenas R$ 3,33 por dia você nos ajuda a combater o
                      Desmatamento na Amazônia através de denuncias de crimes
                      ambientais..
                    </p>
                    <button className="btn btn-success text-center text-uppercase mt-md-2 px-4 ">
                      Doar
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="text-white">
                  Você será redirecionado para o site do <b>Greepace</b> e lá
                  sua doação será aplicada em campanhas, projetos ou atividade
                  do <b>Greenpeace Brasil</b>, conforme as demandas de recursos
                  da organização. Precisamos da sua ajuda para manter e defender
                  o <b>meio ambiente no Brasil</b> e elevar a voz contra todos
                  aqueles que destroem a nossa riqueza natural.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </DonationContainer>
    </>
  );
}
