import React from "react"
import Filmes from "./components/filmes/filmes"
import Header from "./components/header/header"
import Main from "./components/main/main"
import Series from "./components/series/series"
import Popular from "./components/popular/popular"
import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
`;

export default function App (){
  return(
    <>
    <GlobalStyle />
      <Header />
      <Main />
      <Filmes />
      <Series />
      <Popular />
    </>
  )
}
