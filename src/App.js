import React, { useState } from "react";

import * as S from "./styles";

export default function App() {
  const [verbo, setVerbo] = useState("");
  const [conjunto, setConjunto] = useState([]);
  let radical = verbo.substr(0, verbo.length - 2);
  let conjugacao = verbo.substr(verbo.length - 2);
  let pessoa = ["Eu", "Tu", "Ele", "Nós", "Vós", "Eles"];
  let linhas = [];

  const handleChange = (e) => {
    setVerbo(e.target.value);
  };

  const Presente = () => {
    let terminacao;
    switch (conjugacao) {
      case "ar":
        terminacao = ["o", "as", "a", "amos", "ais", "am"];
        break;
      case "er":
        terminacao = ["o", "es", "e", "emos", "eis", "em"];
        break;
      case "ir":
        terminacao = ["o", "es", "e", "imos", "is", "em"];
        break;
      default:
        conjugacao = 0;
    }
    if (conjugacao !== 0) {
      for (let i = 0; i <= 5; i++) {
        linhas += [`${pessoa[i]}  ${radical}${terminacao[i]}`];
      }
    } else {
      alert("Palavra inserida não é válida!");
    }
    setConjunto(linhas);
  };

  const Futuro = () => {
    let terminacao;
    switch (conjugacao) {
      case "ar":
        terminacao = ["arei", "arás", "ará", "aremos", "areis", "arão"];
        break;
      case "er":
        terminacao = ["erei", "erás", "erá", "eremos", "ereis", "erão"];
        break;
      case "ir":
        terminacao = ["irei", "irás", "irá", "iremos", "ireis", "irão"];
        break;
      default:
        conjugacao = 0;
    }
    if (conjugacao !== 0) {
      for (let i = 0; i <= 5; i++) {
        linhas += [`${pessoa[i]}  ${radical}${terminacao[i]}`];
      }
      setConjunto(linhas);
    } else {
      alert("Palavra inserida não é válida!");
    }
  };

  const Passado = () => {
    let terminacao;
    switch (conjugacao) {
      case "ar":
        terminacao = ["ei", "aste", "ou", "amos", "astes", "aram"];
        break;
      case "er":
        terminacao = ["i", "este", "eu", "emos", "estes", "eram"];
        break;
      case "ir":
        terminacao = ["i", "iste", "iu", "imos", "istes", "iram"];
        break;
      default:
        conjugacao = 0;
    }
    if (conjugacao !== 0) {
      for (let i = 0; i <= 5; i++) {
        linhas += [`${pessoa[i]}  ${radical}${terminacao[i]}`];
      }
      setConjunto(linhas);
    } else {
      alert("Palavra inserida não é válida!");
    }
  };

  return (
    <>
      <S.GlobalStyle />
      <div className="App">
        <h1>Conjugador de Verbos Regulares no Indicativo</h1>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Insira verbo aqui..."
        />
        <S.Buttons>
          <button onClick={Presente}>Presente</button>
          <button onClick={Futuro}>Futuro</button>
          <button onClick={Passado}>Passado</button>
        </S.Buttons>
        <p>{conjunto}</p>
      </div>
    </>
  );
}
