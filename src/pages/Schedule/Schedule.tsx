import React, { useCallback, useMemo, useState } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import st from "../../style.module.scss";
import cx from "./Schedule.module.scss";
import tb from "../../datatable.module.scss";
import { globalizeLocalizer } from "react-big-calendar";
import globalize from "globalize";
import { myEventsList } from "../../constants/scheduler";
import SchedulerCustomEvents from "./SchedulerCustomEvents";
import { Card, Col, Row } from "react-bootstrap";
import DemoInfo from "../../components/DemoInfo/DemoInfo";
import { NavLink } from "react-router-dom";
import schedule from "../../images/icon-schedule.svg";
import { FiUpload } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import AddClass from "../../components/Modals/AddClass";

const localizer = globalizeLocalizer(globalize);
const Schedule = (props: any) => {
  const [myEvents, setEvents] = useState(myEventsList);
  const [view, setView] = useState(Views.WEEK);
  const [show, setShow] = useState(false);
  const [start_end, setStartEnd] = useState({ start: "", end: "" });

  const handleClose = () => setShow(false);
  const handleShow = (start: any, end: any) => {
    setShow(true);
    setStartEnd({ start, end });
  };
  const handleSelectEvent = useCallback(
    (event: any) => window.alert(event.title),
    []
  );
  const { defaultDate, views, components } = useMemo(
    () => ({
      components: {
        eventWrapper: SchedulerCustomEvents,
      },
      defaultDate: new Date(2015, 3, 1),
      views: {
        month: true,
      },
    }),
    []
  );

  const addEvent = (title: any) => {
    if (title) {
      let { start, end } = start_end;
      setEvents((prev: any) => [...prev, { start, end, title }]);
    }
  };

  const handleSelectSlot = useCallback(
    ({ start, end }: any) => {
      handleShow(start, end);
    },
    [setEvents]
  );

  const onView = useCallback((newView: any) => setView(newView), [setView]);



  // add new Schedule 
  const [addnew, setAddnew] = useState(false);
  const handleCloseaddnew = () => setAddnew(false);
  const handleShowaddnew = () => setAddnew(true);
  return (
    <>
      <section className={`${st.pageWrapper}`}>
        <div className={`${st.pageTitle}`}>
          <Row>
            <Col md={6} lg={6}>
              <div className={`${st.titleInfo}`}>
                <img src={schedule} className={`${st.icon}`} />
                <div className={`${st.titleInfoBody}`}>
                  <h5>Schedule</h5>
                  <p>Calender</p>
                </div>
              </div>
            </Col>
            <Col md={6} lg={6}>
              <DemoInfo />
            </Col>
          </Row>
        </div>

        <div className={`${st.pageWrapperInside}`}>
          <Card>
            <Card.Body>
              <Row className={`${tb.tableAction}`}>
                <Col lg={12}>
                  <div className="d-flex">
                    <NavLink to="#" className={`btn ${tb.addBtn}`} onClick={handleShowaddnew}>
                      <img src={schedule} className={`${tb.icon}`}  />
                      Add New Schedule
                    </NavLink>
                    <button className={`btn ${tb.upload}`}>
                      <FiUpload className={`${tb.icon}`} />
                      Upload CSV
                      <input type="file" />
                    </button>

                    <button className={`btn ${tb.upload}`}>
                      <AiFillDelete className={`${tb.icon} m-0`} />
                    </button>
                  </div>
                </Col>
              </Row>
              
              <div>
                <div className={`${cx.myCustomHeight}`}>
                  <Calendar
                    components={components}
                    localizer={localizer}
                    events={myEvents}
                    startAccessor="start"
                    endAccessor="end"
                    defaultView="week"
                    onSelectSlot={handleSelectSlot}
                    selectable
                    onSelectEvent={handleSelectEvent}
                    onView={onView}
                    view={view}
                    showMultiDayTimes
                    style={{ height: 1300, width: "100%" }}
                  />

                  <AddClass
                    show={show}
                    start_end={start_end}
                    handleClose={handleClose}
                    addevent={addEvent}
                  />
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </section>
      <AddClass show={addnew} handleClose={handleCloseaddnew}/>
    </>
  );
};
export default Schedule;
