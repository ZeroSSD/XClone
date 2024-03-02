import {Routes, Route} from 'react-router-dom';
import './App.css';
import Homepage from './Components/Homepage/Homepage';
import Authentication from './Components/Authentication/Authentication';


function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={true?<Homepage/>:<Authentication/>}/>
          

      </Routes>
    </div>
  );
}

export default App;
