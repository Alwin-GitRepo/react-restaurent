import './App.css';
import AllRest from './Components/AllRest/AllRest';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import ViewRest from './Components/ViewRest/ViewRest';
import { Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          {/* localhost:3000 - AllRest componet */}
          <Route path='/' element={<AllRest/>} />
          {/* view particular restaurent localhost:3000/view/:id  */}
          <Route path='/view/:id' element={<ViewRest/>} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
