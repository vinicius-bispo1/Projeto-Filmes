import React from "react"
import * as S from "../styles"
import { useState, useEffect } from 'react'
import axios from 'axios'
import Carousel from 'react-elastic-carousel'



export default function Filmes (){

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        getFilmes()
    }, [filmes])

    const getFilmes = async () => {
        await axios.get('https://api.themoviedb.org/3/discover/tv?api_key=6040fbaaf2352854942894b5b45b4729&language=pt-BR&page=1')
        .then((resposta) => {
            const allApi = resposta.data.results.map((item) => {
                return {
                    ...item,
                    image: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                }
            })
            setFilmes(allApi)

        }).catch((error) => alert(`desculpe, você teve um erro de requisição ${error}`))
    }
    const breakPoints = [
    
        { width: 500, itemsToShow: 5 }
        
      ];

    return(
        <S.ContainerSeries id="series">
           
            <S.SecondBoxTitle>
                <h2>Séries de TV</h2>
            </S.SecondBoxTitle>
            
                <Carousel breakPoints={breakPoints} itemPadding={[10, 15]}>
                     {filmes.map((item) => (
                <S.BoxFilms>
                    <a href="https://www.themoviedb.org/" target="blank">
                    <img src={item.image} alt={item.name}/>
                    <h2>{item.name}</h2>
                    </a>
                    <p>Data: {item.first_air_date}</p>
                    
                </S.BoxFilms>
                
            ))}
            </Carousel>
        </S.ContainerSeries>
    )
}