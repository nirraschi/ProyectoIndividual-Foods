import './App.css';
import{Route} from 'react-router-dom';
import Home from "./views/Home/Home";
import Landing from "./views/Landing/Landing";
import Form from "./views/Form/Form.jsx";
import Detail from "./views/Detail/Detail";
//import NavBar from './views/components/NavBar/NavBar';


function App() {
  
  return (   
  
    <div className="App">

    {/* <NavBar></NavBar> */}
    <Route exact path="/" component={Landing}/>
    <Route path="/home" component={Home}/>
    <Route path="/create" component={Form}/>
    <Route path="/recipes/:id" component={Detail}/>
    
    </div>
  );
}

export default App;
