
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import TopBar from "./components/topbar/TopBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";


function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path='/' exact element={<Home />}></Route>
        <Route path='/register' element={user ? <Home /> : <Register />}></Route>
        <Route path='/login' element={user ? <Home /> : <Login />}></Route>
        <Route path='/write' element={user ? <Write /> : <Register />}></Route>
        <Route path='/settings' element={user ? <Settings /> : <Register />}></Route>
        <Route path='/post/:postId' element={<Single />}></Route>
      </Routes>
    </Router >
  );
}

export default App;
