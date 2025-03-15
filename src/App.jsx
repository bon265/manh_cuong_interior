
import Header from './components/layouts/Header/Header.jsx'
import { Route,Routes } from 'react-router-dom';
import HomePage from './components/layouts/pages/HomePage/HomePage.jsx';
import Duan from './components/layouts/pages/Duan/Duan.jsx';
import Tuvan from './components/layouts/pages/tuvanthietke/Tuvan.jsx';
import LienHe from './components/layouts/pages/Lienhe/LienHe.jsx';
import Blogs from './components/layouts/pages/tin_tuc/Blog.jsx';
import Footer from './components/layouts/Footer/Footer.jsx';

import './App.css'



function App() {
 
  
  return (
    <>
    <Header  />
    {/* slide_ảnh */}
    <Routes  >
      <Route path='/' element={<HomePage/>}/>
      <Route path='/duan' element={<Duan/>}/>
      <Route path='/tuvan' element={<Tuvan/>}/>
      <Route path='/lienhe' element={<LienHe/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
