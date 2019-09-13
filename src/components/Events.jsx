import React from 'react';
import { Row } from 'reactstrap';
import EventCard from './EventCard';

const Events = () => {
    const events = [
        {
            title: "Kickback",
            date: "6:00-8:00PM September 13, 2019",
            description: "PKT Kickback",
            location: "2715 Portland Street",
            calendarStartTime: '2019-08-28T19:30:00-07:00',
            calendarEndTime: '2019-08-28T21:30:00-07:00'
        },
        {
            title: "Community Service",
            date: "10:30-2:00PM September 14, 2019",
            description: "IFC Community Service",
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
            date: "6:15-6:45PM September 16, 2019",
            description: "PKT Eboard Meeting",
            location: "2715 Portland Street",
            calendarStartTime: '2019-08-28T19:30:00-07:00',
            calendarEndTime: '2019-08-28T21:30:00-07:00'
        },
        {
            title: "Meeting",
            date: "6:45-7:45PM September 16, 2019",
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
