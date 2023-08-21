import React, { useState } from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Button, Divider, IconButton, Popover } from "@mui/material";
import { CartItems } from "../cartItems";
import { ButtonContainer, PriceTitle } from "./style";

export const CartButton = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return <>
    <IconButton style={{color:'rgba(255, 255, 255, 0.87)'}} onClick={handleClick}>
      <ShoppingCartOutlinedIcon/>
    </IconButton>
    
    <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical:'top',
            horizontal:'right'
          }}
        >
          <div style={{backgroundColor:"#333"}}>
            <CartItems/>
            <Divider style={{margin:"0rem 1rem"}}/>
            <CartItems/>
            <Divider style={{margin:"0rem 1rem"}}/>
            <div style={{marginTop:'0.5rem'}}>
              <div style={{display:'flex', justifyContent:'space-between', paddingLeft:'2rem', paddingRight:'3rem', color:'white'}}>
                <PriceTitle>Subtotal : </PriceTitle>
                <span>$85,2 </span>
              </div>

              <div style={{display:'flex', justifyContent:'space-between', paddingLeft:'2rem', paddingRight:'3rem', color:'white'}}>
                <PriceTitle>Shipping Fees : </PriceTitle>
                <span>$3,2 </span>
              </div>

              <div style={{display:'flex', justifyContent:'space-between', paddingLeft:'2rem', paddingRight:'3rem', color:'white'}}>
                <PriceTitle>Total : </PriceTitle>
                <span style={{fontWeight:"bolder"}}>$98,31 </span>
              </div>
            </div>
            
            

            <ButtonContainer>
              <Button variant="contained" color="inherit" fullWidth>Purchase</Button>
            </ButtonContainer>
          </div>
        
        
      </Popover>
  </>
}