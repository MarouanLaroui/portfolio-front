import { useEffect, useState } from "react";
import { NumberContainer } from "./style";

export const Timer = ()=>{
  const [days, setDays] = useState("0");
  const [hours, setHours] = useState("0");
  const [minutes, setMinutes] = useState("0");
  const [seconds, setSeconds] = useState("0");

  const deadline = "August, 31, 2023";

  const formatNumberToString = (number:number) => {
    const strNumber =  number.toString();
    return strNumber.length < 2 ? "0" + strNumber : strNumber
  }
  const getTime = (deadline:string) => {
    const time =    Date.parse(deadline)  - Date.now();
    setDays(formatNumberToString(Math.floor(time / (1000 * 60 * 60 * 24))));
    setHours(formatNumberToString(Math.floor((time / (1000 * 60 * 60)) % 24)));
    setMinutes(formatNumberToString(Math.floor((time / 1000 / 60) % 60)));
    setSeconds(formatNumberToString(Math.floor((time / 1000) % 60)));
  }

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return <div style={{display:'flex',background:"#333", alignItems:'center'}}>
    <NumberContainer>{days}
    <span style={{fontSize:"0.5rem", paddingLeft:"0.1rem", color:"#999"}}>
      DAYS
    </span>
    
    </NumberContainer>
    <span style={{fontSize:'1.2rem'}}>:</span>
    <NumberContainer>{hours}
    <span style={{fontSize:"0.5rem", paddingLeft:"0.1rem", color:"#999"}}>
      HOURS
    </span>
    </NumberContainer>
    <span style={{fontSize:'1.2rem'}}>:</span>
    <NumberContainer>{minutes}
    <span style={{fontSize:"0.5rem", paddingLeft:"0.1rem", color:"#999"}}>
      MINUTES
    </span>
    </NumberContainer>
    <span style={{fontSize:'1.2rem'}}>:</span>
    <NumberContainer>{seconds}
    <span style={{fontSize:"0.5rem", paddingLeft:"0.1rem", color:"#999"}}>
      SECONDS
    </span>
    </NumberContainer>
  </div>
}