import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { MdLocationOn, MdEvent } from "react-icons/md";
import AddToCalendar from 'react-add-to-calendar';

const EventCard = ({ event }) => {
    const { title, date, description, location, calendarStartTime, calendarEndTime } = event;
    const icon = { 'calendar-plus-o': 'left' };
    const calendarEvent = {
        title: title,
        description: description,
        location: location,
        startTime: calendarStartTime,
        endTime: calendarEndTime
    };
    return (
        <Card style={{ textAlign: "center", height: "fit-content", minWidth: '250px', margin: "1rem" }}>
            <CardBody>
                <CardTitle bg="primary">{title}</CardTitle>
                <CardText>{description}</CardText>
                <CardText><MdEvent /> {date}</CardText>
                <CardText><MdLocationOn /> {location}</CardText>
                <CardText className="d-flex" style={{ alignItems: "center" }}><div style={{ margin: "0 auto" }}><AddToCalendar event={calendarEvent} buttonTemplate={icon} /></div></CardText>
            </CardBody>
        </Card>
    );
}

export default EventCard;