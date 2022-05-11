
import './App.css';
import About from './components/About';
import { BrowserRouter, Route, Routes, Switch} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/About"  element={<About/>}>
         </Route>
   
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
