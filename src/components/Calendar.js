import React, { Component } from 'react';
import { weekDaysShort } from '../consts';
import { Table } from 'react-bootstrap';

class Calendar extends Component {
    constructor(props) {
        super(props);        
        var date = new Date(),
            month = date.getMonth(),
            year = date.getFullYear();
        this.state = { 
            month: month, 
            year: year,
            daysArray: this.makeDaysArray(month, year)
        }
    }

    months = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December" ] 
    makeDaysArray = (month, year) => {
        var amountOfDays = new Date(year, month+1, 0).getDate(),
            firstDay = new Date(year, month, 1).getDay(),
            rows = [],
            row = [];
        
        console.log(row);        
        for(var i=1-firstDay; i<=amountOfDays; i++) {            
            row.push(i);
            if((i+firstDay)%7===0) {
                rows.push(row);
                row = [];
            }
        }
        rows.push(row);        
        return rows;
    }

    render() {
        return (  
            <div>                               
                <h1>{this.months[this.state.month]} {this.state.year}</h1>
                <Table>
                    <thead>
                        <tr>
                            { weekDaysShort.map((wd) => 
                                <td key={wd}>{wd}</td>
                            )}
                        </tr>
                    </thead>   
                    <tbody>
                        {this.state.daysArray.map((week) =>
                            <tr key={week}>
                                {week.map((day) =>
                                    <td key={day}>
                                        {day>0?day:''}
                                    </td>
                                )}
                            </tr>                             
                        )}
                    </tbody>                 
                </Table>
            </div>                      
        )
    }
}

export { Calendar }