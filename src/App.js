import Navbar from './Navbar'
import Home from './Home'
import { BrowserRouter , Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Navbar/>
      <div className='content'>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>

    </div>
    </BrowserRouter>
  );
}


export default App;