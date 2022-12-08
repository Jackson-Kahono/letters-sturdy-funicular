import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  // useEffect(() => {
  //   if(!localStorage.getItem("token")){
  //     window.location.href = "/login";
  //   }
  // }, [])

  const letters = [
    {
      id: 1,
      owner:"John Doe",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus sequi soluta reiciendis temporibus quia, eius minus in? Velit deleniti ratione soluta esse minus officiis tenetur sed porro quibusdam ullam.",
      date:"2021-09-01"
    },
    {
      id: 2,
      owner:"John Doe",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus sequi soluta reiciendis temporibus quia, eius minus in? Velit deleniti ratione soluta esse minus officiis tenetur sed porro quibusdam ullam.",
      date:"2021-09-01"
    },
    {
      id: 3,
      owner:"John Doe",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus sequi soluta reiciendis temporibus quia, eius minus in? Velit deleniti ratione soluta esse minus officiis tenetur sed porro quibusdam ullam.",
      date:"2021-09-01"
    },
    {
      id: 4,
      owner:"John Doe",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus sequi soluta reiciendis temporibus quia, eius minus in? Velit deleniti ratione soluta esse minus officiis tenetur sed porro quibusdam ullam.",
      date:"2021-09-01"
    },
  ];
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home create={false} letters={letters}/>} />
          <Route path="/create" element={<Home create={true} letters={[]}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
