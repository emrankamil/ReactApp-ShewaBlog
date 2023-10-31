import Navbar from './Navbar'
import Home from './Home'
import Create from './Create'
import BlogDetail  from './BlogDetail';
import { BrowserRouter , Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Navbar/>
      <div className='content'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="create" element={< Create/>}/>
          <Route path="blogs/:id" element={<BlogDetail/>}/>
        </Routes>
      </div>

    </div>
    </BrowserRouter>
  );
}


export default App;