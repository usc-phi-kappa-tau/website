import React, { Component } from 'react';
import Individual from './Individual';
import { Container, Row, Col } from 'reactstrap';

class Members extends Component {
    state = {
        members: [
            {
                name: "Seth Novosel",
                title: "President",
                email: "sethn@comcast.net",
                image: ""
            },
            {
                name: "Shreyansh Jhalani",
                title: "Public Relations",
                email: "sjhalani@usc.edu",
                image: ""
            },
            {
                name: "Eduardo Baresi",
                title: "",
                email: "baresi@usc.edu",
                image: ""
            },
            {
                name: "Corey Burrill",
                title: "Community Service",
                email: "cburrill@usc.edu",
                image: ""
            },
            {
                name: "Ishan Shah",
                title: "",
                email: "ishans@usc.edu",
                image: ""
            },
            {
                name: "Patrick Dempsey",
                title: "Fundraising",
                email: "patrick.dempsey32@gmail.com",
                image: ""
            },
            {
                name: "Adam Stroberg",
                title: "",
                email: "stroberg@usc.edu",
                image: ""
            },
            {
                name: "Nima Tahamzadeh",
                title: "Recruitment",
                email: "tahamzad@usc.edu",
                image: ""
            },
            {
                name: "Andrew Piazza",
                title: "M.O.O.",
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
                name: "Marc Abdou",
                title: "Social Chair",
                email: "abdoumarc1@gmail.com",
                image: ""
            },
            {
                name: "Matthew Phun",
                title: "Prevention & Wellness",
                email: "phun@usc.edu",
                image: ""
            },
            {
                name: "Kelvin Choi",
                title: "",
                email: "kyunginc@usc.edu",
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
                title: "VPAR",
                email: "",
                image: ""
            },
            {
                name: "Omid Holakoui",
                title: "Scholarship",
                email: "holakoui@usc.edu",
                image: ""
            },
            {
                name: "Mcguire Shamieh",
                title: "",
                email: "mshamieh@usc.edu",
                image: ""
            },
            {
                name: "Jason Picker",
                title: "",
                email: "picker@usc.edu",
                image: ""
            },
            {
                name: "Conner McCloskey",
                title: "",
                email: "camcclos@usc.edu",
                image: ""
            },
            {
                name: "Ralph Sun",
                title: "",
                email: "ralphsun@usc.edu",
                image: ""
            },
            {
                name: "Andreas Bigger",
                title: "",
                email: "bigger@usc.edu",
                image: ""
            }
        ]
    }
    render() {
        const members = this.state.members;
        const half_length = Math.ceil(members.length / 2);
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