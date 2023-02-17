import React from 'react'

// import Profile from './Components Class/Profile'
// import ProfileF from './Function Components/ProfileF'

// import Fprop  from './Function Components/Fprop'
// import Cprop from './Components Class/Cprop'

// import Kstate from './Components Class/Kstate'

// import HideShow from './Components Class/HideShow'
// import KEvent from './Components Class/KEvent'

import Header from './HeaderComponent/Header'
import Home from './ComponenetsRouting/Home'
import About from './ComponenetsRouting/About'
import Contact from './ComponenetsRouting/Contact'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";



export default function App() {
  return (
    <>

    {/* <Profile text="Class component paas ho gya props se"/>
    <ProfileF text="function component paas ho gya props se"/>

    <Fprop text="hello function props" data = {{name: 'karamveer Singh'}}/>
    <Cprop text="hello Class props"/> */}


    {/* <Kstate/> */}
    {/* <HideShow/> */}
    {/* <KEvent/> */}


    <Header/>
    <Routes>
    <Route   path="/" element={<Home/>}/>
    <Route exact path="/about" element={<About/>}/>
    <Route exact path="/contact" element={<Contact/>}/>
    </Routes>





    </>
  )
}
