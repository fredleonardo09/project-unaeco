import { Link, NavLink } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import Trevo from "../../img/trevo.svg";
import BannerPrincipal from "../../img/banner-principal.svg";

import DesmatamentoOne from "../../img/desmatamento1.svg";
import Desmatamentotwo from "../../img/desmatamento2.svg";
import Ecologia from "../../img/ecologia-e-meio-ambiente.svg";
import Brotar from "../../img/brotar.svg";
import Reciclar from "../../img/reciclar.svg";

import Chico from "../../img/chico-mendes.svg";

import BannerNoticia from "../../img/banners-noticias (1).svg";
import BannerNoticiatwo from "../../img/banners-noticias (2).svg";
import BannerNoticiathree from "../../img/banners-noticias (3).svg";

import BannerDoe from "../../img/banners-doe01.svg";
import BannerDoetwo from "../../img/banners-doe02.svg";

import ParceiroHSBC from "../../img/HSBC svg.svg";
import ParceiroCapital from "../../img/Capital One svg.svg";
import ParceiroBradesco from "../../img/Banco Bradesco - png.svg";
import ParceiroAdobe from "../../img/Adobe svg.svg";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="background-color-primary background-color-primary-border-bottom">
        <div className="container">
          <div className="row">
            <div className="col-12 p-5 col-md-6 my-5 position-relative">
              <h1 className="text-white fw-bold" style={{ fontSize: "60px" }}>
                Faça uma doação ou associe-se à UnaEco
                <img src={Trevo} alt="trevo" className="img-fluid p-4" />
              </h1>
              <p className="text-white my-5" style={{ fontSize: "25px" }}>
                Juntos, vamos conquistar o Desmatamento Zero, a solução viável
                rápida e barata para combater as mudanças climáticas.
              </p>
            </div>
            <div className="col-6 my-5 d-none d-md-block">
              <img
                src={BannerPrincipal}
                alt="banner-principal"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 my-5 text-black">
              <h2 className="text-center">
                Estamos lutando para proteger o meio ambiente para isso, é
                urgente:
              </h2>
            </div>
            <div className="row row-cols-1 text-center row-cols-md-6">
              <div className="col">
                <img
                  src={Desmatamentotwo}
                  alt="Desmatamento"
                  className="img-fluid mx-5"
                />
              </div>
              <div className="col">
                <p className="text-center my-3">
                  Acabar com o desmatamento ilegal
                </p>
              </div>
              <div className="col">
                <img
                  src={DesmatamentoOne}
                  alt="Desmatamento ilegal"
                  className="img-fluid mx-5"
                />
              </div>
              <div className="col">
                <p className="text-center my-3">
                  Evitar queimandas em florestas
                </p>
              </div>
              <div className="col">
                <img
                  src={Ecologia}
                  alt="Desmatamento"
                  className="img-fluid mx-5"
                />
              </div>
              <div className="col">
                <p className="text-center my-3">Frear a crise climática</p>
              </div>
            </div>
            <div className="row row-cols-1 text-center row-cols-md-5 my-md-5 d-md-flex justify-content-md-center">
              <div className="col">
                <img src={Brotar} alt="plantio" className="img-fluid mx-5" />
                <p className="my-4 text-center">
                  Plantio de mudas para reflorestamento
                </p>
              </div>
              <div className="col">
                <img
                  src={Reciclar}
                  alt="reciclagem"
                  className="img-fluid mx-5"
                />
                <p className="my-4 text-center">Importância da reciclagem</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-5">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-10">
              <p className="text-center" style={{ fontSize: "30px" }}>
                “A nossa luta é pela defesa da seringueira, da castanheira; e
                essa luta nós vamos levar até o fim, porque não vamos permitir
                que as nossas florestas sejam destruídas”.
              </p>
            </div>
          </div>
          <div className="row row-cols-3 row-cols-md-4 justify-content-center my-5">
            <div className="col ">
              <img src={Chico} alt="Chico-Mendes" className="img-fluid" />
            </div>
            <div className="col" style={{ zIndex: 1, marginLeft: "-12%" }}>
              <p className="fw-bold fs-3 text-center ms-md-1">
                Chico Mendes{" "}
                <span className="fs-4 fw-light">Ambientalista</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="my-5">
        <div className="container">
          <div className="row row-cols-1 px-2 row-cols-lg-12">
            <div className="col">
              <p className="fw-semibold fs-3 text-black">Últimas notícias</p>
            </div>
          </div>
          <div className="row row-cols-2 px-2 row-cols-lg-3 my-5 d-flex justify-content-between">
            <div className="col g-2">
              <img
                src={BannerNoticia}
                alt="banner noticias 1"
                className="img-fluid"
              />
              <p className="fw-light my-4">21 de Novembro 2022</p>
              <Link
                to="/News"
                className="fw-semibold fs-5 my-4 text-decoration-none text-decoration"
              >
                Imazon estima desmatamento na Amazônia.
              </Link>
              <p className="my-4 text-black">
                Quando o assunto é desmatamento na Amazônia tem gente fazendo
                hora extra nos últimos tempos...
              </p>
            </div>
            <div className="col g-2">
              <img
                src={BannerNoticiatwo}
                alt="banner noticias 2"
                className="img-fluid"
              />
              <p className="fw-light my-4">23 de Novembro 2022</p>
              <NavLink
                href="#"
                className="fw-semibold fs-5 my-4 text-decoration-none text-decoration"
              >
                Conheça 9 macacos do Brasil ameaçados de extinção.
              </NavLink>
              <p className="my-4 text-black">
                Veja algumas espécies de primatas brasileiros que correm risco
                de desaparecerem do planeta!
              </p>
            </div>
            <div className="col g-2">
              <img
                src={BannerNoticiathree}
                alt="banner noticias 3"
                className="img-fluid"
              />
              <p className="fw-light my-4">24 de Novembro 2022</p>
              <NavLink
                href="#"
                className="fw-semibold fs-5 my-4 text-decoration-none text-decoration"
              >
                Extintas e ameaçadas: livro reúne fotos e informações de aves
                brasileiras.
              </NavLink>
              <p className="my-4 text-black">
                303 espécies e subespécies encontradas no Brasil correm risco de
                extinção; obra poderá ser adquirida a partir de 11 de agosto.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 my-5">
              <h2 className="text-center text-black fw-bold text-uppercase">
                Ajude a construir um futuro melhor
              </h2>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-2 my-5">
            <div className="col mb-4">
              <img
                src={BannerDoe}
                alt="banner doacao 1"
                className="img-fluid"
              />
            </div>
            <div className="col">
              <img
                src={BannerDoetwo}
                alt="banner doacao 1"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 my-5">
              <h2 className="text-center text-black fw-bold text-uppercase">
                Nossos parceiros
              </h2>
            </div>
          </div>
          <div className="row row-cols-sm-4">
            <div className="col">
              <img src={ParceiroHSBC} alt="logo HSBC" className="img-fluid" />
            </div>
            <div className="col">
              <img
                src={ParceiroCapital}
                alt="logo Capital one"
                className="img-fluid"
              />
            </div>
            <div className="col">
              <img
                src={ParceiroBradesco}
                alt="logo Bradesco"
                className="img-fluid"
              />
            </div>
            <div className="col">
              <img src={ParceiroAdobe} alt="logo Adobe" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
