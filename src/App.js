import {BrowserRouter,Route,Routes} from "react-router-dom";
import './App.scss';
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import Home from "./components/Pages/Home";
import AddUser from "./components/Users/AddUser";
import Updateuser from "./components/Users/Updateuser";
import Viewuser from './components/Users/Viewuser'



function App() {
  return (
    <div className="App">
    <BrowserRouter>
     
     <Routes>
     <Route path="/"  exact element={<Home/>}/>
     <Route path="/register" element={<Register/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/add" element={<AddUser/>}/>
     <Route path="/user/:id" element={<Viewuser/>}/>
     <Route path="/update/:id" element={<Updateuser/>}/>
    
</Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
























