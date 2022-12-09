import React from "react";

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

import { FormContainer } from "./styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required("O nome é obrigatório"),
    telephone: yup
      .string()
      .min(11, "Digite um telefone válido com DDD")
      .required("O telefone é obrigatório"),
    email: yup
      .string()
      .email("Digite um e-mail válido")
      .required("O e-mail é obrigatório"),
  })
  .required();

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
    reset();
  };

  return (
    <FormContainer>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-white text-center fw-bold my-5 ">
              Como a sua doação faz a diferença
            </h1>
            <h2 className="text-white text-center fw-bold my-5 ">
              Detalhes do contato
            </h2>
            <div className="col">
              <p className="text-white text-center my-5">
                Por favor, preencha seus dados para que possamos enviar
                <br /> todas as informações sobre as doações.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center my-md-3 ">
          <div className="col-12 col-md-8 ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className=" text-center">
                <label
                  htmlFor="nome"
                  className="col-form-label text-white fw-bold "
                >
                  Nome:
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  id="name"
                  className={`form-control ${
                    errors.name?.message ? "is-invalid" : ""
                  }`}
                  border-input
                  text-center
                  placeholder="Digite seu nome completo"
                />
                <div className="message position-absolute text-center p-3 d-flex align-items-center">
                  {" "}
                  {errors.name?.message}
                </div>
              </div>
              <div className="row justify-content-center my-5">
                <div className="col-8 col-md-5">
                  <div className=" text-center">
                    <label
                      htmlFor="telefone"
                      className="col-form-label text-white fw-bold "
                    >
                      Telefone:
                    </label>
                    <input
                      {...register("telephone", { required: true })}
                      type="tel"
                      id="telefone"
                      className={`form-control ${
                        errors.telephone?.message ? "is-invalid" : ""
                      }`}
                      border-input
                      text-center
                      placeholder="Digite seu telefone com DDD"
                    />
                    <div className="message position-absolute text-center p-3 d-flex align-items-center">
                      {" "}
                      {errors.telephone?.message}
                    </div>
                  </div>
                </div>
                <div className="col-8 col-md-5 my-5 my-md-0 ">
                  <div className=" text-center">
                    <label
                      htmlFor="email"
                      className="col-form-label text-white fw-bold "
                    >
                      E-mail:
                    </label>
                    <input
                      {...register("email", { required: true })}
                      type="text"
                      id="email"
                      className={`form-control ${
                        errors.email?.message ? "is-invalid" : ""
                      }`}
                      border-input
                      text-center
                      placeholder="Digite seu e-mail completo"
                    />
                    <div className="message position-absolute text-center p-3 d-flex align-items-center">
                      {" "}
                      {errors.email?.message}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col text-center my-5">
                <button type="submit" className="btn btn-success px-4 my-5">
                  Inscrever
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </FormContainer>
  );
}
