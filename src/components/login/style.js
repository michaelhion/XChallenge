import styled from "styled-components";

export const Container = styled.div`
  height:400px;
  background-color:#ffff;
  align-items:center;
  width:600px;
  flex-direction:'row';
  display:flex;
  text-align: center;
  color:#55585c;
  font-weight:bold;
  
  .imgContainer img{
    margin:20px;
    width:200px;
  }
  
  Button{
    width:300px;
    margin-left:10px;
  }
  
  
  #divForm{
    margin-left:5px;
    border-left:2px solid #9ab7db;
  }
  

  @media screen and (max-width: 720px) {
    
    flex-direction:column;
    margin-bottom:50px;
    padding-bottom:50px;
    background-color:#b3c0e3;

    
}
  
`;