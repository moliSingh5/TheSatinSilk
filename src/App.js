import './App.css'
import Home from './pages/home'
import Search from './pages/search'
import About from './pages/about'
import Products from './pages/products'
import Profile from './pages/profile'
import Slidebar from './pages/nav'
import {Routes, Route} from 'react-router-dom';
import { GlobalStateProvider } from "./provider/GlobalStateContext";

function App() {

  return (
    <GlobalStateProvider>
    <div style={{display:'flex'}}>
      <Slidebar/>
    <div style={{marginLeft:200, padding:20,width:'100%'}}>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/search" element={<Search/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
    </div>
</div>
</GlobalStateProvider>
)}

export default App;