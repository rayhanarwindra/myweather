import 'bootstrap/dist/css/bootstrap.min.css';
import './WeatherInfo.css'
import { Card, Col, Row } from 'react-bootstrap';

const WeatherInfo = ({
    main,
    sys,
    weather,
    wind,
    name,
    coord,
}) => {
    return(
        <div>
            <Card style={{ width: '100%' }} className="mt-2 card">
                <Card.Body>
                    <Card.Title><h3>{`${name}, ${sys.country} Weather`}</h3></Card.Title>
                    <Card.Text>
                        <Row>
                            <Col>
                                <div><h4>Today</h4></div>
                                <div><h1>{main.temp}</h1></div>
                                <div><h4>{weather[0].main}</h4></div>
                            </Col>
                            <Col>
                                <div><h4>Maximum: {main.temp_max}</h4></div>
                                <div><h4>Minimum: {main.temp_min}</h4></div>
                                <div><h4>Feels Like: {main.feels_like}</h4></div>
                            </Col>
                        </Row>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Row>
                <Col>
                    <Card style={{ width: '100%' }} className="mt-4">
                        <Card.Body>
                            <Card.Title><h3>Wind</h3></Card.Title>
                            <Card.Text>
                                <div><h4>Speed: {wind.speed}</h4></div>
                                <div><h4>Degree: {wind.deg}</h4></div>    
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card style={{ width: '100%' }} className="mt-4">
                        <Card.Body>
                            <Card.Title><h3>Coordinate</h3></Card.Title>
                            <Card.Text>
                                    <div><h4>Longitude: {coord.lon}</h4></div>
                                    <div><h4>Latitude: {coord.lat}</h4></div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
export default WeatherInfo;