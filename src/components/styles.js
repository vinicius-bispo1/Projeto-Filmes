import styled,{ css } from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.4); 
    width: 100%; 
    height: 12vh;
    position: fixed;
    top: 0px;
    z-index: 2;

`
export const Logo = styled.div`
    /* border: 1px solid white; */
    width: 15vw;
    display: flex;
    align-items: center;
    justify-content: center;
    
`


export const NavBox = styled.nav`
  display: flex;
  
  align-items: center;
  width: 20vw;
  
  /* border: 1px solid gray; */
  ul {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 1.5em;
    width: 38vw;
    /* border: 1px solid yellow; */
    
    li {
        cursor: pointer;
      font-size: 20px;
      font-family: "Open", sans-serif;
      font-weight: 400;
      /* border: 1px solid yellow; */
      border-radius: 20px;
      text-decoration: none;
      width: 7vw;
      height: 5vh;
      display: flex;
      justify-content: center;
      align-items: center;
       &:hover{
        background-color: #747474;
       }

      a{
        text-decoration: none;
        cursor: pointer;
        color: white;
        /* border: 1px solid yellow; */
      }
    }
    
  }
`;

export const Nav = styled.nav`
    display: flex;
    /* border: 1px solid red; */
    align-items: center;
    width: 20vw;
  

  ul {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    list-style: none;
    color: orange;
    font-size: 1.5em;
    width: 28vw;
    /* border: 1px solid red; */
    padding: 0 45px 0 0;
    li {
      cursor: pointer;
      font-size: 20px;
      font-family: "Open", sans-serif;
      font-weight: 400;
      border-radius: 20px;
      width: 7vw;
      height: 5vh;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover{
        background-color: #747474;
       }
      a{
        text-decoration: none;
        color: white;
      }
    }
}

`
export const Ul = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 50%;
    border: 2px solid;
    li{
        list-style: none;
    }
`
export const ContainerBox = styled.section`
height: 100vh;
`
export const MainStyle = styled.section`
   background-image: url(${props => props.back});
    background-repeat:no-repeat;
    background-size:100% 100%;
    height: 100vh;
    color:white;
    display: flex;
    flex-direction: column;
    justify-content: space-around; 
    /* border: 1px solid pink; */
    
`
export const Descrição = styled.section`
/* border: 1px solid pink; */
display: flex;
flex-direction: column;
justify-content: end;
width: 60%;
height: 83vh;
margin-left: 7vw;
color: black;
h1{
    font-size: 3em;
}

p{
    font-size: 1.2em;
}
`
export const SecondLegenda = styled.section`
/* border: 1px solid #F3CD32; */
display: flex;
width: 10vw;
height: 5vh;
justify-content: space-between;
align-items: center;
span{
        width: 4vw;
        height: 3vh;
        font-size: 0.6em;
        /* display: flex;
        align-items: center;
        justify-content: center; */
    }
    p{
        width: 3vw;
        height: 2.5vh;
        border: 1px solid #F3CD32;
        border-radius: 2px;
        background-color: #F3CD32; 
        font-size: 1em;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
}
`
export const Estrela = styled.div`
/* border: 1px solid red; */
width: 2.5vw;
height: 4vh;
display: flex;
        align-items: center;
        justify-content: center;

`

export const ButaoBox = styled.div`
/* border: 1px solid red; */
width: 25vw;
height: 8vh;
display: flex;
align-items: center;
justify-content: space-between;
`
export const PlayBox = styled.div`
/* border: 1px solid blue; */
width: 12vw;
height: 5.5vh;
display: flex;
align-items: center;
justify-content: center;
border-radius: 20px;
background-color: #D53A00;
color: white;
`
export const TrailerBox = styled.div`
/* border: 1px solid green; */
width: 12vw;
height: 5.5vh;
display: flex;
align-items: center;
justify-content: center;
border-radius: 20px;
background-color: #717171;
color: white;
letter-spacing: 1px;
`
export const Icone = styled.div`
/* border: 1px solid white; */
width: 1.5vw;
height: 2.4vh;
display: flex;
align-items: end;
justify-content: center;
`

export const ContainerPopular = styled.section`
    background-color: #000000;
    height: 95vh;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    /* border: 1px solid blue; */
    button{
        border: none;
        background-color: #000000;
        color: white;
    }
    .rec-dot {
    display: none;
  }
`

export const ContainerSeries = styled.section`
    background-color: #000000;
    height: 65vh;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    /* border: 1px solid green; */
    button{
        border: none;
        background-color: #000000;
        color: white;
    }
    .rec-dot {
    display: none;
  }
`

export const Container = styled.section`
    background-color: #000000;
    height: 78vh;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    /* border: 1px solid green; */
    button{
        border: none;
        background-color: #000000;
        color: white;
    }
    .rec-dot {
    display: none;
  }
 `
export const GeneroBox = styled.p`
    font-size: 1rem;
    width: 100%;
    height: 13vh;
    display: flex;
    justify-content: space-around;
    /* border: 1px solid red; */
    
    box-shadow: 35px 2px 60px 75px black; 
`
export const SecondGenero = styled.p`
    width: 87%;
    font-size: 1rem;
    height: 7vh;
    color: gray;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    /* border: 1px solid blue; */
    p{
        cursor: pointer;
        a{
            text-decoration: none;
            color: gray;
            &:hover{
                color: white;
            }
        }
    }
`

export const BoxTitle = styled.div`
    font-size: 1rem;
    color: white;
    height: 10vh;
    h2{
        /* border: 1px solid red; */
        width: 20.7vw;
        display: flex;
        justify-content: end;
    }
    /* border: 1px solid red; */
`
export const SecondBoxTitle = styled.div`
    font-size: 1rem;
    color: white;
    h2{
        /* border: 1px solid red; */
        width: 14.5vw;
        display: flex;
        justify-content: end;
    }
    /* border: 1px solid red; */
`
export const TriploBoxTitle = styled.div`
    font-size: 1rem;
    color: white;
    h2{
        /* border: 1px solid red; */
        width: 15.2vw;
        display: flex;
        justify-content: end;
    }
    /* border: 1px solid red; */
`

export const BoxFilms = styled.div`
    font-size: 3rem;
    /* border: 1px solid yellow; */
    width: 20vw;
    display: flex;
    align-items:center;
    justify-content: space-evenly;
    flex-direction: column;
    padding-top: 10px;
    cursor: pointer;
    position: relative;
    top: 0vh;
    z-index: 1;
    transition: ease-in-out 0.6s;
    &:hover{
        ${props => props.$primary && css`
        width: 20vw;
        top: -10vh;
        height: 50vh;
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        h2{
            font-size: 0.9rem;
            /* border: 1px solid green; */
            width: 14vw;
            height: 4.5vh;
            color: aquamarine;
            display: flex;
            justify-content: center;
        }
        img{
            width: 3vw;
            /* display: none; */
        }
        p{
            display: none;
        }

        h3{
        color: white;
        font-size: 12px;
        /* border: 1px solid green; */
        width: 16vw;
        height: 32vh;
    }
  `}    
        img{
            width: 10vw;
        }
       }
    a{
        text-decoration: none;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        &:hover{
         width: 11vw; 
       }
    }
    img{
        width: 14vw;
        position: relative;
        z-index: 0;
    }
    
    h2{
        font-size: 1rem;
        width: 14vw;
        color: #F6F6F6;
        &:hover{
        color: blue;
       }
    }
    p{
        font-size: 0.9rem;
        width: 14vw; 
        height: 2vh;
        color: #F6F6F6;
        /* border: 1px solid red; */
    }
    h3{
        color: #0000;
        font-size: 2px;
        /* border: 1px solid green; */
        width: 15vw;
        height: 3vh;
    }
    
`

export const Footer = styled.div`
width: 100%;
height: 15vh;
/* border: 1px solid green; */
display: flex;
justify-content: center;

background-color: #000;
flex-direction: row;
`
export const Rodape = styled.div`
width: 25vw;
height: 9vh;
/* border: 1px solid red; */
display: flex;
flex-direction: row;
justify-content: space-evenly;

h5{
    width: 0.5vw;
    height: 6vh;
    color: white; 
    /* border: 1px solid white; */
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2vh;
    
}

h4{
    width: 4.8vw;
    height: 4.8vh;
    color: white; 
    border: 1px solid white; 
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
ul{
    width: 23vw;
    height: 8vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    /* border: 1px solid white; */
}

li{
    width: 2.4vw;
    height: 4.8vh;
    color: white; 
    border: 1px solid white;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
`

