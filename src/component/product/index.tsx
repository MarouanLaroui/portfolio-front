import { Rating } from "@mui/material"
import { MainContainer, ProductContainer } from "./style"

export const Product = () => {
  return <MainContainer>
      <ProductContainer>
        <div style={{display:'flex', justifyContent:"flex-start"}}>
          <div style={{borderRadius:'25px', background:"orange", padding:"0.2rem 0.5rem"}}>-30%</div>
        </div>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', height:"100%"}}>
  <img src='src/assets/cut-orange.svg' style={{height:"120px", width:'120px'}}/>
        </div>
        
    </ProductContainer>
    <div style={{textAlign:'left'}}>Tesla model 3</div>
    <div style={{display:'flex',alignItems:'center', gap:'0.4rem'}}>
    <div style={{fontWeight:"bold"}}>13e</div>
    <div style={{color:'orange'}}>-30%</div>
    <div style={{textDecoration : "line-through"}}>23e</div>
    </div>
    

    <div style={{display:'flex',alignItems:'center', gap:'0.1rem'}}>
    <Rating name="half-rating" defaultValue={2.5} precision={0.5}  readOnly size="small" />
    (46 ratings)
    </div>
  
  </MainContainer>
  
}