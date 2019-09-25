import React from 'react';
import { Row } from 'reactstrap';
import EventCard from './EventCard';

const Events = () => {
    const events = [
        {
            title: "Mixer",
            date: "TBD",
            description: "Mixer w/ Alpha Phi",
            location: "TBD",
            calendarStartTime: '2019-09-25T18:30:00-07:00',
            calendarEndTime: '2019-09-25T19:30:00-07:00'
        },
        {
            title: "Alumni Gameday BBQ",
            date: "12:30-4:00PM September 28, 2019",
            description: "Alumni BBQ/Fundraiser",
            location: "2715 Portland Street",
            calendarStartTime: '2019-09-28T12:30:00-07:00',
            calendarEndTime: '2019-09-28T16:00:00-07:00'
        },
        {
            title: "Deliveries",
            date: "5:00-6:00PM September 30, 2019",
            description: "Sorority Deliveries",
            location: "The Row",
            calendarStartTime: '2019-09-30T17:00:00-07:00',
            calendarEndTime: '2019-09-30T18:00:00-07:00'
        },
        {
            title: "Eboard Meeting",
            date: "6:30-7:00PM September 30, 2019",
            description: "PKT Eboard Meeting",
            location: "2715 Portland Street",
            calendarStartTime: '2019-09-30T18:30:00-07:00',
            calendarEndTime: '2019-09-30T19:00:00-07:00'
        },
        {
            title: "Meeting",
            date: "7:00-8:00PM September 30, 2019",
            description: "PKT Chapter Meeting",
            location: "2715 Portland Street",
            calendarStartTime: '2019-09-30T19:00:00-07:00',
            calendarEndTime: '2019-09-30T20:00:00-07:00'
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
