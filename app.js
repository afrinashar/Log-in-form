
import './App.css';
import Dashboard from './Dashboard'
import Login from './Login';
import Signup from './Signup';
import {Router,Route} from "react-router-dom"; 
import { Switch } from '@material-ui/core';

function App() {

  return (
  <> 
   <div className="in">
    <div><Login></Login></div>
    <div> <Signup></Signup></div>
    <div></div>
  </div>

  </> )
}

export default App;
