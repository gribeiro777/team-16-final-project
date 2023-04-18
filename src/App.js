import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Home from "./home";
import Track from "./track"
import LoginPage from "./login";
import RegisterPage from "./register";

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
                   element={<LoginPage/>}/>
            <Route path='register'
                   element={<RegisterPage/>}/>
          </Routes>

        {/* </div> */}
      </BrowserRouter>
  );
}

export default App;
