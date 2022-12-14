import React from "react";

// Componentes do Site //
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

// Estilo do Site //
import "../../global.css";

// Imagens do Site //
import ImgProject from "../../img/img-project.svg";

export default function Project() {
  return (
    <>
      <Navbar />
      <section className="background-color-primary">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-5 d-none d-md-block ">
              <img
                src={ImgProject}
                alt="Imagem projeto"
                className="img-fluid "
              />
            </div>
            <div className="col-lg-7 p-4">
              <h1
                className="text-white fw-bold my-5 "
                style={{ fontSize: "67px" }}
              >
                UnaEco
              </h1>
              <p
                className="text-white "
                style={{ fontSize: "21px", textAlign: "justify" }}
              >
                Nosso trabalho tem como foco apresentar uma solução sistemática
                para facilitar a doação de recursos para projetos que visam a
                proteção de áreas naturais preservadas e reservas ambientais,
                bem como servir como um portal de notícias e de conteúdos
                relacionados, como dicas de preservação e hábitos sustentáveis.
                Nós do UnaEco defendemos projetos de lei que proíbam o
                desmatamento, alertamos em nosso site com noticías e informações
                sobre esses problemas . Seguimos monitorando constantemente o
                desmatamento, denunciando crimes ambientais na floresta e
                defendendo a manutenção das Unidades de Conservação e demarcação
                das terras indígenas na Amazônia. Amazônia tem importância
                fundamental no controle do clima do planeta e na disponibilidade
                de água doce. Ou seja, sem floresta não tem água e produção de
                alimentos. Sua ajuda é essencial para manter as florestas de pé.
                Ainda há tempo de parar essa destruição. Junte-se a nós nessa
                luta!
              </p>
            
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}
