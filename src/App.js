

import { Header } from './components/Header';
import { HomePage } from './page/HomePage';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
  
 
  return (
    <div  className="App">

    <Header/>
    <HomePage/>
   
    </div>
  );
}

export default App;
