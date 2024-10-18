import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Blog = () => {

  const blogs = {
    content: "Key accomplishments: Five-time Ballon d'Or winner, five-time Champions League winner, three-time Premier League winner, two-time LaLiga winner, two-time Serie A winner, record for most men's international goals (130)\n\nCristiano Ronaldo's story is one of a supremely talented athlete, but matched with a drive and will to win. His career is best summed up by one of his own quotes: \"If you don't believe you are the best, then you will never achieve all that you are capable of.\" Ronaldo has shown that belief throughout more than two decades at the top of world soccer and often proved it to be true.\n\n\"He is the best,\" his former Real Madrid manager, Jose Mourinho, said. \"I saw Maradona a couple of times. I never saw Pelé. But Cristiano is amazing. This man is the best. Cristiano is a goal machine. There will never be another Ronaldo.\" -- Rob Dawson",
    image: "https://res.cloudinary.com/dimrihemant27/image/upload/v1724684336/ytjzjzb6lpqq9hdy5pg0.jpg",
    title : "1. Cristiano Ronaldo"
  }


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
        <h2 style={styles.blogTitle}>{blogs.title}</h2>
        <img src={blogs.image} alt={blogs.title} style={styles.blogImage} />
        <p style={styles.blogContent}>{blogs.content}</p>
      </div>
    </div>
  );

};

export default Blog;
