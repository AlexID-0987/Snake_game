import './App.css';
import Pole_container from "./Component/Pole_container";
import Header from "./Component/Header/Header";
import {Route, Routes} from "react-router-dom";
import FirstPageItem from "./Component/First_page/FirstPageItem";

function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path='/' element={<FirstPageItem/>}/>
                <Route path='/firstpageitem' element={<FirstPageItem/>}/>
                <Route path='/pole_container' element={<Pole_container/>}/>

            </Routes>

        </div>
  );
}

export default App;
