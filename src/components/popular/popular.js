import React from "react"
import * as S from "../styles"
import { useState, useEffect } from 'react'
import axios from 'axios'
import Carousel from 'react-elastic-carousel'



export default function Filmes (){

    const [filmes, setFilmes] = useState([])
    const [index, setIndex] = useState(1)

    useEffect(() => {
        getFilmes()
    }, [filmes])

    const getFilmes = async () => {
        await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=6040fbaaf2352854942894b5b45b4729&language=pt-BR&page=${index}`)
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
        <S.ContainerPopular id="popular">
           
            <S.TriploBoxTitle>
                <h2>Mais Votados</h2>
            </S.TriploBoxTitle>
            
                <Carousel breakPoints={breakPoints} itemPadding={[10, 15]}>
                     {filmes.map((item) => (
                <S.BoxFilms $primary>
                    <a href="https://www.themoviedb.org/" target="blank">
                    <img src={item.image} alt={item.name}/>
                    <h2>{item.title}</h2>
                    </a>
                    <p>Data: {item.release_date}</p>
                    <p>{item.vote_average}/10</p>
                    <h3>{item.overview}</h3> 
                </S.BoxFilms>
                
            ))}
            </Carousel>
            <S.Footer>
            <S.Rodape>
        <ul>
        <li onClick={()=> setIndex(1)}>1</li>
        <li onClick={()=> setIndex(2)}>2</li>
        <li onClick={()=> setIndex(3)}>3</li>
        <li onClick={()=> setIndex(4)}>4</li>
        <h5>...</h5>
        <li onClick={()=> setIndex(322)}>322</li>
        <h4 onClick={()=> setIndex(322)}>Último</h4>
        </ul>
        </S.Rodape>
        </S.Footer>
        </S.ContainerPopular>
    )
}