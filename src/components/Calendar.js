import React from 'react';
import { weekDaysShort } from '../consts';
import { Table } from 'react-bootstrap';

const months = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December" ];

const Calendar = ({month, year, daysArray, onIncreaseMonth}) => {
    return (  
            <div className="calendar">                               
                <h1>
                    <span className="decreasemonth" onClick={() => onIncreaseMonth(-1)}>{"< "}</span>
                        {months[month]} {year}
                    <span className="increasemonth" onClick={() => onIncreaseMonth(1)}>{" >"}</span>
                </h1>
                <Table>
                    <thead>
                        <tr>
                            { weekDaysShort.map((wd) => 
                                <td key={wd}>{wd}</td>
                            )}
                        </tr>
                    </thead>   
                    <tbody>
                        {daysArray.map((week) =>
                            <tr key={week}>
                                {week.map((day) =>
                                    <td key={day.dateDay} style={{ 'backgroundColor': day.color }}>
                                        {day.dateDay}
                                    </td>
                                )}
                            </tr>                             
                        )}
                    </tbody>                 
                </Table>
            </div>                      
        )
}
export { Calendar }