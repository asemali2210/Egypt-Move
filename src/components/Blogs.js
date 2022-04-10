import React from 'react'
import {Col, Row, Container } from 'react-bootstrap';
import placeImg1 from '../img/mountain (2).jpg';
import placeImg2 from '../img/mountain (3).jpg';
import placeImg3 from '../img/mountain (4).jpg';
function Blogs() {
    return (
        <div className="home-blogs">
            <Container>
                <Row className="align-items-center">
                    <Col md={8} className="blogs-container">
                        <div className="blog d-flex justify-content-between align-items-center">
                            <div className="blog-content ">
                                <h4>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم</h4>
                                <p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال</p>
                            </div>
                            <img src={placeImg1} alt="blog"/>
                        </div>
                        <div className="blog d-flex justify-content-between align-items-center">
                            <div className="blog-content">
                                <h4>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم</h4>
                                <p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال</p>
                            </div>
                            <img src={placeImg2} alt="blog"/>
                        </div>
                        <div className="blog d-flex justify-content-between align-items-center">
                            <div className="blog-content">
                                <h4>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم</h4>
                                <p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال</p>
                            </div>
                            <img src={placeImg3} alt="blog"/>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="d-flex flex-column align-items-center justify-content-center left">
                            <h2>افريقيا</h2>
                            <span>مصر</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Blogs;
