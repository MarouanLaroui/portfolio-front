
import { SearchOutlined } from '@mui/icons-material'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import './App.css'
import { BannerImage } from './component/bannerImage'
import { BannerItem } from './component/bannerItem'
import { Navbar } from './component/navbar'
import { Divider } from '@mui/material'
import { CatchPhrase } from './component/catchPhrase';
import { Product } from './component/product';
import { Footer } from './component/footer';

function App() {

  return (
    <>
    <div style={{padding:"0 0rem"}}>
    <Navbar></Navbar>
    </div>
    
    <BannerImage/>
    <div style={{padding:"0 20rem"}}>
    <div style={{display:"flex", alignItems:"center", paddingTop:'2.5rem', gap:"1rem"}}>
      <BannerItem icon={<ElectricBoltIcon style={{fontSize:"2.5rem"}}/>} title=" Fast delivery"   description='Orders are usually shipped and received within 3 days of office days !'
      />

      <Divider orientation="vertical" flexItem style={{background:"#888", margin:"0.5rem 0"}}/>

      <BannerItem icon={<AttachMoneyIcon style={{fontSize:"2.5rem"}}/>} title=" Satisfied or refunded" description='If you are not satisfied with the product you can send it back within 15 days !'
      />

      <Divider orientation="vertical" flexItem style={{background:"#888", margin:"0.5rem 0"}}/>

      <BannerItem icon={<SearchOutlined style={{fontSize:"2.5rem"}}/>} title=" Fast delivery" description='Orders are usually shipped and received within 3 days of office days!'
      />
    </div>

    <CatchPhrase/>

    <div style={{fontWeight:'bold', paddingBottom:'1.5rem', display:'flex', justifyContent:'space-between'}}>
      <span style={{fontSize:'1.2rem'}}>
        Special items  
      </span>
      
      <span>See more..</span>
      
      </div>
    <div style={{display:"flex", justifyContent:'space-around', paddingBottom:'4rem'}}>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
    </div>

    </div>
    
    <Footer/>
    
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
