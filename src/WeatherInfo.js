import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Card, Col, Row } from 'react-bootstrap';

const WeatherInfo = ({
    main,
    sys,
    weather,
    wind,
    name,
}) => {
    return(
        <div>
            <Card style={{ width: '100%' }} className="mt-4">
                <Card.Body>
                    <Card.Title>{`${name}, ${sys.country} Weather`}</Card.Title>
                    <Card.Text>
                        <Row>
                            <Col>
                                <div>Today</div>
                                <div><h1>{main.temp}</h1></div>
                                <div>{weather[0].main}</div>
                            </Col>
                            <Col>
                                <div>Maximum: {main.temp_max}</div>
                                <div>Minimum: {main.temp_min}</div>
                                <div>Feels Like: {main.feels_like}</div>
                            </Col>
                        </Row>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
export default WeatherInfo;