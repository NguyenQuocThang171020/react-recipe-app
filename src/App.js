import './App.css';
import Login from './Components/Login/Login';
import {auth} from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import Home from './Components/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import {  DishContext } from './Context/DishContext' 
import Cusine from './Components/Cusine/Cusine';
import Search from './Components/Search/Search';
import Receipt from './Components/Receipt/Receipt';
function App() {
  const [user] = useAuthState(auth)
  const [product,setProduct]= useState([])
  const [food,setFood] = useState([])
  const getFood =async()=>{
    const checkFood  = localStorage.getItem('Food');
    if(checkFood){
      setProduct(JSON.parse(checkFood))
    }
      const res = await axios.get("https://api.spoonacular.com/recipes/findByNutrients?apiKey=94c9864dcf114f608095504ce376bf7f&inCarbs=10&maxCarbs=50&number=20")
      const data = await res.data
      localStorage.setItem('Food',JSON.stringify(data))
      setFood(data)
  }
  const getPopular =async()=>{
    const check  = localStorage.getItem('popular');
    if(check){
      setProduct(JSON.parse(check))
    }
    else{
      const res = await axios.get("https://api.spoonacular.com/recipes/random?apiKey=94c9864dcf114f608095504ce376bf7f&number=10")
      const data = await res.data
      localStorage.setItem('popular',JSON.stringify(data.recipes))
      setProduct(data.recipes)
    }
  }
  useEffect(()=>{
    getFood()
    getPopular()
  },[])
  return (
    <div className="App">
      {!user ? <Login/> : (
        <DishContext.Provider value={{product,food}}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cuisine/:type' element={<Cusine/>}/>
            <Route path='/search/:name' element={<Search/>}/>
            <Route path='/detail/:id' element={<Receipt/>}/>
          </Routes>
        </BrowserRouter>
        </DishContext.Provider>
      )}
    </div>
  );
}

export default App;
