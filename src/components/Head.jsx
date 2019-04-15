import '../styles/footer.scss';

import React from 'react';

import pkt from '../assets/pktblack.png';
import clickDown from '../assets/angle-down.svg';
import city from '../assets/pktBWMapBannerWide.png';

import { Link } from 'react-scroll';

import '../styles/hero.scss';

export default props => (
  <header>
    <div className="hero is-primary is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-half details-column">
              <img src={pkt} alt="HackSC 2019" className="uscpkt" />
              <hr />
              <h2 className="title">2715 Portland St</h2>
              <h2 className="title city">Los Angeles, CA</h2>
              <p className="subtitle">
                PKT USC House
                <br />

              </p>

              <a
                className="button is-primary is-medium apply-button"
                href="/"
              >
                Member Portal
              </a>

              <br />

              <a
                className="button portal-button is-medium apply-button"
                href="/"
              >
                Alumni Portal
              </a>
            </div>

            <div className="column is-half graphic-col">
              <img
                src={city}
                alt="City PKT graphic"
                className="city-graphic"
              />
            </div>
          </div>
        </div>
      </div>

      <Link to="main" smooth={true} duration={1000}>
        <img className="click-down" src={clickDown} alt="Click to Scroll" />
      </Link>
    </div>
  </header>
);
