import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes 

} from "react-router-dom";


import Home from './components/pages/Home'
import Filiados from './components/pages/Filiados'
import Financeiro from './components/pages/Financeiro'
import NovoFiliado from './components/pages/NovoFiliado'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'



function App() {
  return (  
      <Router>
      <Navbar/>
      <Routes>         
              <Route path='/' element={<Home/>}/>
              <Route path='/novofiliado' element={<NovoFiliado/>}/>
              <Route path='/filiados' element={<Filiados/>}/>
              <Route path='/financeiro' element={<Financeiro/>}/>
      </Routes>

      <Footer/>       
      </Router>     
   
  );
}

export default App;
