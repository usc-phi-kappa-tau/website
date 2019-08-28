import React from 'react';
import { Row } from 'reactstrap';
import EventCard from './EventCard';

const Events = () => {
    const events = [
        {
            title: "PKT Off-campus Day 2",
            date: "6:00PM August 28, 2019",
            description: "Casino Night",
            location: "2715 Portland Street",
            calendarStartTime: '2019-08-28T18:00:00-07:00',
            calendarEndTime: '2019-08-28T21:00:00-07:00'
        },
        {
            title: "PKT Blue Chip Dinner",
            date: "7:30PM August 29, 2019",
            description: "Blue Chip @ El Cholo",
            location: "1037 South Flower Street",
            calendarStartTime: '2019-08-28T19:30:00-07:00',
            calendarEndTime: '2019-08-28T21:30:00-07:00'
        },
        {
            title: "PKT Bid Night",
            date: "6:00PM August 30, 2019",
            description: "Invite-Only Bid Night",
            location: "Tommy Trojan",
            calendarStartTime: '2019-08-28T19:30:00-07:00',
            calendarEndTime: '2019-08-28T21:30:00-07:00'
        },
        {
            title: "USC vs. Fresno State",
            date: "7:30PM August 31, 2019",
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
