import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import AllPosts from './components/Articles/AllPosts';
import OnePost from './components/Articles/OnePost';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={ <Home /> }/>
          <Route path="/projects" element={ <Projects /> }/>
          <Route path="/experience" element={ <Experience /> }/>
          <Route path="/articles" exact element={ <AllPosts /> }/>
          <Route path="articles/:slug" element={ <OnePost /> }/>
        </Routes>
      </BrowserRouter>
   </div>
  );
}

export default App;
