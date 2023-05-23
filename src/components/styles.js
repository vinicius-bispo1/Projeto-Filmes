import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.4); 
    width: 100%; 
    height: 12vh;
    position: fixed;
    top: 0px;
    z-index: 1;

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
`
export const Descrição = styled.section`
/* border: 1px solid pink; */
display: flex;
flex-direction: column;
justify-content: end;
width: 60%;
height:60vh;
margin-left: 7vw;
color: black;
h1{
    font-size: 3em;
}
h3{
    font-size: 1.3em;
}
p{
    font-size: 1.2em;
}
`
export const ContainerPopular = styled.section`
    background-color: #000000;
    height: 68vh;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    /* border: 1px solid green; */
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
    width: 90%;
    height: 10vh;
    display: flex;
    justify-content: space-around;
    /* border: 1px solid red; */
`
export const SecondGenero = styled.p`
    width: 87%;
    font-size: 1rem;
    height: 7vh;
    color: white;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    /* border: 1px solid blue; */
`

export const BoxTitle = styled.div`
    font-size: 1rem;
    color: white;
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
    a{
        text-decoration: none;
    }
    img{
        width: 14vw;
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
        color: #F6F6F6;
    }
`