import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import MyNavbar from "./components/MyNavbar";
import List from "./pages/List";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Orders from "./pages/Orders";
import OrderDetail from "./pages/OrderDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <MyNavbar/>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book/list" element={<List />} />
        <Route path="/book/view/:bookId" element={<Detail/>}/>
        <Route path="/book/orders" element={<Orders/>}/>
        <Route path="/books/orders/:bookId" element={<OrderDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
