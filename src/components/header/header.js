import React from "react"
import * as S from "../styles"
import LOGO from "../image/LogoDell2x.png"
import Carousel from 'react-elastic-carousel';

 export default function Header (){
    return(
        <S.HeaderContainer>
        <S.Logo>
          <img src={LOGO} alt="imagem da logo no inicio da pagina" />
        </S.Logo>
        <S.NavBox>
          <ul>
            <li><a href="#series" >Séries</a></li>
            <li><a href="#filmes">Filmes</a> </li>
          </ul>
        </S.NavBox>
            <S.Nav>
                <ul>
                <li><a href="#">Filtro</a></li>
                <li><a href="#">Login</a></li>
                </ul>
            </S.Nav>
        </S.HeaderContainer>
    )
} 