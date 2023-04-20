import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Home from "./home";
import Track from "./track"

function App() {
  return (
      <BrowserRouter>
        <div>
          <Routes>
            <Route index
                   element={<Home/>}/>
            <Route path='/tracks/:tid'
                   element={<Track/>}/>
          </Routes>

        </div>
      </BrowserRouter>
  );
}

export default App;
