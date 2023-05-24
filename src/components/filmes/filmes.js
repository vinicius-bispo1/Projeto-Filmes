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
        await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=6040fbaaf2352854942894b5b45b4729&language=pt-BR&page=1')
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
        <S.Container id="filmes">
            <S.GeneroBox>
                <S.SecondGenero>
                <p><a href="#popular">Popular</a></p>
                <p><a>Drama</a></p>
                <p><a>Ação</a></p>
                <p><a>Aventura</a></p>
                <p><a>Comédia</a></p>
                <p><a>Crime</a></p>
                <p><a>Fantasia</a></p>
                <p><a>Família</a></p>
                </S.SecondGenero>
                {/* AiOutlineSearch */}
            </S.GeneroBox>

            <S.BoxTitle>
                <h2>Últimos lançamentos</h2>
            </S.BoxTitle>
            
                <Carousel breakPoints={breakPoints} itemPadding={[10, 15]}>        
                     {filmes.map((item) => (                      
                <S.BoxFilms $primary>                            
                    <img src={item.image} alt={item.title}/>     
                    <a href="https://www.themoviedb.org/" target="blank">        
                    <h2>{item.title}</h2>
                    </a>
                    <p>Data: 2023</p> 
                    <h3>{item.overview}</h3> 
                </S.BoxFilms>
                
            ))}
           
            </Carousel>
        </S.Container>
    )
}