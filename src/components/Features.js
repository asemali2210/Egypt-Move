import React from 'react'
import {Col,Row,Container} from 'react-bootstrap';
function Features() {
    return (
        <div className="home-features">
            <Container>
                <Row>
                    <Col md={4}>
                        <div className="feature text-center">
                        <i className="fa fa-plane-departure"></i>
                            <h3>لوريم ايبسوم هو نموذج افتراضي</h3>
                            <p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم</p>
                            <a href="/">قراءة المزيد</a>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="feature text-center">
                        <i className="fa fa-gavel"></i>
                            <h3>لوريم ايبسوم هو نموذج افتراضي</h3>
                            <p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم</p>
                            <a href="/">قراءة المزيد</a>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="feature text-center">
                            <i className="fa fa-feather-alt"></i>
                            <h3>لوريم ايبسوم هو نموذج افتراضي</h3>
                            <p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم</p>
                                <a href="/">قراءة المزيد</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Features
