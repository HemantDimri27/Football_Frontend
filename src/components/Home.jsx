import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {

  const [blog, setBlogs] = useState([])
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get('/api/blog')                      // proxy
    .then((res)=>{
      console.log("inside res");
      setBlogs(res.data)
    })

    console.log("inside useEffect");
  }, [])

  console.log("The blogs are: ", blog);




  const handleCardClick = (id) => {
    navigate(`/blog`);
  };





  // Inline styles as JavaScript objects
  const styles = {
    body: {
      backgroundColor: 'black',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      // height: '100vh',
      // display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#333',
      padding: '10px',
    },
    navbarTitle: {
      margin: 0,
      color: 'white',
    },
    authButtons: {
      display: 'flex',
    },
    button: {
      backgroundColor: 'white',
      color: 'black',
      border: 'none',
      padding: '5px 10px',
      marginLeft: '10px',
      cursor: 'pointer',
    },
    blogCardsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      justifyContent: 'center', 
      marginTop: '20px',
    },
    
    blogCard: {
      display: 'flex',
      flexDirection: 'row',
      width: '300px', 
      height: '200px',
      border: '1px solid white',
      padding: '10px',
      backgroundColor: '#444',
      borderRadius: '5px',
      overflow: 'hidden', 
    },
    
    blogCardImage: {
      width: '120px', 
      height: '100%',
      objectFit: 'cover', // Ensures image fits in the box while covering
    },
    
    blogCardDetails: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between', // Keeps title at the top and content below
      marginLeft: '10px',
      width: '100%',
    },
    
    blogCardTitle: {
      margin: 0,
      fontWeight: 'bold', 
      color: 'white',
    },
    
    blogCardContent: {
      marginTop: '5px',
      color: 'white',
      overflow: 'hidden',
      height: '120px', // Fixed height for content area
    },
    
  };

  return (
    <div style={styles.body}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <h2 style={styles.navbarTitle}>My Blog</h2>
        <div style={styles.authButtons}>
          <Link to="/register" style={{ textDecoration: 'none' }}>
            <button style={styles.button}>Register</button>
          </Link>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <button style={styles.button}>Login</button>
          </Link>
        </div>
      </nav>

      {/* Blog Cards Container */}
      <div style={styles.blogCardsContainer}>
        {blog.map((blog) => (
          <div style={styles.blogCard} key={blog._id} onClick={() => handleCardClick(blog._id)} >
            <div>
              <img src={blog.image} alt={blog.title} style={styles.blogCardImage} />
            </div>
            <div style={styles.blogCardDetails}>
              <h3 style={styles.blogCardTitle}>{blog.title}</h3>
              <p style={styles.blogCardContent}>{blog.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
