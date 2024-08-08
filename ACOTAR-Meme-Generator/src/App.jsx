import './App.css'
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ACOTAR from '../public/1.png'
import ACOMAF from '../public/2.png'
import Container from 'react-bootstrap/Container'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';


function App() {
  
const [thorns, setThorns] = useState("THORNS")
const [roses, setRoses] = useState("ROSES")
const [myFontSize, setFontSize] = useState("50px")
const [myLineHeight, setLineHeight] = useState("4rem")
const [cover, setCover] = useState("THORNS")
const [myFontSize2, setFontSize2] = useState("50px")
const [myLineHeight2, setLineHeight2] = useState("4rem")

const handleChange = (event) => {
  if (event.target.value == "") {
    setFontSize("50px")
    setThorns(cover);
    setRoses(cover == "THORNS"? "ROSES" : "FURY")
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

 const handleClick = () =>{
  console.log("Click")
  setCover((prevText) => (prevText === "THORNS" ? "MIST" : "THORNS"))

  if (thorns == "THORNS") {
    setThorns("MIST")
  }

  if (roses == "ROSES") {
    setRoses("FURY")
  }

  if (thorns == "MIST"){
    setThorns("THORNS")
  }

  if (roses == "FURY"){
    setRoses("ROSES")
  }

  console.log(cover)
  console.log(thorns)
}

  return (
    <>
    <Container>
      <Navbar>
        <Button onClick={handleClick} className='color-changer' style={{backgroundColor: cover == "MIST"? "#ee3a4b" : "#239780"}}></Button>
      </Navbar>

      <div className='center'>
        
      <div className='wrap'>
        <div className='thorns-container'>
          <p className='thorns' style={{fontSize: myFontSize, lineHeight: myLineHeight}}>{thorns.toUpperCase()}</p>
        </div>
        <img src={cover == "THORNS"? ACOTAR : ACOMAF} className='cover' height={"450px"}/>
        <div className='roses-container'>
          <p className='roses' style={{fontSize: myFontSize2, lineHeight: myLineHeight2}}>{roses.toUpperCase()}</p>
        </div>
        <Form style={{margin:"1rem"}}>
          <Form.Control style={{marginBottom:"1rem"}} type="text" placeholder={thorns} onChange={handleChange}></Form.Control>
          <Form.Control type="text" placeholder={roses} onChange={handleChange2}></Form.Control>
        </Form> 
      </div>

      </div>
      <footer style={{textAlign:"center"}}> 
        <p>Take a screenshot to save!</p>
        <p>Designed by <a href="https://angelageorge.com">Angela George</a> © 2024</p>
      </footer>

      </Container>
    </>
  )
}

export default App
