import {BrowserRouter,Route,Routes} from "react-router-dom";
import './App.scss';
import Navbar from "./components/layout/Navbar";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import Home from "./components/Pages/Home";
import AddUser from "./components/Users/addUser";
import Updateuser from "./components/Users/Updateuser";



function App() {
  return (
    <div className="App">
    <BrowserRouter>
      {/* <Navbar/> */}
     <Routes>
     <Route path="/"  exact element={<Home/>}/>
     <Route path="/register" element={<Register/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/add" element={<AddUser/>}/>
     <Route path="/update/:id" element={<Updateuser/>}/>



      
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
























// import './App.css';
// import {BrowserRouter, Route, Routes} from 'react-router-dom'
// import Students from './pages/Students';
// import Add from './pages/Add';
// import Update from './pages/Update';
// import './style.css';
// import Navbar from './Layout/Navbar';



// function App() {
//   return (
//     <div className="App">
//       <Navbar/>
//     <BrowserRouter>
//      <Routes>
//       <Route path="/" element={<Students/>}/>
//       <Route path="/add" element={<Add/>}/>
//       <Route path="/update/:id" element={<Update/>}/>
//     </Routes>
//     </BrowserRouter>
//     </div>
//   );
// }

// export default App;
