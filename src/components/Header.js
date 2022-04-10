import React from 'react'
import {Col,Row,Container} from 'react-bootstrap';
import { DatePicker, Space,Select } from 'antd';

function Header() {
    const handleSubmit = e => {
        e.preventDefault();
    }
    const { Option } = Select;
    return (
        <div className="home-header"> 
            <div className="overlay"></div>
            <Container >
                <Row className="align-items-center justify-content-center">
                    <Col>
                        <div className="form">
                            <form onSubmit={handleSubmit}>
                                <Row  className="align-items-center justify-content-center">
                                    <Col md={4}>
                                        <div className="input-container city">
                                            <input name="city" placeholder="اسم المدينة"/>
                                            <i className="fa fa-thumbtack"></i>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className="input-container">
                                            <Space className="custom-ant" direction="vertical">
                                                <DatePicker  placeholder="وقت السفر" onChange={(date, dateString)=>console.log(dateString)} />
                                            </Space >
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className="input-container">
                                            <Space className="custom-ant" direction="vertical">
                                                <DatePicker placeholder="وقت الدفع" onChange={(date, dateString)=>console.log(dateString)} />
                                            </Space>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className="input-container">
                                            <Select defaultValue="بالغ"  className="custom-antd-select">
                                                <Option value="1">1</Option>
                                                <Option value="2">2</Option>
                                                <Option value="3">3</Option>
                                                <Option value="4">4</Option>
                                                <Option value="5">5</Option>
                                                <Option value="6">6</Option>
                                                <Option value="7">7</Option>
                                                <Option value="8">8</Option>
                                                <Option value="9">9</Option>
                                                <Option value="10">10</Option>
                                            </Select>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className="input-container">
                                            <Select defaultValue="أطفال"  className="custom-antd-select" >
                                                <Option value="1">1</Option>
                                                <Option value="2">2</Option>
                                                <Option value="3">3</Option>
                                                <Option value="4">4</Option>
                                                <Option value="5">5</Option>
                                                <Option value="6">6</Option>
                                                <Option value="7">7</Option>
                                                <Option value="8">8</Option>
                                                <Option value="9">9</Option>
                                                <Option value="10">10</Option>
                                            </Select>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className="input-container">
                                            <Select defaultValue="عدد الحجرات" className="custom-antd-select" >
                                                <Option value="1">1</Option>
                                                <Option value="2">2</Option>
                                                <Option value="3">3</Option>
                                                <Option value="4">4</Option>
                                                <Option value="5">5</Option>
                                                <Option value="6">6</Option>
                                                <Option value="7">7</Option>
                                                <Option value="8">8</Option>
                                                <Option value="9">9</Option>
                                                <Option value="10">10</Option>
                                            </Select>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className="check-btn">
                                            <button className="btn">استعلام</button>
                                        </div>
                                    </Col>
                                    <Col md={12}>
                                        <div className="d-flex align-items-center alert justify-content-between">
                                            <p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه </p>
                                            <a href="/">مساعدة؟</a>
                                        </div>
                                    </Col>
                                </Row>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default Header
