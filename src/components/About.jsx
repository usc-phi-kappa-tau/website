import React from 'react';

const About = () => {
    return (
        <div className="container">
            <h2 className="title details">About Us</h2>

            <div className="columns">
                <div className="column is-three-fifths">
                    <p>
                        Founded in 1906 at Miami University in Oxford, Ohio, Phi Kappa Tau 
                        is a national fraternity that fosters three core ideals within its membership: 
                        Learning, Leading, and Serving. Located in the heart of sunny Los Angeles, 
                        the Pi Chapter of Phi Kappa Tau was originally founded in 1922, making it 
                        the fifth-oldest fraternity, and third-oldest active fraternity, at USC.  
                        The Pi Chapter recolonized in 2018 and is working on establishing itself as 
                        a premier Fraternity at the University of Southern California. Phi Kappa Tau 
                        develops men of character into men of distinction.
                    </p>
                </div>

                <div className="column">
                    <p>
                        <b>Location</b>
                        <br />
                        <em>
                            USC PKT House
                        <br />
                            2715 Portland St
                        <br />
                            Los Angeles, CA 90007
                        </em>
                    </p>

                    <br />

                    <p>
                        <b>Fall Rush</b>
                        <br />
                        <em>August 23-30, 2019</em>
                    </p>

                    <br />

                    <p>
                        <b>Spring Rush</b>
                        <br />
                        <em>January 9-19, 2020</em>
                    </p>
                    <br />
                </div>
            </div>
        </div>
    );
}

export default About;
