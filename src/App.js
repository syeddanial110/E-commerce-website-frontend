import "./App.css";
import Header from "./components/Header";
import Shop from "./screens/Shop";
import Home from "./screens/Home";
import {BrowserRouter as Router, Route,Routes} from "react-router-dom"

function App() {
  return (
    <>
      {/* <Header /> */}

      <Router>
        <Routes> 
          <Route path="/" element={<Home />} />
          
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
