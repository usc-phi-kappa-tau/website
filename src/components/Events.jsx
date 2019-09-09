import React from 'react';
import { Row } from 'reactstrap';
import EventCard from './EventCard';

const Events = () => {
    const events = [
        {
            title: "Deliveries",
            date: "5:00-6:00PM September 9, 2019",
            description: "Sorority Deliveries",
            location: "The Row",
            calendarStartTime: '2019-08-28T19:30:00-07:00',
            calendarEndTime: '2019-08-28T21:30:00-07:00'
        },
        {
            title: "Eboard Meeting",
            date: "6:00-6:30PM September 9, 2019",
            description: "PKT Eboard Meeting",
            location: "2715 Portland Street",
            calendarStartTime: '2019-08-28T19:30:00-07:00',
            calendarEndTime: '2019-08-28T21:30:00-07:00'
        },
        {
            title: "Meeting",
            date: "6:30-7:30PM September 9, 2019",
            description: "PKT Chapter Meeting",
            location: "2715 Portland Street",
            calendarStartTime: '2019-08-28T19:30:00-07:00',
            calendarEndTime: '2019-08-28T21:30:00-07:00'
        },
        {
            title: "USC @ BYU",
            date: "12:30-4:00PM September 14, 2019",
            description: "Gameday Watch Party",
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
