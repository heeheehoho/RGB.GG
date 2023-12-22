
import './App.css';
import { Routes, Route} from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import About2 from './pages/About2';
import Guide from './pages/Guide';
import Member from './pages/Member';

const App = () =>{
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/about2" element={<About2/>} />
      <Route path="/member" element={<Member />} />
      <Route path="/guide" element={<Guide/>} />
    </Routes>
  );
;}

export default App;
