import React, { Component } from 'react';
import Individual from './Individual';

class Members extends Component {
    state = {
        members: [
            {
                name: "Andreas Bigger",
                email: "bigger@usc.edu",
                image: "andreasbigger.png"
            },
            {
                name: "Ralph Sun",
                email: "ralphsun@usc.edu",
                image: "ralphsun.png"
            }
        ]
    }
    render() {
        const members = this.state.members;
        return ( 
            <div>
                {
                    members.map(person => {
                        return <Individual data={person} />;
                    })
                }
            </div>
        );
    }
}

export default Members;