import styled from "styled-components";

export const Container = styled.div`
    top : 0;
    left:0;
    width:100%;
    margin:0;    
    background-color:#000000;
    color:#ffffff;
    font-weight:bold;
    position:fixed;
    
    @media screen and (max-width: 720px) {
        height:20px;
        flex-direction:column;
        margin-bottom:50px;
        padding-bottom:50px;
        background-color:#000000;
        width:100%;
        
    }
`