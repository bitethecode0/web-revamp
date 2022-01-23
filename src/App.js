import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Project from './components/Projects/Project';
import Article from './components/Articles/Article';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element= { <Home /> }/>
          <Route path="/projects" element= { <Project/> }/>
          <Route path="/articles" element={ <Article/> }/> 
        </Routes>
      </BrowserRouter>

   </div>
  );
}

export default App;
