import React, { Component } from 'react';
import Individual from './Individual';
import { Container, Row, Col } from 'reactstrap';

class Members extends Component {
    state = {
        eboard: [
            {
                name: "Seth Novosel",
                title: "President",
                email: "sethn@comcast.net",
                image: ""
            },
            {
                name: "Christian Anabi",
                title: "Vice President",
                email: "anabi@usc.edu",
                image: ""
            },
            {
                name: "Beau Classen",
                title: "Vice President of Alumni Relations",
                email: "",
                image: ""
            },
            {
                name: "Andrew Piazza",
                title: "Treasurer",
                email: "ampiazza@usc.edu",
                image: ""
            },
            {
                name: "Evan Vivanco",
                title: "Secretary",
                email: "evivanco@usc.edu",
                image: ""
            },
            {
                name: "Mcguire Shamieh",
                title: "Membership Orientation Officer",
                email: "mshamieh@usc.edu",
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
                title: "Risk Chairman",
                email: "phun@usc.edu",
                image: ""
            },
            {
                name: "Royce Montgomery",
                title: "Assistant Risk Chairman",
                email: "",
                image: ""
            },
            {
                name: "Nima Tahamzadeh",
                title: "Recruitment Chairman",
                email: "tahamzad@usc.edu",
                image: ""
            },
            {
                name: "Ralph Sun",
                title: "Community Service Chairman",
                email: "ralphsun@usc.edu",
                image: ""
            },
            {
                name: "Jason Picker",
                title: "Philanthropy Chairman",
                email: "picker@usc.edu",
                image: ""
            },
            {
                name: "Shrey Jhalani",
                title: "Public Relations Chairman",
                email: "sjhalani@usc.edu",
                image: ""
            },
            {
                name: "Andreas Bigger",
                title: "Technology Chairman",
                email: "bigger@usc.edu",
                image: ""
            },
            {
                name: "Omid Holakoui",
                title: "Scholarship Chairman",
                email: "",
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

export default Members;