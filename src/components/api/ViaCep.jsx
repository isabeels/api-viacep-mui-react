import React, { useState, useEffect } from "react";
import Input from "../formulario/Input";
import axios from "axios";
import Lottie from "react-lottie";
import carregandoAnimacao from "../../assets/circle-loader.json";

const ViaCep = () => {
  const [cep, setCep] = useState(" ");
  const [data, setData] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: carregandoAnimacao,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  //o setTimeout é apenas para ter tempo de ver o loading funcionando nesta aplicacao.
  useEffect(() => {
    if (cep.length > 0) {
      setTimeout(() => {
        setCarregando(false);
      }, 3000);
    }
  }, []);

  useEffect(() => {
    axios
      .get("https://viacep.com.br/ws/" + cep + "/json/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [cep]);

  function handleCep({ target }) {
    setCep(target.value);
  }
  return (
    <>
      {carregando ? (
        <Lottie options={defaultOptions} height={400} width={400} speed={10} />
      ) : (
        <Input cep={cep} handleCep={handleCep} data={data} />
      )}
    </>
  );
};

export default ViaCep;
