import './App.css';
import React from 'react';
import {BrowserRouter, Routes,Route,Link,Outlet} from 'react-router-dom'
import Counter from './counter/counter';
import Imagesearch from './imagesearch/imagesearch';
import Weather from './weatherapi/weather';
import Todolist from './todo/todolist';
import "./App.css";
import Countries from './dropdown/dropdown';

function App() {
  return (

    <BrowserRouter>
      <nav>
        <Link className='link' to="/counter">COUNTER</Link> <br></br>
        <Link className='link' to="/todo">TODO</Link><br></br>
        <Link className='link' to="/imagesearch">IMAGE SEARCH</Link><br></br>
        <Link className='link' to="/weather">WEATHER REPORT</Link><br></br>
        <Link className='link' to="/dropdown">COUNTRIES</Link>


      </nav>
      <Routes>
        <Route path="counter"  element={<Counter></Counter>}></Route>
        <Route path="todo" element={<Todolist></Todolist>}></Route>
        <Route path="imagesearch" element={<Imagesearch></Imagesearch>}></Route>
        <Route path="weather" element={<Weather></Weather>}></Route>
        <Route path="dropdown" element={<Countries></Countries>}></Route>

      </Routes>


    </BrowserRouter>

  );
}
export default App;