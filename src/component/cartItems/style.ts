import { styled } from "styled-components";

export const CartItemContainer = styled.div`
  padding:1rem 2rem;
  display:flex;
  min-width:20rem;
  align-items:flex-start;
  gap:2rem;
`

export const ItemInfoContainer = styled.div`
  display:flex;
  flex-direction:column;
  min-width:15rem;
  align-items:center;
  gap:0,5rem;
`

export const PriceAndQuantityContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:0.5rem;
`

export const ItemTitleText = styled.span`
  font-weight:bold;
  color: rgba(255, 255, 255, 0.87);
`


export const ItemPriceText = styled.span`
  font-weight:bold;
`

export const ItemQuantityText = styled.span`
  font-weight:bold;
  color:#777;
`