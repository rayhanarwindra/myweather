import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar, Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import WeatherInfo from './WeatherInfo'
import cloud from './cloud.png'

function App() {
  const [weather, setWeather] = useState({});

  const [value, setValue] = useState("");

  const [city, setCity] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(value);
  }

  const isEmpty = () => {
    console.log(Object.keys(weather).length);
    console.log(weather);
    return Object.keys(weather).length === 0;  
  }

  const getWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3e70d8524c9a70b8d20ee49b142ee968&units=metric`)
      .then(response => response.json())
      .then(data => setWeather(data));
  }

  useEffect( () => {
    getWeather();
    document.title = `Weather at ${city}`
  }, [city]);
  return (
    <div className="App">
      <Navbar className="navbar" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand style={{fontWeight:"bold", fontSize:"25px"}} href="#home">MyWeather</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </Container>
        </Navbar>
        <Container className='mt-3'>
        <Form onSubmit={handleSubmit}>
          <Row>
              <Col>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control className="form-input" value={value} onChange={handleChange} type="text" placeholder="Weather in your city..." />
                </Form.Group>
              </Col>
              <Col>
                <Button className="submit-button" type="submit">Submit</Button>
              </Col>
          </Row>
        </Form>          
        { isEmpty() || weather.cod !== 200 ?
        <div className="mt-5 text-center">
          <img style={{width: '25%', height:'25%'}} src={cloud} alt="Cloud"></img>
          <h3 style={{color: '#465AFA'}} className="mt-4">Please input a search query...</h3>
        </div>
        :
        <div>
          <WeatherInfo {...weather}></WeatherInfo>
        </div>
        }
        <p className="mt-2" style={{color: '#465AFA', position: 'absolute', bottom: '0'}}>Made by <span style={{fontWeight:'bold'}}>Rayhan Arwindra</span></p>
        </Container>
        
    </div>
  );
}

export default App;
