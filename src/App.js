import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Home from "./home";
import Track from "./track"
import Register from "./register";
import Login from "./login";

function App() {
  return (
      <BrowserRouter>
        {/* <div className="container"> */}
          <Routes>
            <Route index
                   element={<Home/>}/>
            <Route path='/tracks/:tid'
                   element={<Track/>}/>
            <Route path='login'
                   element={<Login/>}/>
            <Route path='register'
                   element={<Register/>}/>
          </Routes>

        {/* </div> */}
      </BrowserRouter>
  );
}

export default App;
