import {BrowserRouter,Route,Routes} from "react-router-dom";
//import './App.scss';
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import Home from "./components/Pages/Home";
import './App.css'
import Updateuser from "./components/Users/Updateuser";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
     
     <Routes>
     <Route path="/home"   element={<Home/>}/>
     <Route path="/register" element={<Register/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/update/:id" element={<Updateuser/>}/>
     
</Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
























