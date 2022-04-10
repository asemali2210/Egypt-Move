import React, {useState} from 'react'
import {Col,Row,Container} from 'react-bootstrap';
function Nav() {
    const [toggleNav, setToggleNav ] = useState(null);
    const openNav = ()=>  {
        toggleNav? setToggleNav(false) : setToggleNav(true)
    }
    return (
        <div className={`my-navbar ${toggleNav? `active` : ` `}`}>
            <Container>
                <Row className="justify-content-between align-items-center">
                    <Col md={6} xs={12}>
                        <div className="logo d-flex align-items-center">
                            <i className="fa fa-tree d-flex align-items-center justify-content-center"></i>
                            <a href="/" >
                            ايجبت موف      
                            </a>
                        </div>
                    </Col>
                    <Col md={6} xs={2} className="d-md-none" onClick={openNav}>
                        <div className="toggle-nav">
                            <i className={`fa fa-${toggleNav? `window-close` : `bars`}`}></i>
                        </div>
                    </Col>
                    <Col md={6} sm={12} className={`nav-menu ${toggleNav? `open` : (toggleNav==null)? ` ` : `close` }`} >
                        <div className="nav-links">
                            <ul className="
                            list-unstyled d-flex flex-md-row flex-column
                            align-items-center "> 
                                <li className="nav-link">
                                    <a href="/">الصفحة الرئيسية</a>
                                </li>
                                <li className="nav-link">
                                    <a href="/">أعمالنا</a>
                                </li>
                                <li className="nav-link">
                                    <a href="/">اتصل بنا</a>
                                </li>
                                <li className="nav-link">
                                    <a href="/">المدونات</a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    )
}

export default Nav
