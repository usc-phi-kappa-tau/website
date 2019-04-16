import React from 'react';

const About = () => {
    return (
        <div className="container">
            <h2 className="title details">About Us</h2>

            <div className="columns">
                <div className="column is-three-fifths">
                    <p>
                        HackSC is a better hackathon than the one you’re thinking
                        of right now, let’s tell you why. Located in the heart of
                        sunny Los Angeles, HackSC will provide a weekend full of
                        innovation, connection, and education. In an
                        interdisciplinary endeavor, join together with 800+
                        hackers, designers, and visionaries to engage in
                        workshops, listen to speakers, and develop programs,
                        tools, and relationships that can last for life. Coming
                        from USC, HackSC seeks to breathe some of Southern
                        California’s life and culture into the field and world of
                        tech. We hope to have you join us! For more information
                        and updates, check out our social media at the bottom of the
                        page!
                    </p>
                </div>

                <div className="column">
                    <p>
                        <b>Location</b>
                        <br />
                        <em>
                            PKT House
                        <br />
                            2715 Portland St
                        <br />
                            Los Angeles, CA 90079
                        </em>
                    </p>

                    <br />

                    <p>
                        <b>Fall Semester</b>
                        <br />
                        <em>August - December</em>
                    </p>

                    <br />

                    <p>
                        <b>Spring Semester</b>
                        <br />
                        <em>January - May</em>
                    </p>
                    <br />
                </div>
            </div>
        </div>
    );
}

export default About;