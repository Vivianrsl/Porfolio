import styled from "styled-components"

export const Navegacao = styled.nav`
    background-color: #8e8ca3;
    font-family: "Workbench", cursive;
`

export const Lista = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 20vh;
    list-style: none;
    font-family: "Workbench", cursive;

a{
    text-decoration: none;
    color: black; 
    font-size: 2rem;
}

a:hover{
    color: #72577c;
    font-weight: 800;
}

@media(min-width: 320px) and (max-width: 768px){
    display: flex;
    flex-direction: column;
    height: 50vh;
    a:hover{
        font-size: 2.5rem;
        color: #72577c;
    }

}

`

export const Inicio = styled.main`
    background-color: #a9c2c9;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    height: 80vh;

img{
    border-radius: 50%;
    width: 30vw;
}


h2, p{
    color: white;
}

@media(min-width: 320px) and (max-width: 768px){
    height: 100vh;


    img{
        width: 70vw;
    }

    h2,p{
        font-size: 2rem;
        text-align: center;
    }
}

`
export const RedesSociais = styled.div`
    width: 30vw;
    display: flex;
    justify-content: space-evenly;

img{
    width: 3vw;
}

@media(min-width: 320px) and (max-width: 768px){

    width: 80vw;
    justify-content: space-evenly;
    img{
        width: 15vw;
    }
}

`

export const Sobre = styled.main`
    background-color: #a9c2c9;
    display: flex;
    justify-content: space-evenly;
`

export const Estudos = styled.section`
    background-color: #a9c2c9;
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: space-evenly;
    height: 50vh;
    width: 30vw;
`

export const Habilidades = styled.section` 
    height: 50vh;
    width: 30vw;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

div{
    display: flex;
    align-items: center;
}

img{
    height: 7vh;
}
`

export const Projeto = styled.main`
    background-color: #a9c2c9;
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: space-evenly;
    height: 50vh;
    width: 30vw;
`