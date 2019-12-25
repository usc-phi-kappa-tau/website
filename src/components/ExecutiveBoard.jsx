import React, { Component } from 'react';
import Individual from './Individual';
import { Container, Row, Col } from 'reactstrap';

class ExecutiveBoard extends Component {
    state = {
        eboard: [
            {
                name: "Ralph Sun",
                title: "President",
                email: "ralphsun@usc.edu",
                image: ""
            },
            {
                name: "Beau Classen",
                title: "Vice President",
                email: "bclassen@usc.edu",
                image: ""
            },
            {
                name: "Andreas Bigger",
                title: "Treasurer",
                email: "bigger@usc.edu",
                image: ""
            },
            {
                name: "Ethan Young",
                title: "Secretary",
                email: "ehyoung@usc.edu",
                image: ""
            },
            {
                name: "Jason Picker",
                title: "Membership Orientation Officer",
                email: "picker@usc.edu",
                image: ""
            },
            {
                name: "Marc Abdou",
                title: "Social Chair",
                email: "abdoumarc1@gmail.com",
                image: ""
            },
            {
                name: "Conner McCloskey",
                title: "Assistant Social Chairman",
                email: "camcclos@usc.edu",
                image: ""
            },
            {
                name: "Matt Phun",
                title: "Housing Manager",
                email: "phun@usc.edu",
                image: ""
            },
            {
                name: "Royce Montgomery",
                title: "Risk Chairman",
                email: "roycemon@usc.edu",
                image: ""
            },
            {
                name: "Damien Xie",
                title: "Vice President of Alumni Relations",
                email: "enyangxi@usc.edu",
                image: ""
            },
            {
                name: "Kartik Balodi",
                title: "Recruitment Chairman",
                email: "balodi@usc.edu",
                image: ""
            },
            {
                name: "Shrey Jhalani",
                title: "Community Service Chairman",
                email: "sjhalani@usc.edu",
                image: ""
            },
            {
                name: "Adam Beres",
                title: "Philanthropy Chairman",
                email: "aberes@usc.edu",
                image: ""
            },
            {
                name: "Seth Novosel",
                title: "Chaplain",
                email: "sethn@comcast.net",
                image: ""
            },
            {
                name: "Anthony Wiencko",
                title: "Scholarship Chairman",
                email: "wiencko@usc.edu",
                image: ""
            }
        ]
    }
    render() {
        const members = this.state.eboard;
        const half_length = members.length / 2 + 1;
        const members1 = members.splice(0, half_length);
        const members2 = members;
        return (
            <Container>
                <Row>
                    <Col>
                        {
                            members1.map(person => {
                                return <Individual data={person} />;
                            })
                        }
                    </Col>
                    <Col>
                        {
                            members2.map(person => {
                                return <Individual data={person} />;
                            })
                        }
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ExecutiveBoard;
