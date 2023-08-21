import { CartItemContainer,ItemTitleText,PriceAndQuantityContainer,ItemQuantityText} from "./style"
import { Stepper } from "../stepper";

export const CartItems = () => {
  return <CartItemContainer>
    <img src="src/assets/cut-orange.svg" alt="Brand icon" style={{height:'65px',width:"65px"}}/>
    <div style={{width:'100%'}}>
      <ItemTitleText>Orange biologique</ItemTitleText>

      <PriceAndQuantityContainer>
        <ItemQuantityText>$98</ItemQuantityText>
        <Stepper initialValue={1} ></Stepper>
      </PriceAndQuantityContainer>
    
    </div>
  </CartItemContainer>
}