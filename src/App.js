import React,{useEffect} from 'react';
import { BrowserRouter,Route,Routes }from 'react-router-dom'
import {HomePage}from './pages'
import {Navbar} from './components'
import WebFont, { load } from 'webfontloader';


const App = () => {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Inter"],
      },
    });
  }, []);

  return (
   <BrowserRouter>
    <Navbar/>
   <Routes>
      <Route path='/' element={<HomePage/>} />
   </Routes>
   </BrowserRouter>
  )
}

export default App