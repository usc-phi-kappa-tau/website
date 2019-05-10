import React from 'react';

const About = () => {
    return (
        <div className="container">
            <h2 className="title details">About Us</h2>

            <div className="columns">
                <div className="column is-three-fifths">
                    <p>
                        Founded in 1906 at Miami University in Oxford, Ohio, Phi
                        Kappa Tau is a national fraternity that fosters three core
                        ideals within its membership: Learning, Leading, and Serving.
                        Located in the heart of sunny Los Angeles, Phi Kappa Tau Pi
                        Chapter began recruiting in 2018 and is working on establishing
                        itself as a premier Fraternity at the University of Southern
                        California. Phi Kappa Tau develops men of character into men of
                        distinction.
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
                        <b>Fall Rush</b>
                        <br />
                        <em>August 22-30, 2019</em>
                    </p>

                    <br />

                    <p>
                        <b>Spring Rush</b>
                        <br />
                        <em>TBD</em>
                    </p>
                    <br />
                </div>
            </div>
        </div>
    );
}

export default About;
