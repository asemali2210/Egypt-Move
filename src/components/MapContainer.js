import React from 'react'
import {Col, Row, Container } from 'react-bootstrap';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
function MapContainer(props) {
    const handleSubmit = e => {
        e.preventDefault();
    }
    return (
        <div className="home-map">
            <Container>
                <Row className="justify-content-between align-items-center">
                    <Col md={5} >
                        <div className="form">
                            <form onSubmit={handleSubmit}>
                                <div className="input-container">
                                    <input type="text" name="name" placeholder="الاسم"/>
                                </div>
                                <div className="input-container">
                                    <input type="email" name="email" placeholder="الايميل"/>
                                </div>
                                <div className="input-container">
                                    <input type="text" name="subject" placeholder="الموضوع"/>
                                </div>
                                <div className="input-container">
                                    <textarea rows="9"  placeholder="رسالتك"></textarea>
                                </div>
                                <button className="btn">أرسل رسالتك الان</button>
                            </form>
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="map-container position-relative" style={{width: "100%", height: "300px", marginTop: "30px"}}>
                            <Map google={props.google} zoom={10} >
                                <Marker
                                        name={'Current location'} />
                            </Map>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyCLe1S66hvwO4XjLfhOKo2ifylgXMR4Ig0"
})(MapContainer)
