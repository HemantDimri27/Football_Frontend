import React, { useContext } from 'react';
import { DataContext } from '../App';

const Blog = () => {

  const {data} = useContext(DataContext);


  // Inline styles as JavaScript objects
  const styles = {
    body: {
      backgroundColor: 'black',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
    },
    blogContainer: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid white',
      borderRadius: '5px',
      backgroundColor: '#444',
    },
    blogImage: {
      width: '100%',
      height: 'auto',
      marginBottom: '20px',
      borderRadius: '5px',
    },
    blogTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: 'white',
    },
    blogContent: {
      color: 'white',
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.blogContainer}>
        <h2 style={styles.blogTitle}>{data.title}</h2>
        <img src={data.image} alt={data.title} style={styles.blogImage} />
        <p style={styles.blogContent}>{data.content}</p>
      </div>
    </div>
  );

};

export default Blog;
