import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar, Container, Form, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import WeatherInfo from './WeatherInfo'

function App() {
  const [weather, setWeather] = useState({});

  const emptyData = () => {
    console.log(Object.keys(weather).length);
    console.log(weather);
    return Object.keys(weather).length === 0;  
  }

  useEffect( () => {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=tangerang&appid=3e70d8524c9a70b8d20ee49b142ee968&units=metric')
      .then(response => response.json())
      .then(data => setWeather({data}));
  }, []);
  return (
    <div className="App">
      <Navbar className="navbar" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand style={{fontWeight:"bold", fontSize:"27px"}} href="#home">MyWeather</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </Container>
        </Navbar>
        <Container className='mt-4'>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Weather in your city..." />
          </Form.Group>
          <Button variant="primary" type="submit">Submit</Button>
        </Form>          
        { emptyData() || weather.cod === 429 ?
        <div>
          <img src="public/cloud.png" alt="Cloud"></img>
          <h3>Please input a search query...</h3>
        </div>
        :
        <div>
          <WeatherInfo {...weather.data}></WeatherInfo>
        </div>
        }
        </Container>
    </div>
  );
}

export default App;
