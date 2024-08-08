import './App.css'
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import ACOTAR from '../public/1.png'
import Container from 'react-bootstrap/Container'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';


function App() {
  
const [thorns, setThorns] = useState("THORNS")
const [roses, setRoses] = useState("ROSES")


const handleChange = (event) => {
  if (event.target.value == "") {
    setThorns("THORNS");
  }
  else {
    setThorns(event.target.value);
  }
};

const handleChange2 = (event) => {
  if (event.target.value == "") {
    setThorns("ROSES");
  }
  else {
  setRoses(event.target.value);
  }
};


  return (
    <>
    <Container>
      <Navbar>
        <Button>Color Change</Button>
        <h1>ACOTAR Generator</h1>
        
      </Navbar>
      <div className='wrap'>
        <p className='thorns'>{thorns.toUpperCase()}</p>
        <img src={ACOTAR} className='cover' height={"450px"}/>
        <p className='roses'>{roses.toUpperCase()}</p>
        <Form>
          <Form.Control type="text" placeholder="THORNS" onChange={handleChange}></Form.Control>
          <Form.Control type="text" placeholder="ROSES" onChange={handleChange2}></Form.Control>
        </Form> 
      </div>
      </Container>
    </>
  )
}

export default App
