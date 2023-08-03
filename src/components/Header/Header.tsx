import React, { useEffect, useState } from "react";
import cx from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "../../store/global-context";


import { IoIosArrowDown } from "react-icons/io";

// --------- Images --------- //
import logo from "../../images/logo.svg";
import profile from "../../images/profile.jpg";


import { Col, Row, InputGroup, FormControl, Dropdown } from "react-bootstrap";

const Header = (props: any) => {
  const globalCtx = useContext(GlobalContext);
  let hideonScroll = globalCtx.showMenu;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // ----------------------- Active on Scroll Functionality -------------------------------- //
  const [onscrollActive, setOnscrollActive] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const scrollCheck: boolean = window.scrollY > 10;
      setOnscrollActive(scrollCheck);
    };

    // setting the event handler from web API
    document.addEventListener("scroll", onScroll);

    // cleaning up from the web API
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);
  // show ? disableBodyScroll(document.body) : enableBodyScroll(document.body);

  return (
    <>
      <header className={`${cx.mainHeader}`}>
       

        <Row className={`align-items-center ${cx.headerRow}`}>
          <Col
            md={12}
            lg={12}
            xl={12}
            className={`col-12 ${cx.headerMobile} ${
              globalCtx.showMore ? cx.show : ""
            }`}
          >
            <Row className="align-items-center">
              <Col md={6} lg={6}>
                <div className="d-flex align-items-center">
                  <NavLink to="#" className={`${cx.logo}`}>
                    <img src={logo} />
                  </NavLink>
                  <div className={`${cx.businessName}`}>Klassbook Pvt Ltd.</div>
                </div>
              </Col>
              <Col md={6} lg={6}
                className={`${cx.infoheaderRight}`}
              >
                <ul>
                  <li className={`${cx.profileBox}`}>
                    <Dropdown>
                      <Dropdown.Toggle variant="a" id="dropdown-basic">
                        <img src={profile} />
                        <div className={`${cx.menuTT}`}>
                        Seny Genymotes
                        </div>
                        <IoIosArrowDown className={`${cx.arrow}`}  />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item className={`${cx.borderM}`} href="#">
                          <p>Klassbook</p>
                          <h5>kb-business@gmail.com</h5>
                        </Dropdown.Item>
                        <Dropdown.Item href="/">
                          <h5>Logout</h5>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </header>
    </>
  );
};

export default Header;
