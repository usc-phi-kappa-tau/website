import React from 'react';
import { Row } from 'reactstrap';
import EventCard from './EventCard';

const Events = () => {
    const events = [
        {
            title: "Rush Kickoff",
            date: "5:30-7:30PM January 9, 2020",
            description: "IFC Rush Kickoff",
            location: "TCC Ballroom",
            calendarStartTime: '2019-09-25T18:30:00-07:00',
            calendarEndTime: '2019-09-25T19:30:00-07:00'
        },
        {
            title: "House Tours",
            date: "1:00-7:00PM January 10, 2020",
            description: "House Tours Round 1",
            location: "2715 Portland Street",
            calendarStartTime: '2019-09-25T18:30:00-07:00',
            calendarEndTime: '2019-09-25T19:30:00-07:00'
        },
        {
            title: "House Tours",
            date: "1:00-7:00PM January 11, 2020",
            description: "House Tours Round 1",
            location: "2715 Portland Street",
            calendarStartTime: '2019-09-25T18:30:00-07:00',
            calendarEndTime: '2019-09-25T19:30:00-07:00'
        }
    ];
    return (
        <Row style={{ overflowX: "scroll" }} className="flex-row d-flex flex-nowrap flex-grow-1">
            {events.map((event, index) => {
                return (
                    <EventCard key={index} event={event} />
                );
            })}
        </Row>
    );
}

export default Events;
