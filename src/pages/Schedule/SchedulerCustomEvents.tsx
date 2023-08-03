import React from 'react'

import  cx from "./Schedule.module.scss";

function SchedulerCustomEvents({event}:any) {

    return (
    <div className={`${cx.event_view}`}>
    <span>  {event.title}  </span> 
    </div>
  )
}

export default SchedulerCustomEvents
