import React from 'react';
import { Row } from 'reactstrap';
import EventCard from './EventCard';

const Events = () => {
    const events = [
        {
            title: "PKT Rush BBQ",
            date: "6:00-8:00PM August 23, 2019",
            description: "BBQ to meet the current group of PKT members",
            location: "McCarthy Quad",
            calendarStartTime: '2019-08-23T18:00:00-07:00',
            calendarEndTime: '2019-08-23T20:00:00-07:00'
        },
        {
            title: "PKT House Tours",
            date: "2:30-7:30PM August 24, 2019",
            description: "Take a tour of the PKT HQ",
            location: "2715 Portland Street",
            calendarStartTime: '2019-08-24T14:30:00-07:00',
            calendarEndTime: '2019-08-24T19:30:00-07:00'
        },
        {
            title: "PKT House Tours",
            date: "1:00-6:00PM August 25, 2019",
            description: "Take a tour of the PKT HQ",
            location: "2715 Portland Street",
            calendarStartTime: '2019-08-25T13:00:00-07:00',
            calendarEndTime: '2019-08-25T18:00:00-07:00'
        },
        {
            title: "PKT House Tours",
            date: "7:00-9:00PM August 26, 2019",
            description: "Take a tour of the PKT HQ",
            location: "2715 Portland Street",
            calendarStartTime: '2019-08-26T19:00:00-07:00',
            calendarEndTime: '2019-08-26T21:00:00-07:00'
        },
        {
            title: "PKT Off-campus Day 1",
            date: "6:30PM August 27, 2019",
            description: "TBA",
            location: "TBA",
            calendarStartTime: '2019-08-27T18:30:00-07:00',
            calendarEndTime: '2019-08-27T21:30:00-07:00'
        },
        {
            title: "PKT Off-campus Day 2",
            date: "6:00PM August 28, 2019",
            description: "TBA",
            location: "TBA",
            calendarStartTime: '2019-08-28T18:00:00-07:00',
            calendarEndTime: '2019-08-28T21:00:00-07:00'
        },
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