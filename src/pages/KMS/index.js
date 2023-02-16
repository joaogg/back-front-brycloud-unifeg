import React, { useState } from "react";
import axios from "axios";

export default function KMS() {

  // ESTADOS ONDE AS VARIÁVIES E VALORES DOS INPUTS FICAM ARMAZENADAS
  const [documento, setDocumento] = useState(null);
  const [tipoAssinante, setTipoAssinante] = useState("Representantes");
  const [tipoDocumento, setTipoDocumento] = useState("XMLDiplomado")
  const [signerCPF, setSignerCPF] = useState("");
  const [passwordPin, setPasswordPin] = useState("");
  const [uuid, setUuid] = useState("");
  const [loadingAssinatura, setLoadingAssinatura] = useState(false);

  // FUNÇÃO QUE SERÁ EXECUTADA AO ENVIAR O FORMULÁRIO DE ASSINATURA
  function handleSubmit(event) {
    // Evita que a página atualize ao dar um submit
    event.preventDefault();

    assina();
  }

  // FUNÇÃO QUE SERÁ CHAMADA PELO FORMULÁRIO PARA ASSINAR O DOCUMENTO
  async function assina() {
    setLoadingAssinatura(true);

    const data = new FormData();
    data.append('documento', documento);
    data.append('tipoAssinatura', tipoAssinante)
    data.append('signerKMS', signerCPF);
    data.append('passwordPin', passwordPin);
    data.append('uuid', uuid);

    try {
      // REALIZA REQUISIÇÃO PARA O BACKEND
      const response = await axios.post(`http://localhost:3333/${tipoDocumento}/assinaKms`, data);
      console.log("response", response);
      if (response.data.message) {
        alert(response.data.message)
      } else {
        // REALIZA O DOWNLOAD DO DIPLOMA ASSINADO
        window.location.href = response.data.documentos[0].links[0].href;
      }

    } catch (err) {
      // DA UM ALERT COM A MENSAGEM DE ERRO
      alert(err);
    }
    setLoadingAssinatura(false);
  }

  return (
    <>
      <div className="row justify-content-center align-items-center">
        <div className="col-12">

          <form onSubmit={handleSubmit}>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />

            <label htmlFor="docLabel">Documento a ser assinado:</label>
            <label htmlFor="documento" className="fileUp">
              {documento ? (
                <React.Fragment>{documento.name}</React.Fragment>
              ) : (
                <React.Fragment>
                  <i className="fa fa-upload"></i>
                  Selecione o arquivo
                </React.Fragment>
              )}
              <input
                id="documento"
                type="file"
                onChange={event => setDocumento(event.target.files[0])}
              />
            </label>

            <label htmlFor="tipoDocumento">
              Tipo de Documento: *
            </label>
            <select
              id="tipoDocumento"
              value={tipoDocumento}
              required
              onChange={event => { setTipoAssinante("Representantes"); setTipoDocumento(event.target.value) }}
            >
              <option value="XMLDiplomado">XML Diplomado</option>
              <option value="XMLDocumentacaoAcademica">XML Documentação Acadêmica</option>
            </select>

            <label htmlFor="tipoAssinante">
              Tipo de assinante: *{" "}
            </label>
            <select
              id="tipoAssinante"
              value={tipoAssinante}
              required
              onChange={event => setTipoAssinante(event.target.value)}
            >
              <option value="Representantes">Representantes:</option>
              {tipoDocumento === "XMLDiplomado" ?
                (
                  <>
                    <option value="IESRegistradora">IES Registradora</option>
                  </>
                ) :
                (
                  <>
                    <option value="IESEmissoraDadosDiploma">IES Emissora em Dados Diploma</option>
                    <option value="IESEmissoraRegistro">IES Emissora para registro</option>
                  </>
                )
              }
            </select>

            <label htmlFor="signerCPF">CPF do assinante:</label>
            <input
              type="number"
              id="CPF do assinante"
              placeholder="CPF do assinante"
              value={signerCPF}
              onChange={event => setSignerCPF(event.target.value)}
            />

            <label htmlFor="signerCPF">Senha PIN:</label>
            <input
              type="text"
              id="Senha PIN"
              placeholder="Senha PIN"
              value={passwordPin}
              onChange={event => setPasswordPin(event.target.value)}
            />

            <label htmlFor="uuid">UUID do certificado:</label>
            <select
              id="uuid"
              value={uuid}
              required
              onChange={event => setUuid(event.target.value)}
            >
              <option value="">Selecionar um UUID</option>
              <option value="d9e8b69c-0f8a-477e-abd8-68eacdfd9102">BryCloud UUID</option>
            </select>

            <button className="btn" type="submit">
              Assinar
            </button>

            <div>{loadingAssinatura ? "Realizando a assinatura do documento..." : ""}</div>
          </form>
        </div>
      </div>
    </>
  );
}
