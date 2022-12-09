    import ParceiroHSBC from "../../img/HSBC svg.svg";
    import ParceiroCapital from "../../img/Capital One svg.svg";
    import ParceiroBradesco from "../../img/Banco Bradesco - png.svg";
    import ParceiroAdobe from "../../img/Adobe svg.svg";

    export default function Collaboration() {
        return(
            <>
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
                </section>;
            </>
        )
    }