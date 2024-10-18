import React, { useState } from 'react';
import axios from 'axios';

const AddBlog = () => {
  
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    image: null, 
  })

  const [responseMessage, setResponseMessage] = useState('');
  const [isLogined, setIsLogined] = useState(false);

  // Handle image file selection
  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData(prev => ({...prev, [name]: value}))
  }

   // Handle image file selection, coz you can't handle image like text, so remove value={...}
   const handleImageChange = (event) => {
    const file = event.target.files[0]; 
    setFormData(prev => ({...prev, image: file})); 
  }

  // my old-one
  // const handleSubmit = async(event) => {
  //   event.preventDefault();
  //   const response = await axios.post('/api/blog/add', formData)
  //   console.log(response);
  //   setResponseMessage(response.data); 
  //   console.log("formData: ", formData)
  // }


  const handleSubmit = async(event) => {
    event.preventDefault();

    // Create a FormData object to handle file uploads
    const data = new FormData();
    data.append('image', formData.image);
    data.append('title', formData.title);
    data.append('content', formData.content);

    try {
      const response = await axios.post('/api/blog/add', data, {
        headers: {
          'Content-Type': 'multipart/form-data', // Ensure form data is being sent
        }
      });
      console.log(response);
      setResponseMessage(response.data);
      setIsLogined(true);
    } catch (error) {
      console.error('Error uploading blog:', error);
      setResponseMessage('Error uploading blog');
    }
  }



  // Inline styles as JavaScript objects
  const styles = {
    body: {
      backgroundColor: 'black',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    formContainer: {
      border: '1px solid white',
      padding: '20px',
      borderRadius: '5px',
      width: '400px',
      backgroundColor: '#333',
    },
    formTitle: {
      textAlign: 'center',
      marginBottom: '20px',
      color: 'white',
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      color: 'white',
    },
    input: {
      width: '100%',
      padding: '8px',
      borderRadius: '4px',
      border: '1px solid white',
      backgroundColor: '#444',
      color: 'white',
    },
    textarea: {
      width: '100%',
      height: '100px',
      padding: '8px',
      borderRadius: '4px',
      border: '1px solid white',
      backgroundColor: '#444',
      color: 'white',
      resize: 'none',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: 'white',
      color: 'black',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    responseMessage: {
      marginTop: '20px',
      color: 'white',
    },
    addButton: {
      marginTop: '20px',
      padding: '10px 20px',
      backgroundColor: 'green',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    }
  };

  return (
    <div style={styles.body}>
      <div style={styles.formContainer}>
        <h2 style={styles.formTitle}>Add Blog</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="image">Upload Image</label>
            <input style={styles.input} type="file" id="image" accept="image/*" name="image"  onChange={handleImageChange} required />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="title" >Title</label>
            <input style={styles.input} type="text" id="title" placeholder="Enter blog title" name="title" value={formData.title} onChange={handleChange} required />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="content">Content</label>
            <textarea style={styles.textarea} id="content" placeholder="Enter blog content" name="content" value={formData.content} onChange={handleChange} required />
          </div>
          <button type="submit" style={styles.button}>Add Blog</button>
        </form>

        {/* Show response message */}
        <p style={styles.responseMessage}>{responseMessage}</p>

        {/* Conditionally render Add Blog button if registration is successful */}
        {isLogined && (
          <button style={styles.addButton} onClick={() => window.location.href = '/'}>
            Home
          </button>
        )}

      </div>
    </div>
  );
};

export default AddBlog;
