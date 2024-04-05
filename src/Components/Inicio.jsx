import React from "react"
import Perfil from "./imagensPortfolio/perfil.jpg"
import Instagram from "./imagensPortfolio/instagram.png"
import GitHub from "./imagensPortfolio/github.png"
import Linkedin from "./imagensPortfolio/linkedin.png"
import * as S from "./Style.jsx"

function Inicio() {
  return (
    <S.Inicio>
      <img src={Perfil} alt="minha foto" />
      
      <h2>Vivian Sanchez</h2>

      <S.RedesSociais>
      <img src={Instagram} alt="" />
      <img src={GitHub} alt="" />
      <img src={Linkedin} alt="" />
      </S.RedesSociais>

    </S.Inicio>
  )
}

export default Inicio