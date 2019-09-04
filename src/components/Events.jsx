import React from 'react';
import { Row } from 'reactstrap';
import EventCard from './EventCard';

const Events = () => {
    const events = [
        {
            title: "Meeting",
            date: "8:00-9:00PM September 4, 2019",
            description: "Phi Tau Chapter Meeting",
            location: "2715 Portland Street",
            calendarStartTime: '2019-08-28T19:30:00-07:00',
            calendarEndTime: '2019-08-28T21:30:00-07:00'
        },
        {
            title: "Gameday Tailgate",
            date: "TBD September 7, 2019",
            description: "Tailgate w/ Phi Sig",
            location: "938 West 28th Street",
            calendarStartTime: '2019-08-28T19:30:00-07:00',
            calendarEndTime: '2019-08-28T21:30:00-07:00'
        },
        {
            title: "USC vs. Stanford",
            date: "7:30PM September 7, 2019",
            description: "Gameday and Tailgate",
            location: "LA Memorial Coliseum",
            calendarStartTime: '2019-08-28T19:30:00-07:00',
            calendarEndTime: '2019-08-28T21:30:00-07:00'
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
