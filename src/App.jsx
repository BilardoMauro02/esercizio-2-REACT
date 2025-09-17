import { useState } from 'react'
import './App.css'
import Form from './components/molecules/Form';

function App() {
  
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e) =>{
        e.preventDefaut();
        console.log(formData)
  }

  
  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  return (
    <Form formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}/>

  )
}

export default App
