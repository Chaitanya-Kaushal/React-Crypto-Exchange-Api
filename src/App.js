import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Exchanges from './Components/Exchanges';
import Header from './Components/Header';
import Home from './Components/Home';
import Coins from './Components/Coins';
import CoinsDetail from './Components/CoinsDetail';

function App() {
  return (
    <>
    
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/exchange' element={<Exchanges/>} />
        <Route path='/coin' element={<Coins/>} />
        <Route path='/coin/:id' element={<CoinsDetail/>} />

      </Routes>
      
    </Router>
    
    </>
  );
}

export default App;
