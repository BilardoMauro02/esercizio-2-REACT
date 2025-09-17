import { useState } from 'react'
import './App.css'
import Form from './components/molecules/Form';

function App() {
  
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  return (
    <Form formData={formData} onChange={handleChange}/>
  )
}

export default App
