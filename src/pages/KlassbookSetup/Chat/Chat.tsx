import React, { useCallback, useState } from "react";
import st from "../../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./Chat.module.scss";
import {
  Row,
  Col,
  Badge,Dropdown
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {FiMoreHorizontal} from "react-icons/fi";

import {GrAttachment,GrGallery} from "react-icons/gr";
import {FiCamera} from "react-icons/fi";
import {FaTelegramPlane} from "react-icons/fa";
import {TiLocationOutline} from "react-icons/ti";


// --------- Images --------- //
import img1 from "../../../images/demo-img.jpg";


export default function Chat() {

  return (
    <>
      <section className={`${st.pageWrapper}`}>
        <div className={`${st.pageWrapperInside} p-0`}>
              <Row className="m-0">
                <Col md={3} className={`${cx.chatList} p-0`}>
                  <ul>
                    <Dropdown className={`${cx.dropdownList} ${cx.dropDownRemove}`}>
                      <Dropdown.Toggle id="dropdown-basic">
                      Pinned
                      </Dropdown.Toggle>
                    </Dropdown>
                    <li>
                      <button className={`${cx.listMenu} ${cx.active}`}>
                        <img src={img1} className={`${cx.profileImg}`} />
                        <div className={`${cx.chatListBody}`}>
                          <h5>Kris Lagard</h5>
                          <p>Hi! Let me know if is it possible an... </p>
                          <div className={`${cx.timeBox}`}>
                            <p>1:40 PM</p>
                            <Badge>5</Badge>
                          </div>
                        </div>
                        <Dropdown className={`${cx.dropdownItem}`}>
                          <Dropdown.Toggle id="dropdown-basic">
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <ul>
                              <li>
                                <NavLink className={`${cx.menu}`} to="#">Pin</NavLink>
                              </li>
                            </ul>
                          </Dropdown.Menu>
                        </Dropdown>
                      </button>
                    </li>
                    <li>
                      <button className={`${cx.listMenu}`}>
                        <img src={img1} className={`${cx.profileImg}`} />
                        <div className={`${cx.chatListBody}`}>
                          <h5>Kris Lagard</h5>
                          <p>Hi! Let me know if is it possible an... </p>
                          <div className={`${cx.timeBox}`}>
                            <p>Tue</p>
                            {/* <Badge>5</Badge> */}
                          </div>
                        </div>
                        <Dropdown className={`${cx.dropdownItem}`}>
                          <Dropdown.Toggle id="dropdown-basic">
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <ul>
                              <li>
                                <NavLink className={`${cx.menu}`} to="#">Unpin</NavLink>
                              </li>
                            </ul>
                          </Dropdown.Menu>
                        </Dropdown>
                      </button>
                    </li>
                    <li>
                      <button className={`${cx.listMenu}`}>
                        <img src={img1} className={`${cx.profileImg}`} />
                        <div className={`${cx.chatListBody}`}>
                          <h5>Kris Lagard</h5>
                          <p>Hi! Let me know if is it possible an... </p>
                          <div className={`${cx.timeBox}`}>
                            <p>08.12.22</p>
                            {/* <Badge>5</Badge> */}
                          </div>
                        </div>
                        <Dropdown className={`${cx.dropdownItem}`}>
                          <Dropdown.Toggle id="dropdown-basic">
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <ul>
                              <li>
                                <NavLink className={`${cx.menu}`} to="#">Unpin</NavLink>
                              </li>
                            </ul>
                          </Dropdown.Menu>
                        </Dropdown>
                      </button>
                    </li>
                    <Dropdown className={`${cx.dropdownList} ${cx.dropDownRemove}`}>
                      <Dropdown.Toggle id="dropdown-basic">
                      Chats
                      </Dropdown.Toggle>
                    </Dropdown>
                    <li>
                      <button className={`${cx.listMenu}`}>
                        <img src={img1} className={`${cx.profileImg}`} />
                        <div className={`${cx.chatListBody}`}>
                          <h5>Kris Lagard</h5>
                          <p>Hi! Let me know if is it possible an... </p>
                          <div className={`${cx.timeBox}`}>
                            <p>08.12.22</p>
                            {/* <Badge>5</Badge> */}
                          </div>
                        </div>
                        <Dropdown className={`${cx.dropdownItem}`}>
                          <Dropdown.Toggle id="dropdown-basic">
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <ul>
                              <li>
                                <NavLink className={`${cx.menu}`} to="#">Pin</NavLink>
                              </li>
                            </ul>
                          </Dropdown.Menu>
                        </Dropdown>
                      </button>
                    </li>
                    <li>
                      <button className={`${cx.listMenu}`}>
                        <img src={img1} className={`${cx.profileImg}`} />
                        <div className={`${cx.chatListBody}`}>
                          <h5>Kris Lagard</h5>
                          <p>Hi! Let me know if is it possible an... </p>
                          <div className={`${cx.timeBox}`}>
                            <p>08.12.22</p>
                            {/* <Badge>5</Badge> */}
                          </div>
                        </div>
                        <Dropdown className={`${cx.dropdownItem}`}>
                          <Dropdown.Toggle id="dropdown-basic">
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <ul>
                              <li>
                                <NavLink className={`${cx.menu}`} to="#">Pin</NavLink>
                              </li>
                            </ul>
                          </Dropdown.Menu>
                        </Dropdown>
                      </button>
                    </li>
                    <li>
                      <button className={`${cx.listMenu}`}>
                        <img src={img1} className={`${cx.profileImg}`} />
                        <div className={`${cx.chatListBody}`}>
                          <h5>Kris Lagard</h5>
                          <p>Hi! Let me know if is it possible an... </p>
                          <div className={`${cx.timeBox}`}>
                            <p>08.12.22</p>
                            {/* <Badge>5</Badge> */}
                          </div>
                        </div>
                        <Dropdown className={`${cx.dropdownItem}`}>
                          <Dropdown.Toggle id="dropdown-basic">
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <ul>
                              <li>
                                <NavLink className={`${cx.menu}`} to="#">Pin</NavLink>
                              </li>
                            </ul>
                          </Dropdown.Menu>
                        </Dropdown>
                      </button>
                    </li>
                    <li>
                      <button className={`${cx.listMenu}`}>
                        <img src={img1} className={`${cx.profileImg}`} />
                        <div className={`${cx.chatListBody}`}>
                          <h5>Kris Lagard</h5>
                          <p>Hi! Let me know if is it possible an... </p>
                          <div className={`${cx.timeBox}`}>
                            <p>08.12.22</p>
                            {/* <Badge>5</Badge> */}
                          </div>
                        </div>
                        <Dropdown className={`${cx.dropdownItem}`}>
                          <Dropdown.Toggle id="dropdown-basic">
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <ul>
                              <li>
                                <NavLink className={`${cx.menu}`} to="#">Pin</NavLink>
                              </li>
                            </ul>
                          </Dropdown.Menu>
                        </Dropdown>
                      </button>
                    </li>
                    <li>
                      <button className={`${cx.listMenu}`}>
                        <img src={img1} className={`${cx.profileImg}`} />
                        <div className={`${cx.chatListBody}`}>
                          <h5>Kris Lagard</h5>
                          <p>Hi! Let me know if is it possible an... </p>
                          <div className={`${cx.timeBox}`}>
                            <p>08.12.22</p>
                            {/* <Badge>5</Badge> */}
                          </div>
                        </div>
                        <Dropdown className={`${cx.dropdownItem}`}>
                          <Dropdown.Toggle id="dropdown-basic">
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <ul>
                              <li>
                                <NavLink className={`${cx.menu}`} to="#">Pin</NavLink>
                              </li>
                            </ul>
                          </Dropdown.Menu>
                        </Dropdown>
                      </button>
                    </li>
                    <li>
                      <button className={`${cx.listMenu}`}>
                        <img src={img1} className={`${cx.profileImg}`} />
                        <div className={`${cx.chatListBody}`}>
                          <h5>Kris Lagard</h5>
                          <p>Hi! Let me know if is it possible an... </p>
                          <div className={`${cx.timeBox}`}>
                            <p>08.12.22</p>
                            {/* <Badge>5</Badge> */}
                          </div>
                        </div>
                        <Dropdown className={`${cx.dropdownItem}`}>
                          <Dropdown.Toggle id="dropdown-basic">
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <ul>
                              <li>
                                <NavLink className={`${cx.menu}`} to="#">Pin</NavLink>
                              </li>
                            </ul>
                          </Dropdown.Menu>
                        </Dropdown>
                      </button>
                    </li>
                    <li>
                      <button className={`${cx.listMenu}`}>
                        <img src={img1} className={`${cx.profileImg}`} />
                        <div className={`${cx.chatListBody}`}>
                          <h5>Kris Lagard</h5>
                          <p>Hi! Let me know if is it possible an... </p>
                          <div className={`${cx.timeBox}`}>
                            <p>08.12.22</p>
                            {/* <Badge>5</Badge> */}
                          </div>
                        </div>
                        <Dropdown className={`${cx.dropdownItem}`}>
                          <Dropdown.Toggle id="dropdown-basic">
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <ul>
                              <li>
                                <NavLink className={`${cx.menu}`} to="#">Pin</NavLink>
                              </li>
                            </ul>
                          </Dropdown.Menu>
                        </Dropdown>
                      </button>
                    </li>
                    <li>
                      <button className={`${cx.listMenu}`}>
                        <img src={img1} className={`${cx.profileImg}`} />
                        <div className={`${cx.chatListBody}`}>
                          <h5>Kris Lagard</h5>
                          <p>Hi! Let me know if is it possible an... </p>
                          <div className={`${cx.timeBox}`}>
                            <p>08.12.22</p>
                            {/* <Badge>5</Badge> */}
                          </div>
                        </div>
                        <Dropdown className={`${cx.dropdownItem}`}>
                          <Dropdown.Toggle id="dropdown-basic">
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <ul>
                              <li>
                                <NavLink className={`${cx.menu}`} to="#">Pin</NavLink>
                              </li>
                            </ul>
                          </Dropdown.Menu>
                        </Dropdown>
                      </button>
                    </li>
                    <li>
                      <button className={`${cx.listMenu}`}>
                        <img src={img1} className={`${cx.profileImg}`} />
                        <div className={`${cx.chatListBody}`}>
                          <h5>Kris Lagard</h5>
                          <p>Hi! Let me know if is it possible an... </p>
                          <div className={`${cx.timeBox}`}>
                            <p>08.12.22</p>
                            {/* <Badge>5</Badge> */}
                          </div>
                        </div>
                        <Dropdown className={`${cx.dropdownItem}`}>
                          <Dropdown.Toggle id="dropdown-basic">
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <ul>
                              <li>
                                <NavLink className={`${cx.menu}`} to="#">Pin</NavLink>
                              </li>
                            </ul>
                          </Dropdown.Menu>
                        </Dropdown>
                      </button>
                    </li>
                    <li>
                      <button className={`${cx.listMenu}`}>
                        <img src={img1} className={`${cx.profileImg}`} />
                        <div className={`${cx.chatListBody}`}>
                          <h5>Kris Lagard</h5>
                          <p>Hi! Let me know if is it possible an... </p>
                          <div className={`${cx.timeBox}`}>
                            <p>08.12.22</p>
                            {/* <Badge>5</Badge> */}
                          </div>
                        </div>
                        <Dropdown className={`${cx.dropdownItem}`}>
                          <Dropdown.Toggle id="dropdown-basic">
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <ul>
                              <li>
                                <NavLink className={`${cx.menu}`} to="#">Pin</NavLink>
                              </li>
                            </ul>
                          </Dropdown.Menu>
                        </Dropdown>
                      </button>
                    </li>
                  </ul>
                </Col>

                <Col md={9} className="p-0">
                  <div className={`${cx.chatbody}`}>
                    <Row className={`${cx.chatHead}`}>
                      <Col md={6}>
                        <div className={`${cx.userDetails}`}>
                          <img src={img1} className={`${cx.profileImg}`} />
                          <div className={`${cx.chatListBody}`}>
                            <h5>Kris Lagard</h5>
                            <p className={`${cx.status}`}><span style={{ background:'#15a620' }}></span> Online</p>
                          </div>
                        </div>   
                      </Col>
                      
                      <Col md={6}>
                        <Dropdown className={`${cx.dropdownItem}`}>
                            <Dropdown.Toggle id="dropdown-basic"><FiMoreHorizontal />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <ul>
                                <li>
                                  <NavLink className={`${cx.menu}`} to="#">Delete </NavLink>
                                </li>
                              </ul>
                            </Dropdown.Menu>
                          </Dropdown>
                      </Col>
                    </Row>
                    <div className={`${cx.userchatBody}`}>

                      <div className={`${cx.chatMessage} ${cx.chatLeft}`}>
                        <img src={img1} className={`${cx.profileImg}`} /> 
                        <div className={`${cx.chatMessageBody}`}>
                          <p>
                            Hello !
                            <time>8:40 am</time>
                          </p>
                        </div>
                      </div>
                      
                      <div className={`${cx.chatMessage} ${cx.chatRight}`}>
                        <div className={`${cx.chatMessageBody}`}>
                          <p>
                            How Are You ?
                            <time>8:40 am</time>
                          </p>
                        </div>
                        <img src={img1} className={`${cx.profileImg}`} /> 
                      </div>

                      
                      <div className={`${cx.oldDated}`}>
                          <span>08 Feb 2023</span>
                      </div>

                      <div className={`${cx.chatMessage} ${cx.chatRight}`}>
                        <div className={`${cx.chatMessageBody}`}>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            <time>8:40 am</time>
                          </p>
                        </div>
                        <img src={img1} className={`${cx.profileImg}`} /> 
                      </div>
                      
                      <div className={`${cx.chatMessage} ${cx.chatRight}`}>
                        <div className={`${cx.chatMessageBody}`}>
                          <p>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            <time>8:40 am</time>
                          </p>
                        </div>
                        <img src={img1} className={`${cx.profileImg}`} /> 
                      </div>

                      <div className={`${cx.chatMessage} ${cx.chatLeft}`}>
                        <img src={img1} className={`${cx.profileImg}`} /> 
                        <div className={`${cx.chatMessageBody}`}>
                          <p>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            <time>8:40 am</time>
                          </p>
                        </div>
                      </div>
                      <div className={`${cx.chatMessage} ${cx.chatRight}`}>
                        <div className={`${cx.chatMessageBody}`}>
                          <p>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            <time>8:40 am</time>
                          </p>
                        </div>
                        <img src={img1} className={`${cx.profileImg}`} /> 
                      </div>

                      <div className={`${cx.chatMessage} ${cx.chatLeft}`}>
                        <img src={img1} className={`${cx.profileImg}`} /> 
                        <div className={`${cx.chatMessageBody}`}>
                          <p>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            <time>8:40 am</time>
                          </p>
                        </div>
                      </div>
                      <div className={`${cx.chatMessage} ${cx.chatRight}`}>
                        <div className={`${cx.chatMessageBody}`}>
                          <p>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            <time>8:40 am</time>
                          </p>
                        </div>
                        <img src={img1} className={`${cx.profileImg}`} /> 
                      </div>


                      <div className={`${cx.oldDated}`}>
                          <span>Today</span>
                      </div>

                      <div className={`${cx.chatMessage} ${cx.chatLeft}`}>
                        <img src={img1} className={`${cx.profileImg}`} /> 
                        <div className={`${cx.chatMessageBody}`}>
                          <p>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            <time>8:40 am</time>
                          </p>
                        </div>
                      </div>


                    </div>

                    <div className={`${cx.chatSubmit}`}>
                      <div className={`${cx.actionBtns}`}>
                        <button title="Camera"><FiCamera /><input type="file" /></button>
                        {/* <button title="Upload Files"><GrAttachment /><input type="file" /></button>
                        <button title="Location"><TiLocationOutline /></button>
                        <button title="Gallery"><GrGallery /></button> */}
                      </div>
                      <div className={`${cx.typeForm}`}>
                       <input type="text" placeholder="Type..." className="form-control" />
                      </div>
                      <div className={`${cx.submitAction}`}>
                        <button title="Send"><FaTelegramPlane /></button>
                      </div>
                    </div>
                    
                  </div>
                </Col>
              </Row>

        </div>
      </section>
    </>
  );
}
