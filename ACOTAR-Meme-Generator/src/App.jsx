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
const [myFontSize, setFontSize] = useState("50px")
const [myLineHeight, setLineHeight] = useState("4rem")

const [myFontSize2, setFontSize2] = useState("50px")
const [myLineHeight2, setLineHeight2] = useState("4rem")

const handleChange = (event) => {
  if (event.target.value == "") {
    setFontSize("50px")
    setThorns("THORNS");
    setLineHeight("4rem")
  }
  else {
    // breakpoint for 6 w
    if (event.target.value == "wwwwww") {
      console.log("6 w")
      setFontSize("40px")
      setLineHeight("4rem")
    }
    // breakpoint for 6 char 
    if (event.target.value.length > 6) {
      console.log("greater than 6")
      setFontSize("45px")
      setLineHeight("2.5rem")
    }

    if (event.target.value.length > 10) {
      console.log("greater than 10")
      setFontSize("35px")
    }

    if (event.target.value.length > 13) {
      console.log("greater than 13")
      setFontSize("25px")
    }  
    
    setThorns(event.target.value);
  }
};

const handleChange2 = (event) => {
  if (event.target.value == "") {
    setFontSize2("50px")
    setRoses("ROSES");
    setLineHeight2("4rem")
  }
  else {
    // breakpoint for 6 w
    if (event.target.value == "wwwwww") {
      console.log("6 w")
      setFontSize2("40px")
      setLineHeight2("4rem")
    }
    // breakpoint for 6 char 
    if (event.target.value.length > 6) {
      console.log("greater than 6")
      setFontSize2("45px")
      setLineHeight2("2.5rem")
    }

    if (event.target.value.length > 10) {
      console.log("greater than 10")
      setFontSize2("35px")
    }

    if (event.target.value.length > 13) {
      console.log("greater than 13")
      setFontSize2("25px")
    }  
    
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
        <div className='thorns-container'>
          <p className='thorns' style={{fontSize: myFontSize, lineHeight: myLineHeight}}>{thorns.toUpperCase()}</p>
        </div>
        <img src={ACOTAR} className='cover' height={"450px"}/>
        <div className='roses-container'>
          <p className='roses' style={{fontSize: myFontSize2, lineHeight: myLineHeight2}}>{roses.toUpperCase()}</p>
        </div>
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
