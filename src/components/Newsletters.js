import React from 'react'
import {Col,Row,Container} from 'react-bootstrap';
function Newsletters() {
    return (
        <div className="home-newsletters"> 
            <Container>
                <Row className="">
                    <Col>
                        <div className="newsletters-content text-center d-flex flex-column align-items-center justify-content-center">
                            <h2>نحن هنا لمساعدتك؟</h2>
                            <p>انضم الي القائمة البريدية</p>
                            <button className="btn"><a href="/">اشترك الان</a> </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Newsletters
