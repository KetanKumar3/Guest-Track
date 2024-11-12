import './App.css'
import Checkin from './components/Checkin'
import Front from './components/Front'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import QRCodeReader from './components/QRCodeReader'
import Checkout from './components/Checkout'
function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Front />} />
        <Route path='/checkin' element={<Checkin />} />
        <Route path='/qrcode' element={<QRCodeReader />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
