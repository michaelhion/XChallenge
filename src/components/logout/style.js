import styled from "styled-components";

export const Container = styled.div`
    padding:5px;
    margin:5px
    display:flex;
    flex-direction: column;
    aligh-items: center;
    text-align:center;
    text-decoration:none;
    
    h2{
        margin:20px;
    }
    
    #link{
        margin:20px;
    }

    @media screen and (max-width: 720px) {
        margin:50px
        align-items:center;
        text-align: center;
        flex-direction:column;
    
        
    }
`