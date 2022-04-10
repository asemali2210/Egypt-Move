import React from 'react'
import {Col,Row,Container} from 'react-bootstrap';
import place1 from '../img/mountain (1).jpg';
import place2 from '../img/mountain (2).jpg';
import place3 from '../img/mountain (3).jpg';
import place4 from '../img/mountain (4).jpg';
import Slider from "react-slick";
function Posts() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,   
        responsive:[
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
            },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            },
        ]
    }
    return (
        <div className="home-posts">
            <Container>
                <Row>
                    <Col md={12} lg={4}>
                        <div className="places">
                            <div className="header">
                            <h3>يوصى بها</h3>
                            <p>لوريم ايبسوم هو نموذج افتراضي </p>
                        </div>
                        <Row>
                            <Col lg={12} xs={6}>
                                <div className="d-flex align-items-center place">
                                    <img src={place1} alt="place"/>
                                    <h5>اوروبا</h5>
                                </div>
                            </Col>
                            <Col lg={12} xs={6}>
                                <div className="d-flex align-items-center place">
                                    <img src={place4} alt="place"/>
                                    <h5>افريقيا</h5>
                                </div>
                            </Col>
                            <Col lg={12} xs={6}>
                                <div className="d-flex align-items-center place">
                                    <img src={place2} alt="place"/>
                                    <h5>الاردن</h5>
                                </div>
                            </Col>
                            <Col lg={12} xs={6}>
                                <div className="d-flex align-items-center place">
                                    <img src={place3} alt="place"/>
                                    <h5>فلسطين</h5>
                                </div>
                            </Col>
                        </Row>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <Slider {...settings}>
                            <div className="post-content text-center">
                                <img src={place4} alt="place"/>
                                <h3>لوريم ايبسوم هو نموذج افتراضي</h3>
                                <p>وريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم</p>
                                <button className="btn"><a href="/">قراءة المزيد</a></button>
                            </div>
                            <div className="post-content text-center">
                                <img src={place2} alt="place"/>
                                <h3>لوريم ايبسوم هو نموذج افتراضي</h3>
                                <p>وريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم</p>
                                <button className="btn"><a href="/">قراءة المزيد</a></button>
                            </div>
                            <div className="post-content text-center">
                                <img src={place3} alt="place"/>
                                <h3>لوريم ايبسوم هو نموذج افتراضي</h3>
                                <p>وريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم</p>
                                <button className="btn"><a href="/">قراءة المزيد</a></button>
                            </div>
                            <div className="post-content text-center">
                                <img src={place4} alt="place"/>
                                <h3>لوريم ايبسوم هو نموذج افتراضي</h3>
                                <p>وريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم</p>
                                <button className="btn"><a href="/">قراءة المزيد</a></button>
                            </div>
                            <div className="post-content text-center">
                                <img src={place3} alt="place"/>
                                <h3>لوريم ايبسوم هو نموذج افتراضي</h3>
                                <p>وريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم</p>
                                <button className="btn"><a href="/">قراءة المزيد</a></button>
                            </div>
                            <div className="post-content text-center">
                                <img src={place2} alt="place"/>
                                <h3>لوريم ايبسوم هو نموذج افتراضي</h3>
                                <p>وريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم</p>
                                <button className="btn"><a href="/">قراءة المزيد</a></button>
                            </div>
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Posts
