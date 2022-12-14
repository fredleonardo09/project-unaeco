import React from "react";
import { Link } from "react-router-dom";

// Componentes do Site //
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Estilo do Site //
import { NewsPage } from "./styled";

// Imagens do Site //
import ImgNoticia1 from "../../img/img-noticia1.svg";



export default function News() {
  return (
    <>
      <NewsPage>
        <Navbar />
        <div className="container">
          <div className="row ">
            <div className="col-12 my-5 col-md-12 ">
              <h1 className="text-white fw-semibold text-center">
                Imazon estima desmatamento na Amazônia de <br /> quase 10 mil
                km2 em 10 meses
              </h1>
              <div className="text-center">
                <img
                  src={ImgNoticia1}
                  alt="noticia1"
                  className="img-fluid my-5 "
                />
              </div>
              <p className="text-white">
                Quando o assunto é desmatamento na Amazônia tem gente fazendo
                hora extra nos últimos tempos, com motosserras e tratores e
                queimadas operando a mil. O Imazon (Instituto do Homem e Meio
                Ambiente da Amazônia) divulgou que a área desmatada na Amazônia,
                nos dez primeiros meses deste ano, chegou a quase 10 mil km² –
                mais de seis vezes a área da cidade de São Paulo. A “boa
                notícia” (contém ironia) é que esse é o segundo pior acumulado
                dos últimos 15 anos para o período, inferior apenas ao recorde
                registrado no ano passado. O desmatamento concentrou-se nos
                estados do Pará (56%), Amazonas (12%), Mato Grosso (11%) e Acre
                (9%).
                <br />
                <br />
                O Globo explicou que o número é um prenúncio para os dados
                compilados do sistema PRODES, do Instituto Nacional de Pesquisas
                Espaciais (INPE), para o último ano fiscal, medido entre agosto
                de 2021 e julho deste ano. Não é à toa que o legado nefasto do
                governo Bolsonaro ganhou a “Menção Desonrosa” pelo “conjunto da
                obra” antiambiental, durante entrega do Prêmio Fóssil do Ano,
                concedido pela Climate Action Network na COP27. <br />
                <br />
                O X da questão,como mostra O Globo, é que a equipe de transição
                está com dificuldades em obter os dados do PRODES – essenciais
                para que sejam estabelecidas as políticas públicas ambientais
                para a região e liberar os R$ 3 bi do Fundo Amazônia. De acordo
                com fontes ouvidas pelo jornal carioca e pela Pública, o
                relatório está pronto desde o mês passado (antes era divulgado
                em agosto), mas estaria bloqueado até o pós-COP. <br />
                <br />
                Dados do INPE mostram que, no apagar das luzes do atual governo,
                são as chamas que estão correndo soltas no período
                pós-eleitoral. Entre os dias 1º e 16 de novembro, foram
                registrados 3.332 focos de calor em três estados cujos
                governadores são bolsonaristas e foram reeleitos: Amazonas, Acre
                e Rondônia, como noticiou o Valor. <br />
                Por essas e por outras, o colunista da Veja José Calado disse
                que a Amazônia, chamada por ele de “coração do caos”, vai
                garantir (ou não) o êxito do governo Lula, dependendo da
                habilidade do presidente eleito ao lidar com questões complexas
                como a grilagem na região.
              </p>
              <figcaption class="figure-caption text-white">
                ClimaInfo, 21 de novembro de 2022.
              </figcaption>
              <Link
                to="/"
                className="fw-semibold fs-5 my-4 text-decoration "
              >
                <p className="text-white my-5 text-center">Voltar</p>
              </Link>
            </div>
          </div>
          
        </div>
        <Footer />
      </NewsPage>
    </>
  );
}
