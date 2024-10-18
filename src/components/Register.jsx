import axios from 'axios';
import React, {useState} from 'react';

const Register = () => {  


  const [formData, setFormData] = useState({
    name: '',
    userName: '',
    email: '',
    password: ''
  })


  const [responseMessage, setResponseMessage] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);


  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData(prev => ({...prev, [name]: value}))
  }


  const handleSubmit = async(event)=> {
    event.preventDefault();
    const response = await axios.post('/api/blog/register', formData)
    console.log(response);
    setResponseMessage(response.data); 
    if(response.data.charAt(0) === 'U')
    setIsRegistered(true);
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
      width: '300px',
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
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: 'white',
      color: 'black',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#ddd',
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
        <h2 style={styles.formTitle}>Register</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="name">Name</label>
            <input style={styles.input} type="text" id="name" placeholder="Enter your name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="username">Username</label>
            <input style={styles.input} type="text" id="userName" placeholder="Enter your userName" name="userName" value={formData.userName} onChange={handleChange} required />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="email">Email</label>
            <input style={styles.input} type="email" id="email" placeholder="Enter your email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="password">Password</label>
            <input style={styles.input} type="password" id="password" placeholder="Enter your password" name="password" value={formData.password} onChange={handleChange} required />
          </div>
          <button type="submit" style={styles.button}>Register</button>
        </form>

        {/* Show response message */}
        <p style={styles.responseMessage}>{responseMessage}</p>

        {/* Conditionally render Add Blog button if registration is successful */}
        {isRegistered && (
          <button style={styles.addButton} onClick={() => window.location.href = '/addBlog'}>
            Add Blog
          </button>
        )}

      </div>
    </div>
  );
};

export default Register;
