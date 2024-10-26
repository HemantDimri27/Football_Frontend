
import React, {createContext, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import AddBlog from './components/AddBlog';
import Blog from './components/Blog';

export const DataContext = createContext();


function App() {
  const [data, setData] = useState(null); //1.blog, 2.user

  return (
    <DataContext.Provider value={{data, setData}}>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/addBlog" element={<AddBlog />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
      </Router>
    </DataContext.Provider>
  );
}

export default App;

