import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Home create={false} period={"all"} personal={false}/>} />
          <Route path="/create" element={<Home create={true} period={""}/>} personal={false} />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/personal" element={<Home create={false} period={""} personal={true}/>} />
          <Route path="/week" element={<Home create={false} period={"week"} personal={false}/>} />
          <Route path="/month" element={<Home create={false} period={"month"}/>} personal={false}/>
        </Routes>
      </Router>


    </div>
  );
}

export default App;
