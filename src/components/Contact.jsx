import React from 'react';

import facebook from '../assets/social/facebook.png';
import twitter from '../assets/social/twitter.png';
//import medium from '../assets/social/medium.png';
import instagram from '../assets/social/instagram.png';
import email from '../assets/social/email.png';

const Contact = () => {
  return (
    <div>
      <p className="has-text-centered">
        Reach out to us at{' '}
        <a href="mailto:uscpkt@gmail.com">uscpkt@gmail.com</a> or on
        social media if you have any questions, want more information, or want
        to talk about sponsorship!
    </p>

      <p className="social-links">
        <a
          href="https://www.facebook.com/uscpkt/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebook} alt="Facebook" />
        </a>
        <a
          href="https://instagram.com/uscpkt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="Instagram" />
        </a>
        <a
          href="https://twitter.com/uscpkt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="Twitter" />
        </a>
        {/*<a
          href="https://medium.com/@uscpkt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={medium} alt="Medium" />
        </a>*/}
        <a href="mailto:uscpkt@gmail.com">
          <img src={email} alt="Email" />
        </a>
      </p>
    </div>
  );
}

export default Contact;