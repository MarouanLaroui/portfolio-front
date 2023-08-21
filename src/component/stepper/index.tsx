import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { IconButton } from '@mui/material';

export type StepperParams = {
  initialValue:number
}

export const Stepper = ({initialValue}:StepperParams) => {
  return <div style={{display:'flex', alignItems:'center' ,gap:'0.3rem'}}>
  <IconButton style={{color:'rgba(255, 255, 255, 0.87)'}} >
      <RemoveOutlinedIcon  style={{fontSize:'0.8rem'}}/>
    </IconButton>

    <span style={{color:'white', fontSize:"1.2rem"}}>{initialValue}</span>

    <IconButton style={{color:'rgba(255, 255, 255, 0.87)'}}>
      <AddOutlinedIcon style={{fontSize:'0.8rem'}}/>
    </IconButton>
    </div>
}