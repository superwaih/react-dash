import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./style/dark.scss"
import './App.css';
import Home from './pages/home/Home';
import List from './pages/list/List';
import Login from './pages/login/Login';
import New from './pages/new/New';
import Single from './pages/single/Single';
import { productInputs, userInputs } from "./formSource";
import { useEffect, useState } from 'react';
import { ThemeState } from './context/ThemeProviderContext';

function App() {
  const {dark, setDark } = ThemeState()
  useEffect(() => {
    let lastname = window.localStorage.getItem("theme");
    // if (lastname != null) setDark(lastname)
    console.log("lastname", lastname)

}, [])

useEffect(() => {
    window.localStorage.setItem("theme", dark)


}, [dark])

 
  return (
    <div className= {dark ? "app dark" : ""}>
      <BrowserRouter >
      <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
          </Route>
          <Route path='users'>
                <Route index element={<List />} />
                <Route path=':userId' element={<Single />} />
                <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />

                
          </Route>

          <Route path='products' >
              <Route index element={<List />} />
              <Route path=':productId' element={<Single />} />
              <Route path='new' element={<New inputs={productInputs} title="Add new product" />} />

          </Route>
        </Routes>

      </BrowserRouter>
     {/* <Home /> */}
    </div>
  );
}

export default App;
