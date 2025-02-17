import React from "react";
import Event from "./Event";

const Calendar = () => {
  return (
    <div className="Calendar">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="time">8 am</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">9 am</td>
            <td></td>
            <td></td>
            <Event event='West African Drumming Beginners' color ='yellow' location='Rehearsal Hall'/>
            <Event event='Physical Therapy Appointment' color ='orange' location='430 Saybrook Road'/>
            <Event event='West African Drumming Beginners' color ='yellow' location='Rehearsal Hall'/>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">10 am</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">11 am</td>
            <td></td>
            <Event event='Physical Therapy Appointment' color ='orange' location='430 Saybrook Road'/>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">12 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event='Physical Therapy Appointment' color ='orange' location='430 Saybrook Road'/>
            <td></td>
          </tr>
          <tr>
            <td className="time">1 pm</td>
            <td></td>
            <td></td>
            <Event event='African Popular Music' color ='green' location='Rehearsal Hall'/>
            <Event event='Reproductive Politics & Family in Africa' color ='blue' location='PAC102'/>
            <Event event='African Popular Music' color ='green' location='Rehearsal Hall'/>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">2 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event='Appointment w/ Doctor Walsh' color ='red' location='430 Saybrook Road'/>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">3 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">4 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">5 pm</td>
            <Event event='ASA Board Meeting' color ='purple' location='Virtual: Zoom'/>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event='Leetcode w/ Lenny' color ='red' location='Virtual: Zoom'/>
            <Event event='Ebony Ball' color ='red' location='Russell House'/>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
