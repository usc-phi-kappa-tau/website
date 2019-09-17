import React from 'react';
import { Row } from 'reactstrap';
import EventCard from './EventCard';

const Events = () => {
    const events = [
        {
            title: "Mixer",
            date: "TBD",
            description: "Mixer w/ Theta",
            location: "TBD",
            calendarStartTime: '2019-09-18T20:30:00-07:00',
            calendarEndTime: '2019-09-18T21:30:00-07:00'
        },
        {
            title: "Tailgate",
            date: "TBD September 20, 2019",
            description: "Gameday Tailgate",
            location: "2715 Portland Street",
            calendarStartTime: '2019-08-28T19:30:00-07:00',
            calendarEndTime: '2019-08-28T21:30:00-07:00'
        },
        {
            title: "Gameday",
            date: "6:00-9:30PM September 20, 2019",
            description: "USC vs. Utah",
            location: "LA Memorial Coliseum",
            calendarStartTime: '2019-09-20T19:30:00-07:00',
            calendarEndTime: '2019-09-20T21:30:00-07:00'
        },
        {
            title: "ADPi Row Cup",
            date: "TBD September 21, 2019",
            description: "ADPi Philanthropy",
            location: "TBD",
            calendarStartTime: '2019-08-28T19:30:00-07:00',
            calendarEndTime: '2019-08-28T21:30:00-07:00'
        },
        {
            title: "Deliveries",
            date: "5:00-6:00PM September 16, 2019",
            description: "Sorority Deliveries",
            location: "The Row",
            calendarStartTime: '2019-08-28T19:30:00-07:00',
            calendarEndTime: '2019-08-28T21:30:00-07:00'
        },
        {
            title: "Eboard Meeting",
            date: "6:30-7:00PM September 16, 2019",
            description: "PKT Eboard Meeting",
            location: "2715 Portland Street",
            calendarStartTime: '2019-08-28T19:30:00-07:00',
            calendarEndTime: '2019-08-28T21:30:00-07:00'
        },
        {
            title: "Meeting",
            date: "7:00-8:00PM September 16, 2019",
            description: "PKT Chapter Meeting",
            location: "2715 Portland Street",
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
