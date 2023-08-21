import { styled } from "styled-components";


export const MainContainer = styled.div`
  display:flex;
  flex-direction:column;
  alignItems:flex-start;
  &:hover{
    transition: transform .2s; 
    transform: scale(1.05);
  }
  
`
export const ProductContainer = styled.div`
  display:flex;
  flex-direction:column;
  padding:0.5rem;
  background: #333;
  padding:0.5rem;
  min-width:10rem;
  min-height:14rem;
  
`