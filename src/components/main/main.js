import React from "react"
import * as S from "../styles"
import { useState, useEffect } from "react"
import axios from 'axios'

export default function Main() {

    const [filmes, setFilmes] = useState([])
    const [fundo, setFundo] = useState([])

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let isMounted = true; // Flag para rastrear se o componente está montado

        const fetchData = async () => {
            if (!loading) {
                // Verifica se a requisição já está em andamento
                try {
                    setLoading(true); // Define o estado de carregamento como verdadeiro

                    const response = await axios.get(
                        'https://api.themoviedb.org/3/movie/popular?api_key=6040fbaaf2352854942894b5b45b4729&language=pt-BR&page=1'); // Realiza a requisição

                    if (isMounted) {
                        const allApi = response.data.results.map((item) => {
                            return {
                                ...item,
                                poster: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`
                            }
                        })
                        setFilmes(allApi)

                      
                        setFundo(arrayAntiga => arrayAntiga = filmes.slice(0, 1))
                        console.log()

                    }

                } catch (error) {
                    console.error(error);
                } finally {
                    setLoading(false); // Define o estado de carregamento como falso, independentemente do resultado da requisição
                }
            }
        };

        fetchData();

        return () => {
            isMounted = false; // Define a flag para false quando o componente é desmontado
        };
    }, [fundo,setFundo,setFilmes,filmes]);

    return (
        <S.ContainerBox id="main">
            {/* back={fundo.map(item => item.poster)} */}
            <S.MainStyle back={fundo.map(item => item.poster)} id="main">

                {fundo.map(item => (
                    <S.Descrição  back={fundo.map(item => item.poster)}>
                        <h1>{item.title}</h1>
                        <h3>IMDB: {item.vote_average}</h3>
                        <h3>Lançamento: {item.release_date}</h3>
                        <p>Sinopse{item.overview}</p>

                    </S.Descrição>
                ))}
            </S.MainStyle>
        </S.ContainerBox>
    )
}