import { Container, IconContainer, ItemContainer } from "./style"
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { CartButton } from "../cartButton";

export const Navbar = ()=> {
  return <Container>
    <div style={{display:'flex', alignItems:'center', gap:"0.5rem", justifyContent:"center"}}>
    <img src="src/assets/orange.svg" alt="Brand icon" style={{height:'40px',width:"40px"}}/>
    <span style={{color:'orange', fontWeight:'bold'}}>Orange</span>
    </div>
    
    
    <ItemContainer>
      <div>Homme</div>
      <div>Femme</div>
      <div>Unisexe</div>
    </ItemContainer>
    <IconContainer>
      <SearchOutlinedIcon/>
      <PersonOutlineOutlinedIcon/>
      <CartButton/>
    </IconContainer>
  </Container>
}